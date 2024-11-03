import React, { useState } from 'react'
import CardPage2 from './CardPage2';
import Pagination from './Pagination';

const CardNews2 = () => {
    const [CardList, setCardList] = useState([
        {id:1, pic:"" , title:"  سرتیتر خبر1" , desc:"وردپرس یک ابزار فوق‌العاده برای مدیریت محتوای سایت شماست. با استفاده از وردپرس، می‌توانید سایت خود را بدون نیاز به برنامه‌نویسی طراحی کنید" } ,
        {id:2, pic:"" , title:" سرتیتر خبر2" , desc:" وردپرس یک ابزار فوق‌العاده برای مدیریت محتوای سایت شماست. با استفاده از وردپرس، می‌توانید سایت خود را بدون نیاز به برنامه‌نویسی طراحی کنید"} ,
        {id:3, pic:"" , title:" سرتیتر خبر3" , desc:"  وردپرس یک ابزار فوق‌العاده برای مدیریت محتوای سایت شماست. با استفاده از وردپرس، می‌توانید سایت خود را بدون نیاز به برنامه‌نویسی طراحی کنید "} ,
        {id:4, pic:"" , title:" سرتیتر خبر4" , desc:"  وردپرس یک ابزار فوق‌العاده برای مدیریت محتوای سایت شماست. با استفاده از وردپرس، می‌توانید سایت خود را بدون نیاز به برنامه‌نویسی طراحی کنید   "} ,

    ]);
  return (
      
      
    <div className='  bg-[#ffff]  rounded-lg  w-[100%]  dark:bg-[#152a38] dark:text-[#d1d4c9]  '>
    <div className='   flex flex-wrap  w-[95%] mx-auto max-sm:gap-y-3 justify-between dark:bg-[#152a38] dark:text-white '>
    
    {CardList.map((item , index)=>{
        return(
          <CardPage2
          key={index}
          title={item.title}
          desc={item.desc}
        />    
        )
    })}


<Pagination/>


      </div>

    </div>



    

  
  
  )
}

export default CardNews2
