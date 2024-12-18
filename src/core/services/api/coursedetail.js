import http from '../interceptor'

export const getCourseDetail = async(id)=>{
    try {
        
        const result = await http.get(`/Home/GetCourseDetails?CourseId=${id}`)
        // console.log('qqq',id)
        return result
        
        
    } catch (error) {
        console.log(error)
    }  
} 