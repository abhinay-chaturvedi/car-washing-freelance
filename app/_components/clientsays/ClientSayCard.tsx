import Image from "next/image";
import React from "react";

const ClientSayCard = ({name, message}: {name: string, message: string}) => {
  return (
    <div className="md:tw-basis-[30%] tw-basis-[80%] tw-shrink-0 tw-bg-white tw-rounded-md tw-shadow-lg tw-p-4">
      <div className="tw-flex tw-items-center tw-gap-3 tw-mb-2">
        <div className="tw-w-10 tw-h-10 tw-relative">
          <Image
            className="tw-rounded-[50%]"
            alt=""
            layout="fill"
            src={"/images/before-wash.jpg"}
          />
        </div>
        <span className="tw-font-bold">{name}</span>
      </div>
      <div className="tw-mb-2">
        <span>
          {message}
        </span>
      </div>
      <div>⭐⭐⭐⭐⭐</div>
    </div>
  );
};

export default ClientSayCard;
