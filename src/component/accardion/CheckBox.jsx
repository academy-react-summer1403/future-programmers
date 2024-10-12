import React from 'react'

function CheckBox({topic, }) {
  return (
    <div className="form-control">
    <label className="label cursor-pointer">
        <input type="checkbox" defaultChecked  className="checkbox checkbox-primary md:max-lg:w-[20px] md:max-lg:h-[20px] w-[24px] h-[24px]" />
        <span className="label-text absolute right-14 text-[14px] md:max-lg:text-[12px] dark:text-white">{topic}</span>
    </label>
</div>
  )
}

export default CheckBox