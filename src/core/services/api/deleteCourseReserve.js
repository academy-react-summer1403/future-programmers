import http from './../interceptor'

export const deleteCourseReserve = async(value)=>{
    try {
        const result = await http.delete('/CourseReserve',value)
        return result
    } catch (error) {
        // toast.error(error)
    }
}

// id