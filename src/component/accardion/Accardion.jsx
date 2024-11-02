import { useEffect, useState } from 'react'
import CheckBox from './checkBox'
import { categories } from '../../core/services/api/course';

function Accardion({handleCategoryFilter}) {

   const [category, setCategory] = useState([]);
   
    
   const getCategories = async ()=>{
    try {
        const result = await categories();
        setCategory(result);
        
    } catch (error) {
        console.log(error)
    }
   }

    useEffect(()=>{
        getCategories();
    },[])
  return (
    <>
        <div className="collapse collapse-arrow shadow shadow-black mt-2 w-[95%] mx-auto max-md:w-[100%] max-md:mr-0  dark:bg-[#556e53]">
            <input type="checkbox" name="my-accordion-2" defaultChecked />
            <div className="collapse-title text-[14px] md:max-lg:text-[12px]">دسته بندی</div>
            <div className="collapse-content" >
                {category?.map((item, index)=>  <CheckBox key={index} topic={item.techName} id={item.id} handleCategoryFilter={handleCategoryFilter} />)}
            </div>
        </div>

        <div className="collapse collapse-arrow shadow shadow-black mt-2 w-[95%] mx-auto dark:bg-[#556e53]">
            <input type="checkbox" name="my-accordion-2" />
            <div className="collapse-title text-[14px] md:max-lg:text-[12px]">نوع دوره</div>
            <div className="collapse-content">

                <CheckBox topic='حضوری' />
                <CheckBox topic='حضوری' />
                <CheckBox topic='حضوری-آنلاین' />
            </div>
        </div>

        <div className="collapse collapse-arrow shadow shadow-black mt-2 w-[95%] mx-auto dark:bg-[#556e53]">
            <input type="checkbox" name="my-accordion-2"  />
            <div className="collapse-title text-[14px] md:max-lg:text-[12px]">سطح دوره</div>
            <div className="collapse-content">
                <CheckBox topic='مبتدی' />
                <CheckBox topic='متوسط' />
                <CheckBox topic='پیشرفته' />
            </div>
        </div>
    </>
    
  )
}

export default Accardion