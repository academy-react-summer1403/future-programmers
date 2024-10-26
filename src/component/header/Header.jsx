import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { HeaderHamburgerMenu } from "./HeaderHamburgerMenu";

// Header Component
const Header = () => {
  const [dark, setdark] = useState(false);

  const handleDark = () => {
    document.documentElement.classList.toggle("dark");
    setdark(!dark);
  };
  return (
    <div className=" border border-blue-500 flex justify-between items-center w-full py-4 px-6 bg-white shadow-md dark:bg-gray-400 ">
      {/* Right Section: Logo */}
      <div className="flex items-center ">
        <img src="header icon.png" alt="" className="w-10 h-10" />
        <span className=" ml-2 text-xl font-bold"></span>
        <div className="md:hidden mr-2">
          <HeaderHamburgerMenu />
        </div>
      </div>
        <div className="flex justify-right gap-5 w-[50%] h-10 mt-6">
          <NavLink to={'/'}>
                <div className=" w-20 h-10">
            <h2>صفحه نخست</h2>
          </div>
          </NavLink>
            
          <div className=" w-20 h-10">
            <h2>دوره ها</h2>
          </div>
          <div className=" w-20 h-10">
          <h2>مقالات</h2>

          </div>
          <div className=" w-20 h-10">
          <h2>درباره ما</h2>

          </div>
                <NavLink to={'/singIn'}>
  <div className=" w-28 h-10">
          <h2>ورود / ثبت نام</h2>

          </div>
                </NavLink>

        

        </div>
        
      {/* Middle Section: Links */}
      {/* <nav className="md:flex hidden ml-auto gap-4 ">
        <Link to="/" className="text-gray-700 hover:text-blue-500">
          خانه
        </Link>

        <Link to="/courses" className="text-gray-700 hover:text-blue-500">
          دوره ها
        </Link>

        <Link href="#about" className="text-gray-700 hover:text-blue-500">
          درباره ما
        </Link>

        <Link href="#contact" className="text-gray-700 hover:text-blue-500">
          تماس با ما
        </Link>



        <Link href="#SingIn" className="text-gray-700 hover:text-blue-500">
        ورود        </Link>

        <Link href="#SingIn" className="text-gray-700 hover:text-blue-500">
              </Link>
      </nav> */}

      {/* Left Section: Buttons */}
      <div className="flex gap-4 me-10">
        <button onClick={handleDark}>
          {/* {dark === false && <img src="./moon.png" alt="" />}
          {dark === true && <img src="./sun.png" alt="" />} */}

<label className="flex cursor-pointer gap-2">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round">
    <circle cx="12" cy="12" r="5" />
    <path
      d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
  </svg>

  <input type="checkbox" value="synthwave" className="toggle theme-controller" />



  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
  </svg>

</label>

        </button>
        <Link to="/profile">
          <img src="./profile-user.png" alt="" />
        </Link>
      </div>
    </div>
  );
};

export { Header };
