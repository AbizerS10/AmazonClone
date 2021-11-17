import React, { useEffect, useState } from "react";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
} from "react-router-dom";
import Login from "./Login";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import Payment from "./Payment";
import Footer from "./Footer";

function App() {
  const [{ user }, dispatch] = useStateValue();
  const hist = useHistory();
  const [search, setSearch] = useState("");

  useEffect(() => {
    //will only run once the app component loads.

    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        //the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        //the user logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  const handlePush = () => {
    window.location.replace("/");
  }

  return (
    <Router>
      <div className="App">
        {window.location.pathname !== "/login" ? <Header setSea={setSearch} /> : null}
        <Switch>
          <Route path="/login">{!user ? <Login /> : handlePush}</Route>
          <Route path="/checkout">
            <Checkout />
          </Route>
          <Route path="/payment">
            <Payment />
          </Route>
          <Route path="/">
            <Home search={search} />
          </Route>
        </Switch>
        {window.location.pathname !== "/login" ? <Footer /> : null}
      </div>
    </Router>
  );
}

export default App;
