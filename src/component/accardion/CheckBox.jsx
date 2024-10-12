import React from 'react'

function CheckBox({topic, }) {
  return (
    <div className="form-control">
    <label className="label cursor-pointer">
        <input type="checkbox" defaultChecked  className="checkbox checkbox-primary tablet:w-[20px] tablet:h-[20px] laptop:w-[24px] laptop:h-[24px]" />
        <span className="label-text absolute right-14 laptop:text-[14px] tablet:text-[12px] dark:text-white">{topic}</span>
    </label>
</div>
  )
}

export default CheckBox