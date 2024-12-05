import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import http from '../../core/services/interceptor'

const AddCourseComment = () => {
    const {id} = useParams();
    const [MyTitle, setMyTitle] = useState('');
    const [MyDescribe, setMyDescribe] = useState('');

    const addComment =async () =>{
        // const obj = {name:'ali'}
        // const obj2 = {}
        // obj2.name = 'ali'

        const data = new FormData()
        data.append( 'CourseId' , id)
        data.append( 'Title' , MyTitle)
        data.append( 'Describe' , MyDescribe)

        const res = await http.post( '/Course/AddCommentCourse' ,  data)
        console.log(res);
    }

return (
    <div>
     <input type="text" placeholder=" کامنت" onChange={(e)=>setMyTitle(e.target.value)}/>
      <textarea
        onChange={(e)=>setMyDescribe(e.target.value)}
        placeholder="نظر خود را وارد کنید"
        className="textarea textarea-bordered textarea-xs w-full   border-[2px] border-cyan-700 dark:bg-[#556e53] dark:border-[#556e53] h-[60px] mt-3 dark:placeholder-[#d1d4c9]"
      ></textarea>
      <button onClick={addComment} className="bg-cyan-700 mt-[10px] sm:text-[14px] py-3 px-4 rounded-[10px] text-white dark:bg-[#556e53]">
        ارسال نظر
      </button>
    </div>
   
);
};

export default AddCourseComment;
