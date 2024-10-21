import React from 'react'
import { Link } from 'react-router-dom'
import http from '../../../core/services/interceptor'

const CourseCard = ({ title, image, describe, teacher, index , id , userIsLiked}) => {
    const handleLike = async () => {
        const res = await http.post(`/Course/AddCourseLike?CourseId=${id}`)
        console.log(res)
    }
    return (
        <div key={index} className="bg-white dark:bg-gray-400 px-4 shadow-2xl  rounded-2xl mt-4 w-full sm:w-[45%]  xl:w-[20%] h-[450px] ">

            <img
                src={image}
                className="relative -top-5 w-full h-40 object-cover rounded"
            />
            <h3 className=" text-lg font-bold">{title}</h3>
            <p className="text-gray-600 text-sm mt-2 h-[145px] overflow-clip ">{describe}</p>
            <h3>مدرس : {teacher}</h3>

            <div className='flex justify-between'>
                <Link className='mt-4 text-blue-800'>
                    جزییات
                </Link>
                {userIsLiked === true && <img src="./heart.png" className='w-4 h-4 mt-5' alt="" onClick={handleLike}/>}
            </div>
        </div>
    )
}

export default CourseCard