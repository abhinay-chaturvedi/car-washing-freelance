import Image from "next/image";
import React from "react";

const NavBar = () => {
  return (
    <nav className="tw-h-[9vh] tw-px-4 tw-sticky tw-top-0 tw-bg-white tw-z-50">
      <div className="tw-max-w-7xl tw-m-auto tw-flex tw-items-center tw-h-full tw-justify-between">
        <div>
          <Image
            alt="logo"
            objectFit="contain"
            src={"/images/carwashing-logo.png"}
            width={110}
            height={65}
          />
        </div>
        <div className="tw-bg-blue-500 tw-h-full tw-flex tw-gap-6 tw-text-white tw-items-center tw-p-4">
          <button className="hover:tw-text-black">Home</button>
          <button className="hover:tw-text-black">About Us</button>
          <button className="hover:tw-text-black">Product</button>
          <button className="hover:tw-text-black">Contact Us</button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
