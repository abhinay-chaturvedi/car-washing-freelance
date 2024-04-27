"use client";
import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import ClientSayCard from "./ClientSayCard";
import Autoplay from "embla-carousel-autoplay";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";

const ClientSays = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({delay: 1500, stopOnInteraction: false})]);
  return (
    <div className="tw-bg-customeBackground tw-py-3">
      <div className="tw-overflow-hidden tw-max-w-7xl tw-m-auto tw-p-3 tw-relative">
        <span className="tw-text-center tw-block tw-font-bold tw-text-3xl tw-my-">
          What They Say About Us
        </span>
        <div ref={emblaRef} className="tw-overflow-hidden tw-ml-2">
          <div className="tw-flex tw-justify-between tw-gap-2 tw-mt-3 tw-px-2">
            <ClientSayCard message="I've been using this car washing website for months now, and I'm continually impressed by their consistency and attention to detail. Whether it's a quick exterior wash or a full interior detailing, they always deliver exceptional results." name="Emily Rodriguez" />
            <ClientSayCard message="As a busy professional, I appreciate the convenience of being able to schedule a car wash online. This website makes it incredibly easy to book an appointment, and the quality of their service is second to none. Highly recommended!" name="Michael Chen" />
            <ClientSayCard message="I'm a stickler for cleanliness when it comes to my car, and this website never disappoints. Their team takes the time to thoroughly clean every nook and cranny, leaving my car looking and smelling like new. A must-try for any car enthusiast!" name="Sarah Johnson" />
            <ClientSayCard message="I recently used this car washing website for the first time, and I was blown away by the results. Not only did they remove stubborn stains from my upholstery, but they also polished my car to a brilliant shine. I'll definitely be a repeat customer." name="David Thompson" />
            <ClientSayCard message="I don't trust just anyone with my car, but this website has earned my trust time and time again. Their technicians are skilled and experienced, and they use top-of-the-line products to ensure a showroom-worthy finish. 10/10 would recommend!" name="Jessica Martinez" />
            {/* <ClientSayCard/>
                <ClientSayCard/>
                <ClientSayCard/> */}
          </div>
        </div>
        {/* <div className="tw-flex  tw-gap-4 tw-bottom-0 tw-left-[45%] tw-absolute">
          <button onClick={() => console.log(emblaApi?.scrollNext())}>
            <FaArrowCircleLeft size={40} />
          </button>
          <button onClick={() => emblaApi?.scrollPrev()}>
            <FaArrowCircleRight size={40} />
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default ClientSays;
