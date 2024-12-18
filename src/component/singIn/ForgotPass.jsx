    import { Field, Form, Formik } from 'formik'
import React from 'react'
import { NavLink } from 'react-router-dom'

    const ForgotPass = () => {
    return (
    <div className="w-[100%] overflow-hidden h-screen">
        <div className="dark:bg-[#152a38] bg-[#F3F4F6] h-[615px] flex justify-center">
            <div
            className="bg-white flex dark:text-white shadow-lg dark:bg-[#678cb1] rounded-lg w-[80%] justify-around h-[580px] m-auto "
            >
            <div className="h-[500px] mr-4 rounded-lg pt-[20px] mx-md:w-[300px] ">
                <div className=" border-x-slate-800 h-[55px] w-[327px] mx-auto ">
                <div className="  flex h-[50px]  text-xl ">
                    <img src="./Logo.png" alt="" className="h-[100%] w-[20%] max-sm:mr-10 max-sm:w-[40px]" />
                    <h2 className="  mr-4 mt-2 font-bold dark:text-white max-sm:text-[18px]">
                    آکادمی سپهر{" "}
                    </h2>
                </div>

                <div className="mt-2 text-lg">
                    <h2 className="font-bold dark:text-white max-sm:mr-16 max-sm:text-[13px]"> بازیابی رمز عبور </h2>
                </div>

            
                </div>

                <div className=" mt-20">
                <Formik
        
        >
            <Form>
            <div className="max-sm:mr-11 w-[327px] h-[53px] flex justify-content m-3 gap-[2px] rounded-lg ">
                <Field
                className="text-right bg-[#F3F4F6] pr-2 w-full rounded-lg dark:text-black max-sm:w-[240px] max-sm:text-[13px]"
                placeholder="   رمز عبور جدید"
                type="password"
                name="password"
                required
                />
            </div>
            <div className="max-sm:mr-11 h-[53px] flex justify-content m-3 gap-[2px] rounded-lg">
                <Field
                className="text-right bg-[#F3F4F6] pr-4 w-full rounded-lg dark:text-black max-sm:w-[240px] max-sm:text-[13px]"
                placeholder="  تکرار رمز عبور جدید"
                type="password"
                name="password"
                required
                />
            </div>
            <div className="ml-2 max-sm:mr-11">
                <button
                className="text-white w-[100%] h-[53px] max-sm:text-[13px] max-sm:w-[240px] m-1 gap-[2px] bg-[#436E8E] text-center rounded-lg"
                type="submit"
                >
                تایید
                </button>

                <NavLink to={"/"}>
                <button
                    className="border border-#707070-500 dark:text-black w-[100%] h-[53px] m-1 gap-[2px] bg-[#fff] text-center rounded-lg max-sm:w-[240px] max-sm:text-[13px]"
                    type="submit"
                >
                    بازگشت به صفحه اصلی
                </button>
                </NavLink>
            </div>
            </Form>
        </Formik>
                </div>
            </div>

            <div className="hidden md:block h-[578px] w-[500px] mr-56 ">
                <img
                src="./Image.png"
                alt=""
                className="w-[100%] h-[100%] rounded-xl "
                />
            </div>
            </div>
        </div>
        </div>
    )
    }

    export default ForgotPass
