import { Field } from 'formik'
// import React from 'react'

function FormField({FieldTopic, name}) {
  return (
    <div className='md:max-lg:mr-[10px]'>
        <Field className='hidden' type='radio'  name={name}  />
        <label htmlFor='#' className='cursor-pointer dark:text-white text-[16px] md:max-lg:text-[12px]'>{FieldTopic}</label>
    </div>
  )
}

export default FormField