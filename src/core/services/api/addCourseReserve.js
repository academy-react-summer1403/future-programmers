import http from './../interceptor'

export const addCourseReserve = async(value)=>{
    try {
        const result = await http.post('/CourseReserve/ReserveAdd',value)
        return result
    } catch (error) {
        // toast.error(error)
    }
}
// needed 
// courseId