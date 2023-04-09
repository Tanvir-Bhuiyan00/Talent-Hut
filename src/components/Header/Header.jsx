import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
const Header = () => {
  return (
    <div className="navbar-background ">
      <nav className="flex justify-between mx-40 py-10 items-center">
        <h2 className="font-extrabold text-3xl ">TalentHut</h2>
        <div className="header-nav-link flex gap-10  font-medium text-base">
          <Link className="home-link font-bold" to="/">Home</Link>
          <Link to="/statistics">Statistics</Link>
          <Link to="/applied">Applied Jobs</Link>
          <Link to="/blog">Blog</Link>
        </div>
        <button className="nav-btn font-extrabold text-white text-lg px-5 py-3">Star Applying</button>
      </nav>
    </div>
  );
};

export default Header;
