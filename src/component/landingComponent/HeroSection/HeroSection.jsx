

const HeroSection = () => {
    return (
        <div className=" bg-[#e6e5e5] font-[sans] dark:bg-[#152a38] border border-black">
            <div className=" py-8 px-4 mx-auto flex flex-row justify-around">
                    <div className="text-center md:text-right  w-full md:w-[40%]">
                        <h1 className="text-3xl mx-auto  font-bold mb-4 mt-20  text-blue-400">دنبال چی می گردی؟</h1>
                        <p className="text-gray-600 dark:text-slate-50 mb-2 mt-10">
                            رشد کسب و کار شما با کمک به استفاده از دیجیتال مارکتینگ
                        </p>
                        <input type="text" placeholder='تو فقط اسم ببر ...' className='my-3 lg:p-4 md:max-lg:p-2 mr-[3%] bg-[url(public/search.svg)] [background-position-y:center] max-sm:[background-position-x:3%] [background-position-x:2%] bg-no-repeat text-base max-md:p-[9px] md:max-lg:text-[11px] font-bold [background-size:35px] md:max-lg:[background-size:25px] max-sm:[background-size:25px] max-sm:text-[13px] [center] shadow-inner shadow-slate-400 rounded-xl dark:bg-[#556e53] dark:placeholder-[#d1d4c9]'/>
                        <h3 className="font-semibold text-3xl">آکادمی سپهر</h3>
                        <p className='mt-4 sm:w-[70%] md:w-full mx-auto'> لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است</p>
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