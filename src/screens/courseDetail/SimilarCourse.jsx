// import React from 'react'

import { Link } from "react-router-dom"

function SimilarCourse({image, title, id}) {
  return (
    <div className='overflow-hidden border border-gray-400 rounded-[10px] w-[85%] max-sm:w-[45%] h-[55px] max-sm:h-[70px] mx-[auto] mt-4 shadow-sm max-sm:shadow-[#f3f4f6] dark:bg-[#556e53]'>
        <div className='flex max-sm:inline items-center my-[4px] max-sm:my-0'>
            <img className='rounded-[50px] max-sm:rounded-none w-[45px] max-sm:w-[100%] h-[45px] max-sm:h-[100%] mr-[15px] max-sm:mr-0' src={image}></img>
            <Link to={'/coursedetail/'+id} className='mr-[15px] max-sm:mr-0 max-sm:text-[10px] md:max-lg:text-[12px] max-sm:relative max-sm:bottom-5 max-sm:text-center max-sm:bg-slate-300 max-sm:dark:text-black dark:text-[#d1d4c9]'>{title}</Link>
        </div>
    </div>
  )
}

export default SimilarCourse