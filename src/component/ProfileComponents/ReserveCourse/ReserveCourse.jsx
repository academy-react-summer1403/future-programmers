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

  console.log(ReserveCourseList);

  return (
    <div>
      <div className="flex flex-wrap gap-6 justify-evenly mt-10 ">
        {ReserveCourseList?.map((course, index) => (
          <CustomCard
            course={course}
            index={index}
            courseTitle={course.courseName}
            describe={course.reserverDate}
            tumbImageAddress={"https://s3-alpha-sig.figma.com/img/4ef1/210f/534f36bd3b2b1b43f9e9ac7e0859a1a8?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AoF5j3mnVAi0RbqBaiMUJh6YQo3bK7u8I1t4pdpK6VZgWyJNOlZHf5J5Se2Wdw8xO1hMmL0~Jyk84qNYwh6qFKMncQElR96qGknkk25jJmlpmFdjMz2EkGSiykF7iYqhEaUs4fuMG-h6IY-MT9Wi3EMwrMei-NPF1Oe5boeDv-JI2Lgsle1ZHyB-3hPV3qXU4upU82SFe4yyNKLriu-y4ho4r2heipqMW51YrwEW7LKXsQimkOo-uGTUgFI2zAowZCf3UUadyAEL1PsfHeyaXNl0f3BMc8kuHxH~MzQ8hgo386v~k44K~C2xRVT1UpnCcxWsnE2TIyBnixeKV5MKiA__"}
          />
        ))}
      </div>
    </div>
  );
};

export default ReserveCourse;
