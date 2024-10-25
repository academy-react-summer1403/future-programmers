import React from 'react'
import StepNumber from './StepNumber'
const StepTwo = () => {
  return (

    <div className='dark:bg-gray-600 h-screen flex justify-center bg-white '>
    <div className='flex justify-around border-black-500 h-[580px] hover:text-black-1000  shadow-lg  w-5/6 m-auto dark:bg-gray-600 '>
      <div className=' border border-[#ccc] h-[580px] w-[1349px] rounded-lg pt[20px] flex gap-52'>
        <div className='h-[500px] w-[351px] rounded-lg mr-[140px] '>

<div className='  h-[10%] mt-8 w-[90%] mr-1 flex'>
<div className=' h-[50px] w-[65px]' >
  <img src="./Logo.png" alt="" />
</div>
<h3 className='mr-3 font-bold text-xl ' > آکادمی سپهر </h3>
</div>

<h3 className='mt-7 font-bold text-xl text-[#555555] '> ثبت نام با موبایل </h3>


<div className='flex'>
<h2 className='font-light  '>   کد ارسال شده را وارد کنید   </h2>

{/* <a href="#" className=' text-sm text-[#436E8E] mr-2'>  وارد کنید </a> */}

</div>



<div className=' h-[160px]  '>
<StepNumber/>
</div>




<div className="flex whitespace-nowrap">
<h2 className="text-[#8D8D8D] text-xs mr-4"> ثبت نام با ایمیل </h2>

<a href="#" 
className=" text-#8D8D8D-500 hover:text-#8D8D8D-800 underline text-xs mr-48 text-[#8D8D8D] "
target="-blank"
rel="noopener noreferrer "> حریم خصوصی </a>
</div>
<h2 className="  w-5/6 text-xs mt-8  text-[#BFBFBF] mr-2 
">با عضویت در سایت، تمامی قوانین و شرایط استفاده از خدمات
آکادمی سپهر را پذیرفته اید</h2>
        </div>
        <div className=' hidden md:block h-[100%] w-[50%]'>
          <img src="./Image.png" alt="" className='w-[100%] h-[100%]'/>
        </div>
      </div>
    </div>
  </div>
  )
}

export default StepTwo
