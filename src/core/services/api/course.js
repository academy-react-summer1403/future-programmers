import http from '../interceptor'

export const getlist=async(sort ,search, categoryFilter, typeCourseFilter)=>{
    try {
        // console.log(categoryFilter)
        const queryObj = {RowsOfPage: 9}

        if(sort!== "" && sort!==null) queryObj.SortingCol = sort;
        if(search!== "" && search!==null) queryObj.Query = search;
        if(categoryFilter && categoryFilter.length > 0){
            queryObj.ListTech = categoryFilter.join(',');
            queryObj.TechCount = 1;
        }
        if(typeCourseFilter!==''&& typeCourseFilter!==null) queryObj.CourseTypeId = typeCourseFilter;

        const result=await http.get('/Home/GetCoursesWithPagination',{params:queryObj})
        // console.log("result",result)
        return result
    } catch (error) {
        console.log(error)
    }
}

export const categories = async()=>{
    try {
        const result=await http.get('/Home/GetTechnologies')
        
        return result
    } catch (error) {
        console.log(error)
    }
}
export const typeCourse = async()=>{
    try {
        const result= await http.get('/CourseType/GetCourseTypes')
         
        return result 
    } catch (error) {
        console.log(error)
        
    }
}