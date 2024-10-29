import React from 'react'
import ValidationSchema from './ValidationSchema';
const StepThree = () => {
  return (
    <div className=' dark:bg-[#152a38] dark:text-[#ffff] h-screen w-[100%] overflow-hidden flex justify-center bg-[#F3F4F6]'>
    <div className='flex shadow-lg dark:bg-[#678cb1] rounded-lg w-5/6 justify-around  h-[580px]  bg-white m-auto  '>
      <div className='  h-[580px] dark:bg-[#678cb1] w-[1349px] rounded-lg pt[20px] flex gap-52 '>
        <div className='h-[500px] w-[351px] rounded-lg mr-[140px]  '>

<div className='  h-[10%] mt-8 w-[90%] mr-1 flex'>
<div className=' h-[50px] w-[65px]' >
  <img src="./Logo.png" alt="" />
</div>
<h1 className='mr-4  text-xl dark:text-[#ffff] ' > آکادمی سپهر </h1>
</div>

{/* <div className='flex'>
<h2 className=' bg-pink-500 mt-6 font-bold text-lg text-[#555555] dark:text-[#ffff]  '>  ثبت نام </h2>


</div> */}


<div className='hidden md:block h-[150px] '>

<ValidationSchema/>




</div>




<div className="flex mt-20">

<a href="#" 
className="  mt-28  underline text-xs  mr-64 text-[#8D8D8D] "
target="-blank"
rel="noopener noreferrer dark:text-[#ffff]  ">    قوانین و شرایط </a>
</div>

        </div>
        <div className='  h-[580px] w-[500px] ml-32 '>
          <img src="./Image.png" alt=""  className='w-[100%] h-[100%]'/>
        </div>
      </div>
    </div>
  </div>
  )
}

export default StepThree
