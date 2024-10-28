import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import http from '../../../core/services/interceptor';



function BestTeacher() {
    const [teachersList, setteachersList] = useState(null);

    const getTeachers = async () => {
        const res = await http.get("/Home/GetTeachers");
        setteachersList(res);
    };

    useEffect(() => {
        getTeachers();
    }, []);

  return (
    <div className="bg-[#f3f4f6] font-[sans] dark:bg-[#152a38] border border-black">
        <div className="w-[90%] px-4 mx-auto">
            <h2 className="text-2xl text-[#436e8e] font-bold  mb-8"> مدرسین</h2>
            <div className="flex flex-wrap justify-evenly gap-6">
                {teachersList?.map((item, index) => (
                <div
                    key={index}
                    className="bg-white dark:bg-gray-400 px-4 shadow-2xl  rounded-2xl mt-4 w-full sm:w-[45%]  xl:w-[20%] h-[450px] "
                >
                    <img
                    src={item.pictureAddress}
                    className="relative -top-5 w-full h-40 object-cover rounded"
                    />
                    <h3 className=" text-lg font-bold">{item.fullName}</h3>
                    <p className="text-gray-600 text-sm mt-2 h-[145px] overflow-clip ">
                    </p>

                    <div className="flex justify-between">
                    <Link className="mt-4 text-blue-800">جزییات</Link>
                    </div>
                </div>
                ))}
            </div>
            <a href="#" className="block text-center mt-6 text-blue-500 hover:underline"> مشاهده همه </a>
            </div>
    </div>
  )
}

export default BestTeacher