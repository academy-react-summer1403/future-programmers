import { useParams } from 'react-router-dom'
import pic from '../../../public/01.jpg'
import pic1 from '../../../public/Like.empty.png'
import pic2 from '../../../public/Like.red.png'
import http from '../../core/services/interceptor'
import { useEffect, useState } from 'react'
import { comment } from 'postcss'
import AddCourseComment from './AddCourseComment'
import CommentReply from './CommentReply'


function CourseComment() {

  const {id} = useParams();
  const [CommentList, setCommentList] = useState(null);
  const [Count, setCount] = useState(null);
  const [rand, setRand] = useState(0);

  const getComments = async () =>{
  const res = await http.get(`/Course/GetCourseCommnets/${id}`)
  console.log('comments', res)
  setCommentList(res)
  }

  useEffect(() => {
    getComments()
  }, [rand]);

const handleLikeComment = async(commentId)=>{
const res = await http.post(`/Course/AddCourseCommentLike?CourseCommandId=${commentId}`)
setRand(Math.random())
console.log(res)
}


  return (
    <div className='max-lg:hidden  mx-[auto] mt-5 pb-5 dark:text-[#d1d4c9]'>
        <div className='w-[100%] pb-4 bg-white  max-md:mt-0 rounded-[20px] max-md:w-[100%] md:max-lg:w-[100%] dark:bg-[#29435c]'>
            <div className='w-[85%] h-[90%] mx-auto'>
                <h1 className='text-[25px] text-cyan-700 inline dark:text-[#d1d4c9]'>نظرات</h1>
                {CommentList?.map((item)=>{
                  return(
                    <div className=" border border-gray rounded-xl w-[100%] h-fit mt-2 px-2 py-2">
                      <div className="flex relative border-b border-b-gray-300 h-[90px] max-sm:h-20 ">
                        <img src={item.pictureAddress} className='w-20 max-sm:w-14  h-20 max-sm:h-14 p-1 border border-gray rounded-[50%]' />
                        <div className=' mr-2 pt-2 flex gap-2'>
                          <h2 className='mr-2  pr-2 border-r-2 border-gray-300'>کاربر :</h2>
                          <h2 className='flex max-sm:text-[12px] font-bold'>{item.author}</h2>
                          
                          <h2 className=' text-gray-400 max-sm:text-[12px]'>  تاریخ:  </h2>
                          <h2 className=' text-black text-[14px] max-sm:text-[12px]'>{item.insertDate}</h2>
                        </div>
                        <div className='flex max-sm:flex-col absolute left-0 top-2 text-[13px]'>
                          <div onClick={()=>handleLikeComment(item.id)} className='cursor-pointer pr-7 max-sm:pr-5 ml-2 content-center bg-[url(public/like.png)] dark:bg-[url(public/like.dark.png)] [background-size:50%_100%] max-sm:[background-size:35%_75%] [background-position-x:100%] [background-position-y:50%] bg-no-repeat'>{item.likeCount}</div>
                          <div className=' cursor-pointer pr-7 max-sm:pr-5 max-sm:mt-2 content-center bg-[url(public/dislike.png)] dark:bg-[url(public/dislike.dark.png)] [background-size:50%_100%] max-sm:[background-size:30%_75%] [background-position-x:100%] [background-position-y:50%] bg-no-repeat'>{item.disslikeCount}</div>
                        </div>
                      </div>
                      <h2>عنوان : {item.title}</h2>
                      <p className='w-full max-h-12 overflow-x-hidden overflow-y-scroll rounded-lg mt-1 pr-2 max-sm:pl-[8px] max-sm:text-[12px] '>{item.describe}</p>
                      <div className='flex justify-end pt-2 text-[11px]'>
                        <button onClick={()=>setCount(item.id)} className='hover:text-red-600 cursor-pointer'>مشاهده پاسخ ها</button>
                      </div>
                      {Count === item.id && <CommentReply commentId={item.id}/>}
                      
                    </div>

                  )
                })}
                <AddCourseComment/>
            </div>
        </div>
    </div> 
  )
}

export default CourseComment