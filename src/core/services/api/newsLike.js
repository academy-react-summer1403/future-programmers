import http from '../interceptor'

export const addNewsLike = async(id)=>{
    try {
        const result = await http.post(`/News/NewsLike/:${id}`)
        
        return result
        
    } catch (error) {
        console.log(error)
    }
}

// newsid

export const deleteNewsLike = async(value)=>{
    try {
        const result = await http.delete('/News/DeleteLikeNews',value)
        return result
    } catch (error) {
        console.log(error)
    }
}

// "deleteEntityId"