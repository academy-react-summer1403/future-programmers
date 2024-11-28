import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import http from '../../../core/services/interceptor';
import TeachersCard from "./TeachersCard";



function BestTeacher() {
    const [teachersList, setteachersList] = useState(null);
    // console.log(teachersList)
    const getTeachers = async () => {
        const res = await http.get("/Home/GetTeachers");
        setteachersList(res);
    };

    useEffect(() => {
        getTeachers();
    }, []);

  return (
    <section className="overflow-x-hidden pb-[15px]">
        <div className="w-[90%] flex max-md:block px-4 mx-auto">
            <div className="w-[30%] max-lg:w-[45%] max-md:w-[100%]">
                <h2 className=" flex  text-[25px] max-xl:text-[22px] max-sm:text-[17px] mt-[18%] max-md:mt-[0px] dark:text-[#d1d4c9] max-sm:pr-[14%] text-black "> برترین اساتید 
                    <h6 className="text-[#436e8e] dark:text-[#8da2b3]  mr-[1%] pt-[5px] text-[18px] max-sm:text-[12px] max-xl:text-[17px]">رو همینجا پیدا کنید!!!</h6>
                </h2>
                <p className="w-[69%] text-center max-xl:w-[85%] text-[12px]  max-sm:text-[11px] mr-[3%] max-sm:mx-auto max-lg:mt-[20px] max-sm:mt-[5px]  dark:text-[#d1d4c9]">برجسته ترین اساتید بزرگترین مجموعه برنامه نویسی استان مازندران رو بهتر بشناسیم !</p>
            </div>
            <div className="flex flex-wrap justify-between w-[70%] max-md:w-[100%] gap-y-3 mt-5 max-sm:mt-3">
                {teachersList?.map((item, index) => ( 
                    <TeachersCard
                    key={index}
                    image={item.pictureAddress}
                    fullName={item.fullName}
                    courseCounts={item.courseCounts} />
                ))}
            </div>
        </div>
    </section>
  )
}

export default BestTeacher