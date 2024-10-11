import React from 'react'

function CourseDetail() {
    
    
  return (
    <div className='bg-[#e6e5e5] font-[sans] dark:bg-slate-700'>
      <div className='w-[88%] mx-auto flex'>
        <div className=' relative h-[380px] w-[100%] mt-4 rounded-[30px] bg-[url(public/p.01.png)] bg-no-repeat [background-size:100%_100%]'>
            <div className="h-[100%] w-[100%] bg-black opacity-[0.98] rounded-[30px] absolute">
            <h1 className="text-stone-50  text-[24px] font-black absolute top-[40px] right-[65px]">در لاراول Restful API آموزش کاربردی</h1>
            <p className=' text-gray-400 w-[420px] absolute top-[85px] right-[65px]'> در اینجا یاد می گیرید.ر اینجا یاد می گیرید.ر اینجا یاد می گیرید ر اینجا یاد می گیرید.گیرید.ر اینجا یاد می گیرید.ر ا</p>
            <img src='public/p.01.png' className='w-[450px] h-[310px] shadow-[8px_-13px_35px_-18px_gray] rounded-[25px] absolute right-[770px] top-[30px]'></img>
            <h3 className=' text-gray-400 line-through absolute top-[220px] right-[625px]'> تومان 500,000</h3>
            <h2 className=' text-white	text-[22px] font-bold	absolute top-[250px] right-[580px]'>تومان 400,000</h2>

            <button type='Submit' className='bg-cyan-700 text-[white] py-3 px-4 rounded-[10px] absolute top-[242px] right-[70px]'>خرید نقدی دوره</button>
            </div>
            
        </div>
      </div>

      <div className=' flex flex-wrap justify-between w-[88%] mx-auto mt-5 relative dark:bg-slate-700'>
        <div className='w-[64%] h-[800px] bg-white rounded-[20px] dark:bg-slate-500'>
          <h1 className='mt-[3%] mr-[3%] text-cyan-700 font-bold text-[20px] dark:text-black'>توضیحات</h1>
          <p className='mr-[3%] w-[90%] break-words dark:text-white '> jfjfjfjfjfjfj   jfjfjfjfjfjfj The longest word in any of the major English language dictionaries is pneumonoultramicroscopicsilicovolcanoconiosis, a word that refers to a lung disease contracted from the inhalation of very fine silica particles, specifically from a volcano; medically, it is the same as silicosis. The longest word in any of the major English language dictionaries is pneumonoultramicroscopicsilicovolcanoconiosis, a word that refers to a lung disease contracted from the inhalation of very fine silica particles, specifically from a volcano; medically, it is the same as silicosis.</p>
          <p className='mr-[3%] w-[90%] break-words dark:text-white'> jfjfjfjfjfjfj   jfjfjfjfjfjfj The longest word in any of the major English language dictionaries is pneumonoultramicroscopicsilicovolcanoconiosis, a word that refers to a lung disease contracted from the inhalation of very fine silica particles, specifically from a volcano; medically, it is the same as silicosis. The longest word in any of the major English language dictionaries is pneumonoultramicroscopicsilicovolcanoconiosis, a word that refers to a lung disease contracted from the inhalation of very fine silica particles, specifically from a volcano; medically, it is the same as silicosis.</p>
          <p className='mr-[3%] w-[90%] break-words dark:text-white'> jfjfjfjfjfjfj   jfjfjfjfjfjfj The longest word in any of the major English language dictionaries is pneumonoultramicroscopicsilicovolcanoconiosis, a word that refers to a lung disease contracted from the inhalation of very fine silica particles, specifically from a volcano; medically, it is the same as silicosis. The longest word in any of the major English language dictionaries is pneumonoultramicroscopicsilicovolcanoconiosis, a word that refers to a lung disease contracted from the inhalation of very fine silica particles, specifically from a volcano; medically, it is the same as silicosis.</p>
        </div>

        <div className='w-[33%] h-[385px] bg-white rounded-[20px]  dark:bg-slate-500'>
          <img className='w-[18%] h-[18%] mt-[20px] mr-[27px] rounded-[50%]' src='public/01.jpg'></img>
          <h1 className='relative right-[103px] bottom-[63px] text-[20px] text-cyan-700 inline dark:text-white'> آرمان غنی زاده</h1>
          <h4 className='relative right-[111px] bottom-[60px] text-[14px]'> مدرس دوره</h4>
          <p className=' w-[86%] border-t-2 border-b-2 mx-auto mt-[-34px] h-[205px]'> ssss</p>
          <div className='align-center mt-[10px]'><a href='#' className='text-[12px] [background:url(public/external-link.svg)_no-repeat_93%_0%] pr-[30px] mr-[75px]'>مشاهده سایر آموزش های این استاد</a></div>
          
        </div>
        <div className=' w-[33%] h-[385px] bg-white rounded-[20px] absolute left-0 bottom-0  dark:bg-slate-500'>
          <h1 className='relative right-[30px] top-[30px] text-[20px] text-cyan-700 inline dark:text-white'>دوره های مشابه</h1>
          <div className='relative top-[35px]'>
            <div className=' border border-gray-600 rounded-[10px] w-[85%] h-[55px] mx-[auto] mt-4'></div>
            <div className=' border border-gray-600 rounded-[10px] w-[85%] h-[55px] mx-[auto] mt-4'></div>
            <div className=' border border-gray-600 rounded-[10px] w-[85%] h-[55px] mx-[auto] mt-4'></div>
            <div className=' border border-gray-600 rounded-[10px] w-[85%] h-[55px] mx-[auto] mt-4'></div>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default CourseDetail








// bg-gradient-to-l from-black to-gray-800

