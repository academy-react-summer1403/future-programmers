import { Field, Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import Pic from "./../../../../public/person.png";

const EditProfile = () => {
  const [userInfo, setUserInfo] = useState([]);

  useEffect(() => {}, []);

  return (
    <div className="flex dark:bg-gray-400 mt-10 p-4 pb-20 rounded-2xl">
      <Formik initialValues={{ LName: "", FName: "", ReceiveMessageEvent: "" }}>
        <Form className="w-7/12">
          <div className="flex justify-around mt-8 gap-4">
            <input
              type="text"
              placeholder="نام"
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="text"
              placeholder="نام خانوادگی"
              className="input input-bordered w-full max-w-xs"
            />
          </div>

          <div className="flex justify-around mt-8  gap-4">
            <input
              type="text"
              placeholder="کد ملی"
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="text"
              placeholder="شماره همراه"
              className="input input-bordered w-full max-w-xs"
            />
          </div>

          <div className="flex justify-around mt-8  gap-4">
            <input
              type="date"
              placeholder="تاریخ تولد"
              className="input input-bordered w-full max-w-xs "
            />
            <select className="select select-bordered w-full max-w-xs px-8">
              <option className="bg-black" disabled selected>
                جنسیت
              </option>
              <option>مرد</option>
              <option>زن</option>
            </select>
          </div>

          <div className="flex justify-around mt-8  gap-4">
            <input
              type="text"
              placeholder="ایمیل"
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="text"
              placeholder="آدرس"
              className="input input-bordered w-full max-w-xs"
            />
          </div>

          <div className="flex justify-around mt-8  gap-4">
            <input
              type="text"
              className="input input-bordered w-full max-w-xs"
              placeholder="تلگرام"
            />
            <input
              type="text"
              className="input input-bordered w-full max-w-xs"
              placeholder="لینکدین"
            />
          </div>
        </Form>
      </Formik>
      <div className="w-5/12 flex flex-col justify-center items-center gap-4">
        <div className="rounded-full w-3/4 h-64 object-fill">
          <img className="w-full object-contain rounded-full" src={ Pic }></img>
        </div>
        <label htmlFor="aboutme" for>درباره من:</label>
        <input id="aboutme" type="text" placeholder="درباره من درسا هستم" className="w-2/3 h-40 "></input>
      </div>
    </div>
  );
};

export default EditProfile;
