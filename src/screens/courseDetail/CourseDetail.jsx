// import React from 'react'
import SimilarCourse from './SimilarCourse'



function CourseDetail() {
  const TeachersCourses=[
    {image:'public/01.jpg', teacher:' دوره دیگر استاد غنی زاده'},
    {image:'public/01.jpg',teacher:' دوره دیگر استاد غنی زاده'},
    {image:'public/01.jpg',teacher:' دوره دیگر استاد غنی زاده'},
    {image:'public/01.jpg',teacher:' دوره دیگر استاد غنی زاده'}
  ]
    
  return (
    <div className='bg-[#e6e5e5] font-[sans] dark:bg-slate-700 overflow-hidden'>

      <div className='w-[88%] mx-auto flex'>
        <div className=' relative h-[380px] w-[100%] max-md:h-[250px] md:max-lg:h-[300px] mt-4 rounded-[30px] bg-[url(public/p.01.png)] bg-no-repeat [background-size:100%_100%]'>
            <div className="h-[100%] w-[100%] bg-black opacity-[0.98] rounded-[30px]">
              <h1 className="text-stone-50  text-[24px] max-md:text-[10px] max-md:right-[30px] md:max-lg:text-[13px] md:max-lg:right-[38px] font-black absolute top-[40px] right-[65px]">در لاراول Restful API آموزش کاربردی</h1>
              <p className=' text-gray-400 w-[420px] absolute top-[85px] right-[65px] max-md:right-[30px] max-md:w-[205px] max-md:top-[56px] max-md:text-[8px] md:max-lg:top-[60px] md:max-lg:text-[10px] md:max-lg:right-[38px] md:max-lg:w-[251px]'> در اینجا یاد می گیرید.ر اینجا یاد می گیرید.ر اینجا یاد می گیرید ر اینجا یاد می گیرید.گیرید.ر اینجا یاد می گیرید.ر ا</p>
              <img src='public/p.01.png' className='w-[450px] h-[310px] shadow-[8px_-13px_35px_-18px_gray] rounded-[25px] absolute right-[770px] top-[30px]  max-md:right-[334px] max-md:w-[44%] max-md:h-[76%] md:max-lg:right-[406px] md:max-lg:h-[76%] md:max-lg:w-[43%] '></img>
              <h3 className=' text-gray-400 line-through absolute top-[220px] right-[625px] max-md:text-[11px] max-md:right-[240px] max-md:top-[164px] md:max-lg:text-[12px] md:max-lg:top-[175px] md:max-lg:right-[295px]'> تومان 500,000</h3>
              <h2 className=' text-white	text-[22px] font-bold	absolute top-[250px] right-[580px] max-md:text-[13px] max-md:top-[180px] max-md:right-[221px] md:max-lg:text-[14px] md:max-lg:top-[200px] md:max-lg:right-[273px]'>تومان 400,000</h2>
              <button type='Submit' className='bg-cyan-700 text-[white] py-3 px-4 rounded-[10px] absolute top-[242px] right-[70px] max-md:top-[165px] max-md:p-[7px] max-md:text-[11px] max-md:right-[24px] md:max-lg:text-[12px] md:max-lg:right-[38px] md:max-lg:top-[190px]'>خرید نقدی دوره</button>
            </div>  
        </div>
      </div>

      <div className=' flex flex-wrap justify-between w-[88%] mx-auto mt-5 dark:bg-slate-700 pb-[30px] overflow-hidden'>

        <div className='w-[63%] pb-3 h-fit bg-white rounded-[20px] max-md:w-[100%] md:max-lg:w-[100%] dark:bg-slate-500'>
          <h1 className='mt-[3%] mr-[3%] my-3 text-cyan-700 font-bold text-[20px] max-md:text-[17px] dark:text-black'>توضیحات</h1>
          <p className='mr-[3%] w-[95%] break-words max-md:text-[15px] dark:text-white '> jfjfjfjfjfjfj   jfjfjfjfjfjfj The longest word in any of the major English language dictionaries is pneumonoultramicroscopicsilicovolcanoconiosis, a word that refers to a lung disease contracted from the inhalation of very fine silica particles, specifically from a volcano; medically, it is the same as silicosis. The longest word in any of the major English language dictionaries is pneumonoultramicroscopicsilicovolcanoconiosis, a word that refers to a lung disease contracted from the inhalation of very fine silica particles, specifically from a volcano; medically, it is the same as silicosis.</p>
           
          <div className='w-[100%] mx-[auto] pb-5'>
            <div className='w-[100%] h-[400px] bg-white mt-[30px] max-md:mt-0 rounded-[20px] max-md:w-[100%] md:max-lg:w-[100%] dark:bg-slate-500'>
              <div className='w-[85%] h-[90%] my-[20px]  mx-auto'>
                <h1 className='text-[25px] text-cyan-700 inline dark:text-white'>نظرات</h1>
                <div className='border-[2px] border-cyan-700 dark:border-black rounded-[20px] h-[250px] mt-[5px]'>
                  <textarea className='w-[99%] h-[240px] mr-[6px] mt-[4px] rounded-[20px] [outline:none] max-md:w-[97%]  dark:bg-slate-500 dark:text-white' >نظر خود را اینجا بنویسید</textarea>
                </div>
                <button className='bg-cyan-700 mt-[10px]  py-3 px-4 rounded-[10px] text-white'>ارسال نظر</button>
              </div>
            </div>
          </div>
        </div>

        <div className='flex flex-wrap h-[800px] max-lg:h-[400px] max-md:h-[800px] w-[33%] gap-y-5 max-md:w-[100%] md:max-lg:w-[100%] md:max-lg:justify-between md:max-lg:mt-5'>

          <div className='w-[99%] h-[385px] max-md:w-[100%] max-md:mt-3 md:max-lg:w-[47%] bg-white rounded-[20px]  dark:bg-slate-500'>
            <img className='w-[18%] h-[18%] mt-[20px] mr-[27px] rounded-[50%] max-md:h-[70px] max-md:w-[70px] md:max-lg:h-[16%]' src='public/01.jpg'></img>
            <h1 className='relative right-[103px] bottom-[63px] text-[20px] text-cyan-700 inline md:max-lg:text-[13px] dark:text-white'> آرمان غنی زاده</h1>
            <h4 className='relative right-[111px] bottom-[60px] text-[14px]'> مدرس دوره</h4>
            <p className=' w-[86%] border-t-2 border-b-2 mx-auto mt-[-34px] h-[205px] dark:text-white'> ssss</p>
            <div className='align-center mt-[10px]'><a href='#' className='text-[12px] [background:url(public/external-link.svg)_no-repeat_93%_0%] pr-[30px] mr-[75px] max-md:mr-[30%] md:max-lg:mr-[41px]'>مشاهده سایر آموزش های این استاد</a></div>
          </div>

          <div className=' w-[99%] h-[385px] lg:mb-[115px] bg-white rounded-[20px] dark:bg-slate-500 max-md:w-[100%] max-md:mt-3 md:max-lg:w-[47%] max-md:mb-[3%]'>
            <h1 className='relative right-[30px] top-[30px] text-[20px] text-cyan-700 inline dark:text-white'>دوره های مشابه</h1>
            <div className='relative top-[35px]'>
              {TeachersCourses.map((item,index)=>{
                return(
                  <SimilarCourse 
                  key={index}
                  image={item.image}
                  teacher={item.teacher} />
                )  
              })}
            </div>
          </div>
        </div>
      </div>

      
      
      
    </div>
  )
}

export default CourseDetail








// bg-gradient-to-l from-black to-gray-800

