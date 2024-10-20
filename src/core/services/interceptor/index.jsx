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
    if(err.response.status >= 404 && err.response.status < 500){
        alert('Clinet error:'+ err.response.status)
    }
    return Promise.reject(err);
}

instance.interceptors.response.use(onSuccess,onError );


instance.interceptors. request.use((option) =>{
    option.headers['MessageTest'] = "Hello world!";
    return option;
})

export default instance;