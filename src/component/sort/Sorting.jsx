// import React from 'react'

import TopCategoryResposive from "../topCategory/TopCategoryResposive"

function Sorting() {
  return (
    <div className="drawer md:hidden w-[90px]">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content w-[100%]">
            {/* Page content here */}
            <label htmlFor="my-drawer" className=" btn btn-primary drawer-button  border-0 bg-[white] text-[black] hover:bg-[white] bg-[url(public/sorting.png)] bg-no-repeat bg-right [background-size:23px] text-[11px] max-sm:text-[9px] pl-0 pr-[21px] font-normal w-[100%] dark:text-[white] dark:bg-[#94a3b8]"></label>
        </div>
        <div className="drawer-side  z-[999] max-md:w-[25%] max-md:right-[75%] ">
            <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay w-[100%]"></label>
                <ul className="menu bg-base-200 text-base-content min-h-full p-4 w-[100%] dark:bg-zinc-700">
                    {/* Sidebar content here */}
                    <TopCategoryResposive />
                </ul>
        </div>
        </div>
  )
}

export default Sorting