import IndustrialAnalysisContainer from "@/components/IndustrialAnalysisContainer";
import Image from "next/image";
import React from "react";

const Page = () => {
  return (
    <main className="mt-16 p-16 border-t border-t-[#e3e3e3] w-full text-center mx-auto">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-[#1E1E1E] font-[600] text-[24px] capitalize mb-2">
          {" "}
          <span className="text-[#767676] uppercase">
            INDUSTRIAL ANALYSIS:
          </span>{" "}
          Market Share(Subscriptions)
        </h1>
        <div className="h-1 bg-[#0F0CB0] rounded-full w-[25%] mx-auto mb-10" />
        <div className="flex flex-wrap gap-x-2 gap-y-16 mt-10 justify-center ">
          <IndustrialAnalysisContainer
            imgPath="images/1ia.svg"
            title="voice subscription"
            clac="Fixed Network Operators (Total = 330,380 subscriptions)"
            width="243px"
          />
          <IndustrialAnalysisContainer
            imgPath="images/2ia.svg"
            title="voice subscription"
            clac="Mobile Network Operators (Total = 39,812,171 subscriptions)"
            width="289px"
          />
          <IndustrialAnalysisContainer
            imgPath="images/3ia.svg"
            title="data subscription"
            clac="Mobile Network Operators (Total = 22,756215 subscriptions)"
            width="281px"
          />
          <IndustrialAnalysisContainer
            imgPath="images/4ia.svg"
            title="voice subscription"
            clac="Fixed Network Operators (Total = 103,769 subscriptions)"
            width="300px"
          />
          <IndustrialAnalysisContainer
            imgPath="images/5ia.svg"
            title="4G subscription"
            clac="Total = 9,256,663 subscriptions)"
            width="274px"
          />

          {/* <Image
            src={"/images/charts/voice_mno.png"}
            alt={"industrial-analysis"}
            width={350}
            height={350}
          />
          <Image
            src={"/images/charts/voice_fno.png"}
            alt={"industrial-analysis"}
            width={350}
            height={350}
          />
          <Image
            src={"/images/charts/data_fno.png"}
            alt={"industrial-analysis"}
            width={350}
            height={350}
          /> */}
        </div>
        {/* <div className="flex mt-20 justify-start items-center -ml-[25rem]">
          <Image
            src={"/images/charts/data_mno.png"}
            alt={"industrial-analysis"}
            width={350}
            height={350}
          />
          <Image
            src={"/images/charts/data_mno.png"}
            alt={"industrial-analysis"}
            width={350}
            height={350}
          />
        </div> */}

        <div className="flex mt-36 justify-center items-center ml-16 mb-10">
          <Image
            src={"/images/iaTable.svg"}
            alt={"industrial-analysis"}
            width={1000}
            height={700}
          />
        </div>

        <section className="text-center mt-16 px-10 mx-auto">
          <h1 className="text-[#1E1E1E] font-[600] text-[24px] uppercase mb-2">
            {" "}
            summary
          </h1>
          <div className="h-1 bg-[#0F0CB0] rounded-full w-[25%] mx-auto mb-10" />

          <p className="text-[18px] font-[400] leading-8 mb-6">
            It is seen above that MTN Ghana has the greatest market share due to
            their larger subscription base in all three categories under Mobile
            Network Operators. For voice subscriptions, MTN Ghana under Mobile
            Network Operators has a market share of 67.32% which is equivalent
            to 26,800, 597 subscriptions. For Data, it has a market share of
            75.36% which is equivalent to 17,148, 605 subscriptions also under
            Mobile Network Operators and for 4G subscriptions, MTN Ghana has a
            market share of 79.58% which is equivalent to7,366,868
            subscriptions.
          </p>
        </section>
      </div>
    </main>
  );
};

export default Page;
