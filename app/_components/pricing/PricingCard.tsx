import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import "./index.css";

// - Exterior hand wash
// - Wheel clean
// - Tire shine
// - Window in &amp; out
// - Door jambs wipe
// - Protective Wax
// - Interior Vacuum
const PricingCard = ({
  cl,
  plan,
  details,
}: {
  cl: string;
  plan: string;
  details: string[];
}) => {
  return (
    <div className={"tw-shrink-0 tw-w-[100%] md:tw-w-[31%] " + cl}>
      <div className="tw-bg-gray-400  tw-text-center tw-rounded-md tw-w-[80%] tw-m-auto tw-p-2 tw-translate-y-3 tw-text-white">
        <span className="tw-font-bold">Package</span>
      </div>
      <div className="tw-flex tw-gap-1 tw-flex-col tw-rounded-xl tw-text-white tw-p-5 tw-py-3 tw-pt-4 tw-bg-[#7A2048] tw-min-h-[460px]">
        <span className="tw-font-bold tw-text-lg">{plan}</span>
        <div>
          <span className="tw-font-bold tw-text-3xl">$25.00</span>
          <span>/Per Wash</span>
        </div>
        <div className="tw-flex tw-flex-col tw-gap-1">
          {details?.map((item, index) => {
            return (
              <div key={index} className="tw-flex tw-gap-2 tw-items-center">
                <FaCheckCircle />
                <span>{item}</span>
              </div>
            );
          })}
        </div>
        <button className="tw-mt-[auto] tw-py-2 tw-rounded-md tw-bg-white tw-text-black tw-font-bold">
          Purchase
        </button>
      </div>
    </div>
  );
};

export default PricingCard;
