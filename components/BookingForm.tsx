"use client";
import React, { useState } from "react";
import { FaWindowClose } from "react-icons/fa";

const BookingForm = ({ plan }: { plan: string }) => {
  console.log("🚀 ~ BookingForm ~ plan:", plan);
  const [error, setError] = useState<string | null>(null);
  const [booking, setBooking] = useState({
    plan: plan,
    name: "",
    phone: "",
    pincode: "",
    address: "",
  });
  const [isSending, setIsSending] = useState(false);
  const handleBookNow = async () => {
    try {
      if (!booking.plan) {
        setError("Please Select Plan");
        return;
      }
      if (!booking.name) {
        setError("Please Enter Name");
        return;
      }
      if (!booking.phone) {
        setError("Please Enter Phone");
        return;
      }
      if (!booking.pincode) {
        setError("Please Enter Pincode");
        return;
      }
      if (!booking.address) {
        setError("Please Enter Address");
        return;
      }
      console.log(booking);
      setIsSending(true);
      const res = await fetch("/api/sendMessage", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(booking),
      });
      const result = await res.json();
      console.log("🚀 ~ handleBookNow ~ result:", result);
      setIsSending(false);
      if (result.status == 200) {
        //TODO:
        // will make something for confirmation to customers
        setBooking({
          plan: plan,
          name: "",
          phone: "",
          pincode: "",
          address: "",
        });
      } else {
        setError(result.message);
      }
    } catch (err) {
      console.error(err);
      setIsSending(false);
    }
  };
  return (
    <div className="tw-max-w-xl tw-m-auto tw-bg-slate-300 tw-rounded-lg">
      <div className="tw-p-5 tw-text-black">
        <div className="tw-flex tw-justify-center tw-items-center">
          <h2 className="tw-font-bold">Book Your Car Wash</h2>
          {/* <button
            onClick={() => setOpen(false)}
            className=" tw-rounded-md tw-p-1"
          >
            <FaWindowClose size={30} />
          </button> */}
        </div>
        <div>
          {error && (
            <div className="tw-bg-red-400 tw-p-2 tw-text-white tw-rounded-lg tw-flex tw-justify-between tw-items-center">
              <span>{error}</span>
              <button onClick={() => setError(null)}>
                <FaWindowClose size={20} />
              </button>
            </div>
          )}
          <div className="tw-flex tw-flex-col tw-gap-1">
            <label className="tw-font-bold" htmlFor="">
              Select Plan:
            </label>
            <select
              onChange={(e) =>
                setBooking((prev) => ({
                  ...prev,
                  [e.target.name]: e.target.value,
                }))
              }
              defaultValue={plan}
              className="tw-border-[1px] tw-border-[gray] tw-rounded-lg tw-p-2 tw-cursor-pointer"
              name="plan"
              id=""
              disabled
            >
              <option value="" disabled selected hidden>
                Please Select Your Plan...
              </option>
              <option value="Basic Wash">Basic Wash</option>
              <option value="Standard Clean">Standard Clean</option>
              <option value="Deluxe Shine">Deluxe Shine</option>
              <option value="Premium">Premium</option>
              <option value="Ultimate Protection">Ultimate Protection</option>
              <option
                value="Platinum Full Service"
                // selected={pricePlan == "Platinum Full Service"}
              >
                Platinum Full Service
              </option>
            </select>
          </div>
          <div className="tw-flex tw-flex-col tw-gap-1">
            <label className="tw-font-bold" htmlFor="Name">
              Name:
            </label>
            <input
              name="name"
              value={booking.name}
              onChange={(e) =>
                setBooking((prev) => ({
                  ...prev,
                  [e.target.name]: e.target.value,
                }))
              }
              className="tw-outline-none tw-border-[1px] tw-border-[gray] tw-rounded-lg tw-p-2"
              type="text"
              placeholder="Enter your name"
            />
          </div>
          <div className="tw-flex tw-flex-col tw-gap-1">
            <label className="tw-font-bold" htmlFor="Phone">
              Phone:
            </label>
            <input
              value={booking.phone}
              name="phone"
              onChange={(e) =>
                setBooking((prev) => ({
                  ...prev,
                  [e.target.name]: e.target.value,
                }))
              }
              className="tw-outline-none tw-border-[1px] tw-border-[gray] tw-rounded-lg tw-p-2"
              type="text"
              placeholder="Enter your phone with code"
            />
          </div>
          <div className="tw-flex tw-flex-col tw-gap-1">
            <label className="tw-font-bold" htmlFor="Pincode">
              Pincode:
            </label>
            <input
              value={booking.pincode}
              name="pincode"
              onChange={(e) =>
                setBooking((prev) => ({
                  ...prev,
                  [e.target.name]: e.target.value,
                }))
              }
              className="tw-outline-none tw-border-[1px] tw-border-[gray] tw-rounded-lg tw-p-2"
              type="text"
              placeholder="Enter your pincode"
            />
          </div>
          <div className="tw-flex tw-flex-col tw-gap-1">
            <label className="tw-font-bold" htmlFor="Address">
              Address:
            </label>
            <input
              value={booking.address}
              name="address"
              onChange={(e) =>
                setBooking((prev) => ({
                  ...prev,
                  [e.target.name]: e.target.value,
                }))
              }
              className="tw-outline-none tw-border-[1px] tw-border-[gray] tw-rounded-lg tw-p-2"
              type="text"
              placeholder="Enter your full address eg. Street, Area, Landsmark"
            />
          </div>
          <div className="tw-mt-3">
            <button
              disabled={isSending}
              onClick={handleBookNow}
              className="disabled:tw-opacity-[.3] tw-m-auto tw-block tw-border-[2px] tw-p-2 tw-rounded-lg tw-bg-[#093F56] tw-text-white"
            >
              Book now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingForm;
