import React from 'react'
import CheckBox from './checkBox'

function Accardion() {
  return (
    <>
        <div className="collapse collapse-arrow shadow shadow-black mt-2 w-[97%] mx-auto dark:bg-slate-500">
            <input type="checkbox" name="my-accordion-2" defaultChecked />
            <div className="collapse-title text-[14px]">دسته بندی</div>
            <div className="collapse-content">
                <CheckBox topic='فرانت اند'  />
                <CheckBox topic='بک اند' />
                <CheckBox topic='React' />
                <CheckBox topic='Next js' />
            </div>
        </div>

        <div className="collapse collapse-arrow shadow shadow-black mt-2 w-[97%] mx-auto">
            <input type="checkbox" name="my-accordion-2" />
            <div className="collapse-title text-[14px]">نوع دوره</div>
            <div className="collapse-content">

                <CheckBox topic='حضوری' />
                <CheckBox topic='حضوری' />
                <CheckBox topic='حضوری-آنلاین' />
            </div>
        </div>

        <div className="collapse collapse-arrow shadow shadow-black mt-2 w-[97%] mx-auto">
            <input type="checkbox" name="my-accordion-2"  />
            <div className="collapse-title text-[14px]">سطح دوره</div>
            <div className="collapse-content">
                <CheckBox topic='مبتدی' />
                <CheckBox topic='متوسط' />
                <CheckBox topic='پیشرفته' />
            </div>
        </div>
    </>
    
  )
}

export default Accardion