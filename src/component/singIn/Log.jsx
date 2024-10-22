import { Field, Form, Formik } from "formik";
import React, { useState } from "react";

const Log = () => {
  // const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");

  const [successMessage, setSuccessMessage] = useState(false);




  const handleSubmit = (e) => {
    e.preventDefault();

    setSuccessMessage(true);

    setTimeout(() => setSuccessMessage(false), 3000);
  };
  return (
    <div className="  h-[300px] mt-20    ">
      {successMessage && (
        <div className="bg-green-400 text-white p-2 rounded-lg mb-4 text-center">
با موفقیت وارد شدید         </div>
      )}
<Formik initialValues={{phoneOrGmail:"",password:"",rememberMe:false}} onSubmit={(e)=>console.log(e)}>
  <Form>
    

        {/* <div className=" border border-#707070-500 w-[325px] h-[53px]  m-3 rounded-lg ">
          <input
            className="text-right bg-[#F3F4F6] h-full w-[325px] rounded-lg "
            placeholder=" نام"
            type="text"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </div> */}



        
        <div className="border border-#707070-500 w-[327px] h-[53px] flex justify-content m-3 gap-[2px] rounded-lg ">
          <Field
            className="text-right bg-[#F3F4F6] w-full "
            placeholder=" شماره تماس"
            type="text"
           name='phoneOrGmail'

            required
          />
        </div>
        <div className="border border-#707070-500  h-[53px] flex justify-content m-3 gap-[2px] rounded-lg">
          <Field
            className="text-right bg-[#F3F4F6]  w-full"
            placeholder=" رمز عبور"
            type="password"
            name="password"


            required
          />
        </div >
        <div className="ml-2">
        <button
          className="text-white w-[100%] h-[53px]  m-1 gap-[2px] bg-[#436E8E] text-center rounded-lg"
          type="submit"
        >
        
          ورود
        </button>


        <button
          className="border border-#707070-500 w-[100%] h-[53px]  m-1 gap-[2px] bg-[#fff] text-center rounded-lg"
          type="submit"
        >
        
          بازگشت به صفحه اصلی
        </button>
        </div>

      </Form>
      </Formik>
    </div>
  );
};

export default Log;
