import Image from "next/image";
import React from "react";

interface Investment {
  name: string;
  tag: string;
  description: string;
}

const investments = [
  {
    name: "April Treasury Bill",
    tag: "Treasury Bill",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.",
  },
  {
    name: "MTN stocks",
    tag: "Stocks",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.",
  },
  {
    name: "Asante Gold Corporation",
    tag: "Stocks",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.",
  },
  {
    name: "April Treasury Bill",
    tag: "Treasury Bill",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.",
  },
  {
    name: "Aluworks Ltd",
    tag: "Stocks",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.",
  },
  {
    name: "April Treasury Bill",
    tag: "Treasury Bill",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.",
  },
  {
    name: "April Treasury Bill",
    tag: "Treasury Bill",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.",
  },
  {
    name: "Benso Oil Palm Plantation",
    tag: "Stocks",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.",
  },
];

const page = () => {
  const investmentCard = ({name, tag, description}: Investment) => {
    return (
      <div className="ring-1 ring-[#D9D9D9] rounded-[10px] p-6 w-[28.875rem]">
        <div className="flex items-center gap-5 mb-4">
          <Image
            src={`${
              tag === "Treasury Bill"
                ? "/images/dolla.svg"
                : "/images/stock.svg"
            }`}
            alt="profile"
            width={30}
            height={30}
            priority
          />
          {/* <Image src="/images/dolla.svg" alt="profile" width={30} height={30} /> */}
          <div className="">
            <h2 className="font-semibold text-xl text-[#1E1E1E] mb-1">
              {name}
            </h2>
            <p className={`w-fit text-[#5F5F5F] text-sm ${tag === "Treasury Bill" ? "bg-[#DEFFCE]" : "bg-[#FFD7CE]"}  py-1 px-5 rounded-3xl`}>
              {tag}
            </p>
          </div>
        </div>
        <p className="text-sm text-[#676767] mb-5">
          {description}
        </p>

        <button
          className="w-[12.5rem] h-[3rem] flex justify-center items-center ring-1 ring-[#0300A8] rounded-lg
          shadow hover:bg-[#0300A8] bg-[#fff] text-[#0300A8] hover:text-[#fff] font-semibold text-base 
          transition-all duration-150 ease-in-out"
        >
          View Details
        </button>
      </div>
    );
  };
  return (
    <main className="mt-10 p-16 w-full mx-auto">
      <div className="">
        <h1 className="font-bold text-3xl text-[#344054]">Investments</h1>
        <p className="text-base font-medium text-[#848199] mt-2">
          Receive insight for your next financial level
        </p>
      </div>
      <div className="mt-10 flex gap-8 flex-wrap">
        {investments.map((investment, index) => (
          <div key={index}>{investmentCard(investment)}</div>
        ))}
        </div>
    </main>
  );
};

export default page;
