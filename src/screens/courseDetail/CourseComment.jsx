
function CourseComment() {
  return (
    <div className='w-[90%] lg:w-[55%] lg:absolute lg:top-[750px] mx-[auto] lg:mr-[6%] pb-5'>
        <div className='w-[100%] pb-4 bg-white  max-md:mt-0 rounded-[20px] max-md:w-[100%] md:max-lg:w-[100%] dark:bg-[#29435c]'>
            <div className='w-[85%] h-[90%] mx-auto'>
                <h1 className='text-[25px] text-cyan-700 inline dark:text-[#d1d4c9]'>نظرات</h1>
                <div className='border-[2px] border-cyan-700 dark:border-[#556e53] rounded-[20px] h-[250px] mt-[5px]'>
                    <textarea className='w-[99%] h-[240px] mr-[6px] mt-[4px] rounded-[20px] [outline:none] max-md:w-[97%] dark:bg-[#29435c] dark:text-[#d1d4c9]' >نظر خود را اینجا بنویسید</textarea>
                </div>
                <button className='bg-cyan-700 mt-[10px]  py-3 px-4 rounded-[10px] text-white dark:bg-[#556e53]'>ارسال نظر</button>
            </div>
        </div>
    </div> 
  )
}

export default CourseComment