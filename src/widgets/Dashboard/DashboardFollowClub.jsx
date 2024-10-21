import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

import gamerIcon from "@assets/icons/gamer.png";

const DashboardFollowClub = () => {
  return (
    <div className="flex flex-col gap-6 max-md:gap-4 border-b-2 border-solid border-border pb-6 max-md:pb-4">
      <div className="flex justify-between">
        <h5 className="flex gap-2 items-center text-xl">
          <img src={gamerIcon} className="w-5 h-5" alt="Section Icon" /> Follow
          Club
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
        className="w-full !-m-2 !p-2"
        navigation={{
          prevEl: "#prev-button",
          nextEl: "#next-button",
        }}
        loop={true}
        lazy={{
          loadPrevNext: true,
        }}
      >
        {Array.from({ length: 20 }, (_, index) => index).map((item, index) => (
          <SwiperSlide
            key={`club-logo-${index}`}
            className="flex justify-center items-center !w-32 !h-32 rounded-full bg-widget shadow"
          >
            <img src="" className="w-16 h-16 rounded-full" alt="Club Logo" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default DashboardFollowClub;
