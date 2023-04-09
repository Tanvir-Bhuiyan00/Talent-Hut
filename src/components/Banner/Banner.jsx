import React from "react";

const Banner = () => {
  return (
    <div>
      <div className="hero min-h-screen mx-40">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="../../../public/All Images/P3OLGJ1 copy 1.png"
            className="max-w-sm rounded-lg lg:max-w-lg "
          />
          <div>
            <h1 className="text-5xl font-bold">One Step Closer To Your Dream Job</h1>
            <p className="py-6">
            Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;