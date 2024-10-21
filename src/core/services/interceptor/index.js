
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
  console.log(err);
  return Promise.reject(err);
};

instance.interceptors.response.use(onSuccess, onError);

instance.interceptors.request.use((opt) => {
  return opt;
});

export default instance;
