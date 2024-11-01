// import React from 'react'
import HeroSection from '../../component/landingComponent/HeroSection/HeroSection'
import NewCourse from '../../component/landingComponent/NewCourse/NewCourse'
import LastNews from '../../component/landingComponent/LastNews/LastNews'
import Edame from '../../component/landingComponent/edame/edame'
import BestTeacher from '../../component/landingComponent/BestTeacher/BestTeacher'
import Services from '../../component/landingComponent/servic/services'

const Landing = () => {
  return (
    <>
      <HeroSection />
      <NewCourse/>
      <LastNews/>
      <BestTeacher/>
      <Services />
      <Edame/>
    </>
  )
}

export default Landing