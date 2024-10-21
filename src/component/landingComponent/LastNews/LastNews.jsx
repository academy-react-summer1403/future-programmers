import React, { useEffect, useState } from 'react'
import telegram from '../../../../public/Image 1.png'
import axios from 'axios';



const LastNews = () => {
    const [NewsList, setNewsList] = useState(null);

    const getNews =async () => {
        const res = await axios.get('https://classapi.sepehracademy.ir/api/News?PageNumber=1&RowsOfPage=10&SortingCol=InsertDate&SortType=DESC')
        setNewsList(res.data.news)
    }


    useEffect(() => {
        getNews()
    }, []);


    return (
        <section className="mt-10 flex justify-center border-2 border-blue-400">
            <div className="container justify-center items-center">
                <div className='flex pt-20 justify-center'>
                    <h2 className="font-bold text-center text-blue-400 text-4xl">آخرین اخبار</h2>
                    <img src={telegram} className='mr-20 w-20 h-20'></img>
                </div>

                <div className="flex flex-wrap gap-6 justify-around mt-10 ">
                
                    {NewsList?.map((item, index) => {
                        return (
                            <div className='border-2 border-red-400 w-[20%] h-96'>
                                <img src={item.currentImageAddressTumb} alt="" />
                                <h1>{ item.title}</h1>
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