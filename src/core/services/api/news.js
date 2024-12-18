import http from '../interceptor'

export const getCardNews = async(RowsOfPage, PageNumber, search, sort)=>{
    try {
        const queryObj = {}
        if(RowsOfPage!== "" && RowsOfPage!==null) queryObj.RowsOfPage = RowsOfPage;
        if(PageNumber!== "" && PageNumber!==null) queryObj.PageNumber = PageNumber;
        if(search!== "" && search!==null) queryObj.Query = search;
        if(sort!== "" && sort!==null) queryObj.SortingCol = sort;
        const result = await http.get('/News',{params:queryObj})
        return result
        
    } catch (error) {
        console.log(error)
    }  
} 



