import React from 'react';
import { Link } from 'react-router-dom';

// Header Component
const Header = () => {
  return (
    <header className="w-full py-4 px-6 bg-white shadow-md flex justify-between items-center rtl">
      
      
       {/* Right Section: Logo */}
       <div className="flex items-center">
        <img src="public/logo.png" alt="" className="w-10 h-10" />
        <span className="ml-2 text-xl font-bold"></span>
      </div>

      {/* Middle Section: Links */}
      <nav className='flex ml-auto gap-4'>
        <Link href='#home' className='text-gray-700 hover:text-blue-500'>
          خانه
        </Link>

        <Link href='#courses' className='text-gray-700 hover:text-blue-500'>
          دوره ها
        </Link>

        <Link href='#about' className='text-gray-700 hover:text-blue-500'>
         درباره ما
        </Link>

        <Link href='#contact' className='text-gray-700 hover:text-blue-500'>
         تماس با ما
        </Link>
        
      </nav>
      {/* Left Section: Buttons */}
      <div className="flex space-x-4">
        <button className="bg-blue-500 text-white w-11 h-11 px-4 py-2 rounded-full">
          
        </button>
        <button className="bg-gray-500 text-white w-11 h-11 px-4 py-2 rounded-full">
          
        </button>
      </div>

    </header>
  );
};

export {Header}
