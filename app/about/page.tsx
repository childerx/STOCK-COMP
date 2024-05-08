import ProfileContainer from "@/components/ProfileContainer";
import Teams from "@/components/teams";
import Image from "next/image";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

interface Descriptor {
  title: string;
  description: string;
}

const missions = [
  {
    title: "Unmatched service",
    description:
      "Support corporate clients and financial investors with their growth strategy and international development.",
  },
  {
    title: "Specific",
    description:
      "ConsultUs’ core expertise lies in the ability to support our clients in understanding, analysing and executing commercial and investment strategies in specific markets. ",
  },
  {
    title: "Experience",
    description:
      "Experience in working with and assisting a wide range of clients from international corporations to small/medium-sized businesses, from large corporate debt providers to mid-market private equity investors. ",
  },
  {
    title: "Technology",
    description: "The best combination of technology and people. ",
  },
];
const commitments = [
  {
    title: "Ethics",
    description:
      "Ethics for ConsultUs means ensuring our customers the confidentiality and uniqueness of the service they are provided. A client must be reassured by the fact that the service provided to them is made-to-measure and will not be recycled for their competitors.",
  },
  {
    title: "Quality",
    description:
      "ConsultUs is committed to ensuring that our advice and recommendations are based on the best combination of methods, information research, creativity and internal quality assurance. ",
  },
  {
    title: "Continuity",
    description:
      "ConsultUs considers that the continuity of relations on the long term with its clients is the guarantee of the satisfaction of these and the quality of the services provided.",
  },
];

const page = () => {
  const descriptor = ({ title, description }: Descriptor) => {
    return (
      <div className="flex gap-x-5 items-start">
        <h3 className="font-semibold text-lg text-[#262626] whitespace-nowrap w-[15.5rem]">
          {title}
        </h3>
        <p className="text-lg text-[#5D5F61] flex-1">{description}</p>
      </div>
    );
  };

  return (
    <main className="mt-10 p-16  w-full mx-auto">
      <h1 className="font-semibold text-5xl text-center text-[#262626]  ">
        We&apos;re here to <br />
        <span className="text-[#0066FF]">guarantee your success</span>
      </h1>
      <div className="w-full flex justify-center mt-4">
        <div className="w-[34.375rem] h-1 bg-[#D0D5DD] " />
      </div>

      <div className="w-full flex flex-col items-center relative mt-8">
        <Image
          src="/images/content-bg.svg"
          alt="content hero"
          width={800}
          height={600}
          priority
        />

        <div className="absolute top-40 z-10">
          <Image
            src="/images/content-top.png"
            alt="content hero"
            width={800}
            height={600}
            priority
          />
        </div>
      </div>

      <div className="mt-44">
        <h1 className="font-semibold text-5xl text-[#262626] pt-10 mb-3">
          Our <span className="text-[#0300A8]">Mission</span>
        </h1>
        <div className="w-[34.375rem] h-1 bg-[#D0D5DD] mb-4" />

        <div className="">
          {missions.map((mission, index) => (
            <div key={index} className="mb-8">
              {descriptor(mission)}
            </div>
          ))}
        </div>
      </div>
      <div className="mt-10">
        <h1 className="font-semibold text-5xl text-[#262626] pt-10 mb-3">
          Our <span className="text-[#0300A8]">Commitment</span>
        </h1>
        <div className="w-[34.375rem] h-1 bg-[#D0D5DD] mb-4" />

        <div className="">
          {commitments.map((commitment, index) => (
            <div key={index} className="mb-8">
              {descriptor(commitment)}
            </div>
          ))}
        </div>
      </div>

      <div className="">
        
        {/* <Teams /> */}
      </div>
    </main>
  );
};

export default page;
