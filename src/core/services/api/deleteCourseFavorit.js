import http from './../interceptor'

export const deleteFavoritCourse = async(value)=>{
    try {
        const result = await http.delete('/Course/DeleteCourseFavorite',value)
        return result
    } catch (error) {
        // toast.error(error)
    }
}
// Needed
// CourseFavoriteId