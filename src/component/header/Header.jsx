import React from 'react';
import { Link } from 'react-router-dom';

// Header Component
const Header = () => {

  const handleDark = () =>{
    document.documentElement.classList.toggle('dark')
  }
  return (
    <header className="flex justify-between items-center w-full py-4 px-6 bg-white shadow-md dark:bg-gray-400 ">


      {/* Right Section: Logo */}
      <div className="flex items-center ">
        <img src="header icon.png" alt="" className="w-10 h-10" />
        <span className="ml-2 text-xl font-bold"></span>
        <div className='md:hidden mr-2'>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15 7.50004C15 7.50004 11.3176 12.5 10 12.5C8.68233 12.5 5 7.5 5 7.5" stroke="#2F2F2F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </div>
      </div>

      {/* Middle Section: Links */}
      <nav className='md:flex hidden ml-auto gap-4 '>
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
      <div className="flex gap-4 me-10">
        <button onClick={handleDark}>
          <img src="./moon.png" alt="" />
        </button>
        <Link to='/profile'>
          <img src="./profile-user.png" alt="" />
        </Link>

      </div>

    </header>
  );
};

export { Header }
