import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import CourseCard from '../../common/CorseCard/CourseCard';
import axios from 'axios';



const NewCourse = () => {

    const [List, setList] = useState(null);



    const getTopCourses =async () => {
        const res = await axios.get('https://classapi.sepehracademy.ir/api/Home/GetCoursesTop?Count=4')
        setList(res.data)
    }



    
    useEffect(() => {
        getTopCourses()    
    }, []);



    return (
        <section className=" mx-auto overflow-hidden bg-[#f3f4f6] font-[sans] dark:bg-[#152a38] dark:text-[#d1d4c9] border border-black">
            <div className="container mx-auto px-4">
                <div className='flex '>
                    <h2 className="text-2xl font-bold mb-8 text-blue-700">برترین دوره‌ها</h2>
                    <h3 className='mr-auto mt5'>مشاهده همه </h3>
                </div>
                <div className="flex flex-wrap gap-6 justify-evenly m-10">

                    {List?.map((course, index) => (
                        <CourseCard key={index} title={course.title} image={course.tumbImageAddress} describe={course.describe}
                            teacher={course.teacherName} index={index} id={course.courseId} userIsLiked={course.userIsLiked} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default NewCourse