// import React from 'react'

import TopCategoryResposive from "../topSorting/TopCategoryResposive"
import ReponsiveFilters from "./ReponsiveFilters"


function FilterInTop() {
  return (
    <div className="drawer drawer-end md:hidden  w-[10%]">
        <input id="filter" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content w-[10%] ">
            {/* Page content here */}
            <label htmlFor="filter" className="drawer-button btn btn-primary hover:bg-[white] border-0 bg-[white] bg-center w-[100%] h-[100%] bg-[url(public/filter.png)] bg-no-repeat [background-size:19px] dark:bg-[#556e53]"></label>
        </div>
        <div className="drawer-side z-[999] max-md:w-[35%] max-sm:w-[268px]">
            <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
            <ul className="menu bg-base-200 text-base-content min-h-full p-4 dark:bg-[#29435c]">
                {/* Sidebar content here */}
                <TopCategoryResposive />
                <ReponsiveFilters />
            </ul>
        </div>
    </div>
  )
}

export default FilterInTop