// import React from 'react'

import FormField from "../Fields/FormField"

function TopCategory() {
  return (
    <div className='items-center hidden max-sm:hidden md:flex'>
        <h1 className='font-bold pr-2 mr-4 text-[15px] md:max-lg:text-[11px] md:max-lg:mr-[10px] md:max-lg:pr-0 md:max-lg:w-[75px] w-[97px] dark:text-white'>مرتب سازی</h1>

        <FormField FieldTopic={'جدیدترین'} name={'New'}/>
        <FormField FieldTopic={'پرفروش ترین'} name={'BestSelling'}/>
        <FormField FieldTopic={'گران ترین'} name={'Expensive'}/>
        <FormField FieldTopic={'ارزان ترین'} name={'Cheap'}/>

        <button type='submit'  className='bg-slate-400 p-4 md:max-lg:p-2 text-[16px] md:max-lg:text-[14px]  rounded-xl mr-[180px] md:max-lg:mr-[40px] dark:text-white'>جستجو کن</button>
    </div>
  )
}

export default TopCategory