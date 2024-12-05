import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import http from '../../core/services/interceptor'


const CommentReply = ({commentId}) => {
    const {id} = useParams();
    const [ReplyList, setReplyList] = useState(null);

    const getCourseReply =async () =>{
        const res = await http.get(`/Course/GetCourseReplyComments/${id}/${commentId}`)
        setReplyList(res);
        console.log(data)
    }

    useEffect(() => {
        getCourseReply()
    }, []);


return (
    
    <div>
    
        {ReplyList?.map(item=>{
            return(
                <div>
                    <h2>{item.title}</h2>
                    <p>{item.describe}</p>
                </div>
            )
        })} 
        
    </div>

)
}

export default CommentReply
