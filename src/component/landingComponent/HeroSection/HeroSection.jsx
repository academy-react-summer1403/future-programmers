import React from 'react'



const HeroSection = () => {
    return (
        <div className=" ">
            {/* Header */}
            <div className=" py-8 ">
                <div className=" mx-auto px-4 flex flex-col-reverse md:flex-row  justify-around">
                    <div className="text-center md:text-right  w-full md:w-[40%]">
                        <h1 className="text-3xl mx-auto  font-bold mb-4 mt-20  text-blue-400">دنبال چی می گردی؟</h1>
                        <p className="text-gray-600 dark:text-slate-50 mb-2 mt-10">
                            رشد کسب و کار شما با کمک به استفاده از دیجیتال مارکتینگ
                        </p>
                        <input type="text" className='my-3'/>
                        <h3 className="font-semibold text-3xl">آکادمی سپهر</h3>
                        <p className='mt-4 sm:w-[70%] md:w-full mx-auto'>
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
                        </p>
                    </div>
                    <div className="relative hidden md:block w-[405]">
                        <img
                            src="./header-bg.png"
                            alt="Hero"
                            className='h-96'
                        />
                        <img src="./Path 2.png" className='absolute top-20 right-[450px]' />
                    </div>
                </div>
            </div>


        </div>
    )
}



export default HeroSection