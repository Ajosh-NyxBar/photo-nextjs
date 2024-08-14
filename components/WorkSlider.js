import React from "react";

const work = [
  {
    slides: [
      {
        images: [
          {
            path: "/thumb1.jpg",
            title: "title",
          },
          {
            path: "/thumb2.jpg",
            title: "title",
          },
          {
            path: "/thumb3.jpg",
            title: "title",
          },
          {
            path: "/thumb4.jpg",
            title: "title",
          },
          {
            path: "/thumb5.jpg",
            title: "title",
          },
          {
            path: "/thumb1.jpg",
            title: "title",
          },
        ],
      },
    ],
  },
];

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";
import { BsArrowRight } from "react-icons/bs";

import Image from "next/image";

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="h-[280px] sm:h-[480px]"
    >
      {work[0].slides.map((item, index) => (
        <SwiperSlide key={index}>
          <div className="grid grid-cols-3 grid-rows-2 gap-4 cursor-pointer">
            {item.images.map((image, index) => (
              <div
                key={index}
                className="relative rounded-lg overflow-hidden flex items-center justify-center group"
              >
                <div className="flex items-center justify-center relative overflow-hidden group">
                  {/* IMAGE */}
                  <Image src={image.path} width={500} height={300} />

                  {/* Overlay */}
                  <div
                    className="absolute bg-white/90 flex flex-col items-center
                  justify-end gap-8 p-4 text-xl transition duration-300 ease-in-out transform translate-x-[100%] translate-y-full
                  group-hover:translate-y-0 group-hover:translate-x-0 bottom-0 right-0"
                  > 
                    <div className="flex items-center gap-x-2 text-[14px] tracking-[0.2rem]">
                      <div className="delay-100">My</div>
                      <div className="translate-y-[300%] group-hover:translate-y-0 transition-all duration-300 delay-150">
                        Work
                      </div>
                      <div className="translate-y-[300%] group-hover:translate-y-0 transition-all duration-300 delay-300">
                        <BsArrowRight className="text-2xl" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default WorkSlider;