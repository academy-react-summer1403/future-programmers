// src/components/Header.jsx
import React from "react";
import { FaRegMoon, FaRegUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  const handleDark = () =>{
    document.documentElement.classList.toggle('dark')
  }
  return (
    <div className="flex justify-between items-center px-10 py-4 bg-gray-100 rounded-3xl">
      {/* Welcome Message */}
      <div className="text-xl font-bold text-gray-700">
        آرمان غنی زاده عزیز؛ خوش آمدی 👋
      </div>
      {/* Icons */}
      <div className="flex gap-4 me-10">
        <button onClick={handleDark}>
          <img src="./moon.png" alt="" />
        </button>
        <Link to='/profile'>
          <img src="./profile-user.png" alt="" />
        </Link>

      </div>
    </div>
  );
};

export default Header;