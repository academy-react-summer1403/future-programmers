import React from 'react'

function CheckBox({topic, }) {
  return (
    <div className="form-control">
    <label className="label cursor-pointer">
        <input type="checkbox" defaultChecked  className="checkbox checkbox-primary" />
        <span className="label-text absolute right-14">{topic}</span>
    </label>
</div>
  )
}

export default CheckBox