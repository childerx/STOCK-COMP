import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <main className="mt-16 p-16 border-t border-t-[#e3e3e3] w-full text-center mx-auto">
      <h1 className="text-center text-2xl font-[300]">
        SENSITIVITY ANALYSIS: <span className="font-[700]">Table</span>
      </h1>
      <div className="h-1 bg-[#0F0CB0] rounded-full w-[25%] mx-auto mb-10" />
      <div className="flex mt-30 justify-center items-center ml-16 mb-10">
        <Image
          src={"/images/charts/table_1.png"}
          alt={"industrial-analysis"}
          width={1000}
          height={700}
        />
      </div>

      <h1 className="text-center mt-10 text-2xl font-[300]">
        SENSITIVITY ANALYSIS:{" "}
        <span className="font-[700]">Detailed Analysis</span>
      </h1>
      <div className="h-1 bg-[#0F0CB0] rounded-full w-[25%] mx-auto mb-10" />
      <p className="text-[18px] font-[400] leading-8 mb-6">
        Sensitivity analysis determines how different values of an independent
        variable affect a particular dependent variable under a given set of
        assumptions. Sensitivity analysis is a financial model that determines
        how target variables are affected based on changes in other variables
        known as input variables. It is a way to predict the outcome of a
        decision given a certain range of variables. Below is a table for the
        range of values used in determining the intrinsic value for MTN Ghana.{" "}
      </p>

      <div className="flex flex-col justify-center items-center ml-16 mb-10">
        <Image
          src={"/images/senseAna1.png"}
          alt={"industrial-analysis"}
          width={1000}
          height={700}
        />
        <Image
          src={"/images/senseAna2.png"}
          alt={"industrial-analysis"}
          width={1000}
          height={700}
          className="pl-1"
        />
      </div>

      <p className="text-[18px] font-[400] leading-8 mb-6">
        It is seen from the table that when we vary our discount rate, we still
        obtain values above the current price of MTN Ghana hence we can confide
        in our recommendation for the investor to enter a buy position.
      </p>
    </main>
  );
};

export default page;
