import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import "./JobDetails.css";
const JobDetails = () => {
  const { id } = useParams();
  const [data, setData] = useState({});
  const {
    jobDescription,
    jobResponsibility,
    educationalRequirements,
    experiences,
    salary,
    jobTitle,
    location,
    contactInformation,
  } = data;
  // console.log(contactInformation);
  
  const details = useLoaderData();
  useEffect(() => {
    if (details) {
      let veiwDetails = details.find((detail) => detail.id === id);
      setData(veiwDetails);
    }
  }, [details, id]);
  return (
    <div className="mb-20 md:mb-32">
      <div className="text-center pt-12 pb-32 navbar-background">
        <h2 className="font-extrabold text-3xl relative">Job Details</h2>
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
      <div className="md:flex justify-between gap-5 mx-4 md:mx-40 mt-5 md:mt-32">
        <div className="w-3/5">
          <p>
            <span className="font-extrabold text-base">Job Description: </span>{" "}
            <span className="job-details-text-color font-medium text-base leading-8">
              {jobDescription}
            </span>
          </p>
          <p className="my-6">
            <span className="font-extrabold text-base">
              Job Responsibility:{" "}
            </span>{" "}
            <span className="job-details-text-color font-medium text-base leading-8">
              {jobResponsibility}
            </span>
          </p>
          <div>
            <p className="font-extrabold text-base mb-4">
              Educational Requirements:{" "}
            </p>
            <p className="job-details-text-color font-medium text-base leading-8">
              {educationalRequirements}
            </p>
          </div>
          <div className="my-6">
            <p className="font-extrabold text-base mb-4">Experiences: </p>
            <p className="job-details-text-color font-medium text-base leading-8">
              {experiences}
            </p>
          </div>
        </div>
        <div>
          <div className="job-details-container-color rounded-lg p-8">
            <h3 className="font-extrabold text-xl">Job Details</h3>
            <hr
              style={{ borderColor: "#7E90FE" }}
              className="border-t-2 opacity-30 my-6"
            />
            <div>
              <div className="flex">
                <img src="https://i.ibb.co/2N8b3zp/Frame.png" alt="" />
                <p className="ml-3">
                  <span className="font-bold text-base">Salary : </span>{" "}
                  <span className="job-details-text-color font-medium text-base">
                    {salary}
                  </span>
                </p>
              </div>
              <div className="flex mt-4">
                <img src="https://i.ibb.co/P52kVx2/Frame-1.png" alt="" />
                <p className="ml-3">
                  <span className="font-bold text-base">Job Title : </span>{" "}
                  <span className="job-details-text-color font-medium text-base">
                    {jobTitle}
                  </span>
                </p>
              </div>
            </div>
            <h3 className="font-extrabold text-xl mt-8">Contact Information</h3>
            <hr
              style={{ borderColor: "#7E90FE" }}
              className="border-t-2 opacity-30 my-6"
            />
            <div className="flex">
              <img src="https://i.ibb.co/hXvrtmw/Frame-2.png" alt="" />
              <p className="ml-3">
                <span className="font-bold text-base">Phone : </span>{" "}
                <span className="job-details-text-color font-medium text-base">
                  {contactInformation?.phone}
                </span>
              </p>
            </div>
            <div className="flex mt-4">
              <img src="https://i.ibb.co/b3Mwjvy/Frame-3.png" alt="" />
              <p className="ml-3">
                <span className="font-bold text-base">Email : </span>{" "}
                <span className="job-details-text-color font-medium text-base">
                  {contactInformation?.email}
                </span>
              </p>
            </div>
            <div className="flex mt-4">
              <img src="https://i.ibb.co/1nm9NJg/Frame-4.png" alt="" />
              <p className="ml-3">
                <span className="font-bold text-base">Address : </span>{" "}
                <span className="job-details-text-color font-medium text-base">
                  {location}
                </span>
              </p>
            </div>
          </div>
          <button className="job-details-apply-btn py-4 text-white font-extrabold text-xl mt-11 w-full rounded-lg">Apply Now</button>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
