const page = () => {
  return (
    <main className="mt-16 p-16 border-t border-t-[#e3e3e3] w-full">
      <section className="px-10 mx-auto">
        <div className="flex items-center justify-center mb-2 gap-4">
          <h1 className="text-[#1E1E1E] font-[600] text-[24px] uppercase">
            {" "}
            mtn ghana
          </h1>
          <img src="images/mtn.svg" alt="mtn" width={"30px"} height={"30px"} />
        </div>
        <div className="h-1 bg-[#0F0CB0] rounded-full w-[25%] mx-auto mb-10" />

        <ul className="list-disc text-[18px] leading-8">
          <li className="mb-3">
            MTN Ghana is the leading provider of mobile telecommunications
            services in Ghana
          </li>
          <li className="mb-3">
            MTN Ghana was listed on the Ghana Stock Exchange on 3rd September
            2018.
          </li>
          <li className="mb-3">
            Board is responsible for governing the company as well as setting
            the strategic policies,and monitoring progress towards the
            achievement of objectives
          </li>
          <li>The Company had 28.6 million subscribers as of December 2022.</li>
        </ul>
      </section>

      <section className="text-center mt-16 px-10 mx-auto">
        <h1 className="text-[#1E1E1E] font-[600] text-[24px] uppercase mb-2">
          {" "}
          our investment thesis
        </h1>
        <div className="h-1 bg-[#0F0CB0] rounded-full w-[25%] mx-auto mb-10" />

        <p className="text-[18px] font-[400] leading-8 mb-6">
          As an outcome of our valuation analysis (details to be discussed
          below), the five-year target price of MTN Ghana is within the range of
          GHC 2.10 – GHC 2.13 with its intrinsic value at GHC 1.74 against the
          MTN Ghana current price of GHC 1.40 thus at current discount rate of
          35%. This means that MTN Ghana is currently undervalued hence
          investors should take advantage and enter a buy position for the MTN
          Ghana stock.
        </p>
      </section>
    </main>
  );
};

export default page;
