import Accardion from "../accardion/accardion"

function ReponsiveFilters({handleCategoryFilter, handleTypeCourseFilter, handlelevelCourseFilter, setCostUp, setCostDown, costUp, costDown}) {
  return (
    <div className='w-[90%] mx-[auto] h-fit pb-3 mt-[19px] ml-5  border-t-4 border-indigo-500 max-md:mt-[5px]'> 
    <h2 className='mr-3 mt-3 md:max-lg:text-[15px] pb-2 dark:text-[#d1d4c9]'>فیلترها</h2>
    <Accardion handleCategoryFilter={handleCategoryFilter} handleTypeCourseFilter={handleTypeCourseFilter} handlelevelCourseFilter={handlelevelCourseFilter} setCostUp={setCostUp} setCostDown={setCostDown} costUp={costUp} costDown={costDown} />
</div>
  )
}

export default ReponsiveFilters