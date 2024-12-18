import React, { useEffect, useState } from "react";
import CourseCard from "../../common/CorseCard/CourseCard";
import CustomCard from "../common/CustomCard";
import pic from "../../../../public/item1.png";
import http from "../../../core/services/interceptor/";

const ReserveCourse = () => {
  const [ReserveCourseList, setReserveCourseList] = useState(null);

  const getRezeveCourse = async () => {
    const res = await http.get("/SharePanel/GetMyCoursesReserve");
    setReserveCourseList(res);
  };

  useEffect(() => {
    getRezeveCourse();
  }, []);

  console.log( "11",ReserveCourseList);

  return (
    <div>
      <div className=" mt-10 ">
        <div className="flex flex-wrap   h-[70px] border-4 border-dotted bg-white shadow-2xl  border-gray-300 mt-10 items-center">
          <span className="w-[40%] ms-20">نام دوره</span>
          <span className="w-[40%]"> تاریخ رزرو</span>
        </div>

        {ReserveCourseList?.map((course, index) => (
          <CustomCard
            course={course}
            index={index}
            courseTitle={course.courseName}
            describe={course.reserverDate}
            reserveId={course.reserveId}
            courseId={course.courseId}
          />
        ))}
      </div>
    </div>
  );
}

export default ReserveCourse;
