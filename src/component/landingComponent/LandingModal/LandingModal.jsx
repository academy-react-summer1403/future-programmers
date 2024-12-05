import React, { useState } from "react";
import CourseModal from "./CourseModal";
import NewsModal from "./NewsModal";

const LandingModal = ({ setOpen }) => {
  const [Query, setQuery] = useState("");
  return (
    <div className="w-[50%] max-sm:w-[80%] max-h-[400px]  overflow-hidden rounded-[10px] pb-5 bg-white shadow-xl shadow-stone-500 absolute z-40 top-24 max-sm:top-[200px] max-md:top-[260px] max-lg:top-[270px] left-[300px] max-sm:left-[37px] max-md:left-[189px] max-lg:left-[500px]">
        <p className="bg-gray-200 w-fit px-2 text-[30px] max-sm:text-[20px]  cursor-pointer" onClick={() => setOpen(false)}>&#215;</p>
      <input
        type="text"
        placeholder="Type here"
        className="input input-bordered w-[80%] max-sm:h-[40px] max-sm:mt-2 mx-auto block "
        onChange={(e) => setQuery(e.target.value)}
      />


      <div className="w-[100%]  ">
        <div className="bg-white mx-auto w-[80%] h-fit">
          <CourseModal Query={Query} />
        </div>
        <div className="bg-white mx-auto w-[80%] h-fit">
          <NewsModal Query={Query} />
        </div>
      </div>
    </div>
  );
};

export default LandingModal;
