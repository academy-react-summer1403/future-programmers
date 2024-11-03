import React, { useState } from "react";
import Log from "./Log";
import { Link, NavLink } from "react-router-dom";

import { Field, Form, Formik } from "formik";
import axios from "axios";
import { setItem } from "../../core/services/common/storage.services";

const LogIn = () => {
  const handleLogin = async (values) => {
    const res = await axios.post(
      "https://classapi.sepehracademy.ir/api/Sign/Login",
      values
    );
    console.log(res.data.token);
    setItem("token", res.data.token);
  };

  return (
    <div className="w-full h-full">
      <div className="dark:bg-[#152a38]  h-[615px] flex justify-center">
        <div
          className=" shadow-2xl m-auto overflow-hidden dark:bg-[#678cb1]
  h-[560px] w-[80%] dark:text-white rounded-lg mt-7 bg-white flex"
        >
          <div className=" h-[500px] mr-4 rounded-lg  pt-[20px] mx-md:w-[300px] ">
            <div className=" border-x-slate-800 h-[55px] w-[327px] mx-auto ">
              <div className="  flex h-[50px]  text-xl ">
                <img src="./Logo.png" alt="" className="h-[100%] w-[20%]  " />
                <h2 className="  mr-4 mt-2 font-bold dark:text-white">
                  آکادمی سپهر{" "}
                </h2>
              </div>

              <div className="mt-2 text-lg">
                <h2 className="font-bold dark:text-white"> ورود به سیستم </h2>
              </div>

              <div className="flex mt-5">
                <h3 className="text-sm dark:text-white">
                  حساب کاربری ندارید؟{" "}
                </h3>

                <Link
                  to={"/StepOne"}
                  className="text-blue-700 underline text-sm dark:text-white"
                >
                  ثبت نام کنید
                </Link>
              </div>
            </div>

            <div className="    h-80 ">
              <Log />
            </div>
          </div>

          <div className="hidden md:block h-[578px] w-[500px] mr-36 ">
            <img
              src="./Image.png"
              alt=""
              className="w-[100%] h-[100%] rounded-xl "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
