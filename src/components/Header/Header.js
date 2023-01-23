import React from "react";
import "./header.css";
import PROFILE_IMG from "../../assets/HeaderProfile.jpg";

const Header = () => {
  return (
    <header className="header">
      <div className="profile-items">
        <img className="profile-img" src={PROFILE_IMG} alt="profile" />
        <p>Annette Black</p>
      </div>
      <div className="nav-items">
        <ul>
          <li>Programs</li>
          <li>Retreat</li>
          <li>Blogs</li>
          <li>Contact Us</li>
          <li>
            <button className="round-outlined-button">Login</button>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
