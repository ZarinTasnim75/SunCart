"use client";
import React from "react";

const LeftSideBar = ({ categories, selectedCategory, setSelectedCategory }) => {
  return (
    <div className="col-span-1 text-center rounded-md">
    <h2 className="font-bold text-2xl bg-green-200 text-black rounded-md py-3">  All Categories </h2>
      <ul className="flex flex-col gap-3 mt-3"> {categories.map((category, index) => (
          <li key={index} onClick={() => setSelectedCategory(category)} className={` rounded-md  text-xl font-bold p-2         
              ${  selectedCategory === category  ? "bg-green-300 text-green-800"  : "bg-blue-300 text-white" } `} >
            {category}
          </li>
        ))} </ul>
    </div>
  );
};

export default LeftSideBar;