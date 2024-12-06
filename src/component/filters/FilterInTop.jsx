import TopSortingResponsive from "../topSorting/TopSortingResponsive"
import ReponsiveFilters from "./ReponsiveFilters"


function FilterInTop({handleCategoryFilter, handleTypeCourseFilter, handlelevelCourseFilter, setCostUp, setCostDown, costUp, costDown}) {
  return (
    <div className="drawer drawer-end md:hidden">
        <input id="filter" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content w-[50px] ">
            {/* Page content here */}
            <label htmlFor="filter" className="drawer-button btn btn-primary hover:bg-[white] border-0 bg-[white] w-[100%] h-[100%]  dark:bg-[#556e53]"> فیلترها</label>
        </div>
        <div className="drawer-side z-[999]">
            <label htmlFor="filter" aria-label="close sidebar" className="drawer-overlay"></label>
            <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4 absolute right-0 dark:bg-[#29435c]">
                {/* Sidebar content here */}
                <TopSortingResponsive />
                <ReponsiveFilters handleCategoryFilter={handleCategoryFilter} handleTypeCourseFilter={handleTypeCourseFilter} handlelevelCourseFilter={handlelevelCourseFilter} setCostUp={setCostUp} setCostDown={setCostDown} costUp={costUp} costDown={costDown}/>
            </ul>
        </div>
    </div>
  )
}

export default FilterInTop