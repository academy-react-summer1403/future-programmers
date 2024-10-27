import React, { useState } from "react";
import Log from "./Log";
import { Link, NavLink } from "react-router-dom";

import { Field, Form, Formik } from "formik";
import axios from "axios";
import { setItem } from "../../core/services/common/storage.services";


const LogIn=()=>{

  
  
  return (

    <div className=" text-[sans] dark:bg-gray-600  bg-[#F3F4F6]   w-[1360px] flex justify-center "> 

    {/* <div className=" border border-pink-400 flex justify-around  h-[680px] w-[100%] m-auto   dark:bg-gray-600 dark:text-white  rounded-lg"> */}

    
    <div className="  dark:bg-gray-600  h-[600px] flex justify-center bg-[#F3F4F6]  ">
    <div className=" flex  w-5/6 m-auto shadow-lg  bg-white dark:bg-gray-600   rounded-lg">
    <div className="  dark:bg-gray-600  w-[100%] h-full flex justify-center">

      {/* <Formik initialValues={{phoneOrGmail:'' , password:'' , rememberMe:false}} onSubmit={handleLogin}>
      
        <Form>
          <Field type='text' name='phoneOrGmail' placeholder='phoneOrGmail' />
          <Field type='text' name='password' placeholder='password'/>
          <Field type='checkbox' name='rememberMe' />
          <button type="submit">click</button>
        </Form>
      </Formik> */}

    <div className="  flex justify-around dark:border-black shadow-xl border border-black-500 h-[580px] hover:text-black-1000 w-screen m-auto   dark:bg-gray-600 dark:text-white  rounded-lg">
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


            <Link to={'/StepOne'}  className="text-blue-700 underline text-sm dark:text-white" >ثبت نام کنید 
           
            
            </Link>
          </div>
          
        </div>

        <div className="    h-80 ">
          <Log />
        </div>



        <div className="  whitespace-nowrap">
          {/* <div className="flex text-xs  ">

            <a
              href="#"
              className="  text-#8D8D8D-500 mr-3 hover:text-#8D8D8D-800 underline dark:text-white "
              target="-blank"
              rel="noopener noreferrer "
            >
            </a>

            <a
              href="#"
              className=" text-#8D8D8D-500 mr-44  hover:text-#8D8D8D-800 underline dark:text-white  "
              target="-blank"
              rel="noopener noreferrer "
            >
فراموشی رمز            </a>
          </div> */}


            
        
          
        </div>
      
      </div>
      
      <div className="hidden md:block h-[550px]  rounded-lg  ">
        <img src="./Image.png" alt="" className="w-[100%] h-[100%]" />
      </div>
      
    </div>
  
  
    </div>


    
  </div>


</div>
{/* </div> */}

</div>


  );

}


export default LogIn;
