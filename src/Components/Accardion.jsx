import React from 'react'

function Accardion({topic,subject1, subject2, subject3, subject4}) {
  return (
    <div className="collapse collapse-arrow shadow shadow-black mt-2 w-[97%] mx-auto">
                <input type="checkbox" name="my-accordion-2" defaultChecked />
                <div className="collapse-title text-[14px]">{topic}</div>
                <div className="collapse-content">

                    <div className="form-control">
                        <label className="label cursor-pointer">
                            <input type="checkbox" defaultChecked className="checkbox checkbox-primary" />
                            <span className="label-text absolute right-14">{subject1}</span>
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label cursor-pointer">
                            <input type="checkbox" defaultChecked className="checkbox checkbox-primary" />
                            <span className="label-text absolute right-14">{subject2}</span>
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label cursor-pointer">
                            <input type="checkbox" defaultChecked className="checkbox checkbox-primary" />
                            <span className="label-text absolute right-14">{subject3}</span>
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label cursor-pointer">
                            <input type="checkbox" defaultChecked className="checkbox checkbox-primary" />
                            <span className="label-text absolute right-14">{subject4}</span>
                        </label>
                    </div>
                </div>
            </div>
  )
}

export default Accardion