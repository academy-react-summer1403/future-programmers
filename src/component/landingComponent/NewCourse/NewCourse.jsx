import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import CourseCard from '../../common/CorseCard/CourseCard';
import axios from 'axios';



const NewCourse = () => {

    const [List, setList] = useState(null);



    const getTopCourses =async () => {
        const res = await axios.get('https://classapi.sepehracademy.ir/api/Home/GetCoursesTop?Count=4')
        console.log(res.data)
        setList(res.data)
      }



    
      useEffect(() => {
        getTopCourses()
        
      }, []);



    return (
        <section className=" mx-auto ">
            <div className="container mx-auto px-4">
                <div className='flex '>
                    <h2 className="text-2xl font-bold mb-8 text-blue-700">برترین دوره‌ها</h2>
                    <h3 className='mr-auto mt5'>مشاهده همه </h3>
                </div>
                <div className="flex flex-wrap gap-6 justify-evenly mt-10 ">

                    {List?.map((course, index) => (
                        <CourseCard title={course.title} image={course.tumbImageAddress} describe={course.describe}
                            teacher={course.teacherName} index={index} id={course.courseId} userIsLiked={course.userIsLiked} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default NewCourse