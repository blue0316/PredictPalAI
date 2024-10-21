import React from "react";

const MatchCounter = (data) => {
  return (
    <div>
      <div className="flex items-center justify-center gap-8">
        <img
          src={"../assets/clubs/arsenal.webp"}
          alt="Team Logo"
          width={56}
          height={56}
          className="w-14 h-14 rounded-full bg-tooltip"
        />
        <div className="flex items-center justify-center w-40 h-10 bg-tooltip text-highlight px-4 py-2 rounded-full shadow">
          <div className="w-12 text-center">MEX</div>
          <div className="px-1">:</div>
          <div className="w-12 text-center">SE</div>
        </div>
        <img
          src="../assets/clubs/barcelona.webp"
          alt="Team Logo"
          width={56}
          height={56}
          className="w-14 h-14 rounded-full bg-tooltip"
        />
      </div>
      <div className="flex items-center justify-center gap-2">
        <div className="flex flex-col items-center">
          <p className="text-xl font-medium leading-none">03</p>
          <p className="text-xs font-normal">Day</p>
        </div>
        <div>:</div>
        <div className="flex flex-col items-center">
          <p className="text-xl font-medium leading-none">12</p>
          <p className="text-xs font-normal">Hours</p>
        </div>
        <div>:</div>
        <div className="flex flex-col items-center">
          <p className="text-xl font-medium leading-none">43</p>
          <p className="text-xs font-normal">Minutes</p>
        </div>
        <div>:</div>
        <div className="flex flex-col items-center">
          <p className="text-xl font-medium leading-none">14</p>
          <p className="text-xs font-normal">Seconds</p>
        </div>
      </div>
    </div>
  );
};

export default MatchCounter;
