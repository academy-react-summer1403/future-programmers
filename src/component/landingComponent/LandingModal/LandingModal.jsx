import React, { useState } from "react";
import CourseModal from "./CourseModal";
import NewsModal from "./NewsModal";

const LandingModal = ({ setOpen }) => {
  const [Query, setQuery] = useState("");
  return (
    <div className="w-full h-lvh bg-gray-700 absolute z-40 top-0 left-0">
        <p className="bg-red-400 w-fit" onClick={() => setOpen(false)}>close</p>
      <input
        type="text"
        placeholder="Type here"
        className="input input-bordered w-1/2 mx-auto block mt-10 "
        onChange={(e) => setQuery(e.target.value)}
      />


      <div className="flex justify-around mt-10">
        <div className="bg-white w-[40%] h-[600px]">
          <CourseModal Query={Query} />
        </div>
        <div className="bg-white  w-[40%] h-[600px]">
          <NewsModal Query={Query} />
        </div>
      </div>
    </div>
  );
};

export default LandingModal;
