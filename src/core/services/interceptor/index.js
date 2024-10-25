
import axios from "axios";
const baseURL = import.meta.env.VITE_BASE_URL;

const instance = axios.create({
  baseURL: baseURL,
});

const onSuccess = (response) => {
//   console.log("response", response);

  return response.data;
};

const onError = (err) => {
    // console.log(err);

    // if(err.response.status === 401){
    //     // clearStorage()
    //     removeItem('token');
    //     window.location.pathname = '/' // or '/login'
    // }

    // if(err.response.status >= 400 && err.response.status < 500){
    //     // alert("Client request error: " + err.response.status);
    // }
    return Promise.reject(err);
}

instance.interceptors.response.use(onSuccess, onError);

instance.interceptors.request.use((opt) => {
  return opt;
});

export default instance;
