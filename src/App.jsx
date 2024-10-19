import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
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




function App() {
  const myRoutes = createBrowserRouter([
    {
      path:'/',
      element:<Layout/>,
      children:[
        {
          path:'',
          element:<Landing/>
        },
        {
          path:'courses',
          element:<Courses/>
        },
        {
          path:'coursedetail',
          element:<CourseDetail/>
        },
        {
          path:'newsdetail',
          element:<NewsDetail/>
        },
      ]
    },
    {
      path:'/stepone',
      element:<StepOne/>
    }, 
    {
      path:'/steptwo',
      element:<StepTwo/>
    },     
    {
      path:'/stepthree',
      element:<StepThree/>
    },  
    {
      path:'/singIn',
      element:<SingIn/>
    },
    {
      path:'/news',
      element:<News/>
    },




    {
      path:'/profile',
      element:<Profile/>,
      children:[
        {
          path:'',
          element:<Pishkhan/>
        },
        {
          path:'ReserveCourse',
          element:<ReserveCourse/>
        }, 
        {
          path:'AcceptCourse',
          element:<AcceptCourse/>
        }, 
        {
          path:'FavoriteNews',
          element:<FavoriteNews/>
        }, 
        {
          path:'FavoriteCourse',
          element:<FavoriteCourse/>
        }, 
        
        {
          path:'EditProfile',
          element:<EditProfile/>
        },                        
      ]
    },
    
  ])

  return (
    <>
      <RouterProvider router={myRoutes}/>
      
    </>
  )
}

export default App
