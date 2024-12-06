import { Field, Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import Pic from "./../../../../public/person.png";
import http from "../../../core/services/interceptor";

const EditProfile = () => {
  //get info
  const [MyInfo, setMyInfo] = useState(null);
  const getProfile = async () => {
    const res = await http.get("/SharePanel/GetProfileInfo");
    console.log(res)
    setMyInfo(res);
  };
  useEffect(() => {
    getProfile();
  }, []);

  // update profile
  const handleUpdateProfile = async (values) => {
    const data = new FormData();

    const keys = Object.keys(values);

    keys.forEach((key) => {
      const item = values[key];
      data.append(key, item);
    });

    const res = await http.put("/SharePanel/UpdateProfileInfo", data);
  };

  // upload image
  const [Image, setImage] = useState("");

  const sendImage = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("formFile", e.target.ax.files[0]);
    const res = await http.post("/SharePanel/AddProfileImage", data);
    console.log(res);
  };

  return (
    <div className="flex dark:bg-gray-400 mt-10 p-4 pb-20 rounded-2xl">
      <Formik
        initialValues={{
          LName: MyInfo?.lName,
          FName: MyInfo?.fName,
          ReceiveMessageEvent: MyInfo?.receiveMessageEvent,
          UserAbout: MyInfo?.userAbout,
          LinkdinProfile: MyInfo?.linkdinProfile,
          TelegramLink: MyInfo?.telegramLink,
          HomeAdderess: MyInfo?.homeAdderess,
          NationalCode: MyInfo?.nationalCode,
          Gender: MyInfo?.gender,
          BirthDay: MyInfo?.birthDay,
        }}
        enableReinitialize
        onSubmit={handleUpdateProfile}
      >
        <Form className="w-7/12">
          <div className="flex justify-around mt-8 gap-4">
            <Field
              name="FName"
              type="text"
              placeholder="نام"
              className="input input-bordered w-full max-w-xs"
            />
            <Field
              name="LName"
              type="text"
              placeholder="نام خانوادگی"
              className="input input-bordered w-full max-w-xs"
            />
          </div>

          <div className="flex justify-around mt-8  gap-4">
            <Field
              name="NationalCode"
              type="text"
              placeholder="کد ملی"
              className="input input-bordered w-full max-w-xs"
            />
            <Field
              name="HomeAdderess"
              type="text"
              placeholder="آدرس"
              className="input input-bordered w-full max-w-xs"
            />
          </div>

          <div className="flex justify-around mt-8  gap-4">
            <Field
              name="BirthDay"
              type="date"
              placeholder="تاریخ تولد"
              className="input input-bordered w-full max-w-xs "
            />
            <Field as="select" name="tech" className="bg-white p-4 px-10">
              <option value="">جنسیت</option>
              <option value="true">مرد</option>
              <option value="false">زن</option>
            </Field>
          </div>

          <div className="flex justify-around mt-8  gap-4">
            <Field
              name="TelegramLink"
              type="text"
              className="input input-bordered w-full max-w-xs"
              placeholder="تلگرام"
            />
            <Field
              name="LinkdinProfile"
              type="text"
              className="input input-bordered w-full max-w-xs"
              placeholder="لینکدین"
            />
          </div>

          <div className="flex justify-around mt-8  gap-4">
            <Field
              name="UserAbout"
              type="text"
              className="input input-bordered w-full max-w-xs"
              placeholder="درباره من"
            />

            <Field as="select" name="tech" className="bg-white p-4 px-10">
              <option value="">میخواهید پیام دریافت کنید؟</option>
              <option value="true">بله</option>
              <option value="false">خیر</option>
            </Field>
          </div>

          <button type="submit" className="btn btn-primary">
            update profile
          </button>
        </Form>
      </Formik>
      <div className="w-5/12 flex flex-col justify-center items-center gap-4">
        <div className="rounded-full w-3/4 h-64 object-fill">
          <img
            className="w-full object-contain rounded-full"
            src={MyInfo?.userImage.length>0 ? MyInfo?.userImage[MyInfo?.userImage.length - 1 ].puctureAddress : ''}
          ></img>
          <div>
            <form onSubmit={sendImage}>
              <input
                name="ax"
                type="file"
                onChange={(e) => {
                  setImage(e.target.files[0]);
                }}
              />
              <button type="submit" className="btn btn-primary">
                upload image
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
