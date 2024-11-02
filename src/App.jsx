import { useState } from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './component/layout/Layout'
import Landing from './screens/landing/Landing'
import Courses from './screens/courses/Courses'
import CourseDetail from './screens/courseDetail/CourseDetail'
import NewsDetail from './screens/newsDetail/NewsDetail'
import Profile from './screens/Profile/Profile'
import Pishkhan from './component/ProfileComponents/Pishkhan/Pishkhan'
import ReserveCourse from './component/ProfileComponents/ReserveCourse/ReserveCourse'
import AcceptCourse from './component/ProfileComponents/AcceptCourse/AcceptCourse'
import EditProfile from './component/ProfileComponents/EditProfile/EditProfile'
import FavoriteNews from './component/ProfileComponents/FavoriteNews/FavoriteNews'
import FavoriteCourse from './component/ProfileComponents/FavoriteCourse/FavoriteCourse'
import StepOne from './screens/register/StepOne'
import StepTwo from './screens/register/StepTwo'
import StepThree from './screens/register/StepThree'
import SingIn from './screens/singIn/singIn'
import News from './screens/page news/News'
import UploadImage from './component/ProfileComponents/UploadImage/UploadImage'
import NotFound from './screens/notFound/NotFound'
import Error from './screens/Error/Error'




function App() {
  const myRoutes = createBrowserRouter([
    {
      path:'/',
      element:<Layout/>,
      errorElement:<Error />,
      children:[
        {
          path:'',
          element:<Landing/>,
          errorElement:<Error />
        },
        {
          path:'courses',
          element:<Courses/>,
          errorElement:<Error />
        },
        {
          path:'coursedetail',
          element:<CourseDetail/>,
          errorElement:<Error />
        },
        {
          path:'/news',
          element:<News/>,
          errorElement:<Error />
        },
        {
          path:'newsdetail',
          element:<NewsDetail/>,
          errorElement:<Error />
        },
      ]
    },
    {
      path:'/stepone',
      element:<StepOne/>,
      errorElement:<Error />
    }, 
    {
      path:'/steptwo',
      element:<StepTwo/>,
      errorElement:<Error />
    },     
    {
      path:'/stepthree',
      element:<StepThree/>,
      errorElement:<Error />
    },  
    {
      path:'/singIn',
      element:<SingIn/>,
      errorElement:<Error />
    },





    {
      path:'/profile',
      element:<Profile/>,
      errorElement:<Error />,
      children:[
        {
          path:'pishkhan',
          element:<Pishkhan/>,
          errorElement:<Error />
        },
        {
          path:'ReserveCourse',
          element:<ReserveCourse/>,
          errorElement:<Error />
        }, 
        {
          path:'AcceptCourse',
          element:<AcceptCourse/>,
          errorElement:<Error />
        }, 
        {
          path:'FavoriteNews',
          element:<FavoriteNews/>,
          errorElement:<Error />
        }, 
        {
          path:'FavoriteCourse',
          element:<FavoriteCourse/>,
          errorElement:<Error />
        }, 
        
        {
          path:'EditProfile',
          element:<EditProfile/>,
          errorElement:<Error />
        },  
        
        {
          path:'UploadImage',
          element:<UploadImage/>,
          errorElement:<Error />
        },
      
      ]
    },
    {
      path:'*',
      element:<NotFound/>
    }
    
  ])

  return (
    <>
      <RouterProvider router={myRoutes}/>
      
    </>
  )
}

export default App
