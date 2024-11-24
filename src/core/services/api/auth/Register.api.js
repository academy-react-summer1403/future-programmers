import http from "../../interceptor"


export const signUpOneAPI = async(phone)=>{
    try {
        const response = await http.post('/SignIn/SendVerifyMessage',phone)
        return response
    } catch (error) {
        return false
    }
}
export const signUpTwoAPI = async(code)=>{
    try {
        const response = await http.post('/Sign/VerifyMessage',code)
        return response
    } catch (error) {
        return false
    }
}
export const signUpThreeAPI = async(user)=>{
    try {
        const response = await http.post('/SingIn/Register',user)
        return response
    } catch (error) {
        return false
    }
}