import React from "react";
import {
  RiArrowRightSLine,
  RiCodeBlock,
  RiMagicFill,
  RiMobileDownloadFill,
  RiRemixRunFill,
  RiRocket2Fill,
} from "react-icons/ri";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import { Pagination, FreeMode } from "swiper/modules";
import { RxArrowTopRight } from "react-icons/rx";

const services = [
  {
    icon: <RiRemixRunFill />,
    title: "Branding",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
  },
  {
    icon: <RiMagicFill />,
    title: "Identity",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
  },
  {
    icon: <RiCodeBlock />,
    title: "Website",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
  },
  {
    icon: <RiMobileDownloadFill />,
    title: "Creative",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
  },
  {
    icon: <RiRocket2Fill />,
    title: "SEO",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
  },
];

const ServiceSlider = () => {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 15,
        },
      }}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination, FreeMode]}
    >
      {services.map((service, index) => (
        <SwiperSlide key={index}>
          <div
            className="bg-black h-max px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group rounded cursor-pointer border-[#ff9800] hover:border-t-2
          transition-all duration-300"
          >
            <div
              className="text-4xl w-[50%] h-[50px] flex pt-3 text-[24px] 
            justify-center rounded-full bg-white group-hover:bg-[#ff9800] mb-4"
            >
              {service.icon}
            </div>
            <div className="mb-8">
              <div className="mb-2 text-lg text-white">{service.title}</div>
              <p className="max-w-[350px] leading-normal">
                {service.description}
              </p>
            </div>

            {/* ARROw */}
            <div className="text-3xl">
              <RxArrowTopRight className="group-hover:rotate-45 -rotate-45 transition-all duration-300 text-white
              rounded-full group-hover:text-[#ff9800]"/>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ServiceSlider;
