
const CourseCard = ({image,topic, explain, teacher, time, price}) => {
  return (
    <div className=" relative w-[31%] max-sm:w-[95%] max-md:w-[31%] md:max-lg:w-[30%] h-[360px] max-md:h-[300px] md:max-lg:h-[220px] bg-white rounded-[20px] dark:dark:bg-[#29435c] dark:text-[#d1d4c9]">
        <img src={image} className="w-[92%] h-36 md:max-lg:h-[42%] mx-auto border border-[gray] relative bottom-6 rounded-3xl"></img>
        <h1 className="text-[14px] max-md:text-[12px] max-lg:text-[9px] font-bold mr-2 relative bottom-3 max-lg:bottom-4 dark:text-[#d1d4c9]">{topic}</h1>
        <p className="w-[95%] indent-[8px] h-9 max-sm:relative max-sm:bottom-[7px] max-sm:text-[11px] max-md:bottom-[10px] max-md:text-[10px] max-md:h-8 max-lg:h-6 mx-auto md:max-lg:mx-auto text-[12px] md:max-lg:text-[8px] max-lg:relative md:max-lg:bottom-3 bottom-0 overflow-hidden dark:text-[#d1d4c9]">{explain}</p>
        <ul className="relative top-3 mr-2 max-md:text-[11px] max-md:mt-[1px] max-md:top-[0] md:max-lg:top-[-10px] text-[13px] md:max-lg:text-[10px] list-disc list-inside text-[#0004ff] dark:text-[#d1d4c9]"><li>{teacher}</li></ul>
        <span className="absolute left-[2%] max-md:left-[3%] top-[90%] max-md:top-[91%] max-md:text-[11px] max-lg:top-[88%] max-lg:pr-[4px] bg-slate-400 rounded-2xl text-[14px] max-xl:text-[13px] max-lg:text-[10px] p-[2px] pl-5 md:max-lg:pl-4 bg-[url(public/timer.png)] bg-no-repeat [background-position:2%_50%] max-lg:[background-position:4%_50%] [background-size:18px] md:max-lg:[background-size:14px] dark:dark:bg-[#556e53] dark:text-[#d1d4c9]">{time}</span>
        <span className="absolute top-[90%] max-sm:right-[3%] max-md:right-[4%] max-md:top-[91%] max-md:text-[12px] max-lg:top-[88%] right-[10px] max-lg:right-[8px] max-lg:text-[11px] text-[15px] max-xl:text-[14px] text-red-700 dark:text-[#d1d4c9]" >{price} تومان </span>
    </div>
  )
}

export default CourseCard;