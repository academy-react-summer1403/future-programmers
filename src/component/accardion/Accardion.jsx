import { useEffect, useState } from 'react'
import CheckBox from './checkBox'
import { categories, levelCourse } from '../../core/services/api/course';
import {typeCourse} from '../../core/services/api/course';
import CheckBox1 from './CheckBox1';
import CheckBox2 from './CheckBox2';
import {Slider} from "antd"

function Accardion({handleCategoryFilter, handleTypeCourseFilter, handlelevelCourseFilter, setCostUp, setCostDown, costUp, costDown}) {

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
        <div className="collapse collapse-arrow shadow shadow-black mt-2 w-[95%] mx-auto dark:bg-[#556e53]">
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

        <div className="collapse collapse-arrow shadow shadow-black mt-2 w-[95%] mx-auto dark:bg-[#556e53]">
        <input type="checkbox" name="my-accordion-2" />
        <div className="collapse-title text-[14px] md:max-lg:text-[12px]"> قیمت</div>
        <div className="collapse-content">
            
          <output className='pr-[15px]'>از {costDown}</output>
          <output className='pr-[15px]'> تا {costUp} </output>
            <Slider 
              id='cost'
              max={20000000}
              min={1}
              className="border w-[90%] mx-auto"
              onChange={(f)=>setCostDown(f[0]) & setCostUp(f[1])}
              range
              step={100000}
              tooltipVisble={false}
              defaultValue={[1,20000000]}
              />
        </div>
        </div>

        <div className="collapse collapse-arrow shadow shadow-black mt-2 w-[95%] mx-auto dark:bg-[#556e53]">
            <input type="checkbox" name="my-accordion-2" />
            <div className="collapse-title text-[14px] md:max-lg:text-[12px]"> قیمت</div>
            <div className="collapse-content">
            <output className='pr-[15px]'>از {costDown}</output>
            <output className='pr-[15px]'> تا {costUp} </output>

            <Slider 
                max={20000000}
                min={0}
                className="border w-[90%] mx-auto"
                onChange={(f)=>setCostDown(f[0]) & setCostUp(f[1])}
                range
                step={100000}
                tooltipVisble={false}
                defaultValue={[1,20000000]}
            />
        </div>
        </div>  
    </>
    
  )
}

export default Accardion