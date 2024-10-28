
function TeachersCard({image, fullName, courseCounts}) {
  return (
    <div className='bg-white rounded  h-[230px] max-lg:h-[250px] max-md:h-40 w-[24%] max-sm:w-[100%] dark:bg-[#29435c] '>
        <img src={image} alt="" className=' rounded h-[70%] w-[100%] mx-auto '/>
        
            <h3 className="text-violet-800 dark:text-[#c7e7b7] text-[13px] max-lg:text-[13px] max-md:text-[11px] max-md:font-normal">{fullName}</h3>
            <h3 className='text-xs font-semibold max-lg:font-normal max-md:text-[10px] mt-[5%] max-lg:mt-[4%] max-md:mt-0 flex dark:text-[#c7e7b7]'>تعداد دوره ها:<h3 className="mr-1 text-red-700 dark:text-[#e19f9f]" > {courseCounts}</h3></h3>

        
    </div>
  )
}

export default TeachersCard