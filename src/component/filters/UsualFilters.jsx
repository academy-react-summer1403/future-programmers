
import Accardion from "../accardion/accardion"
import {Slider} from "antd"


function Filters({handleCategoryFilter, handleTypeCourseFilter, handlelevelCourseFilter,setCostUp,setCostDown}) {

  return (
    <div className='w-[300px] md:max-lg:w-[25%]  max-md:hidden h-fit pb-3 mt-[19px] ml-5 rounded-[20px] bg-white dark:bg-[#29435c]'> 
      <h2 className='mr-4 mt-3 pb-2 md:max-lg:text-[15px] dark:text-[#d1d4c9]'>فیلترها</h2>
      <Accardion handleCategoryFilter={handleCategoryFilter} handleTypeCourseFilter={handleTypeCourseFilter} handlelevelCourseFilter={handlelevelCourseFilter} />

      <div className="collapse collapse-arrow shadow shadow-black mt-2 w-[95%] mx-auto dark:bg-[#556e53]">
          <input type="checkbox" name="my-accordion-2" />
          <div className="collapse-title text-[14px] md:max-lg:text-[12px]"> قیمت</div>
          <div className="collapse-content">
            <Slider 
              max={20000000}
              min={1}
              className="border w-[90%] mx-auto"
              onChange={(f)=>setCostDown(f[0]) & setCostUp(f[1])}
              range
              step={100000}
              tooltipVisble={false}
                defaultValue={[1,20000000]}
             
              />
              {/* <p>hello</p> */}
              {/* <output  className='block text-center text-[red] dark:text-[#d1d4c9]'>   0 </output>
              <span className='relative bottom-[23px] dark:text-[#d1d4c9]'> از </span>
              <input type="range" min={0} max="10000000" value="0" step='50000' className="range" />

              <output className='block text-center text-[red] mt-[10px] dark:text-[#d1d4c9]'>  1000000 </output>
              <span className='relative bottom-[24px] dark:text-[#d1d4c9]'> تا </span>
              <input type="range" min={0} max="1000000" value="1000000" step='50000' className="range" /> 		 */}
          </div>
      </div>              
    </div>
  )
}

export default Filters