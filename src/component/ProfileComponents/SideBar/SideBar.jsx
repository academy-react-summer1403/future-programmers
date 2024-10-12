import React from 'react'
import { Link } from 'react-router-dom'

const SideBar = () => {
  return (
    <div className='flex flex-col'>
        <Link to='/profile'>pishkhan</Link>
        <Link to='/profile/ReserveCourse'>ReserveCourse</Link>
        <Link to='/profile/AcceptCourse'>AcceptCourse</Link>
        <Link to='/profile/EditProfile'>EditProfile</Link>
    </div>
  )
}

export default SideBar