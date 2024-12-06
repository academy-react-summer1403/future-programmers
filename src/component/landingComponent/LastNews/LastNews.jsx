import { useEffect, useState } from 'react'
import NewsCard from './newsCard.jsx'
import pic from '../../../../public/cImage.png'
import { Link } from 'react-router-dom';
import { getCardNews } from '../../../core/services/api/news.js';



const LastNews = () => {
    const [NewsList, setNewsList] = useState([]);
    const [reFetch, setReFetch] = useState(1)
    console.log(NewsList)


    const getAllCardNews = async (currentPage) => {
        try {
            const result = await getCardNews(4, currentPage);
    
            setNewsList(result.news);
        } catch (error) {
            console.log(error);
        }
    };


    useEffect(() => {
        getAllCardNews()
    }, [reFetch]);


    return (
        <section className="flex justify-center overflow-x-hidden pt-5 pb-[20px] max-sm:pb-[10px] ">
            <div className="w-[90%] mx-auto px-4">
                <div className='flex justify-between'>
                    <h2 className="text-2xl font-bold text-[#436e8e] max-sm:text-[14px] max-lg:text-[18px] max-sm:pr-[11px] pr-[2%] dark:text-[#d1d4c9]">آخرین اخبار</h2>
                    <Link to={'/news/'} className='max-sm:text-[14px] my-auto'> مشاهده همه اخبار</Link>
                </div>
                <div className="flex flex-wrap justify-between gap-y-10 mt-10 max-sm:mt-8">
                    {NewsList?.map((item, index) => (
                            <NewsCard 
                            key={index}
                            image={item.currentImageAddressTumb??pic}
                            newsTitle={item.title}
                            miniDescribe={item.miniDescribe}
                            addUserFullName={item.addUserFullName}
                            currentDissLikeCount={item?.currentDissLikeCount}
                            currentUserIsLike={item?.currentUserIsLike}
                            currentUserIsDissLike={item?.currentUserIsDissLike}
                            newsCatregoryName={item?.newsCatregoryName}
                            currentView={item?.currentView}
                            isCurrentUserFavorite={item?.isCurrentUserFavorite}
                            currentUserFavoriteId={item?.currentUserFavoriteId}
                            currentLikeCount={item?.currentLikeCount}
                            insertDate={item?.insertDate?.toString()?.slice(0,10)}
                            id={item.id}  
                            setReFetch={setReFetch}
                            />
                        )
                    )}
                </div>
                
                {/* <h4 className='text-left mt-[1%] pl-[1%] text-[15px] max-lg:text-[14px] max-md:text-[13px] max-sm:text-[11px] max-sm:mt-[3%]'><a href=''> مشاهده همه اخبار</a></h4> */}
            </div>
        </section>
        
    )
}

export default LastNews