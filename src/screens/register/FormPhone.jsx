import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup'
import { signUpOneAPI } from '../../core/services/api/auth/Register.api';

const FormPhone = () => {
    const validationSchema = yup.object().shape({
    PhoneNumber:yup.string().required('شماره موبایل الزامی است')
    // .matches(/^+?d{1,3}[-]?d{10}$/, 'شماره تلفن باید 10 رقمی باشد')
});

    const navigate = useNavigate();

const onsubmit = async (valuse) => {
//   const userPhoneNum ={
//     phoneNumber: valuse.mobile,

//   };
console.log("ddddddd" , valuse);

const user = await signUpOneAPI(valuse);
console.log(user);
    if (user.success) 
  // setData("phoneNumber" , userPhoneNum.phoneNumber);
  // console.log("ccccccccc" , setData);
    navigate("/step2");
};


return (
<>
<div className='flex items-center justify-center mr-9 max-md:w-[190px] max-md:mr-[90px] dark:bg-[#678cb1]'>
        <div className=' bg-white p-6 rounded-lg w-96 dark:bg-[#678cb1] max-sm:w-[240px] max-sm:ml-[90px] '>
            <h2 className='text-2xl font-bold mb-4 text-center '>  </h2>
        <Formik
        
        
        initialValues={{phoneNumber: ''}}
            // validationSchema={validationSchema}
            onSubmit={(e) => onsubmit(e)} 
        
        >
            {()=>(
                <Form>
                    <div className='mb-4 max-md:w-[290px] max-sm:text-[13px] max-sm:w-[230px]' >
                        <Field 
                        type='tel'
                        name='phoneNumber'
                        placeholder='شماره موبایل'
                        className='border border-gray-300 text-right p-2 w-full rounded dark:text-black '
/>
                        <ErrorMessage
                        name='phoneNumber'
                        component={"p"}
                        className='text-red-500 text-sm validationSchema'
                        />
                    </div>
                    <button  type='submit'
                        className=' bg-[#436E8E] h-[53px] max-sm:w-[230px] rounded w-full hover:bg-blue-600 '>
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
