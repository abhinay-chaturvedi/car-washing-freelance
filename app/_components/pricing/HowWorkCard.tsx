import React from "react";
import { FaRegBuilding } from "react-icons/fa";
import { FaTv } from "react-icons/fa";
import { FaMobileAlt } from "react-icons/fa";
const classObject = {
  1: "how-works-left",
  2: "how-works-bottom",
  3: "how-works-right"
}
const HowWorkCard = ({
  color,
  stepText,
  stepNo,
  id
}: {
  color: string;
  stepText: string;
  stepNo: number;
  id: string
}) => {
  return (
    <div
      id={id}
      style={{ background: `${color}` }}
      className={
        "tw-flex tw-items-center tw-gap-6 tw-min-h-48 tw-justify-center tw-flex-col tw-flex-1 tw-text-white tw-rounded-xl tw-p-5 "
      }
    >
      {stepNo == 1 && <FaRegBuilding size={60} />}
      {stepNo == 2 && <FaTv size={60} />}
      {stepNo == 3 && <FaMobileAlt size={60} />}
      <button className="tw-bg-white tw-p-2 tw-text-[gray] tw-font-bold tw-rounded-lg tw-px-4">STEP # {stepNo}</button>
      <span className="tw-font-bold">{stepText}</span>
    </div>
  );
};

export default HowWorkCard;
