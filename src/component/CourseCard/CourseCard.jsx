import React from 'react'

const CourseCard = ({image,topic, explain, teacher, time, price}) => {
  return (
    <div className=" relative w-[278px] md:max-lg:w-[30%] h-[360px] md:max-lg:h-[220px] bg-white rounded-[20px] dark:bg-slate-600">
        <img src={image} className="w-[92%] h-36 md:max-lg:h-[42%] mx-auto relative bottom-6 rounded-3xl"></img>
        <h1 className="text-[14px] md:max-lg:text-[9px] font-bold mr-1 relative bottom-3 md:max-lg:bottom-4 dark:text-white">{topic}</h1>
        <p className="w-[97%] h-20 md:max-lg:h-16 mr-1 md:max-lg:mx-auto text-[13px] md:max-lg:text-[8px] md:max-lg:relative md:max-lg:bottom-3 bottom-0 overflow-hidden dark:text-white">{explain}</p>
        <ul className=" mr-1 relative top-3 md:max-lg:bottom-[8px] text-[13px] md:max-lg:text-[10px] list-disc list-inside text-[#0004ff] dark:text-white"><li>{teacher}</li></ul>
        <span className="relative top-14 md:max-lg:top-2 mr-1 bg-slate-400 rounded-2xl text-[15px] md:max-lg:text-[10px] p-1 pl-5 md:max-lg:pl-4 bg-[url(public/timer.png)] bg-no-repeat bg-left [background-size:20px] md:max-lg:[background-size:14px] dark:text-white">{time}</span>
        <span className="relative top-14 md:max-lg:top-2 right-[120px] md:max-lg:right-[70px] md:max-lg:text-[12px] text-[15px] text-red-700 dark:text-white" >{price}</span>
    </div>
  )
}

export default CourseCard;