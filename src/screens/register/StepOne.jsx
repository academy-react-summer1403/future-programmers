import FormPhone from "./FormPhone"
import { NavLink, useNavigate } from "react-router-dom";

const StepOne = () => {
  return (
    <div className=' dark:bg-[#152a38]  dark:text-[#ffff]  h-screen flex justify-center bg-[#F3F4F6] '>
      <div className='  flex justify-around  dark:bg-[#678cb1]  rounded-lg h-[580px]  bg-white  shadow-lg  w-5/6 m-auto '>
        <div className='  h-[580px] w-[1138px] dark:bg-[#678cb1]  dark:text-[#d1d4c9] pt[20px] bg-white rounded-lg flex gap-52'>
          <div className='  dark:text-[#fff] h-[500px] w-[351px] rounded-xl mr-[30px] '>

<div className='   h-[10%] mt-8 w-[90%]  flex'>
  <div className='  h-[50px] w-[65px]' >
    <img className="mr-7 " src="./Logo.png" alt="" />
  </div>
  <h3 className='mr-12 font-bold text-xl dark:text-[#ffff]' > آکادمی سپهر </h3>
</div>

<div className="mt-2 text-lg">
<h3 className='mt-7 font-bold mr-7 text-lg text-[#555555] dark:text-[#ffff]'>  ثبت نام با موبایل</h3>
</div>






<div className='   h-[160px] '>

<FormPhone />
 
</div>


<NavLink to={'/SingIn'}>
<div className=" flex whitespace-nowrap">
<h2 className="text-[#8D8D8D] text-xs mr-6 dark:text-[#ffff]">  ورود با   شماره موبایل یا ایمیل </h2>
</div>
</NavLink>



<h2 className=" text-xs mt-8  text-[#8D8D8D] mr-6 dark:text-[#ffff]
">با عضویت در سایت، تمامی قوانین و شرایط استفاده از خدمات
آکادمی سپهر را پذیرفته اید</h2>
          </div>

        

          <div className='  hidden md:block h-[100%] w-[500px]'>
            <img className="w-[100%] h-[100%] mr-12 rounded-lg dark:bg-[#001F3F] " src="./Image.png" alt="" />
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default StepOne
