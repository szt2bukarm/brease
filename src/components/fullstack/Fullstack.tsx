"use client";

import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import FullstackCard from "./FullstackCard";
import Button from "../common/Button";
import Heading from "../common/Heading";

const cards = [
  {
    image: "feature-2.png",
    title: "Collections, Dynamic content",
    subtext: "$SendNudes is a multilang variable",
  },
  {
    image: "feature-3.png",
    title: "Responsive at it’s core",
    subtext: "Mobile-ready is key",
  },
  {
    image: "feature-1.png",
    title: "React.js under the hood",
    subtext: "Scale with React.js, there is no limit",
  },
  {
    image: "feature-1.png",
    title: "React.js under the hood",
    subtext: "Scale with React.js, there is no limit",
  },
  {
    image: "feature-1.png",
    title: "React.js under the hood",
    subtext: "Scale with React.js, there is no limit",
  },
  {
    image: "feature-1.png",
    title: "React.js under the hood",
    subtext: "Scale with React.js, there is no limit",
  },
];

export default function Fullstack() {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  return (
    <div className="flex flex-col gap-[64px] pb-[80px] lg:pb-[120px] select-none">

      <div className="flex flex-col md:flex-row gap-[32px] md:gap-[80px] lg:gap-0 px-[24px] md:px-[90px] lg:px-[11vw]">
        <div className="w-full">
          <p className="font-abc-diatype-bold text-xs-mobile md:text-xs-tablet lg:text-xs-desktop mb-[8px] text-sublabel">
            FULL STACK
          </p>
          <Heading>Focusing on developer needs</Heading>
          <p className="font-abc-diatype-regular text-md-mobile leading-md-mobile md:text-md-tablet md:leading-md-tablet lg:text-md-desktop lg:leading-md-desktop text-subtext">
            Brease merges sleek design with powerful functionality, making content
            management not just efficient, but intuitively simple.
          </p>
        </div>

        {/* Navigation buttons */}
        <div className=" mt-auto gap-[12px] flex">
          <Button
            ref={prevRef}
            arrow
            leftArrow
            color="black"
            type="primary"
            onClick={() => {}}
            disabled={false}
          >
          </Button>
          <Button
            ref={nextRef}
            arrow
            color="black"
            type="primary"
            onClick={() => {}}
            disabled={false}
          >
          </Button>
        </div>
      </div>

      {/* swiper */}
      <div className="relative w-full overflow-visible">
        <div className="px-[24px] md:px-[90px] lg:px-[11vw]">
          <Swiper
            modules={[Navigation]}
            spaceBetween={40}
            slidesPerView="auto"
            onBeforeInit={(swiper) => {
              if (typeof swiper.params.navigation !== "boolean") {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
              }
            }}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            className="!overflow-visible"
            wrapperClass="!overflow-visible"
          >
            {cards.map((card, index) => (
            <SwiperSlide key={index} className="w-full max-w-[400px]">
                <FullstackCard
                image={card.image}
                title={card.title}
                subtext={card.subtext}
                />
            </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
