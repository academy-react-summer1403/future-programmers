// import React from 'react'
import { useParams } from 'react-router-dom'
import { getCourseDetail } from '../../core/services/api/coursedetail'
import CourseComment from './CourseComment'
import CourseExplain from './CourseExplain'
import CourseInformation from './CourseInformation'
import SimilarCourse from './SimilarCourse'
import { useEffect, useState } from 'react'
import pic from '../../../public/item1.png'



function CourseDetail() {
  const TeachersCourses=[
    {image:'public/01.jpg', teacher:' دوره دیگر استاد غنی زاده'},
    {image:'public/01.jpg',teacher:' دوره دیگر استاد غنی زاده'},
    {image:'public/01.jpg',teacher:' دوره دیگر استاد غنی زاده'},
    {image:'public/01.jpg',teacher:' دوره دیگر استاد غنی زاده'}
  ]

  const [detail, setDetail]=useState([])
  console.log('aaa',detail)

  const {id} = useParams();
  // console.log('params', id)

  


  const getDetail = async ()=>{
    try {
        const result = await getCourseDetail(id)
        setDetail(result)
    } catch (error) {
        console.log(error)
    }
}

useEffect(() => {
  getDetail(id);
}, [])

    
  return (
    <div className='bg-[#f3f4f6] relative font-[sans] overflow-hidden dark:bg-[#152a38]'>

      <div className='w-[88%] mx-auto flex'>
        <div className=' relative h-[380px] w-[100%] max-md:h-[250px] md:max-lg:h-[300px] mt-4 rounded-[30px] bg-[url(public/p.01.png)] bg-no-repeat [background-size:100%_100%]'>
            <div className="h-[100%] w-[100%] bg-black opacity-[0.98]  max-sm:opacity-[0.91] rounded-[30px]">
              <h1 className="text-stone-50  text-[24px] max-md:text-[10px] max-sm:text-[11px] max-md:right-[30px] md:max-lg:text-[13px] md:max-lg:right-[38px] font-black absolute top-[40px] right-[65px]">در لاراول Restful API آموزش کاربردی</h1>
              <p className=' text-gray-400 w-[420px] absolute top-[85px] right-[65px] max-md:right-[30px] max-md:w-[205px] max-md:top-[56px] max-md:text-[8px] md:max-lg:top-[60px] md:max-lg:text-[10px] md:max-lg:right-[38px] md:max-lg:w-[251px] max-sm:text-[10px] max-sm:w-[250px] max-sm:top-[60px] max-sm:text-slate-200'> در اینجا یاد می گیرید.ر اینجا یاد می گیرید.ر اینجا یاد می گیرید ر اینجا یاد می گیرید.گیرید.ر اینجا یاد می گیرید.ر ا</p>
              <img src={detail.imageAddress??pic} className='w-[450px] h-[310px] shadow-[8px_-13px_35px_-18px_gray] rounded-[25px] absolute right-[770px] top-[30px]  max-md:right-[334px] max-md:w-[44%] max-md:h-[76%] md:max-lg:right-[406px] md:max-lg:h-[76%] md:max-lg:w-[43%]  max-sm:hidden'></img>
              <h3 className=' text-gray-400 line-through absolute top-[220px] right-[625px] max-md:text-[11px] max-md:right-[240px] max-md:top-[164px] md:max-lg:text-[12px] md:max-lg:top-[175px] md:max-lg:right-[295px]'> تومان 500,000</h3>
              <h2 className=' text-white	text-[22px] font-bold	absolute top-[250px] right-[580px] max-md:text-[13px] max-md:top-[180px] max-md:right-[221px] md:max-lg:text-[14px] md:max-lg:top-[200px] md:max-lg:right-[273px]'>تومان 400,000</h2>
              <button type='Submit' className='bg-cyan-700 text-[white] py-3 px-4 rounded-[10px] absolute top-[242px] right-[70px] max-md:top-[165px] max-md:p-[7px] max-md:text-[11px] max-md:right-[24px] md:max-lg:text-[12px] md:max-lg:right-[38px] md:max-lg:top-[190px] dark:bg-[#556e53]'>خرید نقدی دوره</button>
            </div>  
        </div>
      </div>

      <div className=' flex flex-wrap justify-between w-[88%] mx-auto mt-5 max-sm:mt-3 pb-[30px] overflow-hidden dark:bg-[#152a38]'>
      {/* <CourseExplain/> */}
        <CourseExplain describe={detail.describe}/>
        
        <div className='flex flex-wrap max-md:h-fit w-[33%] gap-y-2 max-lg:w-[100%] md:max-lg:justify-between md:max-lg:mt-5'>
            <CourseInformation 
            teacherName={detail.teacherName}
            cost={detail.cost}
            // techs={detail.techs[0]+', '+detail.techs[1]}
            courseLevelName={detail.courseLevelName}
            capacity={detail.capacity}
            courseStatusName={detail.courseStatusName}
            commentCount={detail.commentCount}
            currentRate={detail.currentRate}
            // insertDate={detail.insertDate.toString().slice(0,10)}
            // startTime={detail.startTime.toString().slice(0,10)}
            // endTime={detail.endTime.toString().slice(0,10)}
            />


          <div className=' w-[99%] md:max-lg:h-fit pb-4 bg-white rounded-[20px] max-md:w-[100%] md:max-lg:w-[47%] dark:bg-[#29435c]'>
            <h1 className='relative right-[30px] top-[10px]  text-[20px] text-cyan-700 inline dark:text-[#d1d4c9]'>دوره های مشابه</h1>
            <div className=' mt-[15px] max-sm:flex max-sm:flex-wrap'>
              {TeachersCourses.map((item,index)=>{
                return(
                  <SimilarCourse 
                  key={index}
                  image={item.image}
                  teacher={item.teacher} />
                )  
              })}
            </div>
          </div> 
        </div>
        
      </div>
      <CourseComment />
    </div>
  )
}


export default CourseDetail



