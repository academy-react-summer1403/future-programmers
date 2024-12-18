import http from '../interceptor'

export const addNewsFavorite = async(id)=>{
    try {
        const result = await http.post(`/News/AddFavoriteNews?NewsId=${id}`)
        
        
        return result
        
    } catch (error) {
        console.log(error)
    }
}

// NewsId

export const deleteFavoritNews = async(value)=>{
    try {
        const result = await http.delete('/News/DeleteFavoriteNews',value)
        return result
    } catch (error) {
        // toast.error(error)
    }
}

// deleteEntityId