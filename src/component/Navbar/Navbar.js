import "./Navbar.css";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <>
      <div className="navbar-container">
        <div className="navbar-logo-side">
          <div className="navbar-logo-img"><img src="https://www.kindpng.com/picc/m/107-1074309_food-png-black-and-white-jpg-format-download.png" className="logo-img"/></div>
          <div><h2 className="logo-heading">Cook With Care</h2></div>
        </div>
        <div>
          <Link to="/" className="navbar-menu">
            Home
          </Link>
          <Link to="/about" className="navbar-menu">
            About
          </Link>
          <Link to="/contact" className="navbar-menu">
            Contact
          </Link>
        </div>
      </div>
    </>
  );
}

export default Navbar;
