import React, { useEffect, useState } from "react";
import CourseCard from "../../CourseCard/CourseCard";
import axios from "axios";
import http from "../../../core/services//interceptor";

const Pishkhan = () => {
  const [MyInfo, setMyInfo] = useState(null);

  const getProfile = async () => {
    const res = await http.get(
      "https://classapi.sepehracademy.ir/api/SharePanel/GetProfileInfo"
    );
    setMyInfo(res);
  };

  useEffect(() => {
    getProfile();
  }, []);

  return (
    <div className="flex flex-wrap gap-10 justify-around mt-10 dark:bg-gray-400">
      <div className="flex w-1/3 border-2 border-dashed rounded-full px-2 border-violet-400">
        <h4>نام :</h4>
        <h2>{MyInfo?.fName}</h2>
      </div>
      <div className="flex w-1/3 border-2 border-dashed rounded-full px-2 border-violet-400">
        <h4>نام خانوادگی :</h4>
        <h2>{MyInfo?.lName}</h2>
      </div>
      <div className="flex w-1/3 border-2 border-dashed rounded-full px-2 border-violet-400">
        <h4>آدرس:</h4>
        <h2>{MyInfo?.homeAdderess}</h2>
      </div>

      <div className="flex w-1/3 border-2 border-dashed rounded-full px-2 border-violet-400">
        <h4>شماره ملی:</h4>
        <h2>{MyInfo?.nationalCode}</h2>
      </div>
      <div className="flex w-1/3 border-2 border-dashed rounded-full px-2 border-violet-400">
        <h4>تاریخ نولد:</h4>
        <h2>{MyInfo?.birthDay}</h2>
      </div>
      <div className="flex w-1/3 border-2 border-dashed rounded-full px-2 border-violet-400">
        <h4> شماره تماس:</h4>
        <h2>{MyInfo?.phoneNumber}</h2>
      </div>
      <div className="flex w-1/3 border-2 border-dashed rounded-full px-2 border-violet-400">
        <h4> ایمیل:</h4>
        <h2>{MyInfo?.email}</h2>
      </div>
    </div>
  );
};

export default Pishkhan;
