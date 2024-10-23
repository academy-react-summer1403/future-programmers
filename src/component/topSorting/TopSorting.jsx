// import FormField from "../Fields/FormField"

function TopSorting() {
  return (
    <div className='items-center hidden max-sm:hidden md:flex mr-[25px]'>
        <ul className=' flex'>
          <h1 className="font-bold pl-[10px] text-[16px] md:max-lg:text-[11px] dark:text-[#d1d4c9]">مرتب سازی</h1>
          <li className='md:max-lg:mr-[10px] px-[6px] max-md:mr-[11%]'><span className='cursor-pointer text-[14px] md:max-lg:text-[12px] max-md:text-[14px] dark:text-[#d1d4c9]'>جدیدترین</span></li>
          <li className='md:max-lg:mr-[10px] px-[6px] max-md:mr-[11%]'><span className='cursor-pointer text-[14px] md:max-lg:text-[12px] max-md:text-[14px] dark:text-[#d1d4c9]'>پرفروش ترین</span></li>
          <li className='md:max-lg:mr-[10px] px-[6px] max-md:mr-[11%]'><span className='cursor-pointer text-[14px] md:max-lg:text-[12px] max-md:text-[14px] dark:text-[#d1d4c9]'>گران ترین</span></li>
          <li className='md:max-lg:mr-[10px] px-[6px] max-md:mr-[11%]'><span className='cursor-pointer text-[14px] md:max-lg:text-[12px] max-md:text-[14px] dark:text-[#d1d4c9]'>ارزانترین</span></li>
        </ul>
        <button type='submit'  className='bg-slate-400 p-4 md:max-lg:p-2 text-[16px] md:max-lg:text-[14px]  rounded-xl mr-[180px] md:max-lg:mr-[40px] dark:text-[#d1d4c9] dark:bg-[#556e53]'>جستجو کن</button>
    </div>
  )
}

export default TopSorting