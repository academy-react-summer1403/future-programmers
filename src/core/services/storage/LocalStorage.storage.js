export const setData = (key , data)=> {
    localStorage.setItem(key, json.stringify(data));

}

export const  getdata =(key) => {
    const result = json.parse(localStorage.getItem(key));
    return result
}