import React, { useEffect, useState } from "react";
import hat from '../../../../public/hat.svg'
import basket from '../../../../public/basket.svg'
import ax from '../../../../public/reactpishkhan.svg'
import http from "../../../core/services//interceptor";

const Pishkhan = () => {
  const [MyInfo, setMyInfo] = useState(null);

  const getProfile = async () => {
    const res = await http.get(
      "/SharePanel/GetProfileInfo"
    );
    setMyInfo(res);
  };

  useEffect(() => {
    getProfile();
  }, []);

  return (
    <div className=" dark:bg-[#29435c] mt-10 ">
      <div className="flex justify-around">
        <div className="flex w-[40%] h-24 bg-white  shadow-2xl">
          <div className="w-2/3 ps-5 pt-5">
            <h2>نام : {MyInfo?.fName}</h2>
            <h2>نام خانوادگی : {MyInfo?.lName}</h2>
          </div>
        </div>
        <div className="w-[40%]  shadow-2xl bg-white  relative flex justify-around">
          <h2 className="mt-10">درصد تکمیل اطلاعات</h2>
          <div
            className="radial-progress text-primary ms-2 mt-2"
            style={{ "--value": 70 }}
            role="progressbar"
          >
            % {MyInfo?.profileCompletionPercentage}
          </div>
        </div>
      </div>

      <div className="flex justify-around mt-5">
        <div className="flex w-[40%] h-24 bg-white  shadow-2xl">
          <div className=" ps-5 pt-5">
            <h2>شمازه : {MyInfo?.phoneNumber}</h2>
          </div>
        </div>

        <div className="flex w-[40%] h-24 bg-white  shadow-2xl">
          <div className=" ps-5 pt-5">
            <h2>ایمیل : {MyInfo?.email}</h2>
          </div>
        </div>
      </div>

      <div className="flex justify-around mt-5">
        <div className="flex w-[40%] h-24 bg-white  shadow-2xl">
          <div className=" ps-5 pt-5">
            <h2>درباره من : {MyInfo?.userAbout}</h2>
          </div>
        </div>

        <div className="flex w-[40%] h-24 bg-white  shadow-2xl">
          <div className=" ps-5 pt-5">
            <h2>ایمیل : {MyInfo?.email}</h2>
          </div>
        </div>
      </div>

      <div className="flex justify-around mt-5">
        <div className="flex w-[40%] h-24 bg-white  shadow-2xl">
          <div className=" ps-5 pt-5">
            <h2>شمازه : {MyInfo?.phoneNumber}</h2>
          </div>
        </div>

        <div className="flex w-[40%] h-24 bg-white  shadow-2xl">
          <div className=" ps-5 pt-5">
            <h2>لینک دین پروفایل: {MyInfo?.linkdinProfile}</h2>
          </div>
        </div>
      </div>

      <div className="flex justify-around mt-5">
        <div className="flex w-[40%] h-24 bg-white  shadow-2xl">
          <div className=" ps-5 pt-5">
            <h2> لینک تلگرام : {MyInfo?.telegramLink}</h2>
          </div>
        </div>

        <div className="flex w-[40%] h-24 bg-white  shadow-2xl">
          <div className=" ps-5 pt-5">
            <h2> آدرس : {MyInfo?.homeAdderess}</h2>
          </div>
        </div>

      </div>

      {/* <div className="w-[90%] bg-[#F6FFFF] shadow-2xl h-52 mx-auto mt-6 pt-4">
        <h2 className="ms-10 text-xl">جدید ترین اخبار مقالات</h2>
        <div className="mt-2 mx-10 bg-green-100 p-2">
          <h4>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Distinctio, quae.
          </h4>
        </div>
        <div className="mt-2 mx-10 bg-green-100 p-2">
          <h4>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Distinctio, quae.
          </h4>
        </div>
        <div className="mt-2 mx-10 bg-green-100 p-2">
          <h4>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Distinctio, quae.
          </h4>
        </div>
      </div>

      <div className="flex mt-4 gap-24">
        <div className="w-1/2 h-60  flex flex-col gap-2">
          <h2 className="dark:text-[#d1d4c9]">دوره های در حال برگزاری:</h2>
          <div className="bg-white shadow-lg h-2/5 flex justify-between p-2 rounded-lg">
            <div className="w-2/3 flex flex-col justify-between ">
              <h3>react</h3>
              <div className="flex justify-between">
                <h3>aref salai</h3>
                <div>12 April 2020</div>
              </div>
            </div>
            <div>
              <img src={ax} alt="" />
            </div>
          </div>
          <div className="bg-white shadow-lg h-2/5 flex justify-between p-2 rounded-lg">
            <div className="w-2/3 flex flex-col justify-between ">
              <h3>react</h3>
              <div className="flex justify-between">
                <h3>aref salai</h3>
                <div>12 April 2020</div>
              </div>
            </div>
            <div>
              <img src={ax} alt="" />
            </div>
          </div>
        </div>
        <div className="w-1/2 h-60  flex flex-col gap-2">
          <h2 className="dark:text-[#d1d4c9]">دوره های پیشنهادی:</h2>
          <div className="bg-white shadow-lg h-2/5 flex justify-between p-2 rounded-lg">
            <div className="w-2/3 flex flex-col justify-between ">
              <h3>react</h3>
              <div className="flex justify-between">
                <h3>aref salai</h3>
                <div>12 April 2020</div>
              </div>
            </div>
            <div>
              <img src={ax} alt="" />
            </div>
          </div>
          <div className="bg-white shadow-lg h-2/5 flex justify-between p-2 rounded-lg">
            <div className="w-2/3 flex flex-col justify-between ">
              <h3>react</h3>
              <div className="flex justify-between">
                <h3>aref salai</h3>
                <div>12 April 2020</div>
              </div>
            </div>
            <div>
              <img src={ax} alt="" />
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Pishkhan;
