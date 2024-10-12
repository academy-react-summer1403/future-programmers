import React from 'react'
import SimilarCourse from './SimilarCourse'



function CourseDetail() {
  const TeachersCourses=[
    {image:'public/01.jpg', teacher:' دوره دیگر استاد غنی زاده'},
    {image:'public/01.jpg',teacher:' دوره دیگر استاد غنی زاده'},
    {image:'public/01.jpg',teacher:' دوره دیگر استاد غنی زاده'},
    {image:'public/01.jpg',teacher:' دوره دیگر استاد غنی زاده'}
  ]
    
  return (
    <div className='bg-[#e6e5e5] font-[sans] dark:bg-slate-700'>
      <div className='w-[88%] mx-auto flex'>
        <div className=' relative h-[380px] w-[100%] mobile:max-tablet:h-[250px] mt-4 rounded-[30px] bg-[url(public/p.01.png)] bg-no-repeat [background-size:100%_100%]'>
            <div className="h-[100%] w-[100%] bg-black opacity-[0.98] rounded-[30px] absolute">
              <h1 className="text-stone-50  text-[24px] mobile:max-tablet:text-[10px] mobile:max-tablet:right-[30px] font-black absolute top-[40px] right-[65px]">در لاراول Restful API آموزش کاربردی</h1>
              <p className=' text-gray-400 w-[420px] absolute top-[85px] right-[65px] mobile:max-tablet:right-[30px] mobile:max-tablet:w-[205px] mobile:max-tablet:top-[56px] mobile:max-tablet:text-[8px]'> در اینجا یاد می گیرید.ر اینجا یاد می گیرید.ر اینجا یاد می گیرید ر اینجا یاد می گیرید.گیرید.ر اینجا یاد می گیرید.ر ا</p>
              <img src='public/p.01.png' className='w-[450px] h-[310px] shadow-[8px_-13px_35px_-18px_gray] rounded-[25px] absolute right-[770px] top-[30px]  mobile:max-tablet:right-[345px] mobile:max-tablet:w-[44%] mobile:max-tablet:h-[76%]'></img>
              <h3 className=' text-gray-400 line-through absolute top-[220px] right-[625px] mobile:max-tablet:text-[11px] mobile:max-tablet:right-[240px] mobile:max-tablet:top-[164px]'> تومان 500,000</h3>
              <h2 className=' text-white	text-[22px] font-bold	absolute top-[250px] right-[580px] mobile:max-tablet:text-[13px] mobile:max-tablet:top-[180px] mobile:max-tablet:right-[221px]'>تومان 400,000</h2>

              <button type='Submit' className='bg-cyan-700 text-[white] py-3 px-4 rounded-[10px] absolute top-[242px] right-[70px] mobile:max-tablet:top-[165px] mobile:max-tablet:p-[7px] mobile:max-tablet:text-[11px] mobile:max-tablet:right-[24px]'>خرید نقدی دوره</button>
            </div>  
        </div>
      </div>

      <div className=' flex flex-wrap  justify-between w-[88%] mx-auto mt-5 relative dark:bg-slate-700 pb-[30px]'>
        <div className='w-[64%] h-[auto] pb-3 mobile:max-tablet:w-[100%] bg-white rounded-[20px] dark:bg-slate-500'>
          <h1 className='mt-[3%] mr-[3%] mobile:max-tablet:text-[17px] text-cyan-700 font-bold text-[20px] dark:text-black'>توضیحات</h1>
          <p className='mr-[3%] w-[90%] break-words mobile:max-tablet:text-[15px] dark:text-white '> jfjfjfjfjfjfj   jfjfjfjfjfjfj The longest word in any of the major English language dictionaries is pneumonoultramicroscopicsilicovolcanoconiosis, a word that refers to a lung disease contracted from the inhalation of very fine silica particles, specifically from a volcano; medically, it is the same as silicosis. The longest word in any of the major English language dictionaries is pneumonoultramicroscopicsilicovolcanoconiosis, a word that refers to a lung disease contracted from the inhalation of very fine silica particles, specifically from a volcano; medically, it is the same as silicosis.</p>
          <p className='mr-[3%] w-[90%] break-words mobile:max-tablet:text-[15px] dark:text-white'> jfjfjfjfjfjfj   jfjfjfjfjfjfj The longest word in any of the major English language dictionaries is pneumonoultramicroscopicsilicovolcanoconiosis, a word that refers to a lung disease contracted from the inhalation of very fine silica particles, specifically from a volcano; medically, it is the same as silicosis. The longest word in any of the major English language dictionaries is pneumonoultramicroscopicsilicovolcanoconiosis, a word that refers to a lung disease contracted from the inhalation of very fine silica particles, specifically from a volcano; medically, it is the same as silicosis.</p>
          <p className='mr-[3%] w-[90%] break-words mobile:max-tablet:text-[15px] dark:text-white'> jfjfjfjfjfjfj   jfjfjfjfjfjfj The longest word in any of the major English language dictionaries is pneumonoultramicroscopicsilicovolcanoconiosis, a word that refers to a lung disease contracted from the inhalation of very fine silica particles, specifically from a volcano; medically, it is the same as silicosis. The longest word in any of the major English language dictionaries is pneumonoultramicroscopicsilicovolcanoconiosis, a word that refers to a lung disease contracted from the inhalation of very fine silica particles, specifically from a volcano; medically, it is the same as silicosis.</p>
        </div>

        <div className='w-[33%] h-[385px] mobile:max-tablet:w-[100%] mobile:max-tablet:mt-3 bg-white rounded-[20px]  dark:bg-slate-500'>
          <img className='w-[18%] h-[18%] mt-[20px] mr-[27px] rounded-[50%] mobile:max-tablet:h-[70px] mobile:max-tablet:w-[70px]' src='public/01.jpg'></img>
          <h1 className='relative right-[103px] bottom-[63px] text-[20px] text-cyan-700 inline dark:text-white'> آرمان غنی زاده</h1>
          <h4 className='relative right-[111px] bottom-[60px] text-[14px]'> مدرس دوره</h4>
          <p className=' w-[86%] border-t-2 border-b-2 mx-auto mt-[-34px] h-[205px]'> ssss</p>
          <div className='align-center mt-[10px]'><a href='#' className='text-[12px] [background:url(public/external-link.svg)_no-repeat_93%_0%] pr-[30px] mr-[75px] mobile:max-tablet:mr-[30%]'>مشاهده سایر آموزش های این استاد</a></div>
        </div>

        <div className=' w-[33%] h-[385px] bg-white rounded-[20px] absolute left-[0] top-[415px]  dark:bg-slate-500 mobile:max-tablet:top-[992px] mobile:max-tablet:w-[100%] mobile:max-tablet:mt-3'>
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

        <div className='w-[64%] h-[400px] bg-white mt-[30px] rounded-[20px] mobile:max-tablet:mt-[414px] mobile:max-tablet:w-[100%] dark:bg-slate-500'>
          <div className='w-[85%] h-[90%] my-[20px] mx-auto'>
            <h1 className='text-[25px] text-cyan-700 inline dark:text-white'>نظرات</h1>
              <div className='border-[2px] border-cyan-700 dark:border-black rounded-[20px] h-[250px] mt-[5px]'>
                <textarea className='w-[99%] h-[240px] mr-[6px] mt-[4px] mobile:max-tablet:w-[97%] rounded-[20px] [outline:none] dark:bg-slate-500 dark:text-white' >نظر خود را اینجا بنویسید</textarea>
              </div>
              <button className='bg-cyan-700 mt-[10px]  py-3 px-4 rounded-[10px] text-white'>ارسال نظر</button>
            

          </div>
        </div>
      </div>

      
    </div>
  )
}

export default CourseDetail








// bg-gradient-to-l from-black to-gray-800
