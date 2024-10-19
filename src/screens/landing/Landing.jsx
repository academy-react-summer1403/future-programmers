import React from 'react'
import HeroSection from '../../component/landingComponent/HeroSection/HeroSection'
import NewCourse from '../../component/landingComponent/NewCourse/NewCourse'
import LastNews from '../../component/landingComponent/LastNews/LastNews'
import Edame from '../../component/landingComponent/edame/edame'

const Landing = () => {
  return (
    <>
      <HeroSection />
      <NewCourse/>
      <LastNews/>
      <Edame/>
    </>
  )
}

export default Landing