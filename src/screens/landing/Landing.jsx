// import React from 'react'
import HeroSection from '../../component/landingComponent/HeroSection/HeroSection'
import NewCourse from '../../component/landingComponent/NewCourse/NewCourse'
import LastNews from '../../component/landingComponent/LastNews/LastNews'
import BestTeacher from '../../component/landingComponent/BestTeacher/BestTeacher'
import Services from '../../component/landingComponent/servic/services'
import Statistics from '../../component/landingComponent/Statistics/Statistics'
import Edame from '../../component/landingComponent/edame/edame'


const Landing = () => {
  return (
    <div className='bg-[#f3f4f6] font-[sans] dark:bg-[#152a38] bg-[url(public/Path17.png)] [background-size:49%_24%] [background-position-x:117%] [background-position-y:2%] bg-no-repeat '>
      <HeroSection />
      <NewCourse/>
      <LastNews/>
      <BestTeacher/>
      <Services />
      <Statistics />
      <Edame/>
    </div>
  )
}

export default Landing