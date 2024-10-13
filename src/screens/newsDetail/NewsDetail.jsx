import React from 'react'

function NewsDetail() {
  return (
    <div className='bg-[#e6e5e5] font-[sans] dark:bg-slate-700'>
        <div className='w-[88%] mx-auto flex pt-[15px]'>
            <div className='w-[100%] h-[50px] rounded-[15px] bg-white'></div>
        </div>

        <div className='w-[88%] mx-auto mt-[70px] border border-black'>
            <h1 className='mt-[16px] mr-[36%] pb-[5px] text-[20px]'>سرتیتر خبر</h1>
            <div className='w-[92%] h-[400px] rounded-[15px] mr-[8%] mt-[15px] bg-white'>
                <div className='w-[36%] h-[410px] bg-[#9F9F9F] relative left-[9%] bottom-[16%] rounded-[25px] rotate-[9deg]'>
                    <img src='public/newspaper.png' className='w-[100%] h-[100%] rounded-[26px] rotate-[-9deg]'></img>
                </div>
            </div>
        </div>
    </div>
  )
}

export default NewsDetail