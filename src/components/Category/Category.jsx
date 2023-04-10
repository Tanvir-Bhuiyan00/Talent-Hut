import React from "react";
import './Category.css'
const Category = ({ category }) => {
  const { id, image, jobAvailable, jobType } = category;
  return (
    <div className="pl-10 py-10 category-container w-full md:w-64 rounded-lg mt-4">
      <div className="category-img h-16 w-16 flex items-center justify-center rounded-lg">
        <img className="h-10 w-10" src={image} alt="" />
      </div>
      <div>
        <h3 className="mt-8 font-extrabold text-xl">{jobType}</h3>
        <p className="font-medium text-base mt-2 category-text">{jobAvailable}</p>
      </div>
    </div>
  );
};

export default Category;
