
function TopSortingResponsive() {
  return (
 <div className='mt-[10px]'>
        <ul className=''>
          <h1 className="pr-[15px] text-[14px] dark:text-[#d1d4c9]">مرتب سازی</h1>
          <li className='mt-[8px] max-md:mr-[2%]'><span className='cursor-pointer text-[14px] max-md:text-[14px] dark:text-[#d1d4c9]'>جدیدترین</span></li>
          <li className='max-md:mr-[2%]'><span className='cursor-pointer text-[14px] max-md:text-[14px] dark:text-[#d1d4c9]'>پرفروش ترین</span></li>
          <li className='max-md:mr-[2%]'><span className='cursor-pointer text-[14px] max-md:text-[14px] dark:text-[#d1d4c9]'>گران ترین</span></li>
          <li className='max-md:mr-[2%]'><span className='cursor-pointer text-[14px] max-md:text-[14px] dark:text-[#d1d4c9]'>ارزانترین</span></li>
        </ul>
        <button type='submit'  className='bg-slate-400 p-3 mr-[16px] mt-[10px] text-[14px] rounded-xl dark:text-[#d1d4c9] dark:bg-[#556e53]'>جستجو کن</button>
    </div>
  )
}

export default TopSortingResponsive