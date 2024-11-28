import { Link } from 'react-router-dom'
import http from '../../../core/services/interceptor'
import liked from '../../../../public/Liked.red.png'
import notLiked from '../../../../public/NotLiked.png'
import disliked from '../../../../public/dislike.red.png'
import notDisLiked from '../../../../public/dislike.empty.png'

const CourseCard = ({ title, image, describe, teacher, id , userIsLiked, userIsDissLiked ,dissLikeCount, likeCount}) => {
    const handleLike = async () => {
        const res = await http.post(`/Course/AddCourseLike?CourseId=${id}`)
        console.log(res)
    }
    return(
        <div className=" relative w-[23%] max-sm:w-[95%] max-md:w-[45%] max-md:h-[270px] h-[300px] md:max-lg:h-[220px] bg-white rounded-[20px] dark:dark:bg-[#29435c] dark:text-[#d1d4c9]">
            <img src={image} className="w-[92%] h-36 md:max-lg:h-[42%] mx-auto border border-[gray] relative bottom-6 rounded-3xl"></img>
            <h1 className="text-[14px] max-md:text-[12px] max-lg:text-[9px] max-xl:text-[13px] font-bold mr-2 max-sm:pr-3 relative bottom-3 max-lg:bottom-4 dark:text-[#d1d4c9]">{title}</h1>
            <p className="w-[95%] indent-[8px] h-9 max-sm:relative max-sm:bottom-[7px] max-sm:text-[11px] max-sm:pr-3 max-md:bottom-[10px] max-md:text-[10px] max-md:h-8 max-lg:h-6 mx-auto md:max-lg:mx-auto text-[12px] md:max-lg:text-[8px] max-lg:relative md:max-lg:bottom-3 bottom-0 overflow-hidden dark:text-[#d1d4c9]">{describe}</p>
            <ul className="relative pt-3 mr-2 max-md:text-[11px] max-md:mt-[1px] max-sm:pr-3 max-md:pt-[0] md:max-lg:top-[-10px] text-[12px] md:max-lg:text-[10px] list-disc list-inside text-[#0004ff] dark:text-[#d1d4c9]"><li>{teacher}</li></ul>
            <div  className="flex max-lg:flex-none content-center border-t border-slate-400 w-[90%] mx-auto mt-2 pt-3 max-lg:pt-1">
                <Link to={'/coursedetail/'+id} className="text-[13px] max-xl:text-[11px] max-lg:text-[10px]   px-1 py-2 rounded-xl bg-slate-400 dark:dark:bg-[#556e53] dark:text-[#d1d4c9]">جزئیات دوره</Link>
                <div className='flex  pr-1'>
                <img src={userIsLiked === true ? liked : notLiked} className='w-4 h-4 mt-2' alt="" onClick={handleLike}></img>
                <span className='text-xs max-lg:text-[10px] mt-2 pr-[2px]'>{likeCount}</span>
                </div>
                <div className='flex pr-1'>
                <img src={userIsDissLiked === true ? userIsDissLiked : notDisLiked} className='w-4 h-4 mt-2' alt=""></img>
                <span className='text-xs max-lg:text-[10px] mt-2 pr-[2px]'>{dissLikeCount}</span>
                </div>
            </div>
        </div> 
    )
}

export default CourseCard