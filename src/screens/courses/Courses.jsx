import {Formik, Field, Form} from 'formik';
import CourseCard from '../../component/CourseCard/CourseCard';
import Accardion from '../../component/accardion/accardion';
import FormField from '../../component/Fields/FormField';
// import UseDarkMood from './UseDarkMood';
import { useEffect, useState } from 'react';


const Courses = () => {
  const Course=[
    {image:'public/01.jpg', topic:'آموزش ری اکت 1', explain:'آموزش می دهیم. آموزش نمی دهیم', teacher:'استاد یک',time:'12:12:12', price:'رایگان!'},
    {image:'public/01.jpg',topic:'آموزش ری اکت 2', explain:'آموزش می دهیم. آموزش می دهیم', teacher:'استاد دو',time:'12:12:12', price:'رایگان!'},
    {image:'public/01.jpg',topic:'آموزش ری اکت 3', explain:'آموزش می دهیم. آموزش نمی دهیم', teacher:'استاد سه',time:'12:12:12', price:'رایگان!'},
    {image:'public/01.jpg',topic:'آموزش ری اکت 3', explain:'آموزش می دهیم. آموزش نمی دهیم', teacher:'استاد سه',time:'12:12:12', price:'رایگان!'}
]


return (
<div className='bg-[#e6e5e5] font-[sans] dark:bg-slate-700'>

        <div className='flex flex-row-reverse flex-wrap gap-x-2 gap-y-4 w-[90%] mx-[auto]'>
        <div className='w-[100%] flex justify-between'>
            <h1 className='dark:text-white'>دوره ها</h1>
            <h1 className='dark:text-white'> 5 دوره آموزشی</h1>
        </div>
        <div className='w-[100%] laptop:h-[115px] tablet:h-[80px] bg-white rounded-[20px] flex items-center mt-[10px] gap-5 dark:bg-slate-600'>
            <Formik initialValues={{SearchCourse:'', New:'',BestSelling:'',Expensive:'',Cheap:'' , sort:null }}>
                <Form  className='w-[100%] laptop:h-[115px] tablet:h-[80px] bg-white rounded-[20px] flex items-center  laptop:gap-4 tablet:gap-0 dark:bg-black'>
            
                    <Field className='laptop:p-4 tablet:p-2 laptop:w-[25%] tablet:w-[190px] mr-[1%] bg-[url(public/search.svg)] bg-no-repeat bg-left laptop:text-base tablet:text-[13px] font-bold laptop:[background-size:35px] tablet:[background-size:25px] shadow-inner shadow-slate-400 rounded-xl dark:bg-slate-500 dark:text-white' type='text' placeholder='جستجوی دوره' name='SearchCourse'  />
                    <h1 className='font-bold laptop:pr-2 laptop:mr-4 laptop:text-[15px] tablet:text-[11px] tablet:w-[65px] tablet:mr-[10px] laptop:w-[97px] dark:text-white'>مرتب سازی</h1>

                    <FormField FieldTopic={'جدیدترین'} name={'New'}/>
                    <FormField FieldTopic={'پرفروش ترین'} name={'BestSelling'}/>
                    <FormField FieldTopic={'گران ترین'} name={'Expensive'}/>
                    <FormField FieldTopic={'ارزان ترین'} name={'Cheap'}/>
                    
                    <button type='submit'  className='bg-slate-400 laptop:p-4 tablet:p-2 laptop:text-[16px] tablet:text-[14px]  rounded-xl laptop:mr-[180px] tablet:mr-[40px] dark:text-white'>جستجو کن</button>
                </Form>
            </Formik>
        </div>
        <div className='flex mobile:flex-wrap tablet:flex-nowrap mobile:max-tablet:justify-center'>
            <div className='laptop:w-[310px] tablet:w-[25%] h-fit pb-3 mt-[19px] ml-5 rounded-[20px] bg-white dark:bg-slate-600'> 
                <h2 className='mr-2 mt-1 tablet:text-[15px] dark:text-white'>فیلترها</h2>
                <Accardion />

                <div className="collapse collapse-arrow shadow shadow-black mt-2 w-[97%] mx-auto">
                    <input type="checkbox" name="my-accordion-2" />
                    <div className="collapse-title laptop:text-[14px] tablet:text-[12px]"> قیمت</div>
                    <div className="collapse-content">
                        {/* <p>hello</p> */}
                        <output  className='block text-center text-[red]'>   0 </output>
                        <span className='relative bottom-[23px]'> از </span>
                        <input type="range" min={0} max="10000000" value="0" step='50000' className="range" />

                        <output className='block text-center text-[red] mt-[10px]'>  1000000 </output>
                        <span className='relative bottom-[24px]'> تا </span>
                        <input type="range" min={0} max="1000000" value="1000000" step='50000' className="range" /> 		
                    </div>
                </div>              
            </div>
            <div className='w-[72%] h-auto mt-6 pt-5 flex flex-row flex-wrap justify-start gap-x-4 laptop:gap-y-24 tablet:gap-y-16'>
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
    <div className='w-[100%] text-center h-14 my-auto'>
        <div className="join laptop:y-5 tablet:my-1">
            <button className="join-item btn dark:bg-gray-400">1</button>
            <button className="join-item btn btn-active dark:bg-gray-400">2</button>
            <button className="join-item btn dark:bg-gray-400">3</button>
            <button className="join-item btn dark:bg-gray-400">4</button>
        </div>
    </div>
    
</div>
)
}

export default Courses