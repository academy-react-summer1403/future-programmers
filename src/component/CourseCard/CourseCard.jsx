import React from 'react'

const CourseCard = ({image,topic, explain, teacher, time, price}) => {
  return (
    <div className="w-[278px] h-[360px] bg-white rounded-[20px] dark:bg-slate-600">
        <img src={image} className="w-[92%] h-36 mx-auto relative bottom-6 rounded-3xl"></img>
        <h1 className="text-[14px] font-bold mr-1 relative bottom-3 dark:text-white">{topic}</h1>
        <p className="w-[97%] h-20 mr-1 text-[13px] overflow-hidden dark:text-white">{explain}</p>
        <ul className=" mr-1 relative top-8 text-[13px] list-disc list-inside text-[#0004ff] dark:text-white"><li>{teacher}</li></ul>
        <span className="relative top-16 mr-1 bg-slate-400 rounded-2xl text-[15px] p-1 pl-5 bg-[url(public/timer.png)] bg-no-repeat bg-left [background-size:20px] dark:text-white">{time}</span>
        <span className="relative top-16 right-[120px] text-red-700 dark:text-white" >{price}</span>
    </div>
  )
}

export default CourseCard;