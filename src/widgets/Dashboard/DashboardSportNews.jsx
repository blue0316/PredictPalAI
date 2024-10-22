import React, { useState } from "react";
import { useGetMatchListAllQuery } from "@api/BroadAgeSoccer/broadAgeSoccerApi";
import { Swiper, SwiperSlide } from "swiper/react";

import newsIcon from "@assets/icons/news.png";

const formatDate = (date) => {
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are zero-based
  const year = date.getFullYear();

  return `${day}/${month}/${year}`;
};

const DashboardSportNews = () => {
  const [tabIndex, setTabIndex] = useState(1);

  // const {
  //   data: matches,
  //   isLoading,
  //   error,
  // } = useGetMatchListAllQuery(formatDate(new Date()));

  return (
    <div className="flex flex-col gap-6 max-md:gap-4">
      <h5 className="flex gap-2 items-center text-xl">
        <img src={newsIcon} className="w-5 h-5" alt="Section Icon" /> Football
        All News and Transfer Today
      </h5>
      <div className="flex w-full justify-start border-b-2 border-solid border-border">
        <button
          onClick={() => setTabIndex(1)}
          className={`px-4 py-3 border-0 border-b-2 border-solid text-base font-medium transition-all -mb-0.5 ${
            tabIndex === 1 ? "border-purple" : "border-border"
          }`}
        >
          All News
        </button>
        <button
          onClick={() => setTabIndex(2)}
          className={`px-4 py-3 border-0 border-b-2 border-solid text-base font-medium transition-all -mb-0.5 ${
            tabIndex === 2 ? "border-purple" : "border-border"
          }`}
        >
          Hot News
        </button>
        <button
          onClick={() => setTabIndex(3)}
          className={`px-4 py-3 border-0 border-b-2 border-solid text-base font-medium transition-all -mb-0.5 ${
            tabIndex === 3 ? "border-purple" : "border-border"
          }`}
        >
          Transfer
        </button>
      </div>
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={20}
        className="w-full"
        loop={true}
        lazy={{
          loadPrevNext: true,
        }}
      >
        {Array.from({ length: 10 }, (_, index) => index).map((item, index) => (
          <SwiperSlide
            key={`news-${index}`}
            className="flex flex-col gap-4 max-sm:gap-2 !w-60 max-sm:!w-40"
          >
            <div className="w-60 h-44 max-sm:w-40 max-sm:h-32 rounded-2xl bg-widget">
              <img src="" alt="News" className="w-full h-full rounded-2xl" />
            </div>
            <p className="text-xs font-semibold text-accent">PREMIER LEAGUE</p>
            <div className="flex flex-col gap-2">
              <h5 className="text-base font-medium leading-snug line-clamp-2">
                Signs of Arsenal getting stronger in the Premier League
              </h5>
              <p className="text-sm font-medium leading-tight line-clamp-2">
                The victory over Wolves provided a comfortable distance for
                Arsenal at the top of the Premier League standings
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default DashboardSportNews;
