import http from '../interceptor'

export const getCourseDetail = async()=>{
    try {
        
        const result = await http.get('/Home/GetCoursesWithPagination')
        return result
        
    } catch (error) {
        console.log(error)
    }  
} 