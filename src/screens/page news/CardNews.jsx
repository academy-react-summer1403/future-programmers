import React, { useState } from 'react'

const CardNews = () => {
    const [CardList, setCardList] = useState([
        {id:1, pic:"" , title:" سرتیتر خبر" , desc:"سلام این متن تست برای قسمت وبلاگ اکادمی سپهر و اوسکولم هودتی چرا؟چون ایکس دی لورم رو ساپورت نمیکنه و از طرفیم دوس دارم تمرین تایپ کنم مشکل داری سولی؟؟ب یورم ک مشمشکل داری حتی ب یورم ک تایپم مشکل داره" } ,
        {id:2, pic:"" , title:" سرتیتر خبر" , desc:"سلام این متن تست برای قسمت وبلاگ اکادمی سپهر و اوسکولم هودتی چرا؟چون ایکس دی لورم رو ساپورت نمیکنه و از طرفیم دوس دارم تمرین تایپ کنم مشکل داری سولی؟؟ب یورم ک مشمشکل داری حتی ب یورم ک تایپم مشکل داره" } ,
        {id:3, pic:"" , title:" سرتیتر خبر" , desc:"سلام این متن تست برای قسمت وبلاگ اکادمی سپهر و اوسکولم هودتی چرا؟چون ایکس دی لورم رو ساپورت نمیکنه و از طرفیم دوس دارم تمرین تایپ کنم مشکل داری سولی؟؟ب یورم ک مشمشکل داری حتی ب یورم ک تایپم مشکل داره" } ,
        {id:4, pic:"" , title:" سرتیتر خبر" , desc:"سلام این متن تست برای قسمت وبلاگ اکادمی سپهر و اوسکولم هودتی چرا؟چون ایکس دی لورم رو ساپورت نمیکنه و از طرفیم دوس دارم تمرین تایپ کنم مشکل داری سولی؟؟ب یورم ک مشمشکل داری حتی ب یورم ک تایپم مشکل داره" } ,

    ]);
  return (
    <div>
    <div className=''>
    <div className=' bg-[#F3F4F6]  w-[100%] h-auto '>
    <div className=' bg-[#fff]  flex flex-wrap justify-center w-[80%] mr-32 h-96 mb-24'>
    
    {CardList.map((item , index)=>{
        return(
                    <div  key={index} className=' border-l-4 border-[#707070] w-[20%] h-[90%]  mt-3 '>

                    <div className='w-[100%] h-[60%]'>
                        <img src="" alt="" />
                    </div >
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
      </div>
     </div>



    </div>
    </div>
  )
}

export default CardNews
