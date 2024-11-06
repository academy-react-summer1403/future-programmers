import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import http from "../../../core/services/interceptor";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const ProfileModal = ({ MyInfo }) => {
  const deleteImage = async (id) => {
    const data = new FormData();
    data.append("DeleteEntityId", id);
    const res = await http.delete("/SharePanel/GetProfileInfo", { data: data });
    console.log(res);
  };
  return (
    <div className="h-[500px] bg-gray-300  w-[80%] absolute left-40 top-36 z-50">
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
            {MyInfo?.userImage.map((item) => {
              return (
                <SwiperSlide>
                  <div className="text-center">
                    <img
                      src={item.puctureAddress}
                      alt=""
                      className="mx-auto w-[25%]"
                    />
                    <button className=" bg-red-400 z-40 mx-auto" onClick={() => deleteImage(item.id)}>delete</button>
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
