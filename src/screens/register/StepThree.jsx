import React from 'react'
import ValidationSchema from './ValidationSchema';
const StepThree = () => {
  return (
    <div className=' dark:bg-gray-600 h-screen   flex justify-center bg-[#F3F4F6]'>
    <div className='flex shadow-lg  rounded-lg w-5/6 justify-around border-black-500 h-[580px] bg-white  m-auto dark:bg-gray-600 '>
      <div className='  h-[580px] w-[1349px] rounded-lg pt[20px] flex gap-52'>
        <div className='h-[500px] w-[351px] rounded-lg mr-[140px] '>

<div className='  h-[10%] mt-8 w-[90%] mr-1 flex'>
<div className=' h-[50px] w-[65px]' >
  <img src="./Logo.png" alt="" />
</div>
<h1 className='mr-4  text-xl ' > آکادمی سپهر </h1>
</div>

<h2 className='mt-7 font-bold text-lg text-[#555555] '>  ثبت نام </h2>
<div className='flex'>
<h2 className='font-light mt-5'>  </h2>


</div>


<div className='hidden md:block h-[150px] '>

<ValidationSchema/>




</div>




<div className="flex mt-20">

<a href="#" 
className=" text-#8D8D8D-500 hover:text-#8D8D8D-800 underline text-xs mt-20 mr-64 text-[#8D8D8D] "
target="-blank"
rel="noopener noreferrer ">    قوانین و شرایط </a>
</div>

        </div>
        <div className='  h-[500px] w-[500px] ml-32 '>
          <img src="./Image.png" alt=""  className='w-[100%] h-[100%]'/>
        </div>
      </div>
    </div>
  </div>
  )
}

export default StepThree
