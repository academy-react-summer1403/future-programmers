
function CourseExplain({describe}) {
  return (
    <div className=' overflow-hidden pb-3 h-fit bg-white rounded-[20px] max-md:w-[100%] md:max-lg:w-[100%] dark:bg-[#29435c]'>
        <h1 className='mt-[3%] mr-[3%] my-3 text-cyan-700 font-bold text-[20px] max-md:text-[17px] dark:text-[#d1d4c9]'>توضیحات</h1>
        <p className='mr-[3%] w-[95%] break-words max-md:text-[15px] dark:text-[#d1d4c9] '>{describe}</p> 
    </div>
  )
}

export default CourseExplain