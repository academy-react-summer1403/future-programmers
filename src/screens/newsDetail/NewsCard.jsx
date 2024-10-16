import React from 'react'

const NewsCard = ({image,topic, explain}) => {
  return (
    <div className=" relative w-[278px] h-[360px] max-lg:w-[30%] max-md:h-[250px] bg-white rounded-[20px] max-sm:w-[95%] dark:bg-slate-600">
        <img src={image} className="w-[92%] h-64 max-lg:h-[74%] mx-auto relative bottom-6 rounded-3xl"></img>
        <h1 className="text-[14px] mr-[10px] max-lg:text-[9px] max-md:text-[11px] max-md:bottom-4 font-bold relative bottom-3 md:max-lg:bottom-4 dark:text-white">{topic}</h1>
        <p className="w-[94%] h-16 mr-[10px] overflow-hidden max-lg:h-[21%] max-lg:text-[9px] max-lg:mx-auto text-[13px] max-lg:relative max-lg:bottom-3 bottom-0 overflow-hidden dark:text-white">{explain}</p>
    </div>
  )
}

export default NewsCard;