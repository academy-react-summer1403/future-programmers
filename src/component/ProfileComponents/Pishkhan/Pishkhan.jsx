import React, { useEffect } from 'react'
import CourseCard from '../../CourseCard/CourseCard'
import axios from 'axios'
import http from '../../../core/services//interceptor'


const Pishkhan = () => {

  const getProfile = async () => {
    const res = await http.get('https://classapi.sepehracademy.ir/api/SharePanel/GetProfileInfo')
    console.log(res)
  }


  useEffect(() => {
    getProfile()
  }, []);

  return (
    <div className='flex flex-wrap gap-10 justify-around mt-10 dark:bg-gray-400'>
      <div className='flex w-1/3 border-2 border-dashed rounded-full px-2 border-violet-400'>
        <h4>نام :</h4>
        <h2>درسا</h2>
      </div>
      <div className='flex w-1/3 border-2 border-dashed rounded-full px-2 border-violet-400'>
        <h4>شهر:</h4>
        <h2>ساری</h2>
      </div>
      <div className='flex w-1/3 border-2 border-dashed rounded-full px-2 border-violet-400'>
        <h4>استان:</h4>
        <h2>مازندران</h2>
      </div>
      <div className='flex w-1/3 border-2 border-dashed rounded-full px-2 border-violet-400'>
        <h4>دوره های من:</h4>
        <h2>3</h2>
      </div>
      <div className='flex w-1/3 border-2 border-dashed rounded-full px-2 border-violet-400'>
        <h4>دوره های رزرو شده:</h4>
        <h2>3</h2>
      </div>
      <div className='flex w-1/3 border-2 border-dashed rounded-full px-2 border-violet-400'>
        <h4>دسترسی شما:</h4>
        <h2>دانشجو</h2>
      </div>
      <div className='flex w-1/3 border-2 border-dashed rounded-full px-2 border-violet-400'>
        <h4>کد ملی:</h4>
        <h2>0987654321</h2>
      </div>
      <div className='flex w-1/3 border-2 border-dashed rounded-full px-2 border-violet-400'>
        <h4>شماره دانشجویی:</h4>
        <h2>0987654321</h2>
      </div>
      <div className='flex w-1/3 border-2 border-dashed rounded-full px-2 border-violet-400'>
        <h4>دوره های مورد علاقه:</h4>
        <h2>5</h2>
      </div>
      <div className='flex w-1/3 border-2 border-dashed rounded-full px-2 border-violet-400'>
        <h4>اخبار مورد علاقه:</h4>
        <h2>7</h2>
      </div>

    </div>
  )
}

export default Pishkhan