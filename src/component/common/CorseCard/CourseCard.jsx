import { Link } from 'react-router-dom'
import http from '../../../core/services/interceptor'

const CourseCard = ({ title, image, describe, teacher, index , id , userIsLiked}) => {
    const handleLike = async () => {
        const res = await http.post(`/Course/AddCourseLike?CourseId=${id}`)
        console.log(res)
    }
    return(
        <div className=" relative w-[20%] max-sm:w-[95%] max-md:w-[31%] md:max-lg:w-[30%] h-[360px] max-md:h-[300px] md:max-lg:h-[220px] bg-white rounded-[20px] dark:dark:bg-[#29435c] dark:text-[#d1d4c9]">
            <img src={image} className="w-[92%] h-36 md:max-lg:h-[42%] mx-auto border border-[gray] relative bottom-6 rounded-3xl"></img>
            <h1 className="text-[14px] max-md:text-[12px] max-lg:text-[9px] font-bold mr-2 relative bottom-3 max-lg:bottom-4 dark:text-[#d1d4c9]">{title}</h1>
            <p className="w-[95%] indent-[8px] h-9 max-sm:relative max-sm:bottom-[7px] max-sm:text-[11px] max-md:bottom-[10px] max-md:text-[10px] max-md:h-8 max-lg:h-6 mx-auto md:max-lg:mx-auto text-[12px] md:max-lg:text-[8px] max-lg:relative md:max-lg:bottom-3 bottom-0 overflow-hidden dark:text-[#d1d4c9]">{describe}</p>
            <ul className="relative top-3 mr-2 max-md:text-[11px] max-md:mt-[1px] max-md:top-[0] md:max-lg:top-[-10px] text-[13px] md:max-lg:text-[10px] list-disc list-inside text-[#0004ff] dark:text-[#d1d4c9]"><li>{teacher}</li></ul>
            <div className='flex justify-between'>
                <Link className='mt-4 text-blue-800'> جزییات</Link>
                {userIsLiked === true && <img src="./heart.png" className='w-4 h-4 mt-5' alt="" onClick={handleLike}/>}
            </div>
        </div> 
    )
}

export default CourseCard