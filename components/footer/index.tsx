import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="tw-py-5">
      <div className="tw-max-w-7xl tw-m-auto tw-p-3 tw-flex tw-flex-col md:tw-flex-row tw-items-center tw-justify-between">
        <div className="tw-flex tw-gap-3 tw-h-max tw-my-auto">
          <FaFacebookSquare size={30} />
          <FaYoutube size={30} />
          <FaInstagramSquare size={30} />
        </div>
        <div>
          <span className="tw-font-bold tw-text-lg">Quick Links</span>
          <div className="tw-flex tw-flex-col tw-gap-3 tw-mt-2">
            <button className=" tw-text-left">Home</button>
            <button className=" tw-text-left">About</button>
            <button className=" tw-text-left">Services</button>
            <button className=" tw-text-left">Pricing</button>
          </div>
        </div>
        <div>
          <span className="tw-font-bold tw-text-lg">Contact Us</span>
          <div className="tw-flex tw-flex-col tw-gap-3 tw-mt-3">
            <div className="tw-flex tw-items-center tw-gap-3">
              <FaEnvelope />
              <span>carwashing@gmail.com</span>
            </div>
            <div className="tw-flex tw-items-center tw-gap-3">
              <FaMapMarkerAlt />

              <span>Toronto On</span>
            </div>
            <div className="tw-flex tw-items-center tw-gap-3">
              <FaPhoneAlt />
              <span>+91 9939838383</span>
            </div>
          </div>
        </div>
        <div>
          <span className="tw-font-bold tw-text-lg">New letter</span>
          <div className="tw-mt-3">
            <div className="tw-flex tw-border-2 tw-border-sky-500 tw-rounded-2xl">
              <input
                className="tw-outline-none tw-p-2 tw-rounded-2xl"
                type="text"
                placeholder="Enter your email"
              />
              <button className="tw-bg-sky-200 tw-p-2 tw-rounded-r-2xl">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
