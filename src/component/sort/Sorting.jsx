// import React from 'react'

function Sorting() {
  return (
    <div className="drawer md:hidden w-[100px] mr-[7%]">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content w-[100%]">
            {/* Page content here */}
            <label htmlFor="my-drawer" className=" btn btn-primary drawer-button  border-0 bg-[white] text-[black] hover:bg-[white] bg-[url(public/sorting.png)] bg-no-repeat bg-right [background-size:23px] text-[11px] pl-0 pr-[21px] w-[100%] dark:text-[white] dark:bg-[#94a3b8]">مرتب سازی </label>
        </div>
        <div className="drawer-side  z-[999] max-md:w-[44%] max-md:right-[78%] ">
            <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay w-[100%]"></label>
                <ul className="menu bg-base-200 text-base-content min-h-full p-4 w-[100%] dark:bg-zinc-700">
                    {/* Sidebar content here */}
                    <li><a>Sidebar Item 1</a></li>
                    <li><a>Sidebar Item 2</a></li>
                </ul>
        </div>
        </div>
  )
}

export default Sorting