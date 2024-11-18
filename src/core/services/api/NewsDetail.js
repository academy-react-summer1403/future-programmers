import http from '../interceptor'

export const getNewsDetail = async()=>{
    try {
        
        const result = await http.get('')
        return result
        
    } catch (error) {
        console.log(error)
    }  
}