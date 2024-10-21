import React from "react";
import { Link } from "react-router-dom";

const PageFooter = () => {
  return (
    <div className="flex justify-between px-6 py-8 max-md:px-4 max-md:py-6 max-md:mb-[50px]">
      <div className="flex gap-8 max-md:gap-4">
        <Link to="/terms-of-service">Terms Of Service</Link>
        <Link to="/report">Report Abuse</Link>
        <Link to="/privacy-policy">Privacy & Data Policy</Link>
      </div>
      <div className="text-end">2024 All Rights Reserved © PredictPalAI</div>
    </div>
  );
};

export default PageFooter;
