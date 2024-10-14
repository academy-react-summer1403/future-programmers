import React from 'react'
import CourseCard from '../../CourseCard/CourseCard'

const Pishkhan = () => {
  const Course=[
    {image:'../../../../public', topic:'آموزش ری اکت 1', explain:'آموزش می دهیم. آموزش نمی دهیم', teacher:'استاد یک',time:'12:12:12', price:'رایگان!'},
    {image:'../',topic:'آموزش ری اکت 2', explain:'آموزش می دهیم. آموزش می دهیم', teacher:'استاد دو',time:'12:12:12', price:'رایگان!'},
    {image:'./public/item1.png',topic:'آموزش ری اکت 3', explain:'آموزش می دهیم. آموزش نمی دهیم', teacher:'استاد سه',time:'12:12:12', price:'رایگان!'},
    {image:'public/01.jpg',topic:'آموزش ری اکت 3', explain:'آموزش می دهیم. آموزش نمی دهیم', teacher:'استاد سه',time:'12:12:12', price:'رایگان!'},
    {image:'public/01.jpg',topic:'آموزش ری اکت 3', explain:'آموزش می دهیم. آموزش نمی دهیم', teacher:'استاد سه',time:'12:12:12', price:'رایگان!'},
    {image:'public/01.jpg',topic:'آموزش ری اکت 3', explain:'آموزش می دهیم. آموزش نمی دهیم', teacher:'استاد سه',time:'12:12:12', price:'رایگان!'}
]
  return (
    <div className='w-[100%] h-auto mt-6 pt-5 flex flex-row flex-wrap justify-start gap-x-4 laptop:gap-y-24 tablet:gap-y-16'>
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
  )
}

export default Pishkhan