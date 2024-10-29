import React, { useEffect, useState } from "react";
import hat from '../../../../public/hat.svg'
import basket from '../../../../public/basket.svg'
import ax from '../../../../public/reactpishkhan.svg'
import http from "../../../core/services//interceptor";

const Pishkhan = () => {
  const [MyInfo, setMyInfo] = useState(null);

  const getProfile = async () => {
    const res = await http.get(
      "https://classapi.sepehracademy.ir/api/SharePanel/GetProfileInfo"
    );
    setMyInfo(res);
  };

  useEffect(() => {
    getProfile();
  }, []);

  return (
    <div className=" dark:bg-gray-400 mt-10 ">
      <div className="flex justify-around">
        <div className="w-[20%]  shadow-2xl bg-white  relative">
          <img src={hat} alt="" className="absolute left-4 -top-8" />
          <h2 className="text-[#00B4AF] mt-6 ps-3 text-xl font-bold"> 4 دوره  </h2>
          <h2 className="ps-3 pb-2">شرکت کردید</h2>
        </div>
        <div className="w-[20%]  shadow-2xl bg-white  relative">
          <img src={basket} alt="" className="absolute left-4 -top-8" />
          <h2 className="text-[#FFB800] mt-6 ps-3 text-xl font-bold"> 2 دوره  </h2>
          <h2 className="ps-3 pb-2">رزرو کردید</h2> 
        </div>
        <div className="flex w-[40%] h-24 bg-white">
          <h3 className="w-2/3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, nemo!</h3>
          <div className="w-1/3">
            <div className="radial-progress text-primary ms-2 mt-2" style={{ "--value": 70 }} role="progressbar">
              70%
            </div>
          </div>
        </div>

        
      </div> 

      <div className="w-[90%] bg-[#F6FFFF] shadow-2xl h-52 mx-auto mt-6 pt-4">
        <h2 className="ms-10 text-xl" >جدید ترین اخبار مقالات</h2>
        <div className="mt-2 mx-10 bg-green-100 p-2">
          <h4>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio, quae.</h4>
        </div>
        <div className="mt-2 mx-10 bg-green-100 p-2">
          <h4>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio, quae.</h4>
        </div>
        <div className="mt-2 mx-10 bg-green-100 p-2">
          <h4>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio, quae.</h4>
        </div>
      </div>
       
      <div className="flex mt-4 gap-24">
        <div className="w-1/2 h-60  flex flex-col gap-2">
          <h2>دوره های در حال برگزاری:</h2>
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
          <h2>دوره های پیشنهادی:</h2>
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

      </div>
  
    </div>
  );
};

export default Pishkhan;
