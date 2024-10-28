import http from '../interceptor'

export const getProfileInfo = async () => {
    try {
        const moz = await http.get("/SharePanel/GetProfileInfo")
        return moz 
    } catch (error) {
        console.log(error)
    }
}
