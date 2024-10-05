import React from 'react'



const HeroSection = () => {
    return (
        <div className=" bg-gray-100">
            {/* Header */}
            <div className="bg-white py-8">
                <div className=" mx-auto px-4 flex  justify-around">
                    <div className="text-center md:text-right   w-[40%]">
                        <h1 className="text-3xl font-bold mb-4 mt-20 font-bold text-5xl text-blue-400">دنبال چی می گردی؟</h1>
                        <p className="text-gray-600 mb-2 mt-10">
                            رشد کسب و کار شما با کمک به استفاده از دیجیتال مارکتینگ
                        </p>
                        <input type="text" />
                        <p className="font-semibold">آکادمی سپهر</p>
                    </div>
                    <div className="relative   w-[405]">
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