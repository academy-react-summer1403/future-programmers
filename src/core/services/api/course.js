import http from '../interceptor'

export const getlist=async( sort ,search, categoryFilter, typeCourseFilter, levelCourseFilter,costUp, costDown)=>{
    try {
        const queryObj = {RowsOfPage: 9}
        // if(RowsOfPage!== "" && RowsOfPage!==null) queryObj.RowsOfPage = RowsOfPage;
        // if(PageNumber!== "" && PageNumber!==null) queryObj.PageNumber = PageNumber;
        if(sort!== "" && sort!==null) queryObj.SortingCol = sort;
        if(search!== "" && search!==null) queryObj.Query = search;
        if(categoryFilter && categoryFilter.length > 0){
            queryObj.ListTech = categoryFilter.join(',');
            queryObj.TechCount = 1;
        }
        if(typeCourseFilter!=="" && typeCourseFilter!==null) queryObj.CourseTypeId = typeCourseFilter;
        if(levelCourseFilter!=="" && levelCourseFilter!==null) queryObj.courseLevelId =levelCourseFilter;
        if(costUp!== "" && costUp!==null) queryObj.CostUp = costUp;
        if(costDown!== "" && costDown!==null) queryObj.CostDown = costDown;
        
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
// type 
export const typeCourse = async()=>{
    try {
        const result= await http.get('/CourseType/GetCourseTypes')     
        return result 
    } catch (error) {
        console.log(error)
        
    }
}
// level 
export const levelCourse = async()=>{
    try {
        const result = await http.get('/CourseLevel/GetAllCourseLevel')
        return result
    } catch (error) {
        console.log(error)
    }
}

export const allcourse = async(RowsOfPage, PageNumber,TeacherId)=>{
    try {
        const queryObj = {}
        if(RowsOfPage!== "" && RowsOfPage!==null) queryObj.RowsOfPage = RowsOfPage;
        if(PageNumber!== "" && PageNumber!==null) queryObj.PageNumber = PageNumber;
        if(TeacherId!=="" && TeacherId!==null) queryObj.TeacherId = TeacherId;
        const result=await http.get('/Home/GetCoursesWithPagination',{params:queryObj})
        return result;
    } catch (error) {
        console.log(error)
    }
}