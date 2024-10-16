// import React from 'react'

import TopCategoryResposive from "../topCategory/TopCategoryResposive"
import ReponsiveFilters from "./ReponsiveFilters"


function FilterInTop() {
  return (
    <div className="drawer drawer-end md:hidden w-[10%]">
        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content w-[10%]">
            {/* Page content here */}
            <label htmlFor="my-drawer-4" className="drawer-button btn btn-primary border-0 bg-[white] bg-center w-[100%] h-[100%] bg-[url(public/filter.png)] bg-no-repeat [background-size:19px] dark:bg-[#94a3b8]"></label>
        </div>
        <div className="drawer-side z-[999] max-md:w-[35%] max-sm:w-[72%]">
            <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
            <ul className="menu bg-base-200 text-base-content min-h-full p-4 dark:bg-zinc-700">
                {/* Sidebar content here */}
                <TopCategoryResposive />
                <ReponsiveFilters />
            </ul>
        </div>
    </div>
  )
}

export default FilterInTop