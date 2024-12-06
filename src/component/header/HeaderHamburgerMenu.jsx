import React from "react";
import { Link, NavLink } from "react-router-dom";
import { TfiAlignJustify } from "react-icons/tfi";

const HeaderHamburgerMenu = () => {
  
  return (
    <div className="drawer drawer-end  ">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Page content here */}
        <label
          htmlFor="my-drawer-4"
          className="drawer-button text-black btn-primary"
        >
          <svg
            width="40"
            height="40"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className=" cursor-pointer max-md:w-[30px]"
          >
            <TfiAlignJustify/>

            
          </svg>
        </label>
      </div>
      <div className="drawer-side z-[999]">
        <label
          htmlFor="my-drawer-4"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className=" menu bg-base-200 text-base-content min-h-full w-80 p-4 absolute right-0 dark:bg-[#152a38] dark:text-[#436E8E]">
          {/* Sidebar content here */}
          <nav className="flex flex-col ml-auto gap-4 justify-center ">
          

          <NavLink to={"/"}>
            <div  className="text-gray-700 hover:text-blue-500">
              صفحه نخست
            </div>
            </NavLink>

<NavLink to={"/courses"}>
            <div  className="text-gray-700 hover:text-blue-500">
              دوره ها
            </div>
            </NavLink>


<NavLink to={'/News'}>
<div  className="text-gray-700 hover:text-blue-500">
        اخبار و مقالات 
          </div>
          
</NavLink>
            
{/* 
            <Link href="#contact" className="text-gray-700 hover:text-blue-500">
              تماس با ما
            </Link> */}
          </nav>
        </ul>
      </div>
    </div>
  );
};

export { HeaderHamburgerMenu };
