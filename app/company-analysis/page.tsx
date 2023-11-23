import Image from "next/image";
import React from "react";

const Page = () => {
  return (
    <main className="mt-16 p-16 border-t border-t-[#e3e3e3] w-full text-center mx-auto">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-[#1E1E1E] font-[600] text-[24px] capitalize mb-2">
          {" "}
          <span className="text-[#767676] uppercase">
            company analysis:
          </span>{" "}
          charts
        </h1>
        <div className="h-1 bg-[#0F0CB0] rounded-full w-[25%] mx-auto" />

        <div className="grid grid-cols-3 mt-10 gap-8 justify-center items-center mb-10">
          <img
            src={"/images/charts/chart_1.svg"}
            alt={"industrial-analysis"}
            width={"326.85px"}
            height={"240px"}
            className="object-contain"
          />
          <img
            src={"/images/charts/chart_2.svg"}
            alt={"industrial-analysis"}
            width={"302.93px"}
            height={"240px"}
            className="object-contain"
          />
          <img
            src={"/images/charts/chart_3.svg"}
            alt={"industrial-analysis"}
            width={"333.05px"}
            height={"240px"}
          />

          <ul className="list-disc text-[16px] font-[400] text-left leading-6 pl-5">
            <li className="mb-2">24.8% YoY revenue growth</li>
            <li className="mb-2">5 year forecast gh 17.81 bn</li>
            <li className="mb-2">
              OPEX gh 4.4 bn : grew COS & Opex by 18.5% and 31.5%
            </li>
            <li>Efficient cost structures</li>
          </ul>
          <ul className="list-disc text-[16px] font-[400] text-left leading-6 pl-5">
            <li className="mb-2">
              The profit of MTN increasing over the years
            </li>
            <li>Consistency in the performance of the company</li>
          </ul>
          <ul className="list-disc text-[16px] font-[400] text-left leading-6 pl-5">
            <li className="mb-2">Average Conversion = 51%</li>
            <li className="mb-2">In 5 yrs time its projected to be 59%</li>
            <li className="mb-2">
              MTN must improve on Trade receivables position
            </li>
            <li>Efficient cost structures</li>
          </ul>
          <img
            src={"/images/charts/chart_4.svg"}
            alt={"industrial-analysis"}
            width={"305.74px"}
            height={"210px"}
            className="object-cover"
          />
          <img
            src={"/images/charts/chart_5.svg"}
            alt={"industrial-analysis"}
            width={"350.66px"}
            height={"210px"}
            className="object-cover"
          />
          <img
            src={"/images/charts/chart_6.svg"}
            alt={"industrial-analysis"}
            width={"332.14px"}
            height={"210px"}
            className="object-cover"
          />

          <img
            src={"/images/charts/chart_7.svg"}
            alt={"industrial-analysis"}
            width={"305.74px"}
            height={"210px"}
            className="object-cover"
          />
          <img
            src={"/images/charts/chart_8.svg"}
            alt={"industrial-analysis"}
            width={"350.66px"}
            height={"210px"}
            className="object-cover"
          />
          <img
            src={"/images/charts/chart_9.svg"}
            alt={"industrial-analysis"}
            width={"332.14px"}
            height={"210px"}
            className="object-cover"
          />
        </div>

        <h1 className="text-[#1E1E1E] font-[600] text-[24px] capitalize mb-2">
          {" "}
          <span className="text-[#767676] uppercase">
            company analysis:
          </span>{" "}
          tables
        </h1>
        <div className="h-1 bg-[#0F0CB0] rounded-full w-[25%] mx-auto" />

        <div className="flex mt-16 justify-center items-center ml-16 mb-14">
          <Image
            src={"/images/cTable1.svg"}
            alt={"industrial-analysis"}
            width={1000}
            height={700}
          />
        </div>

        <div className="flex justify-center items-center ml-16 mb-10">
          <Image
            src={"/images/cTable2.svg"}
            alt={"industrial-analysis"}
            width={1000}
            height={700}
          />
        </div>
      </div>
    </main>
  );
};

export default Page;
