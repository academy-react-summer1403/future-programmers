import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import CourseCard from '../../common/CorseCard/CourseCard';
import axios from 'axios';
import pic from '../../../../public/cImage.png';



const NewCourse = () => {

    const [List, setList] = useState(null);
    console.log(List)

    const getTopCourses =async () => {
        const res = await axios.get('https://classapi.sepehracademy.ir/api/Home/GetCoursesTop?Count=4')
        setList(res.data)
    }

    
    useEffect(() => {
        getTopCourses()    
    }, []);



    return (
        <section className="mx-auto overflow-x-hidden pb-[30px] dark:text-[#d1d4c9]">
            <div className="w-[90%] mx-auto max-sm:pt-2 px-4">
                <div className='flex justify-between'>
                    <h2 className="text-2xl font-bold text-[#436e8e] max-sm:text-[14px] max-lg:text-[18px] max-sm:pr-[11px] pr-[2%] dark:text-[#d1d4c9]">برترین دوره‌ها</h2>
                    <Link to={'/courses/'} className='max-sm:text-[14px] my-auto'>مشاهده همه </Link>
                </div>
                <div className="flex flex-wrap justify-between max-md:gap-y-11 max-sm:pt-[30px] max-lg:pt-[35px] pt-[45px] ">
                    {List?.map((course, index) => (
                        <CourseCard 
                            key={index} 
                            title={course.title} 
                            image={course.tumbImageAddress==='null'?pic:course.tumbImageAddress} 
                            describe={course.describe}
                            teacher={course.teacherName}
                            id={course.courseId} 
                            userIsLiked={course.userIsLiked}
                            dissLikeCount={course.dissLikeCount} 
                            likeCount={course.likeCount}
                            userIsDissLiked={course.userIsDissLiked}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default NewCourse