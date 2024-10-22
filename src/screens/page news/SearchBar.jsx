import React from "react";
import { FaSearch } from "react-icons/fa";
const SearchBar = () => {
return (
    <div className=" dark:bg-[#041c3254]  w-full  flex flex-wrap bg-[#F3F4F6]">
    <div className=" w-[95%] h-28  m-auto rounded-lg bg-[#fff] mt-11 mb-7 sm:text-3xl">
        <div className="flex items-center justify-between  p-8 bg-width-100 rounded-md shadow-md font-bold dark:bg-[#041c3294]    dark:text-slate-800">
        <div className="flex items-center flex-grow   w-12">
            <input
            type="text"
            placeholder=" جستجو دوره"
            className=" sm:text-base lg-text-lg  rounded-md p-2 w-22 text-2xl sm:w-1/2 md:w-1/3 lg:w-1/4 "
            />
            <button className="  bg-white-500  text-gray-500 rounded-r-md p-2   ">
            <FaSearch className="dark:bg-white rounded-lg size-8 " />
            </button>
        </div>

        <div className="flex space-x-4 ml-96  gap-2  ">
            <button className="text-gray-700 hover:text-blue-500 text-2xl font-bold dark:text-white">
            {" "}
            مرتب سازی|
            </button>
            <button className="text-[#8D8D8D] text-2xl hover:text-blue-500 dark:text-white">
            جدیدترین
            </button>
            <button className="text-[#8D8D8D] text-2xl hover:text-blue-500 dark:text-white">
            قدیمی‌ترین
            </button>
        </div>
        </div>
    </div>
    </div> 
);
};

export default SearchBar;
