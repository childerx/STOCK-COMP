"use client";

import Image from "next/image";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

interface Member {
  image: string;
  name: string;
}

const members = [
  {
    image: "/images/IMG.svg",
    name: "John Doe",
  },
  {
    image: "/images/IMG.svg",
    name: "John Doe",
  },
  {
    image: "/images/IMG.svg",
    name: "John Doe",
  },
  {
    image: "/images/IMG.svg",
    name: "John Doe",
  },
  {
    image: "/images/IMG.svg",
    name: "John Doe",
  },
  {
    image: "/images/IMG.svg",
    name: "John Doe",
  },
  {
    image: "/images/IMG.svg",
    name: "John Doe",
  },
  {
    image: "/images/IMG.svg",
    name: "John Doe",
  },
];

export default function Teams() {
  const teamCard = ({ image, name }: Member) => {
    return (
      <div className="">
        <Image src={image} alt={name} width={200} height={200} />
        <h2 className="font-semibold text-2xl text-[#262626]">{name}</h2>
      </div>
    );
  };
  return (
    <>
      <Carousel
        additionalTransfrom={0}
        arrows
        ssr={true}
        autoPlaySpeed={3000}
        centerMode={false}
        className=""
        containerClass="container-with-dots"
        draggable
        focusOnSelect={false}
        infinite
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        keyBoardControl
        minimumTouchDrag={80}
        pauseOnHover
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1024,
            },
            items: 3,
            partialVisibilityGutter: 40,
          },
          mobile: {
            breakpoint: {
              max: 464,
              min: 0,
            },
            items: 1,
            partialVisibilityGutter: 30,
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 464,
            },
            items: 2,
            partialVisibilityGutter: 30,
          },
        }}
        rewind={false}
        rewindWithAnimation={false}
        rtl={false}
        shouldResetAutoplay
        showDots={false}
        sliderClass=""
        slidesToSlide={1}
        swipeable
      >
        {members.map((member, index) => (
          <div key={index} className="flex flex-col items-center">
            {teamCard(member)}
          </div>
        ))}
      </Carousel>
    </>
  );
}
