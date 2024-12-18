
function CourseInformation({teacherName, cost, techs, courseLevelName, capacity, courseStatusName, endTime, startTime, insertDate, currentRate, commentCount}) {
    // const information ={name:'ahmad', price: 100000, tech:'front', level:'مبتدی', capacity:'23 نفر', status:'در حال برگذاری', time:'23 nrdr'}

  return (
    <div className='w-[99%] pb-4 sm:max-md:flex sm:max-md:flex-wrap  max-md:w-[100%] max-md:mt-3 md:max-lg:w-[47%] bg-white rounded-[20px] dark:bg-[#29435c] dark:text-[#d1d4c9]'>
        <div className=" w-[95%] text-sm mt-4 mx-auto rounded-2xl pr-[3%] pb-3 pt-1 shadow-[0px_0px_5px_5px] shadow-[#f3f4f6] dark:shadow-slate-500 dark:bg-[#556e53]">
            <h1 className="leading-6 flex">مدرس دوره: <h2 className="max-sm:pr-[69px] max-md:pr-[85px] md:pr-[60px] pr-[20%]">{teacherName}</h2></h1>
            <h1 className="leading-6 flex">هزینه تمام دوره: <h2 className="max-sm:pr-[43px] max-md:pr-[59px] md:pr-[33px] pr-[13%] text-red-700 dark:text-rose-400">{cost}تومان</h2></h1>
            <h1 className="leading-6 flex">تکنولوژی های دوره:<h2 className="max-sm:pr-[21px] max-md:pr-[37px] md:pr-[12px] pr-[8%]">{techs}</h2></h1>
            <h1 className="leading-6 flex">سطح دوره:<h2 className="max-sm:pr-[76px] max-md:pr-[91px] md:pr-[66px] pr-[23%]">{courseLevelName}</h2></h1>
            <h1 className="leading-6 flex">ظرفیت:<h2 className="max-sm:pr-[99px] max-md:pr-[115px] md:pr-[88px] pr-[29%]">{capacity}</h2></h1>
            <h1 className="leading-6 flex">وضعیت دوره:<h2 className=" max-sm:pr-[63px] max-md:pr-[79px] md:pr-[53px] pr-[19%]">{courseStatusName}</h2></h1>
        </div>
        <div className=" w-[95%] sm:max-md:w-[43%] text-sm mt-4 mx-auto rounded-2xl pr-[3%] pb-3 pt-1 shadow-[0px_0px_5px_5px] shadow-[#f3f4f6] dark:shadow-slate-500 dark:bg-[#556e53]">
            <h1 className="leading-6 flex">مدت زمان:<h2 className="max-sm:pr-[77px] max-md:pr-[25px] md:pr-[66px] pr-[23%]">موجود نیست</h2></h1>
            <h1 className="leading-6 flex">تعداد ویدئو:<h2 className="max-sm:pr-[71px] max-md:pr-[18px] md:pr-[59px] pr-[21%]">موجود نیست</h2></h1>
            <h1 className="leading-6 flex">تعداد کامنت:<h2 className="max-sm:pr-[66px] max-md:pr-[13px] md:pr-[54px] pr-[20%]">{commentCount}</h2></h1>
            <h1 className="leading-6 flex">امتیاز دوره:<h2 className="max-sm:pr-[76px] max-md:pr-[23px] md:pr-[64px] pr-[23%]">{currentRate}</h2></h1>
        </div>
        <div className=" w-[95%] sm:max-md:w-[47%] text-sm mt-4 mx-auto rounded-2xl pr-[3%] pb-3 pt-1 shadow-[0px_0px_5px_5px] shadow-[#f3f4f6] dark:shadow-slate-500 dark:bg-[#556e53]">
            <h1 className="leading-6 flex">تاریخ بروزرسانی:<h2 className="max-sm:pr-[39px] max-md:pr-[10px] md:pr-[28px] pr-[13%]">{insertDate}</h2></h1>
            <h1 className="leading-6 flex">شروع دوره:<h2 className="max-sm:pr-[72px] max-md:pr-[43px] md:pr-[60px] pr-[22%]">{startTime}</h2></h1>
            <h1 className="leading-6 flex">پایان دوره:<h2 className="max-sm:pr-[80px] max-md:pr-[51px] md:pr-[68px] pr-[24%]">{endTime}</h2></h1>
        </div>
  </div>
  )
}

export default CourseInformation