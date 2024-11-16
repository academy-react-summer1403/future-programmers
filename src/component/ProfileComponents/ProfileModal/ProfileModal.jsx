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
    <div className="h-[500px] bg-gray-300  w-[80%] absolute left-40 top-36 z-50">
      <button
        onClick={() => setCount(false)}
        className="btn btn-active btn-primary"
      >
        close
      </button>
      <div>
        <div className="">
          <Swiper
            className="h-96"
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
            {MyInfo?.userImage?.map((item) => {
              return (
                <SwiperSlide>
                  <div className="text-center">
                    <img
                      src={item.puctureAddress}
                      alt=""
                      className="mx-auto w-[25%]"
                    />
                    <button
                      className=" bg-red-400 z-40 mx-auto"
                      onClick={() => deleteImage(item.id)}
                    >
                      delete
                    </button>

                    <button
                      className=" bg-green-400 z-40 mx-auto"
                      onClick={() => SelectProfileImage(item.id)}
                    >
                      choose
                    </button>
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
