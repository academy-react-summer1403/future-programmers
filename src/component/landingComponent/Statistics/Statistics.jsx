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
        <section className="py-12">
            <div className="container mx-auto px-4  md:flex flex-nowrap">
                <div className="md:w-1/2">
                    <img className="" src={pic} />
                </div>
                <div className="p-6 text-center md:w-1/2 content-center">
                    <div className="flex flex-wrap justify-between content-center">
                        <div className="flex flex-wrap justify-around basis-full">
                            <div
                                className="w-[20%]">
                            <h2>{landingInfo?.teacherCount }</h2>
                                <h3>تعداد معلمان</h3>
                            </div>
                            <div
                                className="w-[20%]">
                            <h2>{landingInfo?.studentCount }</h2>
                                <h3>تعداد دانشجویان</h3>
                            </div>
                            <div
                                className="w-[20%]">
                            <h2>{ landingInfo?.courseCount}</h2>
                                <h3>تعداد کورس ها</h3>
                            </div>
                            <div
                                className="w-[20%]">
                            <h2>{ landingInfo?.newsCount}</h2>
                                <h3>تعداد خبر ها</h3>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Statistics