import FormField from "../Fields/FormField"

function TopSortingResponsive() {
  return (
    <>
    <h1 className=' pr-1 mr-2 mt-2 pb-2 max-md:text-[13px] display-[inline]  dark:text-[#d1d4c9]'>مرتب سازی</h1>

    <div className='items-center shadow shadow-black w-[90%]  mt-[10px] rounded-[20px] max-md:pb-[10px] dark:bg-[#556e53]'>

        <FormField FieldTopic={'جدیدترین'} name={'New'}/>
        <FormField FieldTopic={'پرفروش ترین'} name={'BestSelling'}/>
        <FormField FieldTopic={'گران ترین'} name={'Expensive'}/>
        <FormField FieldTopic={'ارزان ترین'} name={'Cheap'}/>

        <button type='submit'  className='bg-slate-400 p-4 text-[14px] rounded-xl max-md:text-[12px] max-md:p-2 max-md:mr-[9%] max-md:mt-[10px] dark:bg-[#29435c] dark:text-[#d1d4c9]'>جستجو کن</button>
    </div></>
  )
}

export default TopSortingResponsive