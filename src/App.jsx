import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './component/layout/Layout'
import Landing from './screens/landing/Landing'
import Courses from './screens/courses/Courses'
import CourseDetail from './screens/courseDetail/CourseDetail'
import Profile from './screens/Profile/Profile'
import Pishkhan from './component/ProfileComponents/Pishkhan/Pishkhan'
import ReserveCourse from './component/ProfileComponents/ReserveCourse/ReserveCourse'
import AcceptCourse from './component/ProfileComponents/AcceptCourse/AcceptCourse'
import EditProfile from './component/ProfileComponents/EditProfile/EditProfile'

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
      ]
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
          path:'EditProfile',
          element:<EditProfile/>
        },                        
      ]
    }
  ])

  return (
    <>
      <RouterProvider router={myRoutes}/>
      
    </>
  )
}

export default App
