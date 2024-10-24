import { Field, Form, Formik } from 'formik'
import Search from '../../../public/search.svg';  

function SearchBox() {
  return (
    <Formik initialValues={{SearchCourse:'', sort:null }}>
        <Form className='flex mr-[1%] shadow-inner shadow-slate-400 rounded-xl dark:bg-[#556e53]'>
            <Field className=' h-[35px] w-[220px] max-lg:w-[175px] mr-[3%] my-auto max-lg:text-[12px] font-bold max-sm:text-[13px] [outline:none] dark:bg-[#556e53] dark:placeholder-[#d1d4c9]' type='text' placeholder='جستجوی دوره' name='SearchCourse' />
            <button className='bg-[url(public/search.svg)] dark:bg-[url(public/dark.search.svg)] [background-size:35px] w-[60px] h-[48px] m-auto bg-no-repeat [background-position:50%_50%] hover:scale-110 duration-200 '></button>
        </Form>
    </Formik>
  )
}

export default SearchBox


