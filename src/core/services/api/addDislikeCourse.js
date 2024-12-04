import http from './../interceptor'

export const addDislikeCourse = async(id)=>{
    try {
        const result = await http.post(`/Course/AddCourseDissLike?CourseId=${id}`)
        
        
        return result
        
    } catch (error) {
        console.log(error)
    }
}