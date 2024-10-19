// import { Form, Formik } from 'formik';
// import React from 'react'

// const PhoneLog = () => {
//     const PhoneLog = () => {
//         const validationSchema = yup.object({
//             PhoneNumber:yup.string()
//             .required('شماره موبایل الزامی است')
//             .matches(/^+?d{1,3}[-]?d{10}$/, 'شماره تلفن باید 10 رقمی باشد')
//         });
//   return (
//     <div className='flex items-center justify-center min-h-screen bg-gray-100'>
//         <div className='bg-white p-6 rounded-lg shadow-md w-96'>
//             <h2 className='text-2xl font-bold mb-4 text-center'> ورود </h2> 
            
//             <Formik
//              initialValues={{PhoneNumber: ''}}
//              validationSchema={validationSchema}
//              onSubmit={(values) =>{
//                  console.log('Submitted Phone Number:', values.PhoneNumber);
//              }} 
            
//             >
//  {()=>(
//     <Form>
//   <div className='mb-4'>
//                         <Field 
//                         type='tel'
//                         name='phoneNumber'
//                         placeholder='شماره موبایل'
//                         className='border border-gray-300 p-2 w-full rounded'
// />
//                         <ErrorMassage
//                         name='phoneNumber'
//                         className='text-red-500 text-sm'
//                         />
//                     </div>
//                     <button  type='submit'
//                         className='bg-blue-500 text-blue-600 py-2 px-2 rounded w-full hover:bg-blue-600'>
                       
//                     </button>
//     </Form>
//  )}

//             </Formik>
            
//             </div>
//             </div>
//   )
// }
// }
// export default PhoneLog;
