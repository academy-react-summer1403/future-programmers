import { useEffect, useState } from 'react';
import http from '../../../core/services/interceptor'


function Statistics() {
    const [landingInfo, setLandingInfo] = useState(null);

    const getLandingInfo = async () => { 
        const res = await http.get("/Home/LandingReport");
        setLandingInfo(res)
        // console.log('res', res )
    }

    useEffect(() => {
        getLandingInfo();
    }, []);

    return (
        <div className="flex justify-end max-sm:justify-center mx-auto px-4 sm:h-44 lg:h-96 bg-[url(public/Group.png)] max-sm:bg-none [background-size:49%_125%] max-lg:[background-size:35%_125%] [background-position-x:100%] bg-no-repeat">
            {/* <img className="relative h-[140%] w-[50%] right-[-3%] z-0 max-sm:hidden" src={pic} /> */}
            <div className="max-sm:w-[90%] max-lg:w-[70%] w-[65%] pl-14 max-md:pl-12 max-sm:pl-0 max-sm:mt-4 text-center content-center flex flex-wrap justify-between rounded-xl max-sm:shadow-md">
                    <div className="flex flex-wrap justify-between max-sm:justify-between max-sm:h-12 max-sm:content-center basis-full max-sm:text-[9px] max-md:text-[12px] max-lg:text-[13px] dark:bg-[#29435c] rounded-xl overflow-hidden">
                        <div className="w-[24%] dark:text-[#d1d4c9]">
                            <h2 className='text-[#436e8e] dark:text-[#e19f9f]'>{landingInfo?.teacherCount }</h2>
                            <h3>تعداد معلمان</h3>
                        </div>
                        <div className="w-[24%] dark:text-[#d1d4c9]">   
                            <h2 className='text-[#436e8e] dark:text-[#e19f9f]'>{landingInfo?.studentCount }</h2>
                            <h3>تعداد دانشجویان</h3>
                        </div>
                        <div className="w-[24%] dark:text-[#d1d4c9]">
                            <h2 className='text-[#436e8e] dark:text-[#e19f9f]'>{ landingInfo?.courseCount}</h2>
                            <h3>تعداد کورس ها</h3>
                        </div>
                        <div className="w-[24%] dark:text-[#d1d4c9]">
                            <h2 className='text-[#436e8e] dark:text-[#e19f9f]'>{ landingInfo?.newsCount}</h2>
                            <h3>تعداد خبر ها</h3>
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default Statistics