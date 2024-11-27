import Accardion from "../accardion/accardion"
import {Slider} from "antd"

function ReponsiveFilters({handleCategoryFilter, handleTypeCourseFilter, handlelevelCourseFilter, setCostUp, setCostDown, costUp, costDown}) {
  return (
    <div className='w-[90%] mx-[auto] h-fit pb-3 mt-[19px] ml-5  border-t-4 border-indigo-500 max-md:mt-[5px]'> 
    <h2 className='mr-3 mt-3 md:max-lg:text-[15px] pb-2 dark:text-[#d1d4c9]'>فیلترها</h2>
    <Accardion handleCategoryFilter={handleCategoryFilter} handleTypeCourseFilter={handleTypeCourseFilter} handlelevelCourseFilter={handlelevelCourseFilter} />

    <div className="collapse collapse-arrow shadow shadow-black mt-2 w-[95%] mx-auto dark:bg-[#556e53]">
        <input type="checkbox" name="my-accordion-2" />
        <div className="collapse-title text-[14px] md:max-lg:text-[12px]"> قیمت</div>
        <div className="collapse-content">
            
          <output className='pr-[15px]'>از {costDown}</output>
          <output className='pr-[15px]'> تا {costUp} </output>
            <Slider 
              id='cost'
              max={20000000}
              min={1}
              className="border w-[90%] mx-auto"
              onChange={(f)=>setCostDown(f[0]) & setCostUp(f[1])}
              range
              step={100000}
              tooltipVisble={false}
              defaultValue={[1,20000000]}
              />
        </div>
    </div>              
</div>
  )
}

export default ReponsiveFilters