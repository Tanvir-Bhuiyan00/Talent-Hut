import React from "react";
import Category from "../Category/Category";

const Categories = ({ categories }) => {
  return (
    <div>
      <div className="mt-8 md:mt-32 mb-6">
        <h2 className="text-center font-bold text-2xl sm:text-4xl">
          Job Category List
        </h2>
        <p className="text-center mt-2 font-medium text-sm sm:text-base banner-text">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="md:flex mx-4 md:mx-40 justify-between gap-5 mb-10 md:mb-32">
        {categories.map((category) => (
          <Category key={category.id} category={category}></Category>
        ))}
      </div>
    </div>
  );
};

export default Categories;
