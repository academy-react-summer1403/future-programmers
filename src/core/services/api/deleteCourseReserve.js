import http from './../interceptor'

export const addCourseReserve = async(value)=>{
    try {
        const result = await http.delete('/CourseReserve',value)
        return result
    } catch (error) {
        // toast.error(error)
    }
}

// id