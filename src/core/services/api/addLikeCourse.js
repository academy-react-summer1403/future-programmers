import http from './../interceptor'

export const addLikeCourse = async(id)=>{
    try {
        const result = await http.post(`/Course/AddCourseLike?CourseId=${id}`)
        
        return result
        
    } catch (error) {
        console.log(error)
    }
}