// src/components/Header.jsx
import React, { useState } from "react";
import { FaRegMoon, FaRegUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import moon from "../../../../public/moon.png"
import sun from "../../../../public/sun.png"
import home from "../../../../public/home.png"

const Header = () => {
  const [dark, setdark] = useState(false);

  const handleDark = () => {
    document.documentElement.classList.toggle("dark");
    setdark(!dark);
  };

  return (
    <div className=" flex justify-between items-center px-10 py-4 bg-[#f9f9f9] rounded-3xl dark:bg-[#29435c] ">
      {/* Welcome Message */}
      <div className="text-xl font-bold text-gray-700 dark:text-[#d1d4c9]">
        آرمان غنی زاده عزیز؛ خوش آمدی 👋
      </div>
      {/* Icons */}
      <div className="flex gap-4 me-10">
      <button >
          <label onClick={handleDark} className="grid cursor-pointer place-items-center max-sm:mr-[40px] ">
            <input
              type="checkbox"
              value="synthwave"
              className="toggle theme-controller bg-base-content col-span-2 col-start-1 row-start-1"
            />
            <svg
              className="stroke-base-100 fill-base-100 col-start-1 row-start-1"
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="5" />
              <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
            </svg>
            <svg
              className="stroke-base-100 fill-base-100 col-start-2 row-start-1 "
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
          </label>
        </button>
        <Link to='/' className="h-12 w-12 bg-[aqua] rounded-full flex justify-center">
          <img src={home} alt="" />
        </Link>

      </div>
    </div>
  );
};

export default Header;