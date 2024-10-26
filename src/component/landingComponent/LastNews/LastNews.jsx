import React, { useEffect, useState } from 'react'
import telegram from '../../../../public/Image 1.png'
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
        <section className="mt-10 flex justify-center bg-[#e6e5e5] font-[sans] dark:bg-[#152a38]">
            <div className="container justify-center items-center">
                <div className='flex pt-20 justify-center'>
                    <h2 className="font-bold text-center text-blue-400 text-4xl">آخرین اخبار</h2>
                    <img src={telegram} className='mr-20 w-20 h-20'></img>
                </div>

                <div className="flex flex-wrap gap-2 justify-evenly mt-10 ">
                
                    {NewsList?.map((item, index) => {
                        return (
                            <div className='bg-white rounded-3xl w-[90%] mt-8 md:w-[40%] lg:w-[20%] h-96  '>
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