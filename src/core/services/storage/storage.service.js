import { json } from "react-router-dom";

const setItem = (key , value) => {
    localStorage.setItem(key, json.stringify(value));
}

const  getItem =(key) => {
    if(localStorage.getItem(key)) return json.parse(localStorage.getItem(key));
    return false
}

const removeItem = (key) => {
    if(getItem(key) === false) return false;
    localStorage.removeItem(key);

}
const clearStorage = () =>{
    localStorage.clear();

}
export {setItem , getItem , removeItem , clearStorage}