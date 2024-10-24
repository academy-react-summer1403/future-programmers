import React from 'react'
import telegram from '../../../../public/Image 1.png'
const LastNews = () => {
    return (
        <section className="mt-10 flex justify-center">
            <div className="container flex flex-col justify-center items-center">
                <div className='flex pt-20 justify-center'>
                    <h2 className="font-bold text-center text-blue-400 text-4xl">آخرین اخبار</h2>
                    <img src={telegram} className='mr-20 w-20 h-20'></img>
                </div>
                <div className="dark:bg-gray-700 p-6 rounded-lg shadow-md w-[20rem] lg:w-[40rem] flex flex-col justify-center">
                    <h3 className="font-bold mb-2 text-2xl  text-blue-400">سر تیتر خبر</h3>
                    <p className="text-gray-600">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit maxime obcaecati vitae voluptate voluptatem, consectetur deleniti minima, alias ipsam incidunt similique veniam quos rerum inventore veritatis cumque officia dignissimos aspernatur!
                    </p>
                </div>
                <div className='float-left pl-8'>مشاهده همه اخبار</div>
            </div>
        </section>
    )
}

export default LastNews