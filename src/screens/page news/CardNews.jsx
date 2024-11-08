
import React, { useEffect, useState } from 'react'
import CardNews1 from "./CardNews1";
import CardNews2 from "./CardNews2";
import { getCardNews } from '../../core/services/api/news';

const CardNews = () => {
    const [cardNews, setCardNews] = useState([]); 
    console.log(cardNews)

        const getAllCardNews = async ()=>{
            try {
                const result = await getCardNews()
            
                setCardNews(result.news)
            } catch (error) {
                console.log(error)
            }
        }
        
        useEffect(()=>{
            getAllCardNews() 
        });
return (
    
<div className=" shadow-lg w-[95%] m-auto bg-[#ffff] rounded-lg dark:bg-[#152a38]  max-lg:w-[95%] max-md:w-[80%]  max-md: max-sm:w-[80%]  ">

<CardNews1/>
<CardNews2 />
 {/* <CardNews
            key={index}
            image={item.tumbImageAddress??pic}
            topic={item.title} 
            explain={item.describe} 
            /> */}
    </div> 

)
}


export default CardNews

