"use client";
import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import ClientSayCard from "./ClientSayCard";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";

const ClientSays = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  return (
    <div className="tw-bg-customeBackground tw-py-3">
      <div className="tw-overflow-hidden tw-max-w-7xl tw-m-auto tw-p-3 tw-relative">
        <span className="tw-text-center tw-block tw-font-bold tw-text-3xl tw-my-">
          What They Say About Us
        </span>
        <div ref={emblaRef} className="tw-overflow-hidden tw-ml-2">
          <div className="tw-flex tw-justify-between tw-gap-2 tw-mt-3 tw-px-2">
            <ClientSayCard />
            <ClientSayCard />
            <ClientSayCard />
            <ClientSayCard />
            <ClientSayCard />
            {/* <ClientSayCard/>
                <ClientSayCard/>
                <ClientSayCard/> */}
          </div>
        </div>
        <div className="tw-flex  tw-gap-4 tw-bottom-0 tw-left-[45%] tw-absolute">
          <button onClick={() => console.log(emblaApi?.scrollNext())}>
            <FaArrowCircleLeft size={40} />
          </button>
          <button onClick={() => emblaApi?.scrollPrev()}>
            <FaArrowCircleRight size={40} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClientSays;
