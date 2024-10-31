
function CourseInformation() {
    const information ={name:'ahmad', price: 100000, tech:'front', level:'مبتدی', capacity:'23 نفر', status:'در حال برگذاری', time:'23 nrdr'}

  return (
    <div className='w-[99%] pb-4 max-md:w-[100%] max-md:mt-3 md:max-lg:w-[47%] bg-white rounded-[20px] dark:bg-[#29435c] dark:text-[#d1d4c9]'>
        <div className=" w-[95%] text-sm mt-4 mx-auto rounded-2xl pr-[3%] pb-3 pt-1 shadow-[0px_0px_5px_5px] shadow-[#f3f4f6] dark:shadow-slate-500 dark:bg-[#556e53]">
            <h1 className="leading-6 flex">مدرس دوره: <h2 className="pr-[20%]">{information.name}</h2></h1>
            <h1 className="leading-6 flex">هزینه تمام دوره: <h2 className="pr-[13%] text-red-700 dark:text-rose-400">{information.price}تومان</h2></h1>
            <h1 className="leading-6 flex">تکنولوژی های دوره:<h2 className="pr-[8%]">{information.tech}</h2></h1>
            <h1 className="leading-6 flex">تکنولوژی های دوره:<h2 className="pr-[8%]">{information.tech}</h2></h1>
            <h1 className="leading-6 flex">سطح دوره:<h2 className="pr-[23%]">{information.level}</h2></h1>
            <h1 className="leading-6 flex">ظرفیت:<h2 className="pr-[29%]">{information.capacity}</h2></h1>
            <h1 className="leading-6 flex">وضعیت دوره:<h2 className="pr-[19%]">{information.status}</h2></h1>
        </div>
        <div className=" w-[95%] text-sm mt-4 mx-auto rounded-2xl pr-[3%] pb-3 pt-1 shadow-[0px_0px_5px_5px] shadow-[#f3f4f6] dark:shadow-slate-500 dark:bg-[#556e53]">
            <h1 className="leading-6 flex">مدت زمان:<h2 className="pr-[23%]">{information.time}</h2></h1>
            <h1 className="leading-6 flex">تعداد ویدئو:<h2 className="pr-[21%]">{information.capacity}</h2></h1>
            <h1 className="leading-6 flex">تعداد کامنت:<h2 className="pr-[20%]">{information.capacity}</h2></h1>
            <h1 className="leading-6 flex">امتیاز دوره:<h2 className="pr-[23%]">{information.capacity}</h2></h1>
        </div>
        <div className=" w-[95%] text-sm mt-4 mx-auto rounded-2xl pr-[3%] pb-3 pt-1 shadow-[0px_0px_5px_5px] shadow-[#f3f4f6] dark:shadow-slate-500 dark:bg-[#556e53]">
            <h1 className="leading-6 flex">تاریخ بروزرسانی:<h2 className="pr-[13%]">{information.price}</h2></h1>
            <h1 className="leading-6 flex">شروع دوره:<h2 className="pr-[22%]">{information.price}</h2></h1>
            <h1 className="leading-6 flex">پایان دوره:<h2 className="pr-[24%]">{information.price}</h2></h1>
        </div>
  </div>
  )
}

export default CourseInformation