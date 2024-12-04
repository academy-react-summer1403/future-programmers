import http from '../interceptor'

export const getCardNews = async(search)=>{
    try {
        const queryObj = {RowsOfPage: 8}
        // if(RowsOfPage!== "" && RowsOfPage!==null) queryObj.RowsOfPage = RowsOfPage;
        // if(PageNumber!== "" && PageNumber!==null) queryObj.PageNumber = PageNumber;
        // if(sort!== "" && sort!==null) queryObj.SortingCol = sort;
        if(search!== "" && search!==null) queryObj.Query = search;
        const result = await http.get('/News',{params:queryObj})
        return result
        
    } catch (error) {
        console.log(error)
    }  
} 



