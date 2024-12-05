import { Link } from "react-router-dom"
import liked from '../../../public/Liked.red.png'
import notLiked from '../../../public/NotLiked.png'
import disliked from '../../../public/dislike.red.png'
import notDisLiked from '../../../public/dislike.empty.png'
import star from '../../../public/star.png'
import save from '../../../public/save.png'
import saved from '../../../public/saved.png'
import eye from '../../../public/eye.png'
import { addNewsLike, deleteNewsLike } from "../../core/services/api/newsLike"

const Page = ({setReFetch, image, currentDissLikeCount, currentUserIsDissLike, currentUserIsLike, newsTitle, currentView, isCurrentUserFavorite, miniDescribe, addUserFullName, newsCatregoryName, currentLikeCount, insertDate, id}) => {
    // console.log(currentUserIsDissLike)
    const handleLike = async (e) => {
        if(currentUserIsLike===false){
          await addNewsLike(e)
        }else{
          // const CourseLikeId = {CourseLikeId:id}
          await deleteNewsLike(CourseLikeId)
        }
        setReFetch(old=>old+1)    
      }
return (
    
    <div className=" relative w-[24%] max-md:mt-10 max-sm:w-[95%] max-md:w-[47%] md:max-lg:w-[24%] pb-2 bg-white rounded-[20px] dark:dark:bg-[#29435c] dark:text-[#d1d4c9]">
        <img src={image} className="w-[92%] h-36 md:max-lg:h-[42%] mx-auto border border-[gray] relative bottom-6 rounded-3xl"></img>
        <h1 className="text-[14px] h-6  w-[95%] overflow-hidden max-md:text-[12px] max-lg:text-[9px] font-bold pr-4 relative bottom-5 dark:text-[#d1d4c9]">{newsTitle}</h1>
        <div className="relative flex justify-between bottom-3 pr-4 pl-3 max-md:text-[11px] text-[13px] md:max-lg:text-[10px] text-[#0004ff] dark:text-[#d1d4c9]">
            <h6 className="text-red-700  dark:text-[#e19f9f]">{addUserFullName}</h6>
            <div className='flex items-center'>
                <span className='text-xs max-lg:text-[9px] pl-2'>{currentView}</span>
                <img src={eye} className='w-5 max-lg:w-4 h-5 max-lg:h-4' alt=""></img>
            </div>
        </div>
        <div className="flex gap-3">
            <span className="relative bottom-2 bg-slate-400 mr-4 px-1 pt-1 pb-2 bg-opacity-60 rounded-md text-[12px] md:max-lg:text-[10px] dark:bg-opacity-50 dark:dark:bg-[#556e53]">{newsCatregoryName}</span>
            <img src={isCurrentUserFavorite === true ? saved : save} className='w-5 max-lg:w-4 h-5 max-lg:h-4 cursor-pointer' alt=""></img>
        </div>
        <p className="w-[95%] indent-[8px] h-9 max-lg:h-6 max-md:h-8 pr-2 relative  max-sm:text-[11px]  max-md:text-[10px]  mx-auto text-[12px] md:max-lg:text-[8px]  overflow-hidden dark:text-[#d1d4c9]">{miniDescribe}</p>
        
        <div className="flex justify-between mt-1 pl-3">
        <div className="flex pr-4 gap-2">
            <div className=''>
                <img src={currentUserIsLike === true ? liked : notLiked} className='w-5 max-lg:w-4 h-5 max-lg:h-4 cursor-pointer' alt="" onClick={()=>handleLike(id)}></img>
                <span className='text-xs max-lg:text-[9px] mt-2  pr-[2px]'>{currentLikeCount}</span>
            </div>
            <div className=''>
                <img src={currentUserIsDissLike === true ? disliked : notDisLiked} className='w-5 max-lg:w-4 h-5 max-lg:h-4 cursor-pointer' alt=""></img>
                <span className='text-[12px] max-lg:text-[9px] mt-2  pr-[2px]'>{currentDissLikeCount}</span>
            </div>
        </div>
            <Link to={'/NewsDetail/'+id} className="text-[12px] sm:text-[11px] h-9 pt-2 px-2 my-auto rounded-xl bg-slate-400 dark:dark:bg-[#556e53] dark:text-[#d1d4c9]">جزئیات خبر</Link>
        </div>
        <div  className="border-t border-slate-400 flex items-center justify-between w-[90%] mx-auto pt-2 max-lg:pt-1">
            <span className="text-[13px] md:max-lg:text-[11px]"> تاریخ خبر</span>
            <span className="   max-md:text-[12px] max-lg:text-[11px] text-[13px] max-xl:text-[13px] text-red-700 dark:text-[#d1d4c9]" >{insertDate}  </span>
        </div>
    </div>

);
};

export default Page;
