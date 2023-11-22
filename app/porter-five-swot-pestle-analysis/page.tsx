import SwotContainer from "@/components/SwotContainer";

const page = () => {
  return (
    <main className="mt-16 p-16 border-t border-t-[#e3e3e3] w-full text-center mx-auto">
      <h1 className="text-[#1E1E1E] font-[600] text-[24px] uppercase mb-2">
        {" "}
        swot and pestle analysis
      </h1>
      <div className="h-1 bg-[#0F0CB0] rounded-full w-[25%] mx-auto mb-10" />

      <section className="grid grid-cols-3 gap-10 text-left">
        <SwotContainer
          title="strength"
          point1="Strong Brand name"
          point2="High Customer Base"
          point3="Comprehensive range of innovative product and services"
        />
        <SwotContainer
          title="weakness"
          point1="limited global options"
          point2="severe price competition in market"
          point3="currency fluctuations in market"
        />
        <SwotContainer
          title="opportunity"
          point1="up to date information on competitors activities"
          point2="growing mobile and internet market across the globe as fostered by digitalization"
        />

        <SwotContainer
          title="threats"
          point1="Power shortages across Africa."
          point2="Mobile number portability."
        />

        <SwotContainer
          title="political"
          point1="High corruption levels and bureaucracy in the market."
        />

        <SwotContainer
          title="economical"
          point1="Volatile currencies in market"
          point2="Investment in power infrastructure"
        />

        <SwotContainer
          title="social"
          point1="Recognised as citizen – centric organization."
          point2="Rise in disposable income in sub – Saharan markets to benefit telecom sector"
        />

        <SwotContainer
          title="technological"
          point1="Digitization to bring opportunity in cloud and analytics."
          point2="Mobile wallets and content based offerings – an emerging business segment"
        />

        <SwotContainer
          title="legal"
          point1="Increase in regulatory demands delay decision making and business growth"
        />

        <SwotContainer
          title="environmental"
          point1="Implementation of alternative energy mechanism"
          point2="E-waste Management initiative"
        />
      </section>
    </main>
  );
};

export default page;
