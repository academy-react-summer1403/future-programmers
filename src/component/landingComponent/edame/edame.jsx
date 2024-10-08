import React from 'react';
import CourseCard from '../../common/CorseCard/CourseCard';

const Edame = () => {
  return (
    <div className="min-h-screen ">
      {/* Best Selling Courses Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-8">پرفروش ترین دوره ها</h2>
          <div className="flex flex-wrap justify-evenly gap-6">
            {courses.map((course, index) => (
              <CourseCard course={course} index={index} />
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
          <div className=" p-6 rounded-lg shadow-md text-center">
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
    title: 'دوره خسرو',
    description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.',
    teacher: 'خسرو دلها محمدی',
    link: '#',
  },
  {
    image: './item1.png',
    title: 'دوره دوم',
    description: 'توضیح مختصر درباره دوره دوم',
    teacher: 'عارف سالاریه',
    link: '#',
  },
  {
    image: './item1.png',
    title: 'دوره سوم',
    description: 'توضیح مختصر درباره دوره سوم',
    teacher: 'بحر',
    link: '#',
  },
  {
    image: './item1.png',
    title: 'دوره چهارم',
    description: 'توضیح مختصر درباره دوره چهارم',
    teacher: 'مهدی قاسمی',
    link: '#',
  },
  {
    image: './item1.png',
    title: 'دوره خسرو',
    description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.',
    teacher: 'خسرو دلها محمدی',
    link: '#',
  },
  {
    image: './item1.png',
    title: 'دوره دوم',
    description: 'توضیح مختصر درباره دوره دوم',
    teacher: 'عارف سالاریه',
    link: '#',
  },
  {
    image: './item1.png',
    title: 'دوره سوم',
    description: 'توضیح مختصر درباره دوره سوم',
    teacher: 'بحر',
    link: '#',
  },
  {
    image: './item1.png',
    title: 'دوره چهارم',
    description: 'توضیح مختصر درباره دوره چهارم',
    teacher: 'مهدی قاسمی',
    link: '#',
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