import {Formik, Field, Form} from 'formik';
import CourseCard from '../../component/CourseCard/CourseCard';
import Accardion from '../../component/accardion/accardion';
// import FormField from '../../component/Fields/FormField';
import TopCategory from '../../component/topCategory/TopCategory';
// import UseDarkMood from './UseDarkMood';


const Courses = () => {
  const Course=[
    {image:'public/01.jpg', topic:'آموزش ری اکت 1', explain:'آموزش می دهیم. آموزش نمی دهیم', teacher:'استاد یک',time:'12:12:12', price:'رایگان!'},
    {image:'public/01.jpg',topic:'آموزش ری اکت 2', explain:'آموزش می دهیم. آموزش می دهیم', teacher:'استاد دو',time:'12:12:12', price:'رایگان!'},
    {image:'public/01.jpg',topic:'آموزش ری اکت 3', explain:'آموزش می دهیم. آموزش نمی دهیم', teacher:'استاد سه',time:'12:12:12', price:'رایگان!'},
    {image:'public/01.jpg',topic:'آموزش ری اکت 3', explain:'آموزش می دهیم. آموزش نمی دهیم', teacher:'استاد سه',time:'12:12:12', price:'رایگان!'}
]


return (
<div className='bg-[#e6e5e5] font-[sans] dark:bg-slate-700'>

        <div className='flex flex-row-reverse flex-wrap gap-x-2 gap-y-4 w-[90%] mx-[auto]'>
        <div className='w-[100%] flex justify-between'>
            <h1 className='dark:text-white'>دوره ها</h1>
            <h1 className='dark:text-white'> 5 دوره آموزشی</h1>
        </div>
        <div className='w-[100%] h-[115px] md:max-lg:h-[70px] max-md:h-[90px] bg-white rounded-[20px] flex items-center mt-[10px] dark:bg-slate-600'>
            <Formik initialValues={{SearchCourse:'', New:'',BestSelling:'',Expensive:'',Cheap:'' , sort:null }}>
                <Form  className='w-[100%] h-[115px] md:max-lg:h-[100%] max-md:h-[100%] bg-white rounded-[20px] flex items-center md:max-lg:gap-0 gap-4 gap-0 dark:bg-black'>
            
                <div className="drawer md:hidden w-[100px] mr-[7%]">
                        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                        <div className="drawer-content">
                            {/* Page content here */}
                            <label htmlFor="my-drawer" className="btn btn-primary drawer-button">Open drawer</label>
                        </div>
                        <div className="drawer-side  z-[999] max-md:w-[44%] max-md:right-[78%] ">
                            <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                            <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
                            {/* Sidebar content here */}
                            <li><a>Sidebar Item 1</a></li>
                            <li><a>Sidebar Item 2</a></li>
                            </ul>
                        </div>
                    </div>

                    <Field className='p-4 md:max-lg:p-2 w-[25%] md:max-lg:w-[27%] max-md:w-[50%] max-md:mx mr-[1%] bg-[url(public/search.svg)] bg-no-repeat bg-left text-base md:max-lg:text-[11px] font-bold [background-size:35px] md:max-lg:[background-size:25px] shadow-inner shadow-slate-400 rounded-xl dark:bg-slate-400 dark:placeholder-white' type='text' placeholder='جستجوی دوره' name='SearchCourse'  />
                    <TopCategory />

                </Form>
            </Formik>
        </div>
        <div className='flex sm:max-md:flex-wrap md:max-lg:flex-nowrap sm:max-md:max-md:max-lg:justify-center'>
            <div className='w-[310px] md:max-lg:w-[25%]  sm:max-md:hidden h-fit pb-3 mt-[19px] ml-5 rounded-[20px] bg-white dark:bg-slate-600'> 
                <h2 className='mr-2 mt-1 md:max-lg:text-[15px] dark:text-white'>فیلترها</h2>
                <Accardion />

                <div className="collapse collapse-arrow shadow shadow-black mt-2 w-[95%] mx-auto dark:bg-slate-500">
                    <input type="checkbox" name="my-accordion-2" />
                    <div className="collapse-title text-[14px] md:max-lg:text-[12px]"> قیمت</div>
                    <div className="collapse-content">
                        {/* <p>hello</p> */}
                        <output  className='block text-center text-[red]'>   0 </output>
                        <span className='relative bottom-[23px]'> از </span>
                        <input type="range" min={0} max="10000000" value="0" step='50000' className="range" />

                        <output className='block text-center text-[red] mt-[10px]'>  1000000 </output>
                        <span className='relative bottom-[24px]'> تا </span>
                        <input type="range" min={0} max="1000000" value="1000000" step='50000' className="range" /> 		
                    </div>
                </div>              
            </div>
            <div className='w-[72%] mt-6 pt-5 h-fit flex flex-row flex-wrap justify-start gap-x-4 gap-y-12 md:max-lg:gap-y-10 sm:max-md:w-full sm:max-md:gap-y-11'>
                {Course.map((item, index)=>{
                    return(
                        <CourseCard 
                        key={index}
                        image={item.image}
                        topic={item.topic} 
                        explain={item.explain} 
                        teacher={item.teacher} 
                        time={item.time} 
                        price={item.price} />  
                    );   
                })}             
            </div>
        </div>

      
    </div>
    <div className='w-[100%] text-center h-14 my-auto mt-3'>
        <div className="join y-5 md:max-lg:my-1">
            <button className="join-item btn dark:bg-gray-400">1</button>
            <button className="join-item btn btn-active dark:bg-gray-400">2</button>
            <button className="join-item btn dark:bg-gray-400">3</button>
            <button className="join-item btn dark:bg-gray-400">4</button>
        </div>
    </div>
    
</div>
)
}

export default Courses





{/* <input type="text" placeholder='تو فقط اسم ببر ...' className='border-2 divide-purple-800 outline-0 w-[57%] p-3 rounded-[18px] bg-[url(public/search.svg)] bg-no-repeat bg-left [background-size:35px]'/> */}
