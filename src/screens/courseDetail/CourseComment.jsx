import pic from '../../../public/01.jpg'

function CourseComment() {
  return (
    <div className='w-[90%] lg:w-[55%] lg:absolute lg:top-[750px] mx-[auto] lg:mr-[6%] pb-5 dark:text-[#d1d4c9]'>
        <div className='w-[100%] pb-4 bg-white  max-md:mt-0 rounded-[20px] max-md:w-[100%] md:max-lg:w-[100%] dark:bg-[#29435c]'>
            <div className='w-[85%] h-[90%] mx-auto'>
                <h1 className='text-[25px] text-cyan-700 inline dark:text-[#d1d4c9]'>نظرات</h1>
                <div className=" border border-gray rounded-xl w-[100%] h-fit mt-2 px-2 py-2">
                  <div className="flex relative border-b border-b-gray-300 h-[90px] max-sm:h-20 ">
                    <img src={pic} className='w-20 max-sm:w-14  h-20 max-sm:h-14 p-1 border border-gray rounded-[50%]' />
                    <div className=' mr-2 pt-2'>
                      <h2 className='flex max-sm:text-[12px]'>salam aryanpour
                        <h2 className='mr-2  pr-2 border-r-2 border-gray-300'>کاربر</h2>
                      </h2>
                      <h2 className='pt-2 text-gray-400 max-sm:text-[12px] '>21/21/21333</h2>
                    </div>
                    <div className='flex border border-black absolute left-0 top-2 text-[13px]'>
                      <h2 className='pr-4 bg-[url()]'>987</h2>
                      <h2 className='pr-4'>123</h2>
                    </div>
                  </div>
                  <p className='w-full max-h-12 overflow-x-hidden overflow-y-scroll rounded-lg mt-1 pr-2 max-sm:text-[12px] '>salak sdkj alkf jweoif fsw iehf jdks kfw jhfg weyu salak sdkj alkf jweoif fsw iehf jdks kfw jhfg weyu salak sdkj alkf jweoif fsw iehf jdks kfw jhfg weyu salak sdkj alkf jweoif fsw iehf jdks kfw jhfg weyu</p>
                  <div className='flex content-end pt-2 text-[11px]'>
                    <div className='hover:text-red-600 cursor-pointer'>مشاهده پاسخ ها</div>
                    <div className='pr-3 hover:text-red-600 cursor-pointer'>پاسخ دادن</div>
                  </div>
                </div>
                <textarea placeholder="نظر خود را وارد کنید" className="textarea textarea-bordered textarea-xs w-full   border-[2px] border-cyan-700 dark:bg-[#556e53] dark:border-[#556e53] h-[60px] mt-3 dark:placeholder-[#d1d4c9]"></textarea>
                <button className='bg-cyan-700 mt-[10px] sm:text-[14px] py-3 px-4 rounded-[10px] text-white dark:bg-[#556e53]'>ارسال نظر</button>
            </div>
        </div>
    </div> 
  )
}

export default CourseComment