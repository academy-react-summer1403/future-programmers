import React from 'react'

const NewsCard = ({image,topic, explain}) => {
  return (
    <div className=" relative w-[278px] md:max-lg:w-[30%] h-[360px] md:max-lg:h-[220px] bg-white rounded-[20px] dark:bg-slate-600">
        <img src={image} className="w-[92%] h-64 md:max-lg:h-[42%] mx-auto relative bottom-6 rounded-3xl"></img>
        <h1 className="text-[14px] mr-[10px] md:max-lg:text-[9px] font-bold relative bottom-3 md:max-lg:bottom-4 dark:text-white">{topic}</h1>
        <p className="w-[94%] h-16 mr-[10px] overflow-hidden md:max-lg:h-16  md:max-lg:mx-auto text-[13px] md:max-lg:text-[8px] md:max-lg:relative md:max-lg:bottom-3 bottom-0 overflow-hidden dark:text-white">{explain}</p>
    </div>
  )
}

export default NewsCard;