import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as yup from 'yup'

const FormPhone = () => {
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
                        placeholder='شماره موبایل'
                        className='border border-gray-300 p-2 w-full rounded '
/>
                        <ErrorMessage
                        name='phoneNumber'
                        component={"p"}
                        className='text-red-500 text-sm validationSchema'
                        />
                    </div>
                    <button  type='submit'
                        className=' bg-[#436E8E] h-[53px]  rounded w-full hover:bg-blue-600'>
                       <h2 className='text-white ' >ادامه </h2>
                    </button>
                </Form>
            )}
        </Formik>
        </div>




    </div>
</>





)
}

export default FormPhone
