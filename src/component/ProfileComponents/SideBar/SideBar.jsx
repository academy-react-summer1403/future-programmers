// src/components/SidePanel.jsx
import React from "react";
import { Link } from "react-router-dom";
import { FaHome, FaBook, FaRegCommentDots, FaSignOutAlt } from "react-icons/fa";

const SidePanel = () => {
  return (
    <div className=" h-screen bg-white border border-gray-300 rounded-3xl p-6 flex flex-col justify- items-center">
      {/* Logo Section */}
      <div className="flex items-center gap-3">
        <div className=" p-4 rounded-full">
          <img src="header icon.png" alt="Logo" className="w-10 h-10" />
        </div>
        <span className="text-xl font-bold">آکادمی سپهر</span>
      </div>

      {/* Links Section */}
      <div className="flex flex-col gap-4 mt-12">
        <Link
          to="/profile"
          className="flex items-center gap-3 text-lg font-medium text-gray-700"
        >
          پیشخوان
        </Link>

        <Link
          to="/profile/ReserveCourse"
          className="flex items-center gap-3 text-lg font-medium text-gray-700"
        >
          دوره‌های رزرو شده
        </Link>

        <Link
          to="/profile/AcceptCourse"
          className="flex items-center gap-3 text-lg font-medium text-gray-700"
        >
          دوره های من
        </Link>

        <Link
          to="/profile/FavoriteNews"
          className="flex items-center gap-3 text-lg font-medium text-gray-700"
        >
          اخبار مورد علاقه
        </Link>

        <Link
          to="/profile/FavoriteCourse"
          className="flex items-center gap-3 text-lg font-medium text-gray-700"
        >
          دوره های مورد علاقه
        </Link>

        <Link
          to="/profile/EditProfile"
          className="flex items-center gap-3 text-lg font-medium text-gray-700"
        >
            ویرایش پروفایل
        </Link>
      </div>
    </div>
  );
};

export default SidePanel;