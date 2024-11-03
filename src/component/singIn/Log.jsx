import { Field, Form, Formik } from "formik";
import React, { useState } from "react";
import { login } from "../../core/services/api/auth";
import { NavLink, useNavigate } from "react-router-dom";
import { getItem, setItem } from "../../core/services/common/storage.services";

const Log = () => {
  const navigate = useNavigate();

  const handleLogin = async (values) => {
    try {
      const res = await http.post("/Sign/Login", values);
      console.log(result.token);
      setItem("token", result.token);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="h-[300px] mt-20   ">
      <Formik
        initialValues={{ phoneOrGmail: "", password: "", rememberMe: false }}
        onSubmit={handleLogin}
      >
        <Form>
          <div className="  w-[327px] h-[53px] flex justify-content m-3 gap-[2px] rounded-lg ">
            <Field
              className="text-right bg-[#F3F4F6] pr-2 w-full rounded-lg dark:text-black"
              placeholder="  شماره تماس ...."
              type="text"
              name="phoneOrGmail"
              required
            />
          </div>
          <div className="  h-[53px] flex justify-content m-3 gap-[2px] rounded-lg">
            <Field
              className="text-right bg-[#F3F4F6] pr-4 w-full rounded-lg dark:text-black"
              placeholder=" رمز عبور"
              type="password"
              name="password"
              required
            />
          </div>
          <div className="ml-2 ">
            <button
              className="text-white w-[100%] h-[53px]  m-1 gap-[2px] bg-[#436E8E] text-center rounded-lg"
              type="submit"
            >
              ورود
            </button>

            <NavLink to={"/"}>
              <button
                className="border border-#707070-500 dark:text-black w-[100%] h-[53px]  m-1 gap-[2px] bg-[#fff] text-center rounded-lg"
                type="submit"
              >
                بازگشت به صفحه اصلی
              </button>
            </NavLink>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default Log;
