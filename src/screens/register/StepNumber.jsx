import React from 'react'
import * as yup from 'yup'
import { ErrorMessage, Field, Form, Formik } from 'formik';
import VerificationInput from "react-verification-input";


const StepNumber = () => {
const validationSchema = yup.object().shape({
    PhoneNumber:yup.string().required('شماره موبایل الزامی است')
    // .matches(/^+?d{1,3}[-]?d{10}$/, 'شماره تلفن باید 10 رقمی باشد')
});
return (
<>
<div className='flex items-center justify-center dark:bg-[#678cb1]'>
        <div className='p-6 rounded-lg dark:bg-[#678cb1] w-96 max-md:w-[280px] max-md:ml-[30%]'>
            <h2 className=' text-sm font-light mb-4 text-right'>   </h2>
        <Formik
        
        initialValues={{PhoneNumber: ''}}
            validationSchema={validationSchema}
            onSubmit={(values) =>{
                console.log('Submitted Phone Number:', values.PhoneNumber);
            }} 
        
        >
            {()=>(
                <Form>
                    {/* <div className='mb-3'> */}

                        <div className='mb-3'>


<VerificationInput 
classNames= {{
    container: "container",
    character: "character",
    characterInactive: "character--inactive",
    characterSelected: "character--selected",
    characterFilled: "character--filled",
  }} 
  />

</div>

                    {/* </div> */}
                    <button  type='submit'
                        className=' bg-[#436E8E] h-[43px]  rounded w-full'>
                <h2 className='text-white w-full ' > تایید  </h2>
                    </button>
                </Form>
            )}
        </Formik>
        </div>




    </div>
</>

    
  )
}

export default StepNumber
