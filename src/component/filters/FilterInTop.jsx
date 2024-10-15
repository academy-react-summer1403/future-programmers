// import React from 'react'

import ReponsiveFilters from "./ReponsiveFilters"


function FilterInTop() {
  return (
    <div className="drawer drawer-end md:hidden w-[100px]">
        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content w-[100%]">
            {/* Page content here */}
            <label htmlFor="my-drawer-4" className="drawer-button btn btn-primary border-0 bg-[white] text-[black] hover:bg-[white] bg-[url(public/filter.png)] bg-no-repeat bg-right [background-size:23px] text-[11px]  pr-[10px] w-[100%] dark:text-[white] dark:bg-[#94a3b8]">فیلترها</label>
        </div>
        <div className="drawer-side z-[999] max-md:w-[35%] max-sm:w-[42%]">
            <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
            <ul className="menu bg-base-200 text-base-content min-h-full p-4 dark:bg-zinc-700">
                {/* Sidebar content here */}
                <ReponsiveFilters />
            </ul>
        </div>
    </div>
  )
}

export default FilterInTop