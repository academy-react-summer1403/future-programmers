import { useEffect, useState } from 'react'
import CheckBox from './checkBox'
import { categories, levelCourse } from '../../core/services/api/course';
import {typeCourse} from '../../core/services/api/course';
import CheckBox1 from './CheckBox1';
import CheckBox2 from './CheckBox2';

function Accardion({handleCategoryFilter, handleTypeCourseFilter, handlelevelCourseFilter}) {

   const [category, setCategory] = useState([]);
   const [typeCourses, setTypeCourses] = useState([]);
   const[levelCourses, setLevelCourses] = useState([]);
   
    
   const getCategories = async ()=>{
    try {
        const result = await categories();
        setCategory(result);
        
    } catch (error) {
        console.log(error)
    }
   }

//    type 
   const getTypeCourse = async ()=>{
    try {
        const result = await typeCourse();
        setTypeCourses(result);
    } catch (error) {
        console.log(error)
    }
   }

// level 
   const getLevelCourse = async ()=>{
    try {
        const result = await levelCourse();
        setLevelCourses(result)
    } catch (error) {
        console.log(error)
    }
   }

    useEffect(()=>{
        getCategories();
        getTypeCourse();
        getLevelCourse();
    },[])
  return (
    <>
        <div className="collapse collapse-arrow shadow shadow-black mt-2 w-[95%] mx-auto max-md:w-[100%] max-md:mr-0  dark:bg-[#556e53]">
            <input type="checkbox" name="my-accordion-2"  />
            <div className="collapse-title text-[14px] md:max-lg:text-[12px]">دسته بندی</div>
            <div className="collapse-content" >
                {category?.map((item, index)=>  <CheckBox key={index} topic={item.techName} id={item.id} handleCategoryFilter={handleCategoryFilter} />)}
            </div>
        </div>

        <div className="collapse collapse-arrow shadow shadow-black mt-2 w-[95%] mx-auto dark:bg-[#556e53]">
            <input type="checkbox" name="my-accordion-2" />
            <div className="collapse-title text-[14px] md:max-lg:text-[12px]">نوع دوره</div>
            <div className="collapse-content">
                {typeCourses?.map((item,index)=> <CheckBox1 key={index} topic={item.typeName} id={item.id} handleTypeCourseFilter={handleTypeCourseFilter}/>)}
            </div>
        </div>

        <div className="collapse collapse-arrow shadow shadow-black mt-2 w-[95%] mx-auto dark:bg-[#556e53]">
            <input type="checkbox" name="my-accordion-2"  />
            <div className="collapse-title text-[14px] md:max-lg:text-[12px]">سطح دوره</div>
            <div className="collapse-content">
                {levelCourses?.map((item, index)=> <CheckBox2 key={index} topic={item.levelName} id={item.id} handlelevelCourseFilter={handlelevelCourseFilter}/>)}
            </div>
        </div>
    </>
    
  )
}

export default Accardion