// Swiper modules
import "swiper/css";
import "./index.scss";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

// Common modules
import gsap from "gsap";
import Link from "next/link";
import Image from "next/image";

// Icons
import { BsArrowUpRightSquare } from "react-icons/bs";

export default function LoginSwiper() {
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
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 1,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
      }}
      className="mySwiper"
    >
      {loginSwiper.map((loginSwipers, loginSwiperKey) => (
        <SwiperSlide key={loginSwiperKey}>
          <div className="h-[85vh] bg-main p-4 rounded-lg relative">
            <h1 className="font-bold text-2xl flex items-center justify-between text-white">
              {loginSwipers.heading}
              <Link href={loginSwipers.href}>
                <BsArrowUpRightSquare className="hover:text-black text-4xl" />
              </Link>
            </h1>

            <p className="mt-4 text-black text-justify">
              {loginSwipers.description1}
            </p>

            <p className="mt-4 text-black text-justify">
              {loginSwipers.description2}
            </p>

            <div className="absolute bottom-5 right-5 pointer-events-none">
              <Image
                src={"/assets/star.png"}
                alt=""
                height={300}
                width={300}
                className="w-32"
              />
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

const loginSwiper = [
  {
    heading: "1. Convinient Dashboard",
    href: "/dashboard",
    description1:
      "The Convenient Dashboard is a user-friendly interface designed with the goal of simplifying data analysis and decision-making. It provides a comprehensive view of summary information, key performance indicators (KPIs), and other crucial data at a glance.",
    description2:
      "The dashboard is structured to present information in an easily digestible format, allowing users to quickly understand the status and performance of various aspects of their operations. This includes real-time data updates, trend analysis, and predictive analytics.",
  },

  {
    heading: "2. Stunning Templates",
    href: "/dashboard",
    description1:
      "The Stunning Templates feature offers a wide array of professionally designed, visually appealing templates that serve as a starting point for creating websites, presentations, marketing materials, and more.",
    description2:
      "These templates are crafted by expert designers with a keen eye for aesthetics and usability. They come in various styles and themes, catering to a broad range of industries and purposes. Whether you're building a website for a small business, crafting a portfolio, setting up an online store, or creating a personal blog, you’ll find a template that fits your needs.",
  },

  {
    heading: "3. Staffs Managemnt",
    href: "/dashboard",
    description1:
      "The Staffs Management feature is a comprehensive system designed to streamline the management of staff details, schedules, and tasks, thereby ensuring efficient operation and optimal resource allocation.",
    description2:
      "This feature provides a centralized platform where all staff details can be stored and managed. This includes personal information, job roles, skills, and qualifications. Having this information readily available makes it easier to assign tasks based on staff skills and availability, leading to increased productivity and job satisfaction.",
  },
];
