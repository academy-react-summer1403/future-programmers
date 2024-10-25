import http from '../interceptor'

export const getlist=async(sort)=>{
    try {
        const queryObj = {}
        if(sort!== "" && sort!==null) queryObj.SortingCol = sort;
        const result=await http.get('/Home/GetCoursesWithPagination',{params:queryObj})
        // console.log("result",result)
        return result
    } catch (error) {
        console.log(error)
    }
}