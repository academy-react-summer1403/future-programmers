// import React from 'react'

import Accardion from "../accardion/accardion"


function Filters() {
  return (
    <div className='w-[310px] md:max-lg:w-[25%]  max-md:hidden h-fit pb-3 mt-[19px] ml-5 rounded-[20px] bg-white dark:bg-slate-600'> 
      <h2 className='mr-2 mt-1 md:max-lg:text-[15px] dark:text-white'>فیلترها</h2>
      <Accardion />

      <div className="collapse collapse-arrow shadow shadow-black mt-2 w-[95%] mx-auto dark:bg-slate-500">
          <input type="checkbox" name="my-accordion-2" />
          <div className="collapse-title text-[14px] md:max-lg:text-[12px]"> قیمت</div>
          <div className="collapse-content">
              {/* <p>hello</p> */}
              <output  className='block text-center text-[red]'>   0 </output>
              <span className='relative bottom-[23px]'> از </span>
              <input type="range" min={0} max="10000000" value="0" step='50000' className="range" />

              <output className='block text-center text-[red] mt-[10px]'>  1000000 </output>
              <span className='relative bottom-[24px]'> تا </span>
              <input type="range" min={0} max="1000000" value="1000000" step='50000' className="range" /> 		
          </div>
      </div>              
    </div>
  )
}

export default Filters