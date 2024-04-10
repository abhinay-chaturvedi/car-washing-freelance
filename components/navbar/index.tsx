import React from "react";

const NavBar = () => {
  return (
    <nav className="tw-h-[9vh] tw-sticky tw-top-0 tw-bg-white tw-z-50">
      <div className="tw-max-w-7xl tw-m-auto tw-flex tw-items-center tw-h-full tw-justify-between">
        <div>logo</div>
        <div className="tw-bg-blue-500 tw-h-full tw-flex tw-gap-6 tw-text-white tw-items-center tw-p-4">
          <button>Home</button>
          <button>About Us</button>
          <button>Product</button>
          <button>Contact Us</button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
