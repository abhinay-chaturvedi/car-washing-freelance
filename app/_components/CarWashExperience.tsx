import Image from "next/image";
import React from "react";

const CarWashExperience = () => {
  return (
    <div className="tw-w-full tw-relative tw-min-h-[600px] tw-bg-customeBackground">
      <Image
        className="-tw-z-10"
        alt=""
        src={"/images/car-wash-exp.png"}
        objectFit="cover"
        layout="fill"
      />
      <div className="tw-max-w-7xl tw-p-2 tw-m-auto tw-h-full">
        <div className="tw-flex tw-gap-6 tw-h-full tw-flex-col tw-mt-4">
          <span className="tw-font-bold tw-text-4xl tw-text-center tw-m-4">
            Revolutionize your car{" "}
            <span className="tw-text-[#0D82B3]">wash experience</span>
          </span>
          <div className="tw-flex tw-flex-col md:tw-flex-row tw-gap-14 tw-justify-center">
            <div className="tw-cursor-pointer tw-flex-1 tw-max-w-[500px]  tw-relative hoverEffect hover-effect">
              <Image
                className="tw-rounded-[30px] tw-p-3 tw-z-0"
                alt=""
                src={"/images/before.png"}
                objectFit="cover"
                // layout="fill"
                height={450}
                width={500}
              />
              {/* <div className="tw-bg-zinc-600 tw-p-2 tw-text-center tw-z-10 tw-bottom-0 tw-rounded-b-3xl tw-absolute tw-w-full">
                <span className="tw-text-white tw-font-bold">AFTER</span>
              </div> */}
            </div>
            <div className="tw-cursor-pointer tw-flex-1 tw-max-w-[500px] hoverEffect hover-effect">
              <Image
                className="tw-rounded-[30px] tw-p-3"
                alt=""
                src={"/images/after.png"}
                objectFit="cover"
                // layout="fill"
                height={450}
                width={500}
              />
              {/* <div className="tw-bg-zinc-600 tw-p-2 tw-text-center tw-z-10 tw-bottom-0 tw-rounded-b-3xl tw-absolute tw-w-full">
                <span className="tw-text-white tw-font-bold">BEFORE</span>
              </div> */}
            </div>
          </div>
          {/* <div className="hover-effect">
            <img src="/images/before-wash.jpg" alt="Your Image"></img>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default CarWashExperience;
