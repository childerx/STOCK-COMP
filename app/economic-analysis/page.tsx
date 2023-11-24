import EconAnalysisContainer from "@/components/EconAnalysisContainer";
import FactsContainer from "@/components/FactsContainer";

const page = () => {
  return (
    <main className="mt-16 p-16 border-t border-t-[#e3e3e3] w-full text-center mx-auto">
      <h1 className="text-[#1E1E1E] font-[600] text-[24px] uppercase mb-2">
        {" "}
        economic analysis
      </h1>
      <div className="h-1 bg-[#0F0CB0] rounded-full w-[25%] mx-auto mb-10" />

      <p className="text-[18px] font-[400] leading-8 mb-16">
        Economic conditions cannot be exempted in our quest to make an informed
        investment decision. In this section, we want to look at how the present
        state of the economy in a country, region or the entire globe is. These
        conditions change over time along with the economic and business cycles,
        as an economy goes through periods of expansion and contraction (Chen,
        2020). According (Chen, 2020), indicators of economic conditions provide
        important insights to investors and businesses as investors use
        indicators of economic conditions to adjust their views on economic
        growth and profitability. Below are briefly discussed economic factors
        necessary in our investment decision for the MTN Ghana Stock:
      </p>

      <div className="flex flex-wrap gap-10 justify-center w-full">
        <EconAnalysisContainer
          title="global"
          body="IMF has predicted a low global economic growth of 2.9% for the year."
        />
        <EconAnalysisContainer
          title="inflation"
          body="Ghana’s Inflation as at November 2023 was 35.2%, a decrease from August’s 40.1%."
        />
        <EconAnalysisContainer
          title="gdp"
          body="Expected to reach 75.03 USD Billion by the end of 2023 by world bank
          GDP growth rate is 0.7%."
        />
        <EconAnalysisContainer
          title="interest rate"
          body="Yields on a 364-day bill was 33.34% as at Oct 23, 2023. It was at an average of 35.8% at the end of 2022."
        />
        <EconAnalysisContainer
          title="political"
          body="Russian – Ukraine war as well as the Israel –Palestine war. We may also consider the Akosombo spillage."
        />
      </div>

      <h1 className="text-[#1E1E1E] font-[600] text-[24px] uppercase mt-16 mb-2">
        {" "}
        facts
      </h1>
      <div className="h-1 bg-[#0F0CB0] rounded-full w-[25%] mx-auto mb-10" />

      <div className="grid grid-cols-3 gap-10 justify-center text-center justify-items-center w-full">
        <FactsContainer title="unemployment rate" figure="3.9" unit="percent" />
        <FactsContainer title="population" figure="33.89" unit="million" />
        <FactsContainer title="minimum wages" figure="14.88" unit="cedis/day" />
        <FactsContainer title="tax rate" figure="25" unit="percent" />
        <FactsContainer title="stock market" figure="3135" unit="points" />
        <FactsContainer title="dept to gdp" figure="88.8" unit="percent" />
      </div>

      <section className="text-center">
        <h1 className="text-[#1E1E1E] font-[600] text-[24px] uppercase mt-16 mb-2">
          {" "}
          INVESTMENT RISKS
        </h1>
        <div className="h-1 bg-[#0F0CB0] rounded-full w-[25%] mx-auto mb-10" />

        <div className="max-w-[55%] mx-auto text-left">
          <ul className="list-disc  text-[18px] leading-8">
            <li className="mb-3">
              Compromised informational security and customer privacy
            </li>
            <li className="mb-3">
              Ability to recover from catastrophic events
            </li>
            <li className="mb-3">
              Social and Negative Impact of MTN’s actions
            </li>
            <li className="mb-3">Exposure to negative market fluctuations</li>
          </ul>
        </div>
      </section>
    </main>
  );
};

export default page;
