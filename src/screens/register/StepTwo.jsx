import React from 'react'
import StepNumber from './StepNumber'
const StepTwo = () => {
  return (

    <div className=' text-{sans} dark:bg-[#152a38]  dark:text-[#ffff] h-screen flex justify-center   bg-[#F3F4F6] '>
    <div className='flex justify-around border-black-500 dark:bg-[#678cb1]  h-[580px] bg-white  shadow-xl rounded-lg   w-5/6 m-auto  '>
      <div className='  h-[580px] w-[1349px] rounded-lg dark:bg-[#678cb1]  pt[20px] flex gap-52'>
        <div className='h-[500px] w-[351px] rounded-lg mr-[140px]'>

<div className='  h-[10%] mt-8 w-[90%] mr-1 flex'>
<div className=' h-[50px] w-[65px]' >
  <img src="./Logo.png" alt="" />
</div>
<h3 className='mr-3 font-bold text-xl dark:text-[#ffff] ' > آکادمی سپهر </h3>
</div>

<h3 className='mt-7 font-bold text-xl text-[#555555] dark:text-[#ffff] '> ثبت نام با موبایل </h3>


<div className='flex '>
<h2 className='font-light dark:text-[#ffff]  mt-4'>   کد ارسال شده را وارد کنید   </h2>
</div>



<div className=' h-[160px]  '>
<StepNumber/>
</div>





{/* <h2 className="  w-5/6 text-xs mt-8  text-[#BFBFBF] mr-2 
">با عضویت در سایت، تمامی قوانین و شرایط استفاده از خدمات
آکادمی سپهر را پذیرفته اید</h2> */}
        </div>
        <div className=' hidden md:block h-[100%] w-[500px]'>
          <img src="./Image.png" alt="" className='w-[100%] h-[100%] shadow-xl rounded-lg'/>
        </div>
      </div>
    </div>
  </div>
  )
}

export default StepTwo
