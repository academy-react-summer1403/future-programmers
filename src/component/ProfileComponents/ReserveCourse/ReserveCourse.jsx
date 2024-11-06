import React, { useEffect, useState } from 'react'
import CourseCard from '../../common/CorseCard/CourseCard';
import CustomCard from '../common/CustomCard';
import pic from '../../../../public/item1.png'
import http from '../../../core/services/interceptor/'



const ReserveCourse = () => {
const [ReserveCourseList , setReserveCourseList] = useState(null)

  const getRezeveCourse = async () => {
    const res = await http.get("/SharePanel/GetMyCoursesReserve")
    setReserveCourseList(res)
  }
  

  useEffect(() => {
    getRezeveCourse()
  }, []);
  
  
  
  return (
    <div>
      <div className="flex flex-wrap gap-6 justify-evenly mt-10 ">

        {ReserveCourseList?.map((course, index) => (
          <CustomCard course={course} index={index} courseTitle={course.courseName } describe={course.reserverDate}/>
        ))}
      </div>
    </div>
  )
}

export default ReserveCourse