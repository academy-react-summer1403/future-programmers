import React, { useEffect, useState } from 'react'
import axios from 'axios';



const LastNews = () => {
    const [NewsList, setNewsList] = useState(null);

    const getNews =async () => {
        const res = await axios.get('https://classapi.sepehracademy.ir/api/News?PageNumber=1&RowsOfPage=4&SortingCol=InsertDate&SortType=DESC')
        setNewsList(res.data.news)
    }


    useEffect(() => {
        getNews()
    }, []);


    return (
        <section className="flex justify-center overflow-hidden bg-[#f3f4f6] font-[sans] dark:bg-[#152a38] dark:text-[#d1d4c9] border border-black">
            <div className="w-[90%] mx-auto px-4">
                <h2 className="text-2xl font-bold text-blue-400">آخرین اخبار</h2>

                <div className="flex flex-wrap gap-2 justify-evenly mt-10 ">
                    {NewsList?.map((item, index) => {
                        return (
                            <div key={index} className='bg-white rounded-3xl w-[90%] mt-8 md:w-[40%] lg:w-[20%] h-96  '>
                                <img src={item.currentImageAddressTumb} alt="" className='mx-auto rounded-sm -top-5 relative w-11/12 h-3/6 object-fill' />
                                <h1 className='font-extrabold'>{item.title}</h1>
                                <p className='mt-2'>{item.miniDescribe}</p>
                                <h3 className='text-xs font-semibold'>نویسنده : {item.addUserFullName }</h3>
                                
                            </div>
                        )
                    })}
                </div>
                <div className='float-left pl-8'>مشاهده همه اخبار</div>
            </div>
        </section>
    )
}

export default LastNews