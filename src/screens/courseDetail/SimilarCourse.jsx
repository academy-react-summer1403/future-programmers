// import React from 'react'

function SimilarCourse({image, teacher}) {
  return (
    <div className='border  border-gray-600 rounded-[10px] w-[85%] h-[55px] mx-[auto] mt-4 dark:bg-[#556e53]'>
        <a href='#' className='flex items-center my-[4px]'>
            <img className='rounded-[50px] w-[45px] h-[45px] mr-[15px]' src={image}></img>
            <h5 className='mr-[15px] md:max-lg:text-[12px] dark:text-[#d1d4c9]'>{teacher}</h5>
        </a>
    </div>
  )
}

export default SimilarCourse