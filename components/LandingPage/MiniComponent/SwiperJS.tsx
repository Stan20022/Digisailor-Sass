import "swiper/css";
import "./index.scss"
import "swiper/css/pagination";
import "swiper/css/navigation";
import { featureSwiper } from "@/lib/constants";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

export default function SwiperJS() {
  return (
    <Swiper
      modules={[Autoplay, Pagination]}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      breakpoints={{
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 5,
          spaceBetween: 10,
        },
      }}
      className="mySwiper"
    >
      {featureSwiper.map((features, featuresKey) => {
        return (
          <SwiperSlide key={featuresKey} className="cursor-pointer">
            <div className="h-80 w-56 bg-white rounded-lg p-4 border border-black">
              <h1 className="whitespace-nowrap text-[#63EC33] font-bold">
                {features.heading}
              </h1>

              <p className="mt-4 text-justify">{features.description}</p>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
