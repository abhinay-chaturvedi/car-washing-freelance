import Image from "next/image";
import React from "react";
import HowWorkCard from "./HowWorkCard";
import PricingCard from "./PricingCard";

const Pricing = () => {
  return (
    <div className="tw-w-full tw-relative tw-h-[100vh]">
      <Image
        className="-tw-z-10"
        alt=""
        // objectFit="cover"
        src={"/images/pricing-bg.png"}
        layout="fill"
      />
      <div>
        <div className="tw-max-w-5xl tw-m-auto">
            <div className="tw-flex tw-flex-col tw-items-center tw-my-3">
                <span className="tw-font-bold tw-text-[30px]">How it works</span>
                <div className="tw-flex tw-gap-2 ">
                    <HowWorkCard/>
                    <HowWorkCard/>
                    <HowWorkCard/>
                </div>
            </div>
            <div className="tw-flex tw-flex-col tw-my-3">
                <span className="tw-font-bold tw-text-[30px] tw-text-center">Pricing</span>
                <div className="tw-flex tw-gap-10 tw-bg-black">
                  <PricingCard/>
                  <PricingCard/>
                  <PricingCard/>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
