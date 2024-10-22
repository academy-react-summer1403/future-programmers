// import React from 'react'

import Accardion from "../accardion/accardion"


function ReponsiveFilters() {
  return (
    <div className='w-[90%] mx-[auto] h-fit pb-3 mt-[19px] ml-5  border-t-4 border-indigo-500 max-md:mt-[40px]'> 
    <h2 className='mr-3 mt-3 md:max-lg:text-[15px] pb-2 dark:text-[#d1d4c9]'>فیلترها</h2>
    <Accardion />

    <div className="collapse collapse-arrow shadow shadow-black mt-2 w-[95%] mx-auto dark:bg-[#556e53]">
        <input type="checkbox" name="my-accordion-2" />
        <div className="collapse-title text-[14px] md:max-lg:text-[12px]"> قیمت</div>
        <div className="collapse-content">
            {/* <p>hello</p> */}
            <output  className='block text-center text-[red] dark:text-[#d1d4c9]'>   0 </output>
            <span className='relative bottom-[23px] dark:text-[#d1d4c9]'> از </span>
            <input type="range" min={0} max="10000000" value="0" step='50000' className="range" />

            <output className='block text-center text-[red] mt-[10px] dark:text-[#d1d4c9]'>  1000000 </output>
            <span className='relative bottom-[24px] dark:text-[#d1d4c9]'> تا </span>
            <input type="range" min={0} max="1000000" value="1000000" step='50000' className="range" /> 		
        </div>
    </div>              
</div>
  )
}

export default ReponsiveFilters