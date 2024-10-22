import http from '../interceptor'

export const getlist=async()=>{
    try {
        const result=await http.get('/Home/GetCoursesWithPagination')
        // console.log("result",result)
        return result
    } catch (error) {
        console.log(error)
    }
}