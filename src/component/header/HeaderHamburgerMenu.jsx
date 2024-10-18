import React from "react";
import { Link } from "react-router-dom";

const HeaderHamburgerMenu = () => {
  // const [isMenuVisible, setIsMenuVisible] = useState(false);

  // Toggle menu visibility

  // const toggleMenu = () => {
  //   setIsMenuVisible(!isMenuVisible);
  // };
  return (
    <div className="drawer drawer-end">
  <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content">
    {/* Page content here */}
        <label htmlFor="my-drawer-4" className="drawer-button text-black btn-primary">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 7.50004C15 7.50004 11.3176 12.5 10 12.5C8.68233 12.5 5 7.5 5 7.5" stroke="#2F2F2F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
    </label>
  </div>
  <div className="drawer-side">
    <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
    <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4 absolute right-0">
      {/* Sidebar content here */}
      <nav className='flex flex-col ml-auto gap-4 justify-center '>
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
    </ul>
  </div>
</div>
  );
};

export { HeaderHamburgerMenu };
