import { useState } from "react";
import Logo from "../../../public/Logo.png";

import { Link, NavLink } from "react-router-dom";
import { HeaderHamburgerMenu } from "./HeaderHamburgerMenu";
import { getItem } from "../../core/services/common/storage.services";

const Header = () => {
  const [dark, setdark] = useState(false);

  const handleDark = () => {
    document.documentElement.classList.toggle("dark");
    setdark(!dark);
  };


  const token = getItem('token')

  return (
    <div className=" font-[sans] bg-[#f9f9f9] flex justify-between items-center w-full py-4 px-6  shadow-2xl dark:bg-[#152a38] ">
      <div className="flex items-center max-sm:ml-14">
        <img src="header icon.png" alt="" className="w-16 h-8 mr-6 " />
        <span className=" ml-2 text-xl font-bold"></span>
        <div className="md:hidden mr-2">
          <HeaderHamburgerMenu />
        </div>
      </div>

      <div className=" dark:text-white flex justify-center  max-md:hidden gap-5 w-[50%] h-10 mt-6">
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            `${
              isActive && "text-blue-600"
            } whitespace-nowrap hover:text-blue-600`
          }
        >
          <div className=" mb-3 lg:text-sm md:text-xs ">
            <h2 className="text-center  hover:border-b-2 border-blue-500 ">
              صفحه نخست
            </h2>
          </div>
        </NavLink>
        <NavLink
          to={"/Courses"}
          className={({ isActive }) =>
            `${
              isActive && "text-blue-600"
            } whitespace-nowrap hover:text-blue-600`
          }
        >
          <div className="mb-3  w-14 h-10 lg:text-sm md:text-xs">
            <h2 className="text-center hover:border-b-2 border-blue-500">
              دوره ها
            </h2>
          </div>
        </NavLink>

        <NavLink
          to={"/news"}
          className={({ isActive }) =>
            `${
              isActive && "text-blue-600"
            } whitespace-nowrap hover:text-blue-600`
          }
        >
          <div className=" mb-3 h-10 lg:text-sm md:text-xs">
            <h2 className="text-center hover:border-b-2 border-blue-500">
              اخبار و مقالات{" "}
            </h2>
          </div>
        </NavLink>
        <NavLink to={"/StepTwo"}>
          <div className="mb-3  w-20 h-10 whitespace-nowrap lg:text-sm md:text-xs">
            <h2 className="text-center hover:border-b-2  border-blue-500">
              {" "}
              تماس با ما{" "}
            </h2>
          </div>
        </NavLink>

        {/* <NavLink to={"/"}>
          <div className="mb-3  w-20 h-10 whitespace-nowrap lg:text-sm md:text-xs">
            <h2 className=" hover:border-b-2  border-blue-500"> تماس با ما </h2>
          </div>
        </NavLink> */}
      </div>

      <div className="flex gap-4">
        <button onClick={handleDark}>
          <label className="grid cursor-pointer place-items-center max-sm:mr-[40px] ">
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

        {token ? (
          <div className="dropdown dropdown-bottom">
            <div tabIndex={0} role="button" className=" m-1"><img src="./profile-user.png" alt="" className="" /></div>
            <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-36 p-2 left-3 shadow dark:bg-[#29435c]">
              <li className="dark:text-[#d1d4c9]"><Link to="/profile/pishkhan">پنل دانشجو</Link></li>
              <li className="dark:text-[#d1d4c9]"><Link to="/singIn" onClick={()=>localStorage.removeItem('token')}>خروج</Link></li>
            </ul>
          </div>
        ) : (
          <NavLink to={"/singIn"}>
            <div className="  bg-[#436e8e] flex justify-center text-sm rounded-full mt-1 items-center max-sm:w-16 text-white w-28 h-10  ">
              <h2 className="  text-center  dark:text-white max-sm:text-xs  ">
                ورود / ثبت نام{" "}
              </h2>
            </div>
          </NavLink>
        )}
      </div>
    </div>
  );
};

export { Header };
