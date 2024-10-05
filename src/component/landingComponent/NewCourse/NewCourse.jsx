import React from 'react'

const courses = [
    {
        image: './item1.png',
        title: 'دوره اول',
        description: 'توضیح مختصر درباره دوره اول',
        link: '#',
    },
    {
        image: './item1.png',
        title: 'دوره دوم',
        description: 'توضیح مختصر درباره دوره دوم',
        link: '#',
    },
    {
        image: './item1.png',
        title: 'دوره سوم',
        description: 'توضیح مختصر درباره دوره سوم',
        link: '#',
    },
    {
        image: './item1.png',
        title: 'دوره چهارم',
        description: 'توضیح مختصر درباره دوره چهارم',
        link: '#',
    },
];

const NewCourse = () => {
    return (
        <section className="w-[90%] mx-auto mt=10">
            <div className="container mx-auto px-4">
                <div className='flex'>
                    <h2 className="text-2xl font-bold mb-8 mr-[45%] text-blue-700">جدیدترین دوره‌ها</h2>
                    <h3 className='mr-auto mt5'>مشاهده همه </h3>
                </div>
                <div className="flex gap-6 justify-evenly mt-10">
                    {courses.map((course, index) => (
                        <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-md text-center w-[20%] border-2 ">
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
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default NewCourse