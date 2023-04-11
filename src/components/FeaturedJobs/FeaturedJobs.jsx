import React, { useEffect, useState } from "react";
import Job from "../Job/Job";

const FeaturedJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [seeAll, setSeeAll] = useState(false);

  useEffect(() => {
    fetch("/featuredJobs.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);

  const handleSeeAll = () => {
    setSeeAll(true);
  };
  return (
    <div>
      <div className="mb-10">
        <h2 className="text-center font-bold text-2xl sm:text-4xl">
          Featured Jobs
        </h2>
        <p className="text-center mt-2 font-medium text-sm sm:text-base banner-text">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="mx-4 md:mx-40 md:grid grid-cols-2 gap-10 mb-10">
        {jobs.slice(0, seeAll ? 8 : 4).map((job) => (
          <Job key={job.id} job={job}></Job>
        ))}
      </div>
      {!seeAll && (
        <div className="text-center mx-auto mb-10">
          <button
            onClick={handleSeeAll}
            className="nav-btn py-3 px-6 text-white font-extrabold"
          >
            See All Jobs
          </button>
        </div>
      )}
    </div>
  );
};

export default FeaturedJobs;
