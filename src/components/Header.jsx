import React from "react";
import { Link } from "react-router-dom";
import Hamburger from "./Hamburger";
import "../styles/header.css";
import shoppingCart from "../assets/shoppingCart.svg";

const Header = () => {
  const bannerText = "Welcome To Puptastic Petstore!";
  return (
    <>
      <div className="header">
        <Hamburger />
        <h2>Logo</h2>
        <Link to="/cart">
          <img src={shoppingCart} alt="Cart" className="cartIcon" />
        </Link>
      </div>
      {bannerText && (
        <div className="headerBanner">
          <p>{bannerText}</p>
        </div>
      )}
    </>
  );
};

export default Header;
