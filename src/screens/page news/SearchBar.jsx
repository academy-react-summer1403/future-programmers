import React from 'react'
import {FaSearch} from 'react-icons/fa'
const SearchBar = () => {
return (

    <div className='w-full  flex flex-wrap bg-[#F3F4F6]'>

    <div className=' w-4/5 h-28  m-auto rounded-lg bg-[#fff] mt-11 mb-7'>
    
    

    <div className='flex items-center justify-between  p-8 bg-width-100 rounded-md shadow-md font-bold'>
    <div className='flex items-center flex-grow   w-12'>
        <input type="text"
        placeholder=' جستجو دوره'
        className=' rounded-md p-2 w-22 text-2xl focus:outline-none focus:right-2 focus:ring-blue-500  '

        />
        <button className='bg-white-500  text-gray-500 rounded-r-md p-2 '> 
            <FaSearch/>

        </button>
    </div>

    <div className="flex space-x-4 ml-[30%] gap-2 ">
    <button className="text-gray-700 hover:text-blue-500 text-2xl font-bold"> مرتب سازی|</button>
        <button className="text-[#8D8D8D] text-2xl hover:text-blue-500">جدیدترین</button>
        <button className="text-[#8D8D8D] text-2xl hover:text-blue-500">قدیمی‌ترین</button>
    </div>
    </div>
</div>
    </div>

)
}

export default SearchBar
