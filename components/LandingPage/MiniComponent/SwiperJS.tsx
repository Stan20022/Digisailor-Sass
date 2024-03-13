import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function SwiperJS() {
  return (
    <Swiper
    navigation={true}
        modules={[Autoplay]}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
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
          <SwiperSlide key={featuresKey}>
            <div className="h-80 w-56 bg-white rounded-lg p-4 border border-black">
              <h1 className="whitespace-nowrap">{features.heading}</h1>

                <div className="flex items-center gap-2 mt-4">
                  <div className="bg-[#63EC33] h-2 w-2 rounded-full"></div>
                  <p>{features.description}</p>
                </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}

const featureSwiper = [
  {
    heading: "Convinient Dashboard",
    description: "Hello",
  },
  {
    heading: "Stunning templates",
    description: "World",
  },
  {
    heading: "Staffs Management",
    description: "Hello",
  },
  {
    heading: "Appointment scheduler",
    description: "Hello",
  },
  {
    heading: "Contacts storage",
    description: "Hello",
  },
  {
    heading: "Event Management",
  },
  {
    heading: "Plans & Prices",
  },
  {
    heading: "Customizations",
  },
];
