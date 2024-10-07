import React from 'react'

function Accardion() {
  return (
    <>
    <div className="collapse collapse-arrow shadow shadow-black mt-2 w-[97%] mx-auto">
                <input type="checkbox" name="my-accordion-2" defaultChecked />
                <div className="collapse-title text-[14px]">دسته بندی</div>
                <div className="collapse-content">

                    <div className="form-control">
                        <label className="label cursor-pointer">
                            <input type="checkbox" defaultChecked className="checkbox checkbox-primary" />
                            <span className="label-text absolute right-14">فرانت اند</span>
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label cursor-pointer">
                            <input type="checkbox"  className="checkbox checkbox-primary" />
                            <span className="label-text absolute right-14">بک اند</span>
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label cursor-pointer">
                            <input type="checkbox" className="checkbox checkbox-primary" />
                            <span className="label-text absolute right-14">React</span>
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label cursor-pointer">
                            <input type="checkbox" className="checkbox checkbox-primary" />
                            <span className="label-text absolute right-14">Next js</span>
                        </label>
                    </div>
                </div>
            </div>

            <div className="collapse collapse-arrow shadow shadow-black mt-2 w-[97%] mx-auto">
                <input type="checkbox" name="my-accordion-2" />
                <div className="collapse-title text-[14px]">نوع دوره</div>
                <div className="collapse-content">

                    <div className="form-control">
                        <label className="label cursor-pointer">
                            <input type="checkbox" defaultChecked className="checkbox checkbox-primary" />
                            <span className="label-text absolute right-14">حضوری</span>
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label cursor-pointer">
                            <input type="checkbox"  className="checkbox checkbox-primary" />
                            <span className="label-text absolute right-14">آنلاین</span>
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label cursor-pointer">
                            <input type="checkbox"  className="checkbox checkbox-primary" />
                            <span className="label-text absolute right-14">حضوری-آنلاین</span>
                        </label>
                    </div>
                </div>
            </div>

            <div className="collapse collapse-arrow shadow shadow-black mt-2 w-[97%] mx-auto">
                <input type="checkbox" name="my-accordion-2"  />
                <div className="collapse-title text-[14px]">سطح دوره</div>
                <div className="collapse-content">

                    <div className="form-control">
                        <label className="label cursor-pointer">
                            <input type="checkbox" defaultChecked  className="checkbox checkbox-primary" />
                            <span className="label-text absolute right-14">مبتدی</span>
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label cursor-pointer">
                            <input type="checkbox" className="checkbox checkbox-primary" />
                            <span className="label-text absolute right-14">متوسط</span>
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label cursor-pointer">
                            <input type="checkbox" className="checkbox checkbox-primary" />
                            <span className="label-text absolute right-14">پیشرفته</span>
                        </label>
                    </div>
                </div>
            </div>
    </>
    
  )
}

export default Accardion