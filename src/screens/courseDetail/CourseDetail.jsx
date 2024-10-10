import React from 'react'

function CourseDetail() {
    
    
  return (
    <div className='bg-[#e6e5e5] font-[sans] dark:bg-slate-700'>
      <div className='w-[88%] mx-auto flex'>
        <div className=' relative h-[380px] w-[100%] mt-4 rounded-[30px] bg-[url(public/p.01.png)] bg-no-repeat [background-size:100%_100%]'>
            <div className="h-[380px] w-[100%] bg-black opacity-95 rounded-[30px] absolute">
            <h1 className="text-stone-50  text-[24px] font-black absolute top-[40px] right-[65px]">در لاراول Restful API آموزش کاربردی</h1>
            <p className=' text-gray-400 w-[420px] absolute top-[85px] right-[65px]'> در اینجا یاد می گیرید.ر اینجا یاد می گیرید.ر اینجا یاد می گیرید ر اینجا یاد می گیرید.گیرید.ر اینجا یاد می گیرید.ر ا</p>
            <img src='public/p.01.png' className='w-[450px] h-[310px] shadow-[8px_-13px_35px_-18px_gray] rounded-[25px] absolute right-[770px] top-[30px]'></img>
            <h3 className=' text-gray-400 line-through absolute top-[220px] right-[625px]'> تومان 500,000</h3>
            <h2 className=' text-white	text-[22px] font-bold	absolute top-[250px] right-[580px]'>تومان 400,000</h2>

            <button type='Submit' className='bg-cyan-700 text-[white] py-3 px-4 rounded-[10px] absolute top-[242px] right-[70px]'>خرید نقدی دوره</button>
            </div>
            
        </div>
      </div>

      <div className='w-[88%] h-[700px] bg-blue-800 mx-auto'></div>
    </div>
  )
}

export default CourseDetail








// bg-gradient-to-l from-black to-gray-800

