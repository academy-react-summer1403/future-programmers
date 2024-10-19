import React from 'react'
import {Header} from '../header/Header'
import {Footer} from '../footer/Footer'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className='dark:bg-gray-500'>
        <Header/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default Layout