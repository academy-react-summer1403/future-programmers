import React from 'react';

// Related Links Component
const RelatedLinks = () => {
  return (
    <div className="flex-1 text-center space-y-2">
      <h4 className="font-bold text-lg">لینک های مرتبط</h4>
      <ul className="space-y-1">
        <li>لینک های مرتبط</li>
        <li>لینک های مرتبط</li>
        <li>لینک های مرتبط</li>
        <li>لینک های مرتبط</li>
        <li>لینک های مرتبط</li>   
      </ul>
    </div>
  );
};

// Contact Section Component
const ContactSection = () => {
  return (
    <div className="bg-white dark:bg-gray-400 p-6 rounded-lg shadow-lg w-1/3">
      <h4 className="font-bold text-xl mb-4">به ما بپیوندید</h4>
      <p className="text-gray-600 mb-4">
        در دوره آموزش پیشرفته درس، قصد داریم نیروهای جوان و مدرس پرکار آماده کنیم که
        بتوانند در سایت درسی به ما بپیوندند.
      </p>
      <button className="bg-blue-600 text-white px-4 py-2 rounded-md">
        ارسال رزومه
      </button>
    </div>
  );
};

// Bottom Section Component
const BottomSection = () => {
  return (
    <div className="flex justify-between items-center mt-8 border-t pt-4 text-gray-600">
      {/* Left Side Text */}
      <p>Designed by Sleepy Guis Group</p>

      {/* Right Side Social Icons */}
      <div className="flex space-x-4 text-2xl">
        <a href="#" className="hover:text-blue-500">
          <i className="fab fa-telegram"></i> {/* Telegram Icon */}
        </a>
        <a href="#" className="hover:text-pink-500">
          <i className="fab fa-instagram"></i> {/* Instagram Icon */}
        </a>
      </div>
    </div>
  );
};

// Footer Component (Main)
const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-500 py-10 px-6 rtl">
      <div className="container mx-auto flex justify-between items-start space-x-8">
        {/* Right Side - Related Links (3 columns) */}
        <div className="flex-1 flex justify-between space-x-8">
          <RelatedLinks />
          <RelatedLinks />
          <RelatedLinks />
        </div>
        
        {/* Left Side - Contact Section */}
        <ContactSection />

        
      </div>

      {/* Bottom Section */}
      <BottomSection />
    </footer>
  );
};

export { Footer}