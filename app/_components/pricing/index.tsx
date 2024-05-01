"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import HowWorkCard from "./HowWorkCard";
import PricingCard from "./PricingCard";
import { FaArrowCircleLeft } from "react-icons/fa";
import { FaArrowCircleRight } from "react-icons/fa";
import data from "./data";

const Pricing = () => {
  const divRef: { current: HTMLDivElement | null } = useRef(null);
  const [index, setIndex] = useState(0);
  // console.log("🚀 ~ Pricing ~ index:", index);
  // useEffect(() => {
  //   divRef.current?.addEventListener("touchmove", () => {
  //     console.log("touch move");
  //   });
  // });
  const handleLeft = () => {
    setIndex((prev) => (prev + 1) % 5);
  };
  const handleRight = () => {
    setIndex((prev) => (prev == 0 ? 4 : (prev - 1) % 5));
  };
  useEffect(() => {
    const howWorkCardDiv = document.getElementById("how-work-card")
    // console.log("🚀 ~ useEffect ~ howWorkCardDiv:", howWorkCardDiv)
   const howWorksAnime= function() {
      // console.log("scroll")
      var vwTop = window.pageYOffset;
        var vwBottom = (window.pageYOffset + window.innerHeight);
        var elemTop = howWorkCardDiv.getBoundingClientRect().top;
        var elemHeight = howWorkCardDiv.offsetHeight;
        console.log(vwTop, vwBottom);
        console.log(elemTop, elemHeight);
           if (vwBottom > elemTop && ((vwTop - elemHeight) < elemTop)) {
            // console.log("inside add")
            // howWorkCardDiv.classList.add("how-works-left");
            document.getElementById("how-works-left")?.classList.add("how-works-left");
            document.getElementById("how-works-bottom")?.classList.add("how-works-bottom");
            document.getElementById("how-works-right")?.classList.add("how-works-right");
            } 
      // onAppear.forEach(function(elem) {
      //   var vwTop = window.pageYOffset;
      //   var vwBottom = (window.pageYOffset + window.innerHeight);
      //   var elemTop = elem.offsetTop;
      //   var elemHeight = elem.offsetHeight;
        
      //   if (vwBottom > elemTop && ((vwTop - elemHeight) < elemTop)) {
      //    elem.classList.add("visible");
      //   } else {
      //     elem.classList.remove("visible");
      //   }
      // });
    }
    // document.addEventListener("DOMContentLoaded",howWorksAnime, false);
    howWorksAnime();
    window.addEventListener("scroll", howWorksAnime, false);
  }, []);
  return (
    <div className="tw-w-full tw-relative">
      <Image
        className="-tw-z-10"
        alt=""
        objectFit="cover"
        src={"/images/pricing-bg.png"}
        layout="fill"
      />
      <div>
        <div className="tw-max-w-5xl tw-m-auto tw-p-3">
          <div className="tw-flex tw-flex-col tw-items-center tw-my-3">
            <span className="tw-font-bold tw-text-[30px]">How it works</span>
            <div id="how-work-card" className="tw-flex tw-flex-col md:tw-flex-row tw-gap-5 tw-w-full ">
              <HowWorkCard id={"how-works-left"} stepText="Select your plan" stepNo={1} color="#0D82B3"/>
              <HowWorkCard id={"how-works-bottom"} stepText="Book your appointment" stepNo={2} color="#093F56" />
              <HowWorkCard id={"how-works-right"} stepText="Contact us now!" stepNo={3} color="#0D82B3"/>
            </div>
          </div>
          <div className="tw-flex tw-flex-col tw-my-3">
            <span className="tw-font-bold tw-text-[30px] tw-text-center">
              Pricing
            </span>
            <div className="tw-overflow-hidden tw-py-8 perspective">
              <div
                style={{
                  transform: `translateX(calc(${index}*(var(--scrollPercent) - 36px)))`,
                }}
                ref={divRef}
                className={`tw-flex tw-gap-9 tw-bg-blac tw-transition tw-duration-[.7s]`}
              >
                <PricingCard
                  details={data.carWashing}
                  plan="Basic Wash"
                  cl={""}
                  color="#0D82B3"
                  pColor="#093F56"
                />
                <PricingCard
                  details={data.standardClean}
                  plan="Standard Clean"
                  cl={index == 0 ? "custom-scale" : ""}
                  color="#093F56"
                  pColor="#0D82B3"
                />
                <PricingCard
                  details={data.deluxShine}
                  plan="Deluxe Shine"
                  cl={index == 1 ? "custom-scale" : ""}
                  color="#0D82B3"
                  pColor="#093F56"
                />
                <PricingCard
                  details={data.premiumDetail}
                  plan="Premium"
                  cl={index == 2 ? "custom-scale" : ""}
                  color="#093F56"
                  pColor="#0D82B3"
                />
                <PricingCard
                  details={data.uProtection}
                  plan="Ultimate Protection"
                  cl={index == 3 ? "custom-scale" : ""}
                  color="#0D82B3"
                  pColor="#093F56"
                />
                <PricingCard
                  details={data.platinum}
                  plan="Platinum Full Service"
                  cl={index == 4 ? "custom-scale" : ""}
                  color="#093F56"
                  pColor="#0D82B3"
                />
              </div>
            </div>
            <div className="tw-flex tw-gap-5 tw-justify-center tw-mt-5">
              <button onClick={handleLeft}>
                <FaArrowCircleLeft size={30} />
              </button>
              <button onClick={handleRight}>
                <FaArrowCircleRight size={30} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
