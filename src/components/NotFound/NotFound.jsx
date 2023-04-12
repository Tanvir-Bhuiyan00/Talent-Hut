import React, { useEffect, useState } from "react";
import { Link} from "react-router-dom";

const NotFound = () => {
  
  return (
    <div className="mx-4 md:mx-40 text-center mt-10 md:mt-40">
      <div className="">
        <div>
          <label className="swap swap-flip text-9xl">
            <input type="checkbox" />

            <div className="swap-on">😈</div>
            <div className="swap-off">😇</div>
          </label>
        </div>
        <h1 className="font-black text-red-700 text-5xl mt-8">
          404 - Page not found
        </h1>
        <Link to={`/`}>
          <button className="nav-btn py-3 px-6 text-white font-extrabold mt-10">
            Back to Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
