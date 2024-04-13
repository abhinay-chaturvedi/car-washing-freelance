import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import "./index.css"
const PricingCard = ({cl}: {cl: string}) => {
  return (
    <div className={"tw-shrink-0 tw-w-[100%] md:tw-w-[31%] " + cl}>
        <div className="tw-bg-gray-400  tw-text-center tw-rounded-md tw-w-[80%] tw-m-auto tw-p-2 tw-translate-y-3 tw-text-white">
            <span className="tw-font-bold">Package</span>
        </div>
      <div className="tw-flex tw-gap-4 tw-flex-col tw-rounded-md tw-text-white tw-p-5 tw-bg-[#7A2048] tw-min-h-[350px]">
        <span className="tw-font-bold tw-text-lg">Eco Essentials Wash</span>
        <span className="tw-font-bold tw-text-4xl">$25.00</span>
        <span>/Per Wash</span>
        <div className="tw-flex tw-flex-col tw-gap-1">
          <div className="tw-flex tw-gap-2 tw-items-center">
            <FaCheckCircle />
            <span>Water-efficient exterior wash</span>
          </div>
          <div className="tw-h-[1px] tw-bg-black"></div>
          <div className="tw-flex tw-gap-2 tw-items-center">
            <FaCheckCircle />
            <span>Water-efficient exterior wash</span>
          </div>
          <div className="tw-h-[1px] tw-bg-black"></div>
          <div className="tw-flex tw-gap-2 tw-items-center">
            <FaCheckCircle />
            <span>Water-efficient exterior wash</span>
          </div>
          <div className="tw-h-[1px] tw-bg-black"></div>
        </div>
        <button className="tw-py-2 tw-rounded-md tw-bg-white tw-text-black tw-font-bold">
          Purchase
        </button>
      </div>
    </div>
  );
};

export default PricingCard;
