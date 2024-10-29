import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';

const CardNews = () => {
    const [CardList, setCardList] = useState([
        {id:1, pic:"" , title:" سرتیتر خبر" , desc:"در این دوره رایگان، ساخت سایت با وردپرس رو به شما آموزش می‌دیم. به جای پرداخت هزینه برای طراحی وب‌سایت، می‌تونید از این دوره رایگان استفاده کنید و خودتون به‌راحتی وب‌سایت موردنظرتون رو بسازید" } ,
        {id:2, pic:"" , title:" سرتیتر خبر" , desc:"در این دوره رایگان، ساخت سایت با وردپرس رو به شما آموزش می‌دیم. به جای پرداخت هزینه برای طراحی وب‌سایت، می‌تونید از این دوره رایگان استفاده کنید و خودتون به‌راحتی وب‌سایت موردنظرتون رو بسازید" } ,
        {id:3, pic:"" , title:" سرتیتر خبر" , desc:"در این دوره رایگان، ساخت سایت با وردپرس رو به شما آموزش می‌دیم. به جای پرداخت هزینه برای طراحی وب‌سایت، می‌تونید از این دوره رایگان استفاده کنید و خودتون به‌راحتی وب‌سایت موردنظرتون رو بسازید" } ,
        {id:4, pic:"" , title:" سرتیتر خبر" , desc:"در این دوره رایگان، ساخت سایت با وردپرس رو به شما آموزش می‌دیم. به جای پرداخت هزینه برای طراحی وب‌سایت، می‌تونید از این دوره رایگان استفاده کنید و خودتون به‌راحتی وب‌سایت موردنظرتون رو بسازید " } ,

    ]);
  return (
    <div>
    <div className=''>
    <div className=' font-[sans] flex-wrap bg-[#F3F4F6]  w-[100%]  dark:bg-[#152a38] dark:text-[#d1d4c9] '>
    <div className='bg-[#fff]  flex flex-wrap justify-center w-[95%]  mr-9 dark:bg-[#041c3254] dark:text-white'>
    
    {CardList.map((item , index)=>{
        return(
                    <div  key={index} className='flex-wrap w-[25%] h-[90%]   dark:bg-[#041c3254] '>

<NavLink to='/newsdetail'>
    <div className=' pr-5 mt-8  w-{100%] h-[60%] gap-2  '>
                        <img src="./newspaper.png" alt=""  className='w-[96%] h-52   '/>
                    </div >
</NavLink>
                    

                    <div className=' '>
                    <div className='  text-xl mr-2'>
                        {item.title}

                    </div>
                    <div className='  text-xs mt-2 mr-2 '>
                        {item.desc}

                    </div>


                    </div>
                    


            </div>
        )
    })}
    <div className='border-[#707070] flex dark:bg-[#041c3254] w-[98%] h-64 mt-10  mr-2 bg-white border-l-4'>
    <img className='w-[100%] h-[100%]' src="./blogs.png" alt="" />
    </div>
    </div>
    </div>



    </div>
    
    </div>
)
}

export default CardNews
