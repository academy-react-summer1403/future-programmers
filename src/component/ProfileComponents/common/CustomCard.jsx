import React from 'react'
import { Link } from 'react-router-dom'

const CustomCard = ({course , index}) => {
    return (
        <div key={index} className="bg-white dark:bg-gray-400 px-4 shadow-2xl  rounded-2xl mt-4 w-full sm:w-[45%]  xl:w-[30%] h-[450px] ">

            <img
                src={course.image}
                className="relative -top-5 w-full h-40 object-cover rounded"
            />
            <h3 className=" text-lg font-bold">{course.title}</h3>
            <p className="text-gray-600 text-sm mt-2 h-[145px] overflow-clip ">{course.description}</p>
            <h3>مدرس : {course.teacher}</h3>

            <div className='flex justify-between'>
                <button
                    href={course.link}
                    className="inline-block mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                >
                    رزرو
                </button>
                <Link className='mt-4 text-blue-800'>
                    جزییات
                </Link>
            </div>
        </div>
    )
}

export default CustomCard