import React from 'react'
import { Link } from 'react-router-dom';
import CourseCard from '../../common/CorseCard/CourseCard';

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
];

const NewCourse = () => {
    return (
        <section className=" mx-auto ">
            <div className="container mx-auto px-4">
                <div className='flex '>
                    <h2 className="text-2xl font-bold mb-8 mr-[45%] text-blue-700">جدیدترین دوره‌ها</h2>
                    <h3 className='mr-auto mt5'>مشاهده همه </h3>
                </div>
                <div className="flex flex-wrap gap-6 justify-evenly mt-10 ">

                    {courses.map((course, index) => (
                        <CourseCard course={course} index={index}/>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default NewCourse