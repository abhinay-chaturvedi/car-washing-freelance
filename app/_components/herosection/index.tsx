"use client";
import Image from "next/image";
import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from 'embla-carousel-autoplay'
import { FaFacebookSquare, FaInstagramSquare, FaYoutube } from "react-icons/fa";
import HeroSectionCard from "./HeroSectionCard";
import { FaArrowCircleLeft } from "react-icons/fa";
import { FaArrowCircleRight } from "react-icons/fa";
const HeroSection = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()]);
  return (
    // <div className="tw-w-full tw-relative tw-h-[60 md:tw-h-[91vh]">
    //   <Image
    //     className="-tw-z-10"
    //     alt=""
    //     src={"/images/hero-section.png"}
    //     layout="fill"
    //     objectFit="cover"
    //   />
    //   <div className="tw-max-w-7xl tw-p-4 tw-m-auto tw-h-full">
    //     <div className="tw-flex tw-justify-center tw-gap-5 tw-h-full tw-flex-col tw-text-white md:tw-w-[30%]">
    //       <span className="tw-font-bold tw-text-6xl">
    //         Heighlight of car wash
    //       </span>
    //       <span>
    //         Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex, ipsum
    //         id. Enim perspiciatis maiores odit ipsam non! Voluptatem, error.
    //         Quod temporibus officia, magnam sequi eos voluptatibus quibusdam!
    //         Suscipit, iure ullam.
    //       </span>
    //       <button className="tw-w-max tw-bg-white tw-text-blue-500 tw-rounded-xl tw-p-2 tw-font-bold tw-px-8">
    //         Book Now
    //       </button>
    //       <div className="tw-flex tw-gap-3">
    //         <FaFacebookSquare size={30} />
    //         <FaYoutube size={30} />
    //         <FaInstagramSquare size={30} />
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="tw-overflow-hidden tw-relative" ref={emblaRef}>
      <div className="tw-flex">
        <HeroSectionCard imgUrl={"/images/hero-section.png"} />
        <HeroSectionCard imgUrl={"/images/hero-section-2.png"}/>
        <HeroSectionCard imgUrl={"/images/hero-section-3.png"}/>
      </div>
      <div className="tw-flex md:tw-flex-col tw-gap-4 tw-bottom-0 tw-left-[40%] md:tw-top-[30%] md:tw-left-[70%] tw-absolute">
        <button onClick={() => emblaApi?.scrollNext()}>
          <FaArrowCircleLeft color="white" size={40} />
        </button>
        <button onClick={() => emblaApi?.scrollPrev()}>
          <FaArrowCircleRight color="white" size={40} />
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
