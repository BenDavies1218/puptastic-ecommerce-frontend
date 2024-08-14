import React, { useState } from "react";
import { Link } from "react-router-dom";
import Hamburger from "./Hamburger";
import "../styles/header.css";
import shoppingCart from "../assets/shoppingCart.svg";

const Header = () => {
  const [itemsInCart, setItemsInCart] = useState(1);

  const bannerText = "Welcome To Puptastic Petstore!";

  return (
    <>
      <div className="header">
        <Hamburger />
        <h2>Logo</h2>
        <Link to="/cart" className="cartLink">
          <div className="cartContainer">
            <img src={shoppingCart} alt="Cart" className="cartIcon" />
            {itemsInCart > 0 && <div className="cartCount">{itemsInCart}</div>}
          </div>
        </Link>
      </div>
      {bannerText && (
        <div className="headerBanner">
          <div>{bannerText}</div>
        </div>
      )}
    </>
  );
};

export default Header;
