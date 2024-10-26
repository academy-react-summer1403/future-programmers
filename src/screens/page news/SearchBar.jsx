import React from "react";
import { FaSearch } from "react-icons/fa";
const SearchBar = () => {
return (
    <div className=" dark:bg-[#041c3254]  w-full  flex flex-wrap bg-[#F3F4F6]">
    <div className=" w-[95%] h-28  m-auto rounded-lg bg-[#fff] mt-11 mb-7 sm:text-3xl">
        <div className="flex items-center   bg-width-100 rounded-md shadow-md font-bold dark:bg-[#041c3294]    dark:text-slate-800">
        <div className=" border border-red-500 flex items-center  ">
            <input
            type="text"
            placeholder=" جستجو دوره"
            className=" sm:text-base text-lg  rounded-md   border border-red-300 "
            />


            <button className="  bg-white-500  text-gray-500 rounded-r-md p-2   ">
            <FaSearch className="dark:bg-white rounded-lg size-8 " />
            </button>

            
        </div>

        {/* <div className=" border border-blue-600   flex gap-2  "> */}


<ul className=" border text-sm border-blue-600   flex gap-6  ">
  <li>
پر بازدید ترین ها 
  </li>
  <li>
ج قدیمی تری
</li>

<li>
پر بازدید ترین ها 
  </li>


</ul>





            {/* <button className="text-gray-700 hover:text-blue-500 text-2xl font-bold dark:text-white">
      
            مرتب سازی|
            </button>
            <button className="text-[#8D8D8D] text-2xl hover:text-blue-500 dark:text-white">
            جدیدترین
            </button>
            <button className="text-[#8D8D8D] text-2xl hover:text-blue-500 dark:text-white">
            قدیمی‌ترین
            </button> */}

{/* <div className="dropdown dropdown-right dropdown-end">
  <div tabIndex={0} role="button" className="btn m-1">Click</div>
  <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
    <li><a>Item 1</a></li>
    <li><a>Item 2</a></li>
  </ul>
</div> */}
        {/* </div> */}
        </div>
    </div>
    </div> 
);
};

export default SearchBar;
