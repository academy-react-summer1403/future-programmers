// src/components/SidePanel.jsx
import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaHome, FaBook, FaRegCommentDots, FaSignOutAlt } from "react-icons/fa";
import logoPic from "../../../../public/header icon.png"
import http from "../../../core/services//interceptor";
import ProfileModal from "../ProfileModal/ProfileModal";

const SidePanel = () => {
  const [Count, setCount] = useState(false);
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



  return (
    <div className=" h-screen bg-white dark:bg-gray-400 border border-gray-300 rounded-3xl p-6 flex flex-col justify- items-center ">
      {Count === true && <ProfileModal MyInfo={ MyInfo} />}
      {/* Logo Section */}
      <div className="flex items-center gap-3">
        <div className=" p-4 rounded-full">
          <img src={MyInfo?.userImage[1].puctureAddress} onClick={()=>setCount(true)}  className="w-20 h-20 rounded-full" />
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

        <NavLink
          to="/profile/UploadImage"
          className={({isActive, isPending}) => isActive ? 'flex items-center gap-3 text-lg font-medium text-gray-700 bg-[aqua] py-2 px-4 rounded-2xl' : 'flex items-center gap-3 text-lg font-medium text-gray-700 py-2 px-4 rounded-2xl'}
        >
          اپلود عکس
        </NavLink>


      </div>
    </div>
  );
};

export default SidePanel;