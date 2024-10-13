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
    }
  ])

  return (
    <>
      <RouterProvider router={myRoutes}/>
      
    </>
  )
}

export default App
