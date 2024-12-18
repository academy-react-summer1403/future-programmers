import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import http from "../../../core/services/interceptor";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const ProfileModal = ({ MyInfo, setCount, getProfile }) => {

  const deleteImage = async (id) => {
    const data = new FormData();
    data.append("DeleteEntityId", id);

    const result = await http.delete("/SharePanel/DeleteProfileImage", {
      data: data,
    });
    getProfile()
    console.log(result);
  };

    const SelectProfileImage = async (x) => {
      const data = new FormData();
      data.append("ImageId", x);

      const result = await http.post("/SharePanel/SelectProfileImage", data);
    getProfile();
      
      console.log(result);
    };
  return (
    <div className=" selection:h-[500px]  shadow-md bg-gray-200  w-[40%] absolute left-72 top-36 z-50">
      <button
        onClick={() => setCount(false)}
        className="text-[30px] pr-3 "
      >
        &#215;
      </button>
      <div>
        <div className="">
          <Swiper
            className="h-96 "
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
          >
            {MyInfo?.userImage?.map((item, index) => {
              return (
                <SwiperSlide key={index}>
                  <div className="text-center">
                    <img
                      src={item.puctureAddress}
                      alt=""
                      className="mx-auto h-[280px] w-[85%]"
                    />
                    <button
                      className=" bg-cyan-700 rounded-md p-2 mt-2 z-40 mx-auto"
                      onClick={() => deleteImage(item.id)}
                    >
                     پاک کردن
                    </button>

                    {/* <button
                      className=" bg-green-400 z-40 mx-auto"
                      onClick={() => SelectProfileImage(item.id)}
                    >
                      choose
                    </button> */}
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default ProfileModal;
