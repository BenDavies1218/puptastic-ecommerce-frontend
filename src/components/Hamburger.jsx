import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/hamburger.css";

const Hamburger = () => {
  const [active, setActive] = useState(false);

  const handleLinkClick = () => {
    setActive(false);
  };

  return (
    <>
      <div
        className={`hamburgerContainer ${active ? "active" : ""}`}
        onClick={() => setActive(!active)}
      >
        <div className="hamburgerLine"></div>
        <div className="hamburgerLine"></div>
        <div className="hamburgerLine"></div>
      </div>
      <div className={`hamburgerMenuContainer ${active ? "active" : ""}`}>
        <ul className="hamburgerMenu">
          <li>
            <Link to="/" onClick={handleLinkClick}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/shop" onClick={handleLinkClick}>
              Shop
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={handleLinkClick}>
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={handleLinkClick}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Hamburger;
