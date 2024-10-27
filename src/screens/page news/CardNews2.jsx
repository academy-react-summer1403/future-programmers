import React, { useState } from 'react'

const CardNews2 = () => {
    const [CardList, setCardList] = useState([
        {id:1, pic:"" , title:" سرتیتر خبر" , desc:" مورد استفاده قرار گرفته است. علاوه بر این، بین بیش از ۱۰ هزار وب‌سایت برتر در ایران، 37.1 درصد از آن‌ها از وردپرس استفاده می‌کنندبر اساس آمارهای این وب‌سایت مرجع، وردپرس با 26.2 درصد سهم بازار، در بین تمامی وب‌سایت‌هایی که از یک CMS استفاده می‌کنند" } ,
        {id:2, pic:"" , title:" سرتیتر خبر" , desc:"مورد استفاده قرار گرفته است. علاوه بر این، بین بیش از ۱۰ هزار وب‌سایت برتر در ایران، 37.1 درصد از آن‌ها از وردپرس استفاده می‌کنندبر اساس آمارهای این وب‌سایت مرجع، وردپرس با 26.2 درصد سهم بازار، در بین تمامی وب‌سایت‌هایی که از یک CMS استفاده می‌کنند"} ,
        {id:3, pic:"" , title:" سرتیتر خبر" , desc:"مورد استفاده قرار گرفته است. علاوه بر این، بین بیش از ۱۰ هزار وب‌سایت برتر در ایران، 37.1 درصد از آن‌ها از وردپرس استفاده می‌کنندبر اساس آمارهای این وب‌سایت مرجع، وردپرس با 26.2 درصد سهم بازار، در بین تمامی وب‌سایت‌هایی که از یک CMS استفاده می‌کنند"} ,
        {id:4, pic:"" , title:" سرتیتر خبر" , desc:"مورد استفاده قرار گرفته است. علاوه بر این، بین بیش از ۱۰ هزار وب‌سایت برتر در ایران، 37.1 درصد از آن‌ها از وردپرس استفاده می‌کنندبر اساس آمارهای این وب‌سایت مرجع، وردپرس با 26.2 درصد سهم بازار، در بین تمامی وب‌سایت‌هایی که از یک CMS استفاده می‌کنند"} ,

    ]);
  return (
    <div>
      <div className=''>
    <div className='  bg-[#F3F4F6]   w-[100%]  dark:bg-[#041c3254]  '>
    <div className='  bg-[#fff]  flex flex-wrap justify-center w-[95%] h-[500px] mr-9 dark:bg-[#041c3254] dark:text-white '>
    
    {CardList.map((item , index)=>{
        return(
                    <div  key={index} className='   p-4 w-[25%] h-[400px]  mt-3 '>

                    <div className='  w-[100%] h-[60%]'>
                    <img src="./newspaper.png" alt="" className='w-full h-full'/>
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



<div>
    <div className="join">
  <input
    className="join-item btn btn-square "
    type="radio"
    name="options"
    aria-label="1 "
    defaultChecked  />
  <input className="join-item btn btn-square" type="radio" name="options" aria-label="2"  />
  <input className="join-item btn btn-square" type="radio" name="options" aria-label="3" />
  <input className="join-item btn btn-square" type="radio" name="options" aria-label="4" />
  <input className="join-item btn btn-square" type="radio" name="options" aria-label="5" />
  <input className="join-item btn btn-square" type="radio" name="options" aria-label="6" />
  <input className="join-item btn btn-square" type="radio" name="options" aria-label="7" />
</div>
    
</div>
      </div>

    </div>



    </div>

  
    </div>
  )
}

export default CardNews2
