import NewsCard from './NewsCard.jsx'

function NewsDetail() {

    const News=[
        {image:'public/newspaper.png',topic:'خبر یک',explain:'سلام این یک خبر خیلی خوب است حتما بخوانید. چیزی را از دست نمی دهید.'},
        {image:'public/newspaper.png',topic:'خبر دو',explain:'سلام این یک خبر خیلی خوب است حتما بخوانید. چیزی را از دست نمی دهید.'},
        {image:'public/newspaper.png',topic:'خبر سه',explain:'سلام این یک خبر خیلی خوب است حتما بخوانید. چیزی را از دست نمی دهید.'},
        {image:'public/newspaper.png',topic:'خبر چهار',explain:'سلام این یک خبر خیلی خوب است حتما بخوانید. چیزی را از دست نمی دهید.'}

    ]
    return (
        <div className='bg-[#e6e5e5] font-[sans] dark:bg-[#152a38]'>
            <div className='w-[88%] mx-auto flex pt-[15px]'>
                <div className='w-[100%] h-[50px] rounded-[15px] bg-white dark:bg-[#29435c] dark:text-[#d1d4c9]'></div>
            </div>

            <div className='w-[88%] mx-auto mt-[70px] pb-[30px] max-lg:mt-[50px] max-md:pb-[10px] max-md:mt-10 max-sm:mt-[10px] border border-transparent'>
                <h1 className='mt-[16px] mr-[36%] pb-[5px] text-[20px] max-md:text-[15px] max-lg:mr-[42%] max-sm:text-[12px] max-sm:mr-[24%] max-sm:pb-[3px] dark:text-[#d1d4c9]'>سرتیتر خبر</h1>
                <div className='w-[92%] h-[400px] relative rounded-[15px] mr-[8%] mt-[15px] bg-white dark:bg-[#29435c] max-lg:h-[380px] max-md:h-[250px] max-sm:h-[200px] max-sm:mt-[5px]'>
                    <div className='w-[36%] h-[410px] bg-[#9F9F9F] relative left-[9%] bottom-[16%] rounded-[25px] rotate-[9deg] max-sm:rotate-[0] max-lg:h-[390px] max-lg:w-[41%] max-md:h-[267px] max-md:bottom-[24%] max-sm:h-[70px] max-sm:w-[70px]  max-sm:bottom-[16%] dark:bg-[#556e53]'>
                        <img src='public/newspaper.png' className='w-[100%] h-[100%] rounded-[26px] rotate-[-9deg] max-sm:rotate-[0]'></img>
                    </div>
                    <p className='w-[64%] h-[320px] overflow-hidden absolute right-[30.5%] top-[25px] text-[17px] dark:text-white max-lg:right-[37%] max-lg:w-[58%] max-md:right-[37%] max-md:h-[197px] max-md:text-[15px] max-sm:right-[14%] max-sm:h-[150px] max-sm:text-[13px] max-sm:w-[78%] dark:text-[#d1d4c9]'> sdlkjlw sd;lsfew;l sdlfkjew;f</p>
                </div>
                <div className='w-[17%] relative text-[80%] py-5 right-[79%] rounded-b-[20px] text-center bg-[#9F9F9F] max-lg:text-[11px] max-lg:w-[19%] max-lg:right-[76%] max-lg:py-4 max-md:text-[10px] max-md:py-3 max-md:w-[24%] max-md:right-[71%] max-sm:text-[9px] max-sm:w-[42%] max-sm:right-[52%] dark:bg-[#556e53] dark:text-[#d1d4c9]'> نوشته شده توسط آرین کامیاب</div>

            </div>

            <div className='w-[88%] mx-auto pb-[30px] max-md:mt-[20px]'>
                <h1 className='text-[18px] max-lg:text-[16px] dark:text-[#d1d4c9]'>اخبار مشابه</h1>
                <div className='w-[100%] mt-6 pt-5 h-fit flex flex-row justify-start gap-[25px] gap-y-12 md:max-lg:gap-y-10 sm:max-md:w-full sm:max-md:gap-y-11 max-md:flex-wrap max-sm:flex-wrap max-sm:justify-center'>
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