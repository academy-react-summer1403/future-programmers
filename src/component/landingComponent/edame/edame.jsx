import React from 'react';

const Edame = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Best Selling Courses Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-8">پرفروش ترین دوره ها</h2>
          <div className="flex flex-wrap justify-evenly gap-6">
            {courses.map((course, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-4 text-center basis-1/5">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-32 object-cover mb-4 rounded"
                />
                <h3 className="text-lg font-bold">{course.title}</h3>
                <p className="text-gray-600 text-sm mt-2">{course.description}</p>
                <a
                  href={course.link}
                  className="inline-block mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                >
                  ثبت نام
                </a>
                <span className="block mt-2 text-sm text-green-500">{course.price}</span>
              </div>
            ))}
          </div>
          <a href="#" className="block text-center mt-6 text-blue-500 hover:underline">
            مشاهده همه
          </a>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-8">خدمات</h2>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h3 className="font-bold text-lg mb-4">مدرک معتبر</h3>
            <p className="text-gray-600">
              مدرک معتبر را با ما دریافت کنید که قابل ارائه به موسسات رسمی است و معتبر برای کسب و کارها.
            </p>
          </div>
        </div>
      </section>
    <section className="py-12">
            <div className="container mx-auto px-4 flex flex-nowrap">
            <img className='' src='./Image 6.png'></img>
            <div className="p-6 text-center w-1/2 content-center">
                <div className='flex flex-wrap justify-between content-center'>
                    <div className='flex flex-wrap justify-around basis-full'>
                        <p>3</p>
                        <p>12</p>
                        <p>4</p>
                        <p>5</p>
                    </div>
                    <div className='flex flex-wrap justify-around basis-full'>
                        <p>دانشجو آکادمی</p>
                        <p>دوره اموزش</p>
                        <p>استاد فعال</p>
                        <p>رضایت مندی</p>
                    </div>
                    
                </div>
            </div>
            </div>
        </section>
      {/* Category Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-xl font-bold text-center mb-6">دسته بندی</h2>
          <div className="flex flex-wrap justify-evenly gap-6">
            {categories.map((category, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center basis-[22%]">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-24 object-contain mb-4 rounded"
                />
                <h3 className="text-lg font-bold">{category.title}</h3>
                <h4 className="text-lg font-normal">{category.description}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

// Sample Data
const courses = [
  {
    image: './item1.png',
    title: 'آموزش دوره اول',
    description: 'دوره جامع آموزش دوره اول.',
    link: '#',
    price: 'رایگان',
  },
  {
    image: './item1.png',
    title: 'آموزش دوره دوم',
    description: 'دوره جامع آموزش دوره دوم.',
    link: '#',
    price: 'رایگان',
  },
  {
    image: './item1.png',
    title: 'آموزش دوره سوم',
    description: 'دوره جامع آموزش دوره سوم.',
    link: '#',
    price: 'رایگان',
  },
  {
    image: './item1.png',
    title: 'آموزش دوره چهارم',
    description: 'دوره جامع آموزش دوره چهارم.',
    link: '#',
    price: 'رایگان',
  },
  {
    image: './item1.png',
    title: 'آموزش دوره پنجم',
    description: 'دوره جامع آموزش دوره چهارم.',
    link: '#',
    price: 'رایگان',
  },
  {
    image: './item1.png',
    title: 'آموزش دوره ششم',
    description: 'دوره جامع آموزش دوره چهارم.',
    link: '#',
    price: 'رایگان',
  },
  {
    image: './item1.png',
    title: 'آموزش دوره هفتم',
    description: 'دوره جامع آموزش دوره چهارم.',
    link: '#',
    price: 'رایگان',
  },
  {
    image: './item1.png',
    title: 'آموزش دوره هشتم',
    description: 'دوره جامع آموزش دوره چهارم.',
    link: '#',
    price: 'رایگان',
  },
];

const categories = [
  {
    image: './Image 3.png',
    title: 'فرانت اند',
    description: 'Lorem ipsum'
  },
  {
    image: './Image 4.png',
    title: 'بک اند',
    description: 'Lorem ipsum'
  },
  {
    image: './Image 3.png',
    title: 'امنین',
    description: 'Lorem ipsum'
  },
  {
    image: './Image 5.png',
    title: 'هوش مصنوعی',
    description: 'Lorem ipsum'
  },
];

export default Edame;