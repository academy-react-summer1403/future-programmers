import http from '../interceptor'

export const addNewsDisLike = async(id)=>{
    try {
        const result = await http.post(`/News/NewsDissLike/:${id}`)
        
        return result
        
    } catch (error) {
        console.log(error)
    }
}

// newsid
