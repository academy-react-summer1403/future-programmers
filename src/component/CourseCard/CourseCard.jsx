import React from 'react'

const CourseCard = ({image,topic, explain, teacher, time, price}) => {
  return (
    <div className=" relative w-[278px] max-sm:w-[95%] max-md:w-[31%] md:max-lg:w-[30%] h-[360px] max-md:h-[300px] md:max-lg:h-[220px] bg-white rounded-[20px] dark:dark:bg-[#29435c] dark:text-[#d1d4c9]">
        <img src={image} className="w-[92%] h-36 md:max-lg:h-[42%] mx-auto relative bottom-6 rounded-3xl"></img>
        <h1 className="text-[14px] max-md:text-[12px] md:max-lg:text-[9px] font-bold mr-1 relative bottom-3 md:max-lg:bottom-4 dark:text-[#d1d4c9]">{topic}</h1>
        <p className="w-[97%] h-20 max-sm:relative max-sm:bottom-[7px] max-sm:text-[11px] max-md:text-[10px] max-md:h-14 md:max-lg:h-16 mr-1 md:max-lg:mx-auto text-[13px] md:max-lg:text-[8px] md:max-lg:relative md:max-lg:bottom-3 bottom-0 overflow-hidden dark:text-[#d1d4c9]">{explain}</p>
        <ul className="relative top-3 mr-1 max-md:text-[11px] max-md:mt-[1px] max-md:top-[0] md:max-lg:top-[-10px] text-[13px] md:max-lg:text-[10px] list-disc list-inside text-[#0004ff] dark:text-[#d1d4c9]"><li>{teacher}</li></ul>
        <span className="relative top-14 max-md:top-[30px] max-md:text-[11px] md:max-lg:top-2 mr-1 bg-slate-400 rounded-2xl text-[15px] md:max-lg:text-[10px] p-1 pl-5 md:max-lg:pl-4 bg-[url(public/timer.png)] bg-no-repeat bg-left [background-size:18px] md:max-lg:[background-size:14px] dark:dark:bg-[#556e53] dark:text-[#d1d4c9]">{time}</span>
        <span className="relative max-md:absolute top-14 max-sm:right-[78%] max-md:right-[73%] max-md:top-[91%] max-md:text-[13px] max-md:right-[78%] md:max-lg:top-2 right-[120px] md:max-lg:right-[36px] md:max-lg:text-[12px] text-[15px] text-red-700 dark:text-[#d1d4c9]" >{price}</span>
    </div>
  )
}

export default CourseCard;