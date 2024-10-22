import FormPhone from "./FormPhone"

const StepOne = () => {
  return (
    <div className='dark:bg-gray-600  h-screen flex justify-center bg-white'>
      <div className='flex justify-around border-black-500 h-[580px] dark:bg-gray-600 dark:text-white shadow-lg  w-5/6 m-auto '>
        <div className=' border border-[#ccc] h-[580px] w-[1349px] rounded-lg pt[20px] flex gap-52'>
          <div className='h-[500px] w-[351px] rounded-lg mr-[140px] '>

<div className='  h-[10%] mt-8 w-[90%] mr-1 flex'>
  <div className=' h-[50px] w-[65px]' >
    <img className="" src="./Logo.png" alt="" />
  </div>
  <h3 className='mr-4 font-bold text-xl ' > آکادمی سپهر </h3>
</div>

<div className="mt-2 text-lg">
<h3 className='mt-7 font-bold text-lg text-[#555555] '> ثبت نام با موبایل</h3>
</div>

{/* <div className='flex '>
<h2 className='font-light'> حساب کاربری ندارید ؟ </h2>

<a href="#" className=' text-sm text-[#436E8E] mr-2'> ثبت نام کنید</a>

</div> */}



<div className='   h-[160px] '>

<FormPhone />
</div>




<div className="flex whitespace-nowrap">
<h2 className="text-[#8D8D8D] text-xs mr-2"> ثبت نام با ایمیل </h2>

<a href="#" 
 className=" text-#8D8D8D-500 hover:text-#8D8D8D-800 underline text-xs mr-52 text-[#8D8D8D] "
 target="-blank"
 rel="noopener noreferrer "> حریم خصوصی </a>
</div>
<h2 className=" text-xs mt-8  text-[#8D8D8D] mr-2
">با عضویت در سایت، تمامی قوانین و شرایط استفاده از خدمات
آکادمی سپهر را پذیرفته اید</h2>
          </div>
          <div className='  hidden md:block h-[100%] w-[50%]'>
            <img className="w-[100%] h-[100%]" src="./Image.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default StepOne
