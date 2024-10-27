import { Link } from 'react-router-dom'
import http from '../../../core/services/interceptor'
import heart from '../../../../public/heart.png'

const CourseCard = ({ title, image, describe, teacher, index , id , userIsLiked}) => {
    const handleLike = async () => {
        const res = await http.post(`/Course/AddCourseLike?CourseId=${id}`)
        console.log(res)
    }
    return(
        <div className=" relative w-[23%] max-sm:w-[95%] max-md:w-[45%] -[5px] h-[290px] max-md:h-[300px] md:max-lg:h-[220px] bg-white rounded-[20px] dark:dark:bg-[#29435c] dark:text-[#d1d4c9]">
            <img src={image} className="w-[92%] h-36 md:max-lg:h-[42%] mx-auto border border-[gray] relative bottom-6 rounded-3xl"></img>
            <h1 className="text-[14px] max-md:text-[12px] max-lg:text-[9px] font-bold mr-3 relative bottom-3 max-lg:bottom-4 dark:text-[#d1d4c9]">{title}</h1>
            <p className="w-[90%] indent-[8px] h-9 max-sm:relative max-sm:bottom-[7px] max-sm:text-[11px] max-md:bottom-[10px] max-md:text-[10px] max-md:h-8 max-lg:h-6 mx-auto md:max-lg:mx-auto text-[12px] md:max-lg:text-[8px] max-lg:relative md:max-lg:bottom-3 bottom-0 overflow-hidden dark:text-[#d1d4c9]">{describe}</p>
            <ul className="relative top-3 mr-3 max-md:text-[11px] max-md:mt-[1px] max-md:top-[0] md:max-lg:top-[-10px] text-[13px] md:max-lg:text-[10px] list-disc list-inside text-[#0004ff] dark:text-[#d1d4c9]"><li>{teacher}</li></ul>
            <div className='flex justify-between w-[90%] mx:auto'>
                <Link className='mr-[4%] mt-[16%] max-sm:mt-[20%]  max-md:mt-[18%] max-lg:mt-[25%] max-sm:text-[13px] max-md:text-[14px] max-lg:text-[13px] text-blue-800 dark:text-[#d1d4c9] hover:text-[#da4747] dark:hover:text-[#da4747]'> جزییات</Link>
                {userIsLiked === true && <img src={heart} className='w-4 h-4 mt-5' alt="" onClick={handleLike}/>}
            </div>
        </div> 
    )
}

export default CourseCard