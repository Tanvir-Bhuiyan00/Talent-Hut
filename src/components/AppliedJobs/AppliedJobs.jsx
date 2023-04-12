import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import JobCard from "../JobCard/JobCard";

const AppliedJobs = () => {
  const appliedJobs = useLoaderData();
  const [jobs, setJobs] = useState(appliedJobs);
  const [filter, setFilter] = useState("");

  const handleFilerChange = (e) => {
    setFilter(e.target.value);
  };

  const filteredJobs = jobs.filter((job) => {
    if (filter === "") {
      return true;
    } else if (filter === "Onsite") {
      return job.remoteOrOnsite === "Onsite";
    } else if (filter === "Remote") {
      return job.remoteOrOnsite === "Remote";
    } else {
      return true;
    }
  });

  return (
    <div className="mb-32">
      <div className="text-center pt-12 pb-32 navbar-background mb-20 md:mb-32">
        <h2 className="font-extrabold text-3xl relative">Applied Jobs</h2>
        <img
          className="absolute top-0 right-0  "
          src="https://i.ibb.co/tm2f1FH/Vector-1.png"
          alt=""
        />
        <img
          style={{ top: "126px" }}
          className="absolute left-0"
          src="https://i.ibb.co/k1qf53Y/Vector.png"
          alt=""
        />
      </div>
      <div className="mx-4 md:mx-40">
        <div className="text-right mb-8">
          <select
            className="select select-bordered w-36"
            value={filter}
            onChange={handleFilerChange}
          >
            <option  selected value="" className="font-semibold">
              Filter By
            </option>
            <option value="Remote">remote</option>
            <option value="Onsite">on-site</option>
          </select>
        </div>
        <div>
          {filteredJobs.map((job) => (
            <JobCard key={job.id} job={job}></JobCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AppliedJobs;
