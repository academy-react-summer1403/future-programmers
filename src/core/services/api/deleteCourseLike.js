import http from './../interceptor'

export const deleteCourseLike = async(data)=>{
    try {
        // console.log(value)
        const result = await http.delete('/Course/DeleteCourseLike',{data: data})
        return result
    } catch (error) {
        // toast.error(error)
    }
}