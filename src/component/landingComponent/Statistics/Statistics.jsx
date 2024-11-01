import { useEffect, useState } from 'react';
import http from '../../../core/services/interceptor'
import pic from '../../../../public/Group.png'

function Statistics() {
    const [landingInfo, setLandingInfo] = useState(null);

    const getLandingInfo = async () => { 
        const res = await http.get("/Home/LandingReport");
        setLandingInfo(res)
        console.log(res)
    }

    useEffect(() => {
        getLandingInfo();
    }, []);

    return (
        <div className=" mx-auto px-4 sm:h-44 lg:h-96 sm:flex flex-nowrap ">
            <img className="relative h-[140%] w-[50%] right-[-3%] z-0 max-sm:hidden" src={pic} />
            <div className="relative xl:left-[50px] sm:max-md:left-[20px] sm:max-md:w-[430px] overflow-hidden text-center md:w-1/2 content-center flex flex-wrap justify-between max-sm:h-9 max-sm:rounded-xl max-sm:shadow-md">
                    <div className="flex flex-wrap justify-between max-sm:justify-between basis-full max-sm:text-[10px] max-md:text-[12px] dark:bg-[#29435c]">
                        <div className="w-[20%] max-md:w-[24%] dark:text-[#d1d4c9]">
                            <h2 className='text-[#436e8e]'>{landingInfo?.teacherCount }</h2>
                            <h3>تعداد معلمان</h3>
                        </div>
                        <div className="w-[20%] max-md:w-[24%] dark:text-[#d1d4c9]">   
                            <h2 className='text-[#436e8e]'>{landingInfo?.studentCount }</h2>
                            <h3>تعداد دانشجویان</h3>
                        </div>
                        <div className="w-[20%] max-md:w-[24%] dark:text-[#d1d4c9]">
                            <h2 className='text-[#436e8e]'>{ landingInfo?.courseCount}</h2>
                            <h3>تعداد کورس ها</h3>
                        </div>
                        <div className="w-[20%] max-md:w-[24%] dark:text-[#d1d4c9]">
                            <h2 className='text-[#436e8e]'>{ landingInfo?.newsCount}</h2>
                            <h3>تعداد خبر ها</h3>
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default Statistics