import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import CourseCard from '../../common/CorseCard/CourseCard';
import axios from 'axios';

[
    {
        "teacherName": "محسن اسفندیاری",
        "classRoomName": "ClassRoom 1",
        "typeName": "آنلاین",
        "statusName": "شروع ثبت نام",
        "levelName": "مبتدی",
        "cost": "500000.00",
        "dissLikeCount": 93,
        "likeCount": 225,
        "commandCount": 0,
        "userIsLiked": false,
        "userIsDissLiked": false,
        "isCourseReseve": false,
        "isUserFavorite": false,
        "courseReseveId": "00000000-0000-0000-0000-000000000000",
        "userFavoriteId": "00000000-0000-0000-0000-000000000000",
        "userLikeId": "00000000-0000-0000-0000-000000000000",
        "currentUserSetRate": false,
        "currentUserRateNumber": 0,
        "courseRate": 0,
        "title": "دوره ری اکت نیتیو",
        "describe": "jhikl",
        "tumbImageAddress": "https://classapi.sepehracademy.ir/\\Pictures\\Course\\Screenshot (259)_232bdc56-e59d-431a-b428-64555aed0d19.png",
        "lastUpdate": "2024-10-18T17:40:02.693",
        "courseId": "b1ab5584-6c6f-ef11-b6da-8f406465b439"
    },
    {
        "teacherName": "مهدی اصغری",
        "classRoomName": "ClassRoom 2",
        "typeName": "حضوری",
        "statusName": "درحال برگزاری",
        "levelName": "متوسط",
        "cost": "700000.00",
        "dissLikeCount": 94,
        "likeCount": 225,
        "commandCount": 4,
        "userIsLiked": false,
        "userIsDissLiked": false,
        "isCourseReseve": false,
        "isUserFavorite": false,
        "courseReseveId": "00000000-0000-0000-0000-000000000000",
        "userFavoriteId": "00000000-0000-0000-0000-000000000000",
        "userLikeId": "00000000-0000-0000-0000-000000000000",
        "currentUserSetRate": false,
        "currentUserRateNumber": 0,
        "courseRate": 0,
        "title": "دوره ری اکت",
        "describe": "دوره ری اکت دوره ری اکت",
        "tumbImageAddress": "https://classapi.sepehracademy.ir/\\Pictures\\Course\\Screenshot (202)_ce444c68-bcdb-4b14-8bd4-da078b2e4a80.png",
        "lastUpdate": "2024-10-18T17:43:11.06",
        "courseId": "0d104460-2931-ef11-b6c9-9b4d470c6650"
    },
    {
        "teacherName": "حامد نظری",
        "classRoomName": "ClassRoom 2",
        "typeName": "آنلاین",
        "statusName": "شروع ثبت نام",
        "levelName": "متوسط",
        "cost": "5000000.00",
        "dissLikeCount": 91,
        "likeCount": 216,
        "commandCount": 2,
        "userIsLiked": false,
        "userIsDissLiked": false,
        "isCourseReseve": false,
        "isUserFavorite": false,
        "courseReseveId": "00000000-0000-0000-0000-000000000000",
        "userFavoriteId": "00000000-0000-0000-0000-000000000000",
        "userLikeId": "00000000-0000-0000-0000-000000000000",
        "currentUserSetRate": false,
        "currentUserRateNumber": 0,
        "courseRate": 0,
        "title": "دوره جامع  UI/UX",
        "describe": " یکی از بهترین گزینه‌ها برای توسعه اپلیکیشن‌های تحت وب است. این تکنولوژی، که در سال 2014 توسط مایکروسافت معرفی شد، در چند سال گذشته توانمندی‌های زیادی بدست آورده و برای پروژه‌های بزرگ ایده‌آل شده است.",
        "tumbImageAddress": "https://classapi.sepehracademy.ir/\\Pictures\\Course\\Screenshot (203)_c788b0fd-5646-467c-99c7-1fd9b665a2f8.png",
        "lastUpdate": "2024-10-14T00:03:22.533",
        "courseId": "c370355d-2f31-ef11-b6c9-9b4d470c6650"
    },
    {
        "teacherName": "محمدحسین بحرالعلومی",
        "classRoomName": "ClassRoom 2",
        "typeName": "آنلاین",
        "statusName": "شروع ثبت نام",
        "levelName": "متوسط",
        "cost": "5000000.00",
        "dissLikeCount": 90,
        "likeCount": 217,
        "commandCount": 24,
        "userIsLiked": false,
        "userIsDissLiked": false,
        "isCourseReseve": false,
        "isUserFavorite": false,
        "courseReseveId": "00000000-0000-0000-0000-000000000000",
        "userFavoriteId": "00000000-0000-0000-0000-000000000000",
        "userLikeId": "00000000-0000-0000-0000-000000000000",
        "currentUserSetRate": false,
        "currentUserRateNumber": 0,
        "courseRate": 0,
        "title": " دوره طراحی وب سایت",
        "describe": "دوره جامع جاوا اسکریپت  دوره جامع جاوا اسکریپت  دوره جامع جاوا اسکریپت",
        "tumbImageAddress": "https://classapi.sepehracademy.ir/\\Pictures\\Course\\Screenshot (206)_e5ea0c8c-1e7c-419d-912c-cd662444075a.png",
        "lastUpdate": "2024-10-14T00:15:57.31",
        "courseId": "ee6f7a15-4031-ef11-b6c9-9b4d470c6650"
    }
]

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
        <section className=" mx-auto ">
            <div className="container mx-auto px-4">
                <div className='flex '>
                    <h2 className="text-2xl font-bold mb-8 text-blue-700">برترین دوره‌ها</h2>
                    <h3 className='mr-auto mt5'>مشاهده همه </h3>
                </div>
                <div className="flex flex-wrap gap-6 justify-evenly mt-10 ">

                    {List?.map((course, index) => (
                        <CourseCard title={course.title} image={course.tumbImageAddress} describe={course.describe} teacher={course.teacherName} index={index}/>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default NewCourse