import React, { useEffect, useState } from 'react'
import axios from 'axios';
import NewsCard from './newsCard.jsx'



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
        <section className="flex justify-center overflow-hidden pt-5 pb-[20px] bg-[#f3f4f6] font-[sans] dark:bg-[#152a38] dark:text-[#d1d4c9] border border-black">
            <div className="w-[90%] mx-auto px-4">
                <h2 className="text-2xl font-bold text-blue-400">آخرین اخبار</h2>

                <div className="flex flex-wrap justify-between gap-y-3 mt-5">
                    {NewsList?.map((item, index) => (
                            <NewsCard 
                            key={index}
                            image={item.currentImageAddressTumb}
                            newsTitle={item.title}
                            newsText={item.miniDescribe}
                            writer={item.addUserFullName}  
                            />
                        )
                    )}
                </div>
                <div className='text-left'>مشاهده همه اخبار</div>
            </div>
        </section>
    )
}

export default LastNews