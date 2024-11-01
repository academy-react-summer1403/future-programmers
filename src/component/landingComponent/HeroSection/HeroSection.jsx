

const HeroSection = () => {
    return (
        <div className="pb-[30px] overflow-x-hidden  dark:text-[#d1d4c9]">
            <div className=" py-8 px-4 mx-auto flex flex-row justify-around">
                    <div className="text-center md:text-right  w-full md:w-[40%] ">
                        <h1 className="text-[40px] max-lg:text-[35px] max-sm:text-[25px] mx-auto font-bold mb-4 mt-12 max-sm:mt-5 max-sm:mb-0  text-[#436E8E] dark:text-[#d1d4c9] ">دنبال چی می گردی؟</h1>
                        <p className="text-gray-500 dark:text-slate-50 mt-7 max-lg:mt-0 max-sm:mt-3">دیگه وقتشه یه تکونی به خودت بدی</p>
                        <input type="text" placeholder='تو فقط اسم ببر ...' className=' border border-[#436E8E] my-3 w-[70%] max-md:w-[50%] max-sm:w-[70%] lg:p-4 md:max-lg:p-2 bg-[url(public/courseSearch.svg)] dark:bg-[url(public/darkcourseSearch.svg)] [background-position-y:center] max-sm:[background-position-x:6%] [background-position-x:4%] bg-no-repeat text-base max-md:p-[9px] md:max-lg:text-[11px] font-bold [background-size:35px] md:max-lg:[background-size:25px] max-sm:[background-size:25px] max-sm:text-[13px] [center] shadow-inner shadow-slate-400 rounded-[30px] dark:bg-[#556e53] dark:placeholder-[#d1d4c9]'/>
                        <h3 className=" mt-[15px] max-lg:mt-[10px] font-semibold max-sm:font-normal text-[25px] max-lg:text-[21px]">آکادمی سپهر</h3>
                        <p className='mt-3 text-[14px] max-lg:text-[11px] max-md:text-[12px] max-sm:text-[10px] text-gray-600 dark:text-[#d1d4c9] sm:w-[70%] md:w-full mx-auto'> آکادمی آموزشی سپهر مکانی برای پیشرفت تو تا بتونی مهارت های مورد نیاز برای طراحی وب رو هر چه سریعتر و با بهترین روش یاد بگیری</p>
                    </div>
                    <div className="relative hidden md:block w-[405]">
                        <img src="./header-bg.png" alt="Hero" className='h-96' />
                        <img src="./Path 2.png" className='absolute top-20 w-[21%] right-[78%]' />
                    </div>
            </div>


        </div>
    )
}



export default HeroSection