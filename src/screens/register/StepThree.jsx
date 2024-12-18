import React from "react";
import ValidationSchema from "./ValidationSchema";
import RulesPage from "./RulesPage";
import { useNavigate } from "react-router-dom";
const StepThree = () => {
  //   const tel = getData("phoneNumber");
  // const navigate = useNavigate();

  // const onsubmit = async (valuse) => {
  //   const userInfo = {
  //     phoneNumber: tel,
  //     password: values.pass,
  //     gmail: values.email,

  //   };
  // console.log("userInfo",userInfo)
  // const user = await signUpThreeApI (userInfo);
  //   console.log("user" , user);

  //   navigate("/login");

  return (
    <div
      className="dark:bg-[#152a38] dark:text-[#ffff] h-screen
    w-[100%] overflow-hidden flex justify-center bg-[#F3F4F6]"
    >
      <div
        className="bg-white flex shadow-lg dark:bg-[#678cb1]
    rounded-lg w-[80%] justify-around h-[580px] m-auto  "
      >
        {/* <div className=' bg-purple-200 StepThree h-[580px]
       dark:bg-[#678cb1] w-[80%] rounded-lg pt[20px] flex gap-52 '> */}
        <div className="h-[500px] w-[351px] rounded-lg">
          <div className="h-[10%] mt-8 w-[90%] mr-1 flex">
            <div className="h-[50px] w-[65px] max-sm:mr-4">
              <img src="./Logo.png" alt="" />
            </div>
            <h1
              className="mr-4  text-xl dark:text-[#ffff] font-bold
max-md:text-sm max-md:font-bold"
            >
              {" "}
              آکادمی سپهر{" "}
            </h1>
          </div>

          {/* <div className='flex'>
<h2 className=' bg-pink-500 mt-6 font-bold text-lg text-[#555555] dark:text-[#ffff]  '>  ثبت نام </h2>
</div> */}

          <div className=" h-[150px] ">
            <ValidationSchema />
          </div>

          <div className="">
            <RulesPage />
          </div>
        </div>
        <div className="  hidden md:block h-[580px] w-[500px] ml-32">
          <img
            src="./Image.png"
            alt=""
            className="w-[100%] h-[100%] mr-40 rounded-lg"
          />
        </div>
        {/* </div> */}
      </div>
    </div>
  );
};

export default StepThree;
