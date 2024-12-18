import http from './../interceptor'

export const deleteFavoritCourse = async(data)=>{
    try {
        const result = await http.delete('/Course/DeleteCourseFavorite',{data: data})
        return result
    } catch (error) {
        // toast.error(error)
    }
}
// Needed
// CourseFavoriteId