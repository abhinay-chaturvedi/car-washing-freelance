import Image from "next/image";
import React from "react";

const CarWashExperience = () => {
  return (
    <div className="tw-w-full tw-relative tw-h-[600px] tw-bg-customeBackground">
      <Image
        className="-tw-z-10"
        alt=""
        src={"/images/car-wash-exp.png"}
        objectFit='cover'
        layout="fill"
      />
      <div className="tw-max-w-7xl tw-p-2 tw-m-auto tw-h-full">
        <div className="tw-flex tw-gap-6 tw-h-full tw-flex-col tw-mt-4">
          <span className="tw-font-bold tw-text-3xl tw-text-center">
            Revolutionize your{" "}
            <span className="tw-text-pink-700">car wash</span> experience
          </span>
          <div className="tw-flex tw-gap-11 tw-justify-center">
            <div className="tw-flex-1 tw-bg-white tw-aspect-square tw-max-w-96 tw-rounded-3xl tw-relative">
              <Image
                className="tw-rounded-[30px] tw-p-3 tw-z-0"
                alt=""
                src={"/images/before-wash.jpg"}
                objectFit="cover"
                layout="fill"
              />
              <div className="tw-bg-zinc-600 tw-p-2 tw-text-center tw-z-10 tw-bottom-0 tw-rounded-b-3xl tw-absolute tw-w-full">
                <span className="tw-text-white tw-font-bold">AFTER</span>
              </div>
            </div>
            <div className="tw-flex-1 tw-bg-white tw-aspect-square tw-max-w-96 tw-rounded-3xl tw-relative">
              <Image
                className="tw-rounded-[30px] tw-p-3"
                alt=""
                src={"/images/before-wash.jpg"}
                objectFit="cover"
                layout="fill"
              />
              <div className="tw-bg-zinc-600 tw-p-2 tw-text-center tw-z-10 tw-bottom-0 tw-rounded-b-3xl tw-absolute tw-w-full">
                <span className="tw-text-white tw-font-bold">BEFORE</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarWashExperience;