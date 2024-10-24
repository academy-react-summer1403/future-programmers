

function TopSorting() {
  return (
    <div className='items-center max-md:hidden md:flex mr-[25px] max-xl:mr-[5px] max-lg:mr-[15px]'>
        <ul className='flex item-center'>
          <h1 className="font-bold pl-[10px] text-[16px] max-lg:pl-[0px] max-lg:content-center max-lg:text-[11px] dark:text-[#d1d4c9]">مرتب سازی</h1>
          <li className='max-lg:mr-[4px] px-[4px] max-lg:pb-[3px] hover:scale-110 duration-500'><span className='cursor-pointer text-[14px] max-lg:text-[11px] hover:text-[#ee3d3d] dark:hover:text-[#ee9a2d] dark:text-[#d1d4c9]'>جدیدترین</span></li>
          <li className='px-[4px] max-lg:pb-[3px] hover:scale-110 duration-500'><span className='cursor-pointer text-[14px] max-lg:text-[11px] hover:text-[#ee3d3d] dark:hover:text-[#ee9a2d] dark:text-[#d1d4c9]'>پرفروش ترین</span></li>
          <li className='px-[4px] max-lg:pb-[3px] hover:scale-110 duration-500'><span className='cursor-pointer text-[14px] max-lg:text-[11px] hover:text-[#ee3d3d] dark:hover:text-[#ee9a2d] dark:text-[#d1d4c9]'>گران ترین</span></li>
          <li className='px-[4px] max-lg:pb-[3px] hover:scale-110 duration-500'><span className='cursor-pointer text-[14px] max-lg:text-[11px] hover:text-[#ee3d3d] dark:hover:text-[#ee9a2d] dark:text-[#d1d4c9]'>ارزانترین</span></li>
        </ul>
        <button type='submit'  className='bg-slate-400 p-2 text-[16px] max-lg:text-[12px] rounded-xl mr-[10px] dark:text-[#d1d4c9] dark:bg-[#556e53] hover:scale-110 duration-200'>جستجو کن</button>
    </div>
  )
}

export default TopSorting