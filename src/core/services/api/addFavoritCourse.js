import http from './../interceptor'

export const addFavoritCourse = async(value)=>{
    try {
        const result = await http.post('/Course/AddCourseFavorite',value)
        return result
    } catch (error) {
        // toast.error(error)
    }
}