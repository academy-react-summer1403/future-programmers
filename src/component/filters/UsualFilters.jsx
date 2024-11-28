
import Accardion from "../accardion/accardion"
import {Slider} from "antd"


function Filters({handleCategoryFilter, handleTypeCourseFilter, handlelevelCourseFilter,setCostUp,setCostDown, costUp, costDown}) {

  return (
    <div className='w-[300px] md:max-lg:w-[25%]  max-md:hidden h-fit pb-3 mt-[19px] ml-5 rounded-[20px] bg-white dark:bg-[#29435c]'> 
      <h2 className='mr-4 mt-3 pb-2 md:max-lg:text-[15px] dark:text-[#d1d4c9]'>فیلترها</h2>
      <Accardion handleCategoryFilter={handleCategoryFilter} handleTypeCourseFilter={handleTypeCourseFilter} handlelevelCourseFilter={handlelevelCourseFilter} setCostUp={setCostUp} setCostDown={setCostDown} costUp={costUp} costDown={costDown} />       
    </div>
  )
}

export default Filters