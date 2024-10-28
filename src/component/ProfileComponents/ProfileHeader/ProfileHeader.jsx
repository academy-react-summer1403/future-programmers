// src/components/Header.jsx
import React, { useState } from "react";
import { FaRegMoon, FaRegUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import moon from "../../../../public/moon.png"
import sun from "../../../../public/sun.png"
import Profile from "../../../../public/profile-user.png"

const Header = () => {
  const [dark, setdark] = useState(false);

  const handleDark = () => {
    document.documentElement.classList.toggle("dark");
    setdark(!dark);
  };

  return (
    <div className="flex justify-between items-center px-10 py-4 bg-gray-100 rounded-3xl dark:bg-gray-400">
      {/* Welcome Message */}
      <div className="text-xl font-bold text-gray-700">
        آرمان غنی زاده عزیز؛ خوش آمدی 👋
      </div>
      {/* Icons */}
      <div className="flex gap-4 me-10">
        <button onClick={handleDark}>
          {dark === false && <img src={moon} alt="" />}
          {dark === true && <img src={sun} alt="" />}
        </button>
        <Link to='/'>
          <img src={Profile} alt="" />
        </Link>

      </div>
    </div>
  );
};

export default Header;