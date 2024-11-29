import React from "react";
import * as yup from "yup";
import { ErrorMessage, Field, Form, Formik } from "formik";
import VerificationInput from "react-verification-input";
import axios from "axios";

const ValidationSchema = () => {
  const validationSchema = yup.object().shape({
    PhoneNumber: yup.string().required("شماره موبایل الزامی است"),
    // .matches(/^+?d{1,3}[-]?d{10}$/, 'شماره تلفن باید 10 رقمی باشد')
  });

  const handleFinish = async (values) => {
    const res = await axios.post("https://classapi.sepehracademy.ir/api/Sign/Register",values);
          if (res.status === 200) {
            navigate("/singIn");
          }
  }
  return (
    <>
      <div className="flex items-center justify-center dark:bg-[#678cb1]">
        <div className="p-6 rounded-lg w-[348px] dark:bg-[#678cb1] max-sm:w-[290px]">
          <h2 className="bg-white dark:bg-[#678cb1] text-2xl font-bold mb-4 text-right max-md:text-lg max-sm:text-sm">
            {" "}
            ثبت نام{" "}
          </h2>
          <Formik
            initialValues={{ gmail: "", phoneNumber: "", password: "" }}
            onsubmit={handleFinish}
          >
            <Form>
              <div className="mb-4">
                <Field
                  type="tel"
                  name=" gmail"
                  placeholder=" نام و نام خانوادگی"
                  className="dark:text-[#ffff] border border-gray-300 dark:text-black text-right p-2 w-full rounded max-md:text-sm "
                />
                {/* <ErrorMessage
                  name="phoneNumber"
                  component={"p"}
                  className="text-red-500 text-sm validationSchema"
                /> */}
              </div>
              <div className="mb-4">
                <Field
                  type="tel"
                  name="phoneNumber"
                  placeholder="شماره موبایل"
                  className=" dark:text-[#ffff] dark:text-black border border-gray-300  text-right p-2 w-full rounded max-md:text-sm "
                />
                {/* <ErrorMessage
                  name="phoneNumber"
                  component={"p"}
                  className="text-red-500 text-sm validationSchema"
                /> */}
              </div>

              <div className="">
                <Field
                  type="password"
                  name="password"
                  placeholder=" رمز عبور"
                  className="dark:text-[#ffff] border border-gray-300  text-right p-2 w-full rounded max-md:text-sm "
                />
                <ErrorMessage
                  name="phoneNumber"
                  component={"p"}
                  className="text-red-500 text-sm validationSchema max-md:text-sm"
                />
              </div>

              <div dir="ltr" className="form-control ">
                <label className="label cursor-pointer  ">
                  <span className="label-text text-right text-xs whitespace-nowrap ml-16 max-sm:text-whitespace-wrap max-sm:text-[9px] max-sm:ml-6 dark:text-[#ffff] ">
                    {" "}
                    قوانین را مطالعه کرده و با شرایط موافقم{" "}
                  </span>
                  <input type="checkbox" defaultChecked className="checkbox " />
                </label>
              </div>

              <button
                type="submit"
                className=" bg-[#436E8E] h-[53px] rounded mt-5 w-full hover:bg-blue-600"
              >
                <h2 className="text-white  "> تایید و ثبت نام </h2>
              </button>
            </Form>
          </Formik>
        </div>
      </div>
    </>
  );
};

export default ValidationSchema;
