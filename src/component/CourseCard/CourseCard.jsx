import React from 'react'

const CourseCard = ({image,topic, explain, teacher, time, price}) => {
  return (
    <div className=" relative laptop:w-[278px] tablet:w-[30%] laptop:h-[360px] tablet:h-[220px] bg-white rounded-[20px] dark:bg-slate-600">
        <img src={image} className="w-[92%] h-36 tablet:h-[42%] mx-auto relative bottom-6 rounded-3xl"></img>
        <h1 className="laptop:text-[14px] tablet:text-[9px] font-bold mr-1 relative laptop:bottom-3 tablet:bottom-4 dark:text-white">{topic}</h1>
        <p className="w-[97%] laptop:h-20 tablet:h-16 laptop:mr-1 tablet:mx-auto laptop:text-[13px] tablet:text-[8px] tablet:relative tablet:bottom-3 laptop:bottom-0 overflow-hidden dark:text-white">{explain}</p>
        <ul className=" mr-1 relative laptop:top-3 tablet:bottom-[8px] laptop:text-[13px] tablet:text-[10px] list-disc list-inside text-[#0004ff] dark:text-white"><li>{teacher}</li></ul>
        <span className="relative laptop:top-14 tablet:top-2 mr-1 bg-slate-400 rounded-2xl laptop:text-[15px] tablet:text-[10px] p-1 laptop:pl-5 tablet:pl-4 bg-[url(public/timer.png)] bg-no-repeat bg-left laptop:[background-size:20px] tablet:[background-size:14px] dark:text-white">{time}</span>
        <span className="relative laptop:top-14 tablet:top-2 laptop:right-[120px] tablet:right-[70px] tablet:text-[12px] laptop:text-[15px] text-red-700 dark:text-white" >{price}</span>
    </div>
  )
}

export default CourseCard;