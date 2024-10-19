import React, { useState } from "react";
import Log from "./Log";
import { Link } from "react-router-dom";
const LogIn = () => {
  return (
    <div className=" dark:bg-gray-600  h-screen flex justify-center">
    <div className="flex justify-around border border-black-500 h-[580px] hover:text-black-1000 w-screen m-auto   dark:bg-gray-600 dark:text-white  rounded-lg">
      <div className="   h-[500px]  rounded-lg  pt-[20px]">
        <div className="  h-[55px] w-[327px] mx-auto ">
          <div className="flex   h-[50px]  ">
            <img src="./Logo.png" alt="" className="h-[100%] w-[20%]" />
            <h2 className="ms-10 mt-2 text-xl">آکادمی سپهر </h2>
          </div>
          <div>
            <h2 className="font-bold">ثبت نام</h2>
          </div>

          <div className="flex">
            <h3 className="text-sm">حساب کاربری دارید؟ </h3>
            <Link className="text-blue-700 underline text-sm">وارد شوید</Link>
          </div>
        </div>

        <div className=" h-[290px] ">
          <Log />
        </div>

        {/* <div className=" h-[53px] w-[327px] text-center rounded-lg ">
  <h3 className='text-xl h-[53px] font-sans text-white bg-[#436E8E] rounded-lg '> ادامه</h3>
</div> */}
        <div className="  h-[19px] w-[327px]">
          <div className="text-xs">
            <a
              href="#"
              className=" text-#8D8D8D-500 hover:text-#8D8D8D-800 underline  "
              target="-blank"
              rel="noopener noreferrer "
            >
              قوانین و شرایط
            </a>{" "}
          </div>
        </div>
      </div>

      <div className="hidden md:block h-[550px]  rounded-lg  ">
        <img src="./Image.png" alt="" className="w-[100%] h-[100%]" />
      </div>
    </div>
  </div>
  );
};
export default LogIn;
