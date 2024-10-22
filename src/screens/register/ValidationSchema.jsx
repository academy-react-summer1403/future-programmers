import React from 'react'
import * as yup from 'yup'
import { ErrorMessage, Field, Form, Formik } from 'formik';
import VerificationInput from "react-verification-input";

const ValidationSchema = () => {
  const validationSchema = yup.object().shape({
    PhoneNumber:yup.string().required('شماره موبایل الزامی است')
    // .matches(/^+?d{1,3}[-]?d{10}$/, 'شماره تلفن باید 10 رقمی باشد')
});
  return (
<>
<div className='flex items-center justify-center bg-gray-100'>
        <div className='bg-white p-6 rounded-lg  w-96'>
            <h2 className='text-2xl font-bold mb-4 text-center'>  </h2>
        <Formik
        
        initialValues={{PhoneNumber: ''}}
            validationSchema={validationSchema}
            onSubmit={(values) =>{
                console.log('Submitted Phone Number:', values.PhoneNumber);
            }} 
        
        >
            {()=>(
                <Form>
                  <div className='mb-4'>
                  <Field 
                        type='tel'
                        name='phoneNumber'
                        placeholder=' نام و نام خانوادگی'
                        className='border border-gray-300  text-right p-2 w-full rounded  '
/>
                        <ErrorMessage
                        name='phoneNumber'
                        component={"p"}
                        className='text-red-500 text-sm validationSchema'
                        />

                  </div>
                    <div className='mb-4'>

                        <Field 
                        type='tel'
                        name='phoneNumber'
                        placeholder='شماره موبایل'
                        className='border border-gray-300  text-right p-2 w-full rounded  '
/>
                        <ErrorMessage
                        name='phoneNumber'
                        component={"p"}
                        className='text-red-500 text-sm validationSchema'
                        />


{/* <VerificationInput 
classNames={{
    container: "container",
    character: "character",
    characterInactive: "character--inactive",
    characterSelected: "character--selected",
    characterFilled: "character--filled",
  }}
  /> */}
                    </div>

                  <div className=''>
                  <Field 
                        type='tel'
                        name='phoneNumber'
                        placeholder=' رمز عبور'
                        className='border border-gray-300  text-right p-2 w-full rounded  '
/>
                        <ErrorMessage
                        name='phoneNumber'
                        component={"p"}
                        className='text-red-500 text-sm validationSchema'
                        />

                  </div>

                    <div dir='ltr' className="form-control  ">
  <label className="label cursor-pointer ">
    <span  className="label-text text-right text-xs whitespace-nowrap ml-16 "> قوانین را مطالعه کرده و با شرایط موافقم </span>
    <input type="checkbox" defaultChecked className="checkbox " />
  </label>
</div>
                    
                    

                    <button  type='submit'
                        className=' bg-[#436E8E] h-[53px]  rounded mt-5 w-full hover:bg-blue-600'>
                    <h2 className='text-white ' > تایید و ثبت نام  </h2>
                    </button>
                </Form>
            )}
        </Formik>
        </div>




    </div>
</>
  )
}

export default ValidationSchema
