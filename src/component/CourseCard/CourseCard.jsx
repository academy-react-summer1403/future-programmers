import { Link} from "react-router-dom";
import liked from '../../../public/Liked.red.png'
import notLiked from '../../../public/NotLiked.png'
import disliked from '../../../public/dislike.red.png'
import notDisLiked from '../../../public/dislike.empty.png'
import star from '../../../public/star.png'
import save from '../../../public/save.png'
import saved from '../../../public/saved.png'
import { addLikeCourse } from "../../core/services/api/addLikeCourse";
import { addDislikeCourse } from "../../core/services/api/addDislikeCourse";
import { addFavoritCourse } from "../../core/services/api/addFavoritCourse";
import { deleteCourseLike } from "../../core/services/api/deleteCourseLike";
import { deleteFavoritCourse } from "../../core/services/api/deleteCourseFavorit";


const CourseCard = ({image,topic, explain, teacher, price, id, courseRate, likeCount, userIsLiked, dissLikeCount, currentUserDissLike, levelName, userFavorite, setReFetch, userLikedI, userFavoriteId}) => {
  
  const handleLike = async (e) => {
    if(userIsLiked===false){
      await addLikeCourse(e)
    }else{
      // const CourseLikeId = {CourseLikeId:id}
      await deleteCourseLike(CourseLikeId)
    }
    setReFetch(old=>old+1)    
  }

const handleDisLike = async(e)=>{
     await addDislikeCourse(e)
    setReFetch(old=>old+1)
    
}
const handleFavorit = async (value) => {
  if(userFavorite===false){
    const courseId= {courseId:value}
    await addFavoritCourse(courseId)
  }else{
    const CourseFavoriteId= {CourseFavoriteId:userFavoriteId}
    deleteFavoritCourse(CourseFavoriteId)
  }
  setReFetch(old=>old+1)
    
    
}
  
  return (
    <div className=" relative w-[31%] max-sm:w-[95%] max-md:w-[31%] md:max-lg:w-[30%] pb-2 bg-white rounded-[20px] dark:dark:bg-[#29435c] dark:text-[#d1d4c9]">
      <img src={image} className="w-[92%] h-36 md:max-lg:h-[42%] mx-auto border border-[gray] relative bottom-6 rounded-3xl"></img>
      <h1 className="text-[14px] max-md:text-[12px] max-lg:text-[9px] font-bold pr-4 relative bottom-5 dark:text-[#d1d4c9]">{topic}</h1>
      <div className="relative flex justify-between bottom-3 pr-4 pl-3 max-md:text-[11px] text-[13px] md:max-lg:text-[10px] text-[#0004ff] dark:text-[#d1d4c9]">
        <h6>{teacher}</h6>
        <div className='flex items-center'>
          <span className='text-xs max-lg:text-[9px] pl-2'>{courseRate}</span>
          <img src={star} className='w-5 max-lg:w-4 h-5 max-lg:h-4' alt=""></img>
        </div>
      </div>
      <div className="flex gap-3">
        <span className="relative bottom-2 bg-slate-400 mr-4 px-1 pt-1 pb-2 bg-opacity-60 rounded-md text-[12px] md:max-lg:text-[10px] dark:bg-opacity-50 dark:dark:bg-[#556e53]">سطح دوره:{levelName}</span>
        <img src={userFavorite === true ? saved : save} className='w-5 max-lg:w-4 h-5 max-lg:h-4 cursor-pointer' alt="" onClick={()=>handleFavorit(id)}></img>
      </div>
      <p className="w-[95%] indent-[8px] h-9 max-lg:h-6 max-md:h-8 pr-2 relative  max-sm:text-[11px]  max-md:text-[10px]  mx-auto text-[12px] md:max-lg:text-[8px]  overflow-hidden dark:text-[#d1d4c9]">{explain}</p>
      
      <div className="flex justify-between mt-1 pl-3">
        <div className="flex pr-4 gap-2">
          <div className=''>
            <img src={userIsLiked === true ? liked : notLiked} className='w-5 max-lg:w-4 h-5 max-lg:h-4 cursor-pointer' alt=""  onClick={()=>handleLike(id)}></img>
            <span className='text-xs max-lg:text-[9px] mt-2  pr-[2px]'>{likeCount}</span>
          </div>
          <div className=''>
            <img src={currentUserDissLike === true ? disliked : notDisLiked} className='w-5 max-lg:w-4 h-5 max-lg:h-4 cursor-pointer' alt="" onClick={()=>handleDisLike(id)}></img>
            <span className='text-[12px] max-lg:text-[9px] mt-2  pr-[2px]'>{dissLikeCount}</span>
          </div>
        </div>
        <Link to={'/coursedetail/'+id} className="text-[12px] sm:text-[11px] h-9 pt-2 px-2 my-auto rounded-xl bg-slate-400 dark:dark:bg-[#556e53] dark:text-[#d1d4c9]">جزئیات دوره</Link>
      </div>
      <div  className="border-t border-slate-400 flex items-center justify-between w-[90%] mx-auto pt-2 max-lg:pt-1">
        <span className="text-[13px] md:max-lg:text-[11px]">قیمت دوره</span>
        <span className="   max-md:text-[12px] max-lg:text-[11px] text-[13px] max-xl:text-[13px] text-red-700 dark:text-[#d1d4c9]" >{price} تومان </span>
      </div>
      {/* <span className="absolute mt-6 md:max-lg:mt-2 left-[2%] max-md:left-[3%]  max-md:text-[11px]  max-lg:pr-[4px] bg-slate-400 rounded-2xl text-[14px] max-xl:text-[13px] max-lg:text-[10px] p-[2px] pr-1 pl-5 md:max-lg:pl-4 bg-[url(public/timer.png)] bg-no-repeat [background-position:2%_50%] max-lg:[background-position:4%_50%] [background-size:18px] md:max-lg:[background-size:14px] dark:dark:bg-[#556e53] dark:text-[#d1d4c9]">{time}</span> */}
      </div> 
  )
}

export default CourseCard;