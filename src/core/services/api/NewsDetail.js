import http from '../interceptor'

export const getNewsDetail = async(id)=>{
    try {
        
        const result = await http.get(`/News/${id}`)
        return result
        
    } catch (error) {
        console.log(error)
    }  
}