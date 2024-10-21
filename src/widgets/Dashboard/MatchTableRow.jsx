import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartLine, faInfoCircle } from "@fortawesome/free-solid-svg-icons";

const formatDateLong = (date) => {
  const day = date.getDate();
  const monthNames = [
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
  const month = monthNames[date.getMonth()];
  const year = date.getFullYear();

  return `${day} ${month} ${year}`;
};

const MatchTabelRow = ({ data, odd = true }) => {
  return (
    <div
      className={`flex flex-wrap justify-center gap-20 max-md:gap-x-10 max-sm:gap-x-4 max-md:gap-y-2 px-6 py-4 rounded-lg font-semibold shadow-sm ${
        odd ? "bg-widget" : ""
      }`}
    >
      <div className="flex items-center gap-8 max-sm:gap-4">
        <div className="flex items-center justify-start gap-4 w-40 max-sm:w-32">
          <img
            src="../assets/clubs/barcelona.webp"
            width={32}
            height={32}
            className="w-8 h-8 rounded-full"
            alt="Team Logo"
          />
          <span>Barcelona</span>
        </div>
        <div className="flex justify-center items-center w-16 h-8 rounded-2xl bg-[#182837] text-accent">
          <div className="flex justify-center w-3">1</div>
          <div>{` - `}</div>
          <div className="flex justify-center w-3">2</div>
        </div>
        <div className="flex justify-end items-center gap-4 w-40 max-sm:w-32">
          <span>Real Madrid</span>
          <img
            src="../assets/clubs/realmadrid.webp"
            width={32}
            height={32}
            className="w-8 h-8 rounded-full"
            alt="Team Logo"
          />
        </div>
      </div>
      <div className="flex justify-center items-center w-28 h-8 px-4 py-2 rounded-lg bg-[#313237] text-coldWhite">
        Full - Time
      </div>
      <div className="flex items-center gap-10 max-sm:gap-4 text-inactive">
        <span>{formatDateLong(new Date())}</span>
        <div className="flex gap-4">
          <Link
            to="/"
            className="group flex justify-center items-center w-6 h-6"
          >
            <FontAwesomeIcon
              icon={faInfoCircle}
              className="text-text-inactive w-5 h-5 group-hover:text-black transition-all"
            />
          </Link>
          <Link
            to="/"
            className="group flex justify-center items-center w-6 h-6"
          >
            <FontAwesomeIcon
              icon={faChartLine}
              className="text-text-inactive w-5 h-5 group-hover:text-black transition-all"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MatchTabelRow;
