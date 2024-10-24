import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HeaderHamburgerMenu } from "./HeaderHamburgerMenu";

// Header Component
const Header = () => {
  const [dark, setdark] = useState(false);

  const handleDark = () => {
    document.documentElement.classList.toggle("dark");
    setdark(!dark);
  };
  return (
    <header className="flex justify-between items-center w-full py-4 px-6 bg-white shadow-md dark:bg-gray-400 ">
      {/* Right Section: Logo */}
      <div className="flex items-center ">
        <img src="header icon.png" alt="" className="w-10 h-10" />
        <span className="ml-2 text-xl font-bold"></span>
        <div className="md:hidden mr-2">
          <HeaderHamburgerMenu />
        </div>
      </div>

      {/* Middle Section: Links */}
      <nav className="md:flex hidden ml-auto gap-4 ">
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
      </nav>

      {/* Left Section: Buttons */}
      <div className="flex gap-4 me-10">
        <button onClick={handleDark}>
          {dark === false && <img src="./moon.png" alt="" />}
          {dark === true && <img src="./sun.png" alt="" />}
        </button>
        <Link to="/profile">
          <img src="./profile-user.png" alt="" />
        </Link>
      </div>
    </header>
  );
};

export { Header };
