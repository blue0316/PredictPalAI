import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

import shirtIcon from "@assets/icons/shirt.png";

const DashboardShoppingProducts = () => {
  return (
    <div className="flex flex-col gap-6 max-md:gap-4 border-b-2 border-solid border-border pb-6 max-md:pb-4">
      <div className="flex justify-between">
        <h5 className="flex gap-2 items-center text-xl">
          <img src={shirtIcon} className="w-5 h-5" alt="Section Icon" />{" "}
          Shopping
        </h5>
        <div className="flex gap-2">
          <button
            id="prev-button"
            className="flex items-center justify-center w-6 h-6 hover:text-coldWhite transition-all"
          >
            <FontAwesomeIcon
              icon={faArrowLeft}
              className="w-4 h-4"
              width={16}
              height={16}
            />
          </button>
          <button
            id="next-button"
            className="flex items-center justify-center w-6 h-6 hover:text-coldWhite transition-all"
          >
            <FontAwesomeIcon
              icon={faArrowRight}
              className="w-4 h-4"
              width={16}
              height={16}
            />
          </button>
        </div>
      </div>
      <Swiper
        modules={[Navigation]}
        slidesPerView={"auto"}
        spaceBetween={20}
        className="w-full"
        navigation={{
          prevEl: "#prev-button",
          nextEl: "#next-button",
        }}
        loop={true}
        lazy={{
          loadPrevNext: true,
        }}
      >
        {Array.from({ length: 10 }, (_, index) => index).map((item, index) => (
          <SwiperSlide
            key={`product-${index}`}
            className="flex flex-col gap-4 !w-60 max-sm:!w-40"
          >
            <div className="w-60 h-72 max-sm:w-40 max-sm:h-48 p-6 rounded-2xl bg-widget shadow-sm">
              <img src="" alt="Product" className="w-full h-full" />
            </div>
            <div className="flex flex-col gap-2">
              <h5 className="text-base font-medium line-clamp-2">
                Chelsea Home Kit 21 / 22
              </h5>
              <p className="text-lg font-medium text-accent leading-none">
                $150.10
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default DashboardShoppingProducts;
