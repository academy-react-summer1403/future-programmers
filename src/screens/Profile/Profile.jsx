import React from 'react'
import SideBar from '../../component/ProfileComponents/SideBar/SideBar'
import ProfileHeader from '../../component/ProfileComponents/ProfileHeader/ProfileHeader'
import { Outlet } from 'react-router-dom'

const Profile = () => {
  return (
    <div className='flex justify-around'>
        <div className='w-[30%]'>
            <SideBar/>
        </div>
        <div className='w-[60%]'>
            <ProfileHeader/>
            <Outlet/>
        </div>
    </div>
  )
}

export default Profile