import http from '../interceptor'

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

export const deleteCourseReserve = async(value)=>{
    try {
        const result = await http.delete('/CourseReserve',value)
        return result
    } catch (error) {
        // toast.error(error)
    }
}

// id