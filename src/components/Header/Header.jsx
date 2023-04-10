import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenuClick = () => {
    setShowMenu(!showMenu);
  };
  return (
    <div className="navbar-background ">
      <nav className="flex justify-between mx-4 md:mx-40 py-4 md:py-10 items-center">
        <h2 className="font-extrabold text-3xl ">TalentHut</h2>
        <div className="header-nav-link md:flex gap-10 font-medium text-base">
          <Link className="home-link font-bold" to="/">
            Home
          </Link>
          <Link to="/statistics">Statistics</Link>
          <Link to="/applied">Applied Jobs</Link>
          <Link to="/blog">Blog</Link>
        </div>
        <div className="md:hidden">
          <button
            className="hamburger-btn"
            onClick={handleMenuClick}
            aria-label="Toggle Menu"
          >
            <span className="hamburger-icon" />
          </button>
        </div>
        <button className="nav-btn font-extrabold text-white text-lg px-5 py-3 md:block hidden">
          Star Applying
        </button>
      </nav>

      {/*After icon was clicked */}

      <div className={`md:hidden ${showMenu ? "block" : "hidden"} ml-5`}>
        <Link className="block py-2" to="/">
          Home
        </Link>
        <Link className="block py-2" to="/statistics">
          Statistics
        </Link>
        <Link className="block py-2" to="/applied">
          Applied Jobs
        </Link>
        <Link className="block py-2" to="/blog">
          Blog
        </Link>
        <button className="nav-btn font-extrabold text-white mt-3 text-lg px-5 py-3">
          Start Applying
        </button>
      </div>
    </div>
  );
};

export default Header;
