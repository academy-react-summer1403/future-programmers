import http from '../interceptor'

export const getFavoriteNews = async () => {
    try {
        const moz = await http.get("/SharePanel/GetMyFavoriteNews")
        return moz 
    } catch (error) {
        console.log(error)
    }
}
