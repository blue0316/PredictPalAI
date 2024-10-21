import React from "react";

import Spring from "@components/Spring";

import coinSvg from "@assets/icons/coin.svg";

const UserStatusCard = () => {
  return (
    <Spring className="card flex flex-col gap-9 card-padded !rounded-2xl pb-6">
      <div className="flex flex-col items-center gap-5">
        <h4 className="text-2xl font-semibold">Subscription</h4>
        <h3 className="font-alfaSlabOne font-normal text-[32px] text-[#F5C451] glow-sm">
          Premium
        </h3>
      </div>
      <div className="flex flex-col items-center gap-4">
        <h4 className="text-2xl font-semibold">Your Rewards</h4>
        <img
          src={coinSvg}
          width={56}
          height={56}
          alt="Coins"
          className="w-14 h-14"
        />
        <h3 className="font-alfaSlabOne font-normal text-[32px] text-[#F5C451] glow-sm">
          2,200{" "}
        </h3>
      </div>
    </Spring>
  );
};

export default UserStatusCard;
