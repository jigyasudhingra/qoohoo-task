import React from "react";
import "./Footer.css";
import TYME_LOGO from "../../assets/TYME-logo.jpg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="profile-items">
        <p>Powered By</p>
        <img className="logo-img" src={TYME_LOGO} alt="profile" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Privacy Policy</li>
          <li>Terms & Conditions</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
