import { Link } from "react-router-dom";
import Hamburger from "./Hamburger";
import "../styles/header.css";
import shoppingCart from "../assets/shoppingCart.svg";
import { useCart } from "../context/CartContext";

const Header = () => {
  const { state } = useCart();
  const { items } = state;

  const bannerText = "Welcome To Puptastic Petstore!";

  return (
    <>
      <div className="header">
        <Hamburger />
        <h2>Logo</h2>
        <Link to="/cart" className="cartLink">
          <div className="cartContainer">
            <img src={shoppingCart} alt="Cart" className="cartIcon" />
            {items.length > 0 && (
              <div className="cartCount">{items.length}</div>
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
