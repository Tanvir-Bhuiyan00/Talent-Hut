import React from "react";
import "./Job.css";
import { Link } from "react-router-dom";
const Job = ({ job }) => {
  const {
    id,
    companyLogo,
    companyName,
    fullTimeOrPartTime,
    location,
    salary,
    jobTitle,
    remoteOrOnsite,
  } = job;
  return (
    <div className="py-10 pl-10 job-container rounded-lg mb-4">
      <div className="w-36 h-10">
        <img className="image-full" src={companyLogo} alt="" />
      </div>
      <div>
        <h3
          style={{ color: "#474747" }}
          className="font-extrabold text-xl mt-8"
        >
          {jobTitle}
        </h3>
        <p className="font-semibold text-base banner-text mt-2">
          {companyName}
        </p>
        <div className="mt-4">
          <button className="job-btn font-extrabold text-base py-2 px-5 rounded-lg">
            {remoteOrOnsite}
          </button>
          <button className="job-btn font-extrabold text-base py-2 px-5 rounded-lg ml-4">
            {fullTimeOrPartTime}
          </button>
        </div>
        <div className="job-text-color md:flex gap-20 font-semibold text-base mt-4">
          <div className="flex gap-1 mb-3">
            <img src="https://i.ibb.co/7b6Vb11/Location-Icon.png" alt="" />
            <p>{location}</p>
          </div>
          <div className="flex gap-1">
            <img
              className="w-6 h-6"
              src="https://i.ibb.co/2N8b3zp/Frame.png"
              alt=""
            />
            <p>{salary}</p>
          </div>
        </div>
        <Link
          to={`details/${id}`}
        >
          <button className="nav-btn py-3 px-6 text-white font-extrabold mt-8">View Details</button>
        </Link>
      </div>
    </div>
  );
};

export default Job;
