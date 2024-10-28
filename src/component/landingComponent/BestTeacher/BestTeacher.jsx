import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import http from '../../../core/services/interceptor';
import TeachersCard from "./TeachersCard";



function BestTeacher() {
    const [teachersList, setteachersList] = useState(null);
    console.log(teachersList)
    const getTeachers = async () => {
        const res = await http.get("/Home/GetTeachers");
        setteachersList(res);
    };

    useEffect(() => {
        getTeachers();
    }, []);

  return (
    <div className="bg-[#f3f4f6] font-[sans] dark:bg-[#152a38] border border-black">
        <div className="w-[90%] flex px-4 mx-auto">
            <div className="w-[30%]">
                <h2 className=" flex text-[25px] mt-[13%] text-black "> برترین اساتید 
                    <h6 className="text-[#436e8e] mr-[1%] pt-[5px] text-[18px]">رو همینجا پیدا کنید!!!</h6>
                </h2>
                <p className="w-[69%] text-[12px] mr-[3%]">برجسته ترین اساتید بزرگترین مجموعه برنامه نویسی استان مازندران رو بهتر بشناسیم !</p>
            </div>
            <div className="flex flex-wrap justify-between w-[70%] gap-y-3 mt-5 max-sm:mt-3">
                {teachersList?.map((item, index) => ( 
                    <TeachersCard
                    key={index}
                    image={item.pictureAddress}
                    fullName={item.fullName}
                    courseCounts={item.courseCounts} />
                ))}
            </div>
            {/* <a href="#" className="block text-center mt-6 text-blue-500 hover:underline"> مشاهده همه </a> */}
            </div>
    </div>
  )
}

export default BestTeacher