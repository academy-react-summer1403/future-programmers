// import React from 'react'
import NewsCard from './NewsCard.jsx'

function NewsDetail() {

    const News=[
        {image:'public/newspaper.png',topic:'خبر یک',explain:'سلام این یک خبر خیلی خوب است حتما بخوانید. چیزی را از دست نمی دهید.'},
        {image:'public/newspaper.png',topic:'خبر دو',explain:'سلام این یک خبر خیلی خوب است حتما بخوانید. چیزی را از دست نمی دهید.'},
        {image:'public/newspaper.png',topic:'خبر سه',explain:'سلام این یک خبر خیلی خوب است حتما بخوانید. چیزی را از دست نمی دهید.'},
        {image:'public/newspaper.png',topic:'خبر چهار',explain:'سلام این یک خبر خیلی خوب است حتما بخوانید. چیزی را از دست نمی دهید.'}

    ]
  return (
    <div className='bg-[#e6e5e5] font-[sans] dark:bg-slate-700'>
        <div className='w-[88%] mx-auto flex pt-[15px]'>
            <div className='w-[100%] h-[50px] rounded-[15px] bg-white'></div>
        </div>

        <div className='w-[88%] mx-auto mt-[70px] pb-[30px]'>
            <h1 className='mt-[16px] mr-[36%] pb-[5px] text-[20px]'>سرتیتر خبر</h1>
            <div className='w-[92%] h-[400px] relative rounded-[15px] mr-[8%] mt-[15px] bg-white'>
                <div className='w-[36%] h-[410px] bg-[#9F9F9F] relative left-[9%] bottom-[16%] rounded-[25px] rotate-[9deg]'>
                    <img src='public/newspaper.png' className='w-[100%] h-[100%] rounded-[26px] rotate-[-9deg]'></img>
                </div>
                <p className='w-[64%] h-[320px] overflow-hidden absolute right-[340px] top-[25px] text-[17px]'> sdlkjlw sd;lsfew;l sdlfkjew;f</p>
            </div>
            <div className='w-[17%] relative text-[13px] py-5 right-[79%] rounded-b-[20px] text-center bg-[#9F9F9F]'> نوشته شده توسط آرین کامیاب</div>

        </div>

        <div className='w-[88%] mx-auto pb-[30px]'>
            <h1 className='text-[18px]'>اخبار مشابه</h1>
            <div className='w-[100%] mt-6 pt-5 h-fit flex flex-row justify-start gap-[25px] gap-y-12 md:max-lg:gap-y-10 sm:max-md:w-full sm:max-md:gap-y-11'>
            {News.map((item, index)=>{
                return(
                    <NewsCard 
                    key={index}
                    image={item.image}
                    topic={item.topic} 
                    explain={item.explain} 
                     />  
                );   
            })}             
        </div>
        </div>
        
    </div>
  ) 
}

export default NewsDetail