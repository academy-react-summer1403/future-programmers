import CourseCard from '../../component/CourseCard/CourseCard';
import Filters from '../../component/filters/UsualFilters';
import FilterInTop from '../../component/filters/FilterInTop';
import { useEffect, useState } from 'react';
import { getlist } from '../../core/services/api/course';
import pic from '../../../public/item1.png'
import TopSorting from '../../component/topSorting/TopSorting';
import SearchBox from '../../component/SearchBoxInCourses/SearchBox';
// import UseDarkMood from './UseDarkMood';


const Courses = () => {

const [Course, setCourse] = useState([]); 
const [sort, setSort] = useState('')
const [search, setSearch] = useState('')
const [categoryFilter, setCategoryFilter] = useState('')
// type
const [typeCourseFilter, setTypeCourseFilter] = useState('')
// level 
const [levelCourseFilter, setLevelCourseFilter] = useState('')

// course counting 
const CourseCount = Course.length
// console.log( '123',CourseCount);

const getAllCoursesList = async (sort, search, categoryFilter, typeCourseFilter, levelCourseFilter)=>{
    try {
        const result = await getlist(sort, search, categoryFilter, typeCourseFilter,levelCourseFilter)
        setCourse(result.courseFilterDtos)
    } catch (error) {
        console.log(error)
    }
}

useEffect(()=>{
    getAllCoursesList(sort,search,categoryFilter, typeCourseFilter, levelCourseFilter) 
},[sort,search,categoryFilter, typeCourseFilter, levelCourseFilter]);

const handleCategoryFilter= ((e)=>{
    const checkBoxId = e.target.id ;
    if(categoryFilter.includes(checkBoxId)){setCategoryFilter(categoryFilter.filter((id)=>id!==checkBoxId))}
    else{setCategoryFilter([...categoryFilter,checkBoxId])}
})
// type
const handleTypeCourseFilter=((e)=>{
    const checkBoxId = e.target.id;
    setTypeCourseFilter(checkBoxId)
    // console.log('asas', checkBoxId)
})
// level 
const handlelevelCourseFilter =((e)=>{
    const checkBoxId = e.target.id;
    setLevelCourseFilter(checkBoxId)
})

return (
<div className='bg-[#f3f4f6] font-[sans] dark:bg-[#152a38]'>

        <div className='flex flex-row-reverse flex-wrap gap-x-2 gap-y-4 w-[90%] mx-[auto]'>
            <div className='w-[100%] flex justify-between'>
                <h1 className='dark:text-[#d1d4c9]'>دوره ها</h1>
                <h1 className='dark:text-[#d1d4c9]'> {CourseCount} دوره آموزشی</h1>
            </div>
            <div className='w-[100%] h-[90px] max-lg:h-[70px] max-sm:h-[65px] bg-white rounded-[20px] flex items-center mt-[10px] md:max-lg:gap-0 gap-4 dark:bg-[#29435c]'>    
                <SearchBox setSearch={setSearch} />
                <TopSorting setSort={setSort}/>
                {/* <Sorting /> */}
                <FilterInTop  handleCategoryFilter={handleCategoryFilter} handleTypeCourseFilter={handleTypeCourseFilter} />
            </div>
            <div className='flex w-[100%] sm:max-md:flex-wrap md:max-lg:flex-nowrap justify-between'>
                <Filters handleCategoryFilter={handleCategoryFilter} handleTypeCourseFilter={handleTypeCourseFilter} handlelevelCourseFilter={handlelevelCourseFilter} />
                <div className='w-[75%] mt-6 pt-5 h-fit flex flex-wrap justify-start gap-x-5 gap-y-12 max-md:justify-between md:max-lg:gap-y-10 max-md:w-full max-sm:justify-center sm:max-md:gap-y-11'>
                    {Course.map((item, index)=>{
                        return(
                            <CourseCard 
                            key={index}
                            image={item.tumbImageAddress??pic}
                            topic={item.title} 
                            explain={item.describe} 
                            teacher={item.teacherName} 
                            time={item.lastUpdate.toString().slice(11,19)} 
                            price={item.cost.toString().slice(-9,-1)}
                            level={item.levelName}
                            id={item.courseId} />  
                        );   
                    })}            
                </div>
            </div>  
        </div>
        <div className='w-[100%] text-center h-14 my-auto mt-3'>
            <div className="join y-5 md:max-lg:my-1">
                <button className="join-item btn dark:bg-[#29435c] dark:text-[#d1d4c9]">1</button>
                <button className="join-item btn  dark:bg-[#29435c] dark:text-[#d1d4c9]">2</button>
                <button className="join-item btn dark:bg-[#29435c] dark:text-[#d1d4c9]">3</button>
                <button className="join-item btn dark:bg-[#29435c] dark:text-[#d1d4c9]">4</button>
            </div>
        </div>
    
</div>
)
}

export default Courses





{/* <input type="text" placeholder='تو فقط اسم ببر ...' className='border-2 divide-purple-800 outline-0 w-[57%] p-3 rounded-[18px] bg-[url(public/search.svg)] bg-no-repeat bg-left [background-size:35px]'/> */}
