import React, { useEffect, useState } from "react";
import "./header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { City } from "country-state-city";
import { makeStyles } from "@material-ui/core";

function Header({ setSea }) {
  const [{ basket, user }, dispatch] = useStateValue();

  const handleAuthenticaton = () => {
    if (user) {
      auth.signOut();
    }
  };
  const [location, setLocation] = useState("Agra");
  const [cities, setCities] = useState([]);
  const [search, setSearch] = useState("");

  const handleChange = (event) => {
    setLocation(event.target.value);
  };
  const handleSearch = () => {
    setSea(search);
  };
  const [city, setCity] = useState(null);

  useEffect(() => {
    var headers = new Headers();
    headers.append(
      "X-CSCAPI-KEY",
      "MmI4Rkc2aWlzSk9qOEl3RDlkdXNzUXZzbE1zbUhGcUh2WUkxblJDdA=="
    );

    var requestOptions = {
      method: "GET",
      headers: headers,
      redirect: "follow",
    };
    const fetchApi = async () => {
      const url = `https://api.countrystatecity.in/v1/countries/IN/cities`;
      const resp = await fetch(url, requestOptions);
      const res = await resp.json();
      setCities(res);
    };
    fetchApi();
  }, []);

  useEffect(() => {
    const fetchApi = async () => {
      const url = `http://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=06a56786b3d984ddf23c5dd9b6169f04`;
      const resp = await fetch(url);
      const res = await resp.json();
      setCity(res.main);
    };
    fetchApi();
  }, [location]);

  const useStyles = makeStyles({
    root: {
      width: 130,
      height: 30,
      "& .MuiOutlinedInput-input": {
        color: "white",
      },
      "& .MuiInputLabel-root": {
        color: "white",
      },
      "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
        borderColor: "white",
      },
      "&:hover .MuiOutlinedInput-input": {
        color: "white",
      },
      "&:hover .MuiInputLabel-root": {
        color: "white",
      },
      "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
        borderColor: "white",
      },
      "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-input": {
        color: "white",
      },
      "& .MuiInputLabel-root.Mui-focused": {
        color: "white",
      },
      "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
        borderColor: "white",
      },
      "& .MuiSvgIcon-root": {
        color: "white",
      },
    },
  });
  const classes = useStyles();
  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        />
      </Link>
      <FormControl variant="outlined" className={`${classes.root} form`}>
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
          className={classes.root}
        >
          {cities?.map((elem, idx) => {
            return (
              idx < 500 && (
                <MenuItem style={{ width: "9rem" }} value={elem.name}>
                  {elem.name}
                </MenuItem>
              )
            );
          })}
        </Select>
      </FormControl>

      <div className="temp">
        <p style={{ color: "white", padding: "0 0.5rem" }}>
          {city? `${city.temp}°C` : "NA"}
        </p>
      </div>

      <div className="header__search">
        <input
          value={search}
          className="header__searchInput"
          type="text"
          onChange={(e) => setSearch(e.target.value)}
        />
        <SearchIcon className="header__searchIcon" onClick={handleSearch} />
      </div>

      <div className="header__nav">
        <Link to={!user && "/login"}>
          <div onClick={handleAuthenticaton} className="header__option">
            <span className="header__optionLineOne">
              Hello, {!user ? "Guest" : user.email.substr(0,user.email.length-10)}
            </span>
            <span className="header__optionLineTwo">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>
        <div className="header__option prime">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>

        <Link to="/checkout">
          <div className="header__optionBasket">
            <ShoppingBasketIcon />
            <span className="header__optionLineTwo header__basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
