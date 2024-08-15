import { Link } from "react-router-dom";
import "../styles/footer.css";

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
        <div className="footerLogo">Logo</div>
        <div className="footerRightSide">
          <Link to="/privacy">Privacy</Link>
          <Link to="/terms-&-conditions">Terms & Conditions</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
