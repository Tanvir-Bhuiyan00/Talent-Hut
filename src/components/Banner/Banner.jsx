import React from "react";
import "./Banner.css";
const Banner = () => {
  return (
    <div className="navbar-background relative">
      <div className="flex flex-col lg:flex-row justify-between items-center mx-4 lg:mx-40">
        <div className="w-full lg:w-1/2 my-8 lg:my-32 order-2 lg:order-1">
          <h1 className="font-extrabold banner-title text-4xl lg:text-7xl">
            One Step Closer To Your{" "}
            <span className="banner-title-span">Dream Job</span>
          </h1>
          <p className="font-medium text-base lg:text-lg banner-text my-4 lg:my-6">
            Explore thousands of job opportunities with all the information you
            need. Its your future. Come find it. Manage all your job application
            from start to finish.
          </p>
          <button className="nav-btn py-3 px-6 text-white font-extrabold">
            Get Started
          </button>
        </div>
        <div className="w-full lg:absolute right-0 lg:right-14 bottom-0 banner-img order-1 lg:order-2 mt-8 lg:mt-14">
          <img
            className="image-full w-full"
            src="https://i.ibb.co/925YYTw/P3-OLGJ1-copy-1.png" alt="" 
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
