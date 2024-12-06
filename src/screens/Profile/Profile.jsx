import React, { useState } from 'react'
import SideBar from '../../component/ProfileComponents/SideBar/SideBar'
import ProfileHeader from '../../component/ProfileComponents/ProfileHeader/ProfileHeader'
import { Outlet } from 'react-router-dom'

const Profile = () => {

  const [Rand, setRand] = useState(0);
  
  return (
    <div className="flex justify-around dark:bg-[#152a38]">
      <div className="w-[30%]">
        <SideBar Rand={Rand} />
      </div>
      <div className="w-[60%]">
        <ProfileHeader />
        <Outlet Rand={Rand} />
      </div>
    </div>
  );
}

export default Profile