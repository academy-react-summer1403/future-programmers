import http from '../interceptor'

export const getCardNews = async()=>{
    try {
        
        const result = await http.get('/News')
        return result
        
    } catch (error) {
        console.log(error)
    }  
} 




