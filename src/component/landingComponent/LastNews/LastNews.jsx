import { useEffect, useState } from 'react'
import axios from 'axios';
import NewsCard from './newsCard.jsx'
import pic from '../../../../public/cImage.png'



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
        <section className="flex justify-center overflow-hidden pt-5 pb-[20px] max-sm:pb-[10px] bg-[#f3f4f6] font-[sans] dark:bg-[#152a38] ">
            <div className="w-[90%] mx-auto px-4">
                <h2 className="text-2xl max-sm:text-[14px] max-md:text-[17px] max-lg:text-[18px] font-bold max-sm:pr-[11px] pr-[2%] text-[#436e8e]">آخرین اخبار</h2>

                <div className="flex flex-wrap justify-between gap-y-3 mt-5 max-sm:mt-3">
                    {NewsList?.map((item, index) => (
                            <NewsCard 
                            key={index}
                            image={item.currentImageAddressTumb??pic}
                            newsTitle={item.title}
                            newsText={item.miniDescribe}
                            writer={item.addUserFullName}  
                            />
                        )
                    )}
                </div>
                <h4 className='text-left mt-[1%] pl-[1%] text-[15px] max-lg:text-[14px] max-md:text-[13px] max-sm:text-[11px] max-sm:mt-[3%]'><a href=''> مشاهده همه اخبار</a></h4>
            </div>
        </section>
    )
}

export default LastNews