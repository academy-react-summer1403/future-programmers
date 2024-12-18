import { setData } from "../../core/services/storage/localStorage.storage";
import FormPhone from "./FormPhone";
import { NavLink, useNavigate } from "react-router-dom";


const StepOne = () => {


  return (
    <div className=" dark:bg-[#152a38] flex dark:text-[#ffff] h-screen justify-between bg-[#F3F4F6] ">
      <div className=" bg-white flex dark:bg-[#678cb1] rounded-lg h-[580px] w-[80%] shadow-lg m-auto ">
        {/* <div className=" bg-pink-500 h-[580px] w-[80%] dark:bg-[#678cb1] dark:text-[#d1d4c9] pt[20px] ml-[30%] rounded-lg flex justify-between"> */}
          <div className="dark:text-[#fff] h-[90%] w-96 rounded-xl ml-48  ">


            <div className="h-[10%] mt-8 w-[90%]  flex">
              <div className="h-[50px] w-[65px]">
                <img className="mr-7 " src="./Logo.png" alt="" />
              </div>


              <h3 className="mr-12 font-bold text-xl dark:text-[#ffff] max-md:text-sm">
                {" "}
                آکادمی سپهر{" "}
              </h3>
            </div>

            {/* <div className=" bg-cyan-400 mt-2 text-lg"> */}
              <h3 className="mt-7 font-bold mr-9 text-lg text-[#555555] dark:text-[#ffff] max-md:text-sm">
                {" "}
                ثبت نام با موبایل
              </h3>
            {/* </div> */}

            <div className=" h-[160px] ">
              <FormPhone />
            </div>

            <NavLink to={"/SingIn"}>
              {/* <div className=" flex whitespace-nowrap"> */}
                <h2 className="text-[#8D8D8D] text-xs mr-9 whitespace-nowrap dark:text-[#ffff] max-md:text-[10px]">
                  {" "}
                  ورود با شماره موبایل یا ایمیل{" "}
                </h2>
              {/* </div> */}
            </NavLink>

            <h2
              className=" text-xs mt-8  text-[#8D8D8D] mr-9 dark:text-[#ffff] max-md:text-[10px]"
            >
              با عضویت در سایت، تمامی قوانین و شرایط استفاده از خدمات آکادمی
              سپهر را پذیرفته اید
            </h2>
          </div>

          <div className="hidden md:block h-[100%] w-[500px] max-md:w-[250px]">
            <img
              className="w-[100%] h-[100%] rounded-lg dark:bg-[#001F3F] mr-12"
              src="./Image.png"
              alt=""
            />
          </div>
        {/* </div> */}
      </div>
    </div>
  );
};

export default StepOne;
