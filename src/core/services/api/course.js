import http from '../interceptor'

export const getlist=async(sort ,search)=>{
    try {
        const queryObj = {RowsOfPage: 9}
        if(sort!== "" && sort!==null) queryObj.SortingCol = sort;
        if(search!== "" && search!==null) queryObj.Query = search;
        const result=await http.get('/Home/GetCoursesWithPagination',{params:queryObj})
        // console.log("result",result)
        return result
    } catch (error) {
        console.log(error)
    }
}