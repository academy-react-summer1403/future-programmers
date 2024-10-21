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
