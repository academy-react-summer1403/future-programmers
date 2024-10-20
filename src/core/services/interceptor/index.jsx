import axios from "axios";

const baseURL = import.meta.env.VIT_BASE_URL

const instance = axios.create({
    baseURL: baseURL
})

const onSuccess = (response) =>{
    return response.data;
}
const onError = (err) =>{
    console.log(err)
    if(err.response.status === 404){
        alert('API not found')
    }
    return Promise.reject(err);
}

instance.interceptors.response.use(onSuccess,onError );

export default instance;