import { Link } from "react-router-dom";
import "../styles/footer.css";
import puptasticLogo from "../assets/Puptastic Logo Transparent.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footerContainer">
        <div className="footerLeftSide">
          <Link to="/">Home</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <img className="footerlogo" src={puptasticLogo} alt="logo" />
        <div className="footerRightSide">
          <Link to="/privacy">Privacy</Link>
          <Link to="/terms-&-conditions">Terms & Conditions</Link>
        </div>
      </div>
      <p>&copy; 2024 B&B RETAIL PTY LTD</p>
    </div>
  );
};

export default Footer;
