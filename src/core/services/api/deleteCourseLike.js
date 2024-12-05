import http from './../interceptor'

export const deleteCourseLike = async(value)=>{
    try {
        const result = await http.delete('/Course/DeleteCourseLike',value)
        return result
    } catch (error) {
        // toast.error(error)
    }
}