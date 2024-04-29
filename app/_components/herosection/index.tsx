"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { FaFacebookSquare, FaInstagramSquare, FaYoutube } from "react-icons/fa";
import HeroSectionCard from "./HeroSectionCard";
import { FaArrowCircleLeft } from "react-icons/fa";
import { FaArrowCircleRight } from "react-icons/fa";
const HeroSection = () => {
  // const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({stopOnInteraction: false})]);
  const [slide, setSlide] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setSlide((prev) => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(interval)
  }, []);
  // function isInViewport(element) {
  //   const rect = element.getBoundingClientRect();
  //   return (
  //     rect.top >= 0 &&
  //     rect.left >= 0 &&
  //     rect.bottom <=
  //       (window.innerHeight || document.documentElement.clientHeight) &&
  //     rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  //   );
  // }
  // useEffect(() => {
  //   // function handleViewportAnimations() {
  //   //   console.log("------------------")
  //   //   const slides = document.querySelectorAll(".textSlide");
  //   //   console.log("🚀 ~ useEffect ~ slides:", slides);
  //   //   slides.forEach((slide) => {
  //   //     if (isInViewport(slide)) {
  //   //       slide.classList.add("fadeInUp");
  //   //     } else {
  //   //       slide.classList.remove("fadeInUp");
  //   //     }
  //   //   });
  //   // }

  //   var observer = new MutationObserver(function (mutationsList) {
  //     // console.log("0000000000000000000")
  //     for (var mutation of mutationsList) {
  //       if (
  //         mutation.attributeName === "style" &&
  //         mutation.target.style.transform !== ""
  //       ) {
  //         // handleSlideChange();
  //         console.log("0000000000000000000")
  //         // const slides = document.querySelectorAll(".textSlide");
  //         // console.log("🚀 ~ useEffect ~ slides:", slides);
  //         // slides.forEach((slide) => {
  //         //   if (isInViewport(slide)) {
  //         //     console.log(true, slide)
  //         //     slide.classList.add("fadeInUp");
  //         //   } else {
  //         //     slide.classList.remove("fadeInUp");
  //         //   }
  //         // });
  //         break;
  //       }
  //     }
  //   });
  //   // const slideDiv = document.querySelector(".slideDiv");
  //   // observer.observe(slideDiv, { attributes: true });
  //   // document.querySelector(".slideDiv")?.addEventListener("transitionend", handleViewportAnimations);
  // }, []);
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
    // <div className="tw-overflow-hidden tw-relative" ref={emblaRef}>
    <div className="tw-flex slideDiv">
      {slide == 0 && (
        <HeroSectionCard
          title="Restore That Showroom Shine"
          desc="Transform your vehicle with our expert car washing services, bringing back that pristine look and feel that you love."
          imgUrl={"/images/hero-section.png"}
        />
      )}
      {slide == 1 && (
        <HeroSectionCard
          title="Attention to Detail"
          desc="We don't just wash cars; we meticulously detail every nook and cranny, ensuring a thorough clean inside and out."
          imgUrl={"/images/hero-section-2.png"}
        />
      )}
      {slide == 2 && (
        <HeroSectionCard
          title="Professional Touch"
          desc="Our team consists of experienced professionals who understand the nuances of car care, providing top-notch service you can trust."
          imgUrl={"/images/hero-section-3.png"}
        />
      )}
      {/* </div> */}
      {/* <div className="tw-flex md:tw-flex-col tw-gap-4 tw-bottom-0 tw-left-[40%] md:tw-top-[30%] md:tw-left-[70%] tw-absolute">
        <button onClick={() => emblaApi?.scrollNext()}>
          <FaArrowCircleLeft color="white" size={40} />
        </button>
        <button onClick={() => emblaApi?.scrollPrev()}>
          <FaArrowCircleRight color="white" size={40} />
        </button>
      </div> */}
    </div>
  );
};

export default HeroSection;
