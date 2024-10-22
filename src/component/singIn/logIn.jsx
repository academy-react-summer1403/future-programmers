import React, { useState } from "react";
import Log from "./Log";
import { Link } from "react-router-dom";

import { Field, Form, Formik } from "formik";
import axios from "axios";
import { setItem } from "../../core/services/common/storage.services";



const LogIn = () => {

  const handleLogin =async (values) => {
    const res = await axios.post('https://classapi.sepehracademy.ir/api/Sign/Login', values)
    console.log(res.data.token)
    setItem("token" ,res.data.token)
  }

  
  return (

    <div className=" dark:bg-gray-600  h-screen flex justify-center">
      {/* <Formik initialValues={{phoneOrGmail:'' , password:'' , rememberMe:false}} onSubmit={handleLogin}>
      
        <Form>
          <Field type='text' name='phoneOrGmail' placeholder='phoneOrGmail' />
          <Field type='text' name='password' placeholder='password'/>
          <Field type='checkbox' name='rememberMe' />
          <button type="submit">click</button>
        </Form>
      </Formik> */}
    <div className="flex justify-around border border-black-500 h-[580px] hover:text-black-1000 w-screen m-auto   dark:bg-gray-600 dark:text-white  rounded-lg">

      <div className="   h-[500px]  rounded-lg  pt-[20px]">
        <div className="  h-[55px] w-[327px] mx-auto ">
          <div className="flex   h-[50px]  text-xl ">
            <img src="./Logo.png" alt="" className="h-[100%] w-[20%]" />
            <h2 className="ms-10 mt-2  dark:text-white">آکادمی سپهر </h2>
          </div>

        <div className="mt-2 text-lg">
            <h2 className="font-bold dark:text-white"> ورود به سیستم </h2>
            </div>

          <div className="flex mt-5">
            <h3 className="text-sm dark:text-white">حساب کاربری ندارید؟ </h3>
            <Link className="text-blue-700 underline text-sm">ثبت نام کنید </Link>
          </div>
          
        </div>

        <div className="    h-80 ">
          <Log />
        </div>



        <div className="  whitespace-nowrap">
          <div className="flex text-xs  ">

            <a
              href="#"
              className="  text-#8D8D8D-500 mr-3 hover:text-#8D8D8D-800 underline dark:text-white "
              target="-blank"
              rel="noopener noreferrer "
            >
              قوانین و شرایط
            </a>{" "}
            <a
              href="#"
              className=" text-#8D8D8D-500 mr-44  hover:text-#8D8D8D-800 underline dark:text-white  "
              target="-blank"
              rel="noopener noreferrer "
            >
فراموشی رمز            </a>{" "}
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
