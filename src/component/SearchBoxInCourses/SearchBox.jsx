import { Field, Form, Formik } from 'formik'

function SearchBox() {
  return (
    <Formik initialValues={{SearchCourse:'', sort:null }}>
        <Form>
            <Field className='lg:p-4 md:max-lg:p-2 mr-[3%] bg-[url(public/search.svg)] [background-position-y:center] max-sm:[background-position-x:3%] bg-no-repeat text-base max-md:p-[9px] md:max-lg:text-[11px] font-bold [background-size:35px] md:max-lg:[background-size:25px] max-sm:[background-size:25px] max-sm:text-[13px] [center] shadow-inner shadow-slate-400 rounded-xl dark:bg-[#556e53] dark:placeholder-[#d1d4c9]' type='text' placeholder='جستجوی دوره' name='SearchCourse'  />
        </Form>
    </Formik>
  )
}

export default SearchBox


