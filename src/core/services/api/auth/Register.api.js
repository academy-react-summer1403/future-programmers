import http from "../../interceptor"


export const signUpOneAPI = async(phone)=>{
    try {
        const responce = await http.post('/Sign/SendVerifyMessage',phone)
        return responce
    } catch (error) {
        return false
    }
}
export const signUpTwoAPI = async(code)=>{
    try {
        const responce = await http.post('/Sign/VerifyMessage',code)
        return responce
    } catch (error) {
        return false
    }
}
export const signUpThreeAPI = async(user)=>{
    try {
        const responce = await http.post('/Sign/Register',user)
        return responce
    } catch (error) {
        return false
    }
}