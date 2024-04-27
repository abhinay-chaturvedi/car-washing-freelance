import Image from "next/image";
import React from "react";

const FirstCarWash = () => {
  return (
    <div className="tw-w-full tw-relative tw-h-[500px]">
      <Image
        className="-tw-z-10"
        alt=""
        src={"/images/first-car-wash.png"}
        layout="fill"
        objectFit="cover"
      />
      <div className="tw-max-w-7xl tw-p-2 tw-m-auto tw-h-full">
        <div className="tw-flex tw-justify-center tw-items-end tw-gap-5 tw-h-full tw-flex-col tw-text-white tw-w-full">
          <div className="tw-flex tw-flex-col tw-max-w-[90%] md:tw-max-w-[40%] tw-gap-3 carWashExpAnime">
            <span className="tw-font-bold tw-text-6xl">
              Get 50% Off your First Car Wash
            </span>

            <button className="tw-w-max tw-bg-white tw-text-blue-500 tw-rounded-xl tw-p-2 tw-font-bold tw-px-8">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstCarWash;
