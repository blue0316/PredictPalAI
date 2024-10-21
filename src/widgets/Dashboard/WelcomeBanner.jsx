import React from "react";
import { useSelector } from "react-redux";

const WelcomeBanner = () => {
  const profile = useSelector((state) => state.user?.profile);

  const formatDate = (date) => {
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const dayOfWeek = days[date.getDay()];
    const dayOfMonth = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();

    // Function to get the ordinal suffix for the day
    function getOrdinalSuffix(day) {
      if (day > 3 && day < 21) return "th"; // Covers 11th to 19th
      switch (day % 10) {
        case 1:
          return "st";
        case 2:
          return "nd";
        case 3:
          return "rd";
        default:
          return "th";
      }
    }

    const ordinalSuffix = getOrdinalSuffix(dayOfMonth);

    return `${dayOfWeek}, ${dayOfMonth}${ordinalSuffix} ${month} ${year}`;
  };

  return (
    <div
      className="flex flex-col gap-4 justify-center items-center w-full h-full max-md:min-h-[320px] bg-cover bg-center rounded-2xl shadow-widget"
      style={{ backgroundImage: "url(/dashboard/welcome_banner.webp)" }}
    >
      <h2 className="text-coldWhite font-medium text-center text-[32px]">
        Welcome to{" "}
        <span className="text-[36px] font-bold leading-relaxed">
          PredictPalAI
        </span>
        {profile?.Name ? (
          <>
            ,<br />
            {profile.Name}!
          </>
        ) : (
          "!"
        )}
      </h2>
      <p className="text-coldWhite">{formatDate(new Date())}</p>
    </div>
  );
};

export default WelcomeBanner;
