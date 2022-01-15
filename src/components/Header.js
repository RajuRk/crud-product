import React, { useContext } from "react";
import { FoodContext } from "../App";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

function Header() {
  let context = useContext(FoodContext);

  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-dark p-2">
      <Link to="/">
      <a class="navbar-brand" href="#">
        Food Ordering Portal
      </a>
      </Link>
      
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarTogglerDemo02"
        aria-controls="navbarTogglerDemo02"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
          <Link to="/nonveg">
            <li className="nav-item">non-vegetarian</li>
          </Link>
          <Link to="/veg">
            <li className="nav-item">vegetarian</li>
          </Link> 
        </ul>
        <Link to="/cart">
          <button class="btn btn-danger my-2 my-sm-0" type="submit">
            <ShoppingCartIcon /> {context.cartValue}
          </button>
        </Link>
      </div>
    </nav>
  );
}

export default Header;
