

const HeroSection = () => {
    return (
        <div className=" bg-[#f3f4f6] font-[sans] dark:bg-[#152a38] border border-black">
            <div className=" py-8 px-4 mx-auto flex flex-row justify-around">
                    <div className="text-center md:text-right  w-full md:w-[40%]">
                        <h1 className="text-[40px] mx-auto  font-bold mb-4 mt-12  text-[#436E8E]">دنبال چی می گردی؟</h1>
                        <p className="text-gray-500 dark:text-slate-50 mt-7">دیگه وقتشه یه تکونی به خودت بدی</p>
                        <input type="text" placeholder='تو فقط اسم ببر ...' className=' border border-[#436E8E] my-3 w-[70%] lg:p-4 md:max-lg:p-2 bg-[url(public/courseSearch.svg)] dark:bg-[url(public/darkcourseSearch.svg)] [background-position-y:center] max-sm:[background-position-x:3%] [background-position-x:4%] bg-no-repeat text-base max-md:p-[9px] md:max-lg:text-[11px] font-bold [background-size:35px] md:max-lg:[background-size:25px] max-sm:[background-size:25px] max-sm:text-[13px] [center] shadow-inner shadow-slate-400 rounded-[30px] dark:bg-[#556e53] dark:placeholder-[#d1d4c9]'/>
                        <h3 className=" mt-[15px] font-semibold text-[25px]">آکادمی سپهر</h3>
                        <p className='mt-3 text-[14px] text-gray-600 sm:w-[70%] md:w-full mx-auto'> آکادمی آموزشی سپهر مکانی برای پیشرفت تو تا بتونی مهارت های مورد نیاز برای طراحی وب رو هر چه سریعتر و با بهترین روش یاد بگیری</p>
                    </div>
                    <div className="relative hidden md:block w-[405]">
                        <img src="./header-bg.png" alt="Hero" className='h-96' />
                        <img src="./Path 2.png" className='absolute top-20 right-[450px]' />
                    </div>
            </div>


        </div>
    )
}



export default HeroSection