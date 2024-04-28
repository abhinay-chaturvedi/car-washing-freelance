import Image from "next/image";
import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <nav className="tw-h-[15vh] tw-px-4 tw-sticky tw-top-0 tw-bg-white tw-z-50">
      <div className="tw-max-w-7xl tw-m-auto tw-flex tw-items-center tw-h-full tw-justify-between">
        <Link href={"/"}>
          <Image
            alt="logo"
            objectFit="contain"
            src={"/images/carwashing-logo.png"}
            width={180}
            height={1005}
          />
        </Link>
        <div className="tw-bg-blue-500 tw-h-full tw-flex tw-gap-6 tw-text-white tw-items-center tw-p-4">
          <Link href={"/"} className="hover:tw-text-black">Home</Link>
          <Link href={"/about-us"} className="hover:tw-text-black">About Us</Link>
          <Link href={"/#"} className="hover:tw-text-black">Product</Link>
          <Link href={"/contact-us"} className="hover:tw-text-black">Contact Us</Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
