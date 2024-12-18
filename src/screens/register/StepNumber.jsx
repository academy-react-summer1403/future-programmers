import React from "react";
import * as yup from "yup";
import { ErrorMessage, Field, Form, Formik } from "formik";
import VerificationInput from "react-verification-input";
import axios from "axios";

const StepNumber = () => {
  //   const validationSchema = yup.object().shape({
  //     PhoneNumber: yup.string().required("شماره موبایل الزامی است"),
  //     // .matches(/^+?d{1,3}[-]?d{10}$/, 'شماره تلفن باید 10 رقمی باشد')
  //   });

  const handleVerify = async (values) => {
      const res = await axios.post("https://classapi.sepehracademy.ir/api/Sign/VerifyMessage", values);
      if (res.status === 200) {
          navigate("/stepthree");
      }
  };
  return (
    <>
      <div className="flex items-center justify-center dark:bg-[#678cb1] max-sm:w-[280px] ">
        <div className="p-6 rounded-lg dark:bg-[#678cb1] w-96 max-md:w-[340px] max-md:ml-[10%]">
          <h2 className=" text-sm font-light mb-4 text-right"> </h2>
          <Formik
            initialValues={{ phoneNumber: "", verifyCode: "" }}
            onsubmit={handleVerify}
            // initialValues={{PhoneNumber: ''}}
            // validationSchema={validationSchema}
          >
            <Form>
              <Field name="phoneNumber" placeholder="phoneNumber"  className="input w-full max-w-xs" />
              <Field name="verifyCode" placeholder="verifyCode"  className="input w-full max-w-xs" />

              {/* </div> */}
              <button
                type="submit"
                className=" bg-[#436E8E] h-[43px]  rounded w-full max-sm:mr-3"
              >
                <h2 className="text-white w-full "> تایید </h2>
              </button>
            </Form>
          </Formik>
        </div>
      </div>
    </>
  );
};

export default StepNumber;
