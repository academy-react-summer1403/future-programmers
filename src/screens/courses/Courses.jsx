import {Formik, Field, Form} from 'formik';
import CourseCard from './CourseCard';
import { useState } from 'react';
import Accardion from '../../Components/Accardion';

const Courses = () => {
  const Course=[
    {image:'public/01.jpg', topic:'آموزش ری اکت 1', explain:'آموزش می دهیم. آموزش نمی دهیم', teacher:'استاد یک',time:'12:12:12', price:'رایگان!'},
    {image:'public/01.jpg',topic:'آموزش ری اکت 2', explain:'آموزش می دهیم. آموزش می دهیم', teacher:'استاد دو',time:'12:12:12', price:'رایگان!'},
    {image:'public/01.jpg',topic:'آموزش ری اکت 3', explain:'آموزش می دهیم. آموزش نمی دهیم', teacher:'استاد سه',time:'12:12:12', price:'رایگان!'},
    {image:'public/01.jpg',topic:'آموزش ری اکت 3', explain:'آموزش می دهیم. آموزش نمی دهیم', teacher:'استاد سه',time:'12:12:12', price:'رایگان!'}
]

// const FilterState=(topic)=>{
//     setCourse(Course.filter((f)=>f.course === Course.topic))
// }

return (
<div className='bg-[#a09f9f] font-[sans]'>

        <div className='flex flex-row-reverse flex-wrap gap-x-2 gap-y-4 w-[90%] mx-[auto]'>
        <div className='border-[1px_solid_red] w-[100%] flex justify-between'>
            <h1>دوره ها</h1>
            <h1> 5 دوره آموزشی</h1>
        </div>
        <div className='w-[100%] h-[115px] bg-white rounded-[20px] flex items-center mt-[10px] gap-5'>
            <Formik initialValues={{SearchCourse:'', New:'',BestSelling:'',Expensive:'',Cheap:'' , sort:null }}>
                <Form  className='w-[100%] h-[115px] bg-white rounded-[20px] flex items-center mt-[10px] gap-5'>
            
                    <Field className='p-5 mr-[1%] bg-[url(public/search.svg)] bg-no-repeat bg-left text-base font-bold [background-size:35px] shadow-inner shadow-slate-400 rounded-xl' type='text' placeholder='جستجوی دوره' name='SearchCourse'  />
                    <h1 className='font-bold pr-2'>مرتب سازی</h1>

                    <Field className='hidden' type='radio'  name='New'  />
                    <label htmlFor='#' className='cursor-pointer pr-4 checked:[text-[red] font-bold]'>جدیدترین</label>

                    <Field className='hidden' type='radio'  name='BestSelling'  />
                    <label htmlFor='#' className='cursor-pointer checked:[text-[red] font-bold]'>پرفروش ترین</label>

                    <Field className='hidden' type='radio'  name='Expensive'  />
                    <label htmlFor='#' className='cursor-pointer checked:[text-[red] font-bold]'>گران ترین</label>

                    <Field className='hidden' type='radio'  name='Cheap'  />
                    <label htmlFor='#' className='cursor-pointer checked:[text-[red] font-bold]'>ارزان ترین</label>
                    

                    <button type='submit' className='bg-slate-400 p-3 rounded-xl'>جستجو کن</button>
                </Form>
            </Formik>
        </div>
        <div className='flex'>
        <div className='w-[310px] h-fit pb-3 mt-[19px] ml-5 rounded-[20px] bg-white '> 
            <h2 className='mr-2 mt-1'>فیلترها</h2>
            <Accardion />
         
            <div className="collapse collapse-arrow shadow shadow-black mt-2 w-[97%] mx-auto">
                <input type="checkbox" name="my-accordion-2" />
                <div className="collapse-title text-[14px]"> قیمت</div>
                <div className="collapse-content">
                    <p>hello</p>
                </div>
            </div>              
        </div>
        <div className='w-[72%] h-auto mt-6 pt-5 flex flex-row flex-wrap justify-start gap-x-4 gap-y-24'>
            {Course.map((item, index)=>{
                return(
                    <CourseCard 
                    key={index}
                    image={item.image}
                    topic={item.topic} 
                    explain={item.explain} 
                    teacher={item.teacher} 
                    time={item.time} 
                    price={item.price} />  
                );   
            })}             
        </div>
        </div>

      
    </div>
    <div className='w-[100%] text-center'>
        <div className="join my-5">
            <button className="join-item btn">1</button>
            <button className="join-item btn btn-active">2</button>
            <button className="join-item btn">3</button>
            <button className="join-item btn">4</button>
        </div>
    </div>
    
</div>
)
}

export default Courses