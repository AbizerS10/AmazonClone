import React, { useEffect, useState } from "react";
import "./header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import {City} from 'country-state-city';

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();

  const handleAuth = () => {
    if (user) {
      auth.signOut();
    }
  };
  const [location, setLocation] = useState("Mumbai");
  const cities = City.getCitiesOfCountry("IN");
 
  const handleChange = (event) => {
    setLocation(event.target.value);
  };
  const [city, setCity] = useState(null);

  useEffect(() => {
    const fetchApi = async () => {
      const url = `http://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=06a56786b3d984ddf23c5dd9b6169f04`;
      const resp = await fetch(url);
      const res = await resp.json();
      setCity(res.main);
    };
    fetchApi();
  }, [location]);

  return (
    <div className="header">
      <Link to="/">
        <img
          src="https://www.pinclipart.com/picdir/big/358-3584545_amazon-web-services-logo-png-transparent-svg-vector.png"
          className="header_logo"
          alt="amazon_logo"
        />
      </Link>

      <FormControl
        sx={{ width: "9rem", margin: "0.5rem" }}
        variant="outlined"
      >
        <InputLabel
          id="demo-simple-select-autowidth-label"
          variant="outlined"
          style={{ top: "-30%" }}
        >
          <LocationOnIcon />
        </InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={location}
          label="location"
          onChange={handleChange}
          sx={{ height: 35, borderColor: "white" }}
        >
          {cities && cities.map((elem) => {
            return <MenuItem style={{width: "9rem"}} value={elem.name}>{elem.name}</MenuItem>;
          })}
        </Select>
      </FormControl>

      <div className="temp">
        <p style={{color: "white", padding: "0 0.5rem"}}>{city && city.temp}°C</p>
      </div>

      <div className="header_search">
        <input type="text" className="header_searchinput" />
        <SearchIcon className="header_searchIcon" />
      </div>
      <div className="header_nav">
        <Link to={!user && "/login"}>
          <div onClick={handleAuth} className="header_option">
            <span className="header_option_line1">Hello Guest</span>
            <span className="header_option_line2">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>
        <div className="header_option">
          <span className="header_option_line1">Returns</span>
          <span className="header_option_line2"> & Orders</span>
        </div>
        <div className="header_option">
          <span className="header_option_line1">Your</span>
          <span className="header_option_line2">Prime</span>
        </div>

        <Link to="/checkout">
          <div className="header_optionBasket">
            <ShoppingBasketIcon />
            <span className="header_option_line2 header_basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
