// src/components/SidePanel.jsx
import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaHome, FaBook, FaRegCommentDots, FaSignOutAlt } from "react-icons/fa";
import logoPic from "../../../../public/header icon.png"
import http from "../../../core/services//interceptor";

const SidePanel = () => {
  const [MyInfo, setMyInfo] = useState(null);

  const getProfile = async () => {
    const res = await http.get(
      "/SharePanel/GetProfileInfo"
    );
    setMyInfo(res);
  };

  useEffect(() => {
    getProfile();
  }, []);

  MyInfo && console.log(MyInfo)


  return (
    <div className=" h-screen bg-white dark:bg-gray-400 border border-gray-300 rounded-3xl p-6 flex flex-col justify- items-center ">
      {/* Logo Section */}
      <div className="flex items-center gap-3">
        <div className=" p-4 rounded-full">
          <img src={MyInfo?.userImage[0].puctureAddress}  className="w-10 h-10" />
        </div>
        <span className="text-xl font-bold">آکادمی سپهر</span>
      </div>

      {/* Links Section */}
      <div className="flex flex-col gap-4 mt-12">
        <NavLink
          to="/profile/pishkhan"
          className={({isActive, isPending}) => isActive ? 'flex items-center gap-3 text-lg font-medium text-gray-700 bg-[aqua] py-2 px-4 rounded-2xl' : 'flex items-center gap-3 text-lg font-medium text-gray-700 py-2 px-4 rounded-2xl'}
        >
          پیشخوان
        </NavLink>

        <NavLink
          to="/profile/ReserveCourse"
          className={({isActive, isPending}) => isActive ? 'flex items-center gap-3 text-lg font-medium text-gray-700 bg-[aqua] py-2 px-4 rounded-2xl' : 'flex items-center gap-3 text-lg font-medium text-gray-700 py-2 px-4 rounded-2xl'}

        >
          دوره‌های رزرو شده
        </NavLink>

        <NavLink
          to="/profile/AcceptCourse"
          className={({isActive, isPending}) => isActive ? 'flex items-center gap-3 text-lg font-medium text-gray-700 bg-[aqua] py-2 px-4 rounded-2xl' : 'flex items-center gap-3 text-lg font-medium text-gray-700 py-2 px-4 rounded-2xl'}

        >
          دوره های من
        </NavLink>

        <NavLink
          to="/profile/FavoriteNews"
          className={({isActive, isPending}) => isActive ? 'flex items-center gap-3 text-lg font-medium text-gray-700 bg-[aqua] py-2 px-4 rounded-2xl' : 'flex items-center gap-3 text-lg font-medium text-gray-700 py-2 px-4 rounded-2xl'}

        >
          اخبار مورد علاقه
        </NavLink>

        <NavLink
          to="/profile/FavoriteCourse"
          className={({isActive, isPending}) => isActive ? 'flex items-center gap-3 text-lg font-medium text-gray-700 bg-[aqua] py-2 px-4 rounded-2xl' : 'flex items-center gap-3 text-lg font-medium text-gray-700 py-2 px-4 rounded-2xl'}

        >
          دوره های مورد علاقه
        </NavLink>

        <NavLink
          to="/profile/EditProfile"
          className={({isActive, isPending}) => isActive ? 'flex items-center gap-3 text-lg font-medium text-gray-700 bg-[aqua] py-2 px-4 rounded-2xl' : 'flex items-center gap-3 text-lg font-medium text-gray-700 py-2 px-4 rounded-2xl'}

        >
            ویرایش پروفایل
        </NavLink>
{/* 
        <Link
          to="/profile/UploadImage"
          className="flex items-center gap-3 text-lg font-medium text-gray-700"
        >
          اپلود عکس
        </Link> */}


      </div>
    </div>
  );
};

export default SidePanel;