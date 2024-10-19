import { Field } from 'formik'
// import React from 'react'

function FormField({FieldTopic, name}) {
  return (
    <div className='md:max-lg:mr-[10px] mr-[12px] max-md:mr-[11%] mt-[6px]'>
        <Field className='hidden' type='radio'  name={name}  />
        <label htmlFor='#' className='cursor-pointer dark:text-white text-[16px] md:max-lg:text-[12px] max-md:text-[14px] dark:text-[#d1d4c9]'>{FieldTopic}</label>
    </div>
  )
}

export default FormField