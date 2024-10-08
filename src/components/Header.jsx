import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Hamburger from "./Hamburger";
import "../styles/header.css";
import shoppingCart from "../assets/shoppingCart.svg";
import puptasticLogo from "../assets/Puptastic Logo Transparent.png";
import { useCart } from "../context/CartContext";

const Header = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 920);
  const { state } = useCart();
  const { items } = state;

  const bannerText = "";

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 920);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Calculate the total quantity of items in the cart
  const totalQuantity = items.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <>
      <div className="header">
        {isMobile ? (
          <Hamburger />
        ) : (
          <nav className="navLinks">
            <Link to="/">Home</Link>
            <Link to="/shop">Shop</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </nav>
        )}
        <img className="logo" src={puptasticLogo} alt="logo" />
        <Link to="/cart" className="cartLink">
          <div className="cartContainer">
            <img src={shoppingCart} alt="Cart" className="cartIcon" />
            {totalQuantity > 0 && (
              <div className="cartCount">{totalQuantity}</div>
            )}
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
