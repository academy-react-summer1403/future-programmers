import React, { useState } from "react";
import Logo from '../../../public/Logo.png';

import { Link, NavLink } from "react-router-dom";
import { HeaderHamburgerMenu } from "./HeaderHamburgerMenu";

const Header = () => {
  const [dark, setdark] = useState(false);

  const handleDark = () => {
    document.documentElement.classList.toggle("dark");
    setdark(!dark);
  };
  
  return (
    <div className=" text-[sans] bg-white flex justify-between items-center w-full py-4 px-6  shadow-2xl dark:bg-[#152a38] dark:border-b-2">
      <div className="flex items-center  ">
        <img src="header icon.png" alt="" className="w-14 h-14" />
        <span className=" ml-2 text-xl font-bold"></span>
        <div className="md:hidden mr-2">
          <HeaderHamburgerMenu />
        </div>
      </div>


        <div className=" dark:text-white flex justify-center  gap-5 w-[50%] h-10 mt-6">
          <NavLink to={'/'}>
                <div className=" mb-3 ">
            <h2 className="   hover:border-b-2 border-orange-500 ">صفحه نخست</h2>
          </div>
          </NavLink>
            
          <div className="mb-3  w-14 h-10">
            <h2 className="hover:border-b-2 border-orange-500">دوره ها</h2>
          </div>
          <div className="mb-3  w-14 h-10">
          <h2 className="hover:border-b-2 border-orange-500">اساتید</h2>

          </div>
          <NavLink to={'/news'}>
          <div className="mb-3 flex ">
          <h2 className="hover:border-b-2 border-orange-500">اخبار و مقالات </h2>

          </div>
          </NavLink>
          
          <div className="mb-3  w-20 h-10">
          <h2 className=" hover:border-b-2  border-orange-500"> تماس با ما </h2>

          </div>
                

        

        </div>



    
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



        <NavLink to={'/singIn'}>
  <div className="  bg-[#3dc2f7] rounded-full mt-1   justify-end w-28 h-10">
          <h2 className="  text-center hover:text-lg dark:text-white">ورود / ثبت نام </h2>

          </div>
                </NavLink>

      </div>
    </div>



  );
};

export { Header };
