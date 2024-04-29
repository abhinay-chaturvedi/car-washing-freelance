import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import "./index.css";
import BookModal from "@/components/BookModal";
import Link from "next/link";
import { useRouter } from "next/navigation";

// - Exterior hand wash
// - Wheel clean
// - Tire shine
// - Window in &amp; out
// - Door jambs wipe
// - Protective Wax
// - Interior Vacuum
const PricingCard = ({
  cl,
  plan,
  details,
  color,
  pColor,
}: {
  cl: string;
  plan: string;
  details: string[];
  color: string;
  pColor: string;
}) => {
  // console.log(color)
  const router = useRouter();
  return (
    <div className={"tw-shrink-0 tw-w-[100%] md:tw-w-[31%] " + cl}>
      <div
        style={{ backgroundColor: `${pColor}` }}
        className="-tw-z-10  tw-text-center tw-rounded-md tw-w-[80%] tw-m-auto tw-p-2 tw-translate-y-1 tw-relative tw-text-white"
      >
        <span className="tw-font-bold">Package</span>
      </div>
      <div
        style={{ backgroundColor: `${color}` }}
        className={
          "tw-flex tw-gap-1 tw-flex-col tw-rounded-xl tw-text-white tw-p-5 tw-py-3 tw-pt-4  tw-min-h-[460px] "
        }
      >
        <span className="tw-font-bold tw-text-lg">{plan}</span>
        {/* <div>
          <span className="tw-font-bold tw-text-3xl">$25.00</span>
          <span>/Per Wash</span>
        </div> */}
        <div className="tw-flex tw-flex-col tw-gap-1">
          {details?.map((item, index) => {
            return (
              <div key={index}>
                <div className="tw-flex tw-gap-2 tw-items-center">
                  <FaCheckCircle />
                  <span>{item}</span>
                </div>
                <div className="tw-bg-white tw-h-[1px] tw-m-[1px] tw-w-full"></div>
              </div>
            );
          })}
        </div>

        <button onClick={() => router.push(`/plans/${plan.split(" ").join("-")}`)} className="tw-mt-[auto] tw-py-2 tw-rounded-xl tw-bg-white tw-text-black tw-font-bold">
          Purchase
        </button>
        
        {/* <BookModal pricePlan={plan} /> */}
      </div>
    </div>
  );
};

export default PricingCard;
