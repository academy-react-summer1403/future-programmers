import { Field } from 'formik'
// import React from 'react'

function FormField({FieldTopic, name}) {
  return (
    <div>
        <Field className='hidden' type='radio'  name={name}  />
        <label htmlFor='#' className='cursor-pointer dark:text-white tablet:text-[11px] laptop:text-[16px] tablet:mr-[8px] '>{FieldTopic}</label>
    </div>
  )
}

export default FormField