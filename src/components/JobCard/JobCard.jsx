import React from "react";
import { Link } from "react-router-dom";

const JobCard = ({ job }) => {
  const {
    id,
    companyLogo,
    companyName,
    fullTimeOrPartTime,
    jobTitle,
    location,
    remoteOrOnsite,
    salary,
  } = job;
  return (
    <div>
      <div className="p-8 border rounded-lg mb-6 md:flex justify-between items-center">
        <div className="md:flex gap-8 items-center">
          <div
            style={{ background: "#F4F4F4" }}
            className="w-60 h-60 rounded-lg flex justify-center items-center"
          >
            <img className="w-36 h-10" src={companyLogo} alt="" />
          </div>
          <div>
            <h4 className="font-extrabold text-xl">{jobTitle}</h4>
            <h4
              style={{ color: "#757575" }}
              className="font-semibold text-xl mt-2 mb-4"
            >
              {companyName}
            </h4>
            <div className="mb-6">
              <button className="job-btn font-extrabold text-base py-2 px-5 rounded-lg">
                {remoteOrOnsite}
              </button>
              <button className="job-btn font-extrabold ml-4 text-base py-2 px-5 rounded-lg">
                {fullTimeOrPartTime}
              </button>
            </div>
            <div className="flex gap-6">
              <div className="flex gap-2">
                <img
                  className="w-6 h-6"
                  src="https://i.ibb.co/7b6Vb11/Location-Icon.png"
                  alt=""
                />
                <p
                  style={{ color: "#757575" }}
                  className="font-semibold text-lg"
                >
                  {location}
                </p>
              </div>
              <div className="flex gap-2">
                <img
                  className="w-6 h-6"
                  src="https://i.ibb.co/2N8b3zp/Frame.png"
                  alt=""
                />
                <p
                  style={{ color: "#757575" }}
                  className="font-semibold text-lg"
                >
                  {salary}
                </p>
              </div>
            </div>
          </div>
        </div>
        <Link to={`/details/${id}`}>
          <button className="nav-btn py-3 px-6 text-white font-extrabold">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default JobCard;
