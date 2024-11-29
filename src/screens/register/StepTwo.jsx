import React from "react";
import StepNumber from "./StepNumber";
import { useNavigate } from "react-router-dom";

const StepTwo = () => {
  // const tel = signUpTwoAPI("phoneNumber");
  const navigate = useNavigate();

  const onsubmit = async (valuse) => {
    const tel = getData("phoneNumber");

    const obj = {
      phoneNumber: tel,
      verifycode: valuse.vercode,
    };
    console.log("userVerify", obj);

    const user = await signUpTwoApI(obj);
    console.log("user", user);

    navigate("/step3");
  };

  return (
    <div className="text-{sans} dark:bg-[#152a38]  dark:text-[#ffff] h-screen flex justify-center bg-[#F3F4F6]">
      <div className="bg-white flex shadow-lg dark:bg-[#678cb1] rounded-lg w-[80%] justify-around h-[580px] m-auto">
        <div className="h-[500px] w-[351px] rounded-lg mr-2 ">
          <div className="h-[10%] mt-8 w-[90%] mr-1 flex">
            <div className="h-[50px] w-[65px] max-sm:w-[30px] max-sm:mr-5">
              <img src="./Logo.png" alt="" />
            </div>
            <h3 className="mr-3 font-bold text-xl dark:text-[#ffff] max-sm:text-xs ">
              {" "}
              آکادمی سپهر{" "}
            </h3>
          </div>

          <h3 className="mt-7 mr-6 font-bold text-xl text-[#555555] dark:text-[#ffff] max-sm:text-xs">
            {" "}
            ثبت نام با موبایل{" "}
          </h3>

          <div className="flex ">
            <h2 className="font-light dark:text-[#ffff] mr-6  mt-4 max-sm:text-xs">
              {" "}
              کد ارسال شده را وارد کنید{" "}
            </h2>
          </div>

          <div className="h-[160px]  ">
            <StepNumber />
          </div>

          <h2
            className="  w-5/6 text-xs mt-8  text-[#BFBFBF] mr-7 max-sm:text-xs
          "
          >
            با عضویت در سایت، تمامی قوانین و شرایط استفاده از خدمات آکادمی سپهر
            را پذیرفته اید
          </h2>
        </div>
        <div className="hidden md:block mr-56 h-[100%] w-[500px]">
          <img
            src="./Image.png"
            alt=""
            className="w-[100%] h-[100%] rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default StepTwo;
