import Image from "next/image";

const banks = [
  {
    imgUrl: "images/gcb.svg",
    alt: "GCB",
    width: 72,
    height: 60,
  },
  {
    imgUrl: "images/ecobank.svg",
    alt: "ecobank",
    width: 110,
    height: 60,
  },
  {
    imgUrl: "images/calbank.svg",
    alt: "calbank",
    width: 120,
    height: 60,
  },
  {
    imgUrl: "images/absa.svg",
    alt: "absa",
    width: 60,
    height: 60,
  },
  {
    imgUrl: "images/prudential.svg",
    alt: "prudential",
    width: 120,
    height: 60,
  },
];

export default function Home() {
  return (
    <main className="mt-16 p-16">
      <header className="flex flex-col items-center gap-5">
        <h1 className="text-4xl text-center text-[#1E1E1E] max-w-[45rem] mb-2">
          &quot;<span className="text-[#0400DD]">In financial services</span>,
          if you want to be the best in the industry, you first have to be the{" "}
          <span className="text-[#0400DD]">best in risk management </span>and{" "}
          <span className="text-[#0400DD]">credit quality</span> .&quot;
        </h1>

        <h5 className="font-medium text-xl text-[#6F6F6F] mb-8">John Stumpf</h5>

        <Image
          src="/images/header.svg"
          alt="header image"
          priority
          // placeholder="blur"
          width={600}
          height={450}
          className="object-contain"
        />
      </header>

      <section className="text-center mt-16 px-10 mx-auto">
        <h1 className="text-[#1E1E1E] font-semibold text-2xl uppercase mb-2">
          {" "}
          INTRODUCTION TO BANKING
        </h1>
        <div className="h-1 bg-[#0F0CB0] rounded-full w-[25%] mx-auto mb-10" />

        <p className="text-lg leading-8 mb-16 text-[#000000] text-center">
          Forget boring bank statements! Banking&apos;s a thrilling saga,
          evolving from clay tablets storing grain loans to financing voyages
          that charted the world. These financial alchemists turn savings into
          loans, fueling businesses and dreams. Now, smartphones are our
          branches and cryptocurrencies challenge the status quo. Buckle up –
          the next chapter of banking is virtual reality and AI advisors for
          your money!
        </p>

        <h1 className="text-[#1E1E1E] font-semibold text-2xl uppercase mb-2">
          {" "}
          From Gold Dust to Mobile Money: Ghana&apos;s Banking Odyssey
        </h1>
        <div className="h-1 bg-[#0F0CB0] rounded-full w-[25%] mx-auto mb-10" />

        <p className="text-lg leading-8 mb-16 text-[#000000] text-center">
          Ghana&apos;s story with banking is as rich and vibrant as the Adinkra
          symbols adorning its fabrics. It all began with gold dust, the
          earliest form of currency, meticulously weighed and exchanged by
          shrewd Ghanaian traders. Fast forward to the colonial era, and
          European banks arrived, acting as gatekeepers to finance, a system
          that left many Ghanaians feeling excluded. <br />
          <br /> But Ghana&apos;s spirit is one of innovation. The fight for
          independence sparked a new chapter: the birth of the Ghanaian
          Commercial Bank. This &quot;indigenous warrior&quot; aimed to empower
          local businesses and break the foreign hold on finance. <br />
          <br /> The journey wasn&apos;t smooth. From the days of state-owned
          banks to the current wave of dynamic mobile money, Ghana&apos;s
          banking system has constantly adapted. Today, it&apos;s a fascinating
          blend of tradition and technology. Towering skyscrapers in Accra house
          international giants, while rural villages embrace the revolutionary
          ease of mobile money transactions. <br />
          <br /> Ghana&apos;s banking odyssey is far from over. With a youthful
          population and a booming tech scene, the future promises exciting new
          ventures. Perhaps we&apos;ll see AI-powered financial advisors or
          blockchain technology revolutionize money transfer in Ghana. One
          thing&apos;s for sure: Ghana&apos;s banking story is a testament to
          its enterprising spirit, a story constantly being rewritten, one cedi
          at a time.
        </p>
      </section>

      <section className="text-center mt-16 px-10 mx-auto">
        <h1 className="text-[#1E1E1E] font-semibold text-2xl uppercase mb-2">
          {" "}
          BANKS IN GHANA
        </h1>
        <div className="h-1 bg-[#0F0CB0] rounded-full w-[25%] mx-auto mb-10" />

        <div className="flex items-center justify-around px-12">
          {banks.map((bank, index) => (
            <Image
              key={index}
              src={bank.imgUrl}
              alt={bank.alt}
              width={bank.width}
              height={bank.height}
              priority
            />
          ))}
        </div>
      </section>

      <section className="text-center mt-16 px-10 mx-auto">
        <h1 className="text-[#1E1E1E] font-semibold text-2xl uppercase mb-2">
          {" "}
          BRIEF HISTORY ABOUT BANKING
        </h1>
        <div className="h-1 bg-[#0F0CB0] rounded-full w-[25%] mx-auto mb-10" />

        <p className="text-lg leading-8 mb-6">
          Imagine a time before wallets and banks, where valuables were
          entrusted to…priests! In ancient Mesopotamia, temples doubled as the
          world&apos;s first banks, safeguarding grain and lending it out during
          lean times. Talk about divine financial advisors! <br />
          <br /> Fast forward a few thousand years, and banking gets a serious
          power upgrade. Enter the daring merchant bankers of Renaissance Italy.
          These rockstars of finance funded voyages of discovery, wielding
          influence that rivaled kingdoms. Think &quot;Indiana Jones&quot; meets
          &quot;Wolf of Wall Street.&quot; <br />
          <br /> Banking wasn&apos;t always glamorous, though. Remember Scrooge
          McDuck swimming in his money bin? Well, for most of history, access to
          banking was a privilege reserved for the wealthy. But the invention of
          paper money and the rise of middle classes changed the game. Banking
          became the engine that fueled businesses and dreams. <br />
          <br /> Today, we&apos;re hurtling towards a future where physical
          banks might become relics of the past. We access our money with
          smartphones, and mysterious digital currencies like Bitcoin are
          challenging the status quo. The future of banking involves AI
          analyzing our spending habits and virtual reality tours of investment
          opportunities. Buckle up, because this financial odyssey is just
          getting started!
        </p>
      </section>
    </main>
  );
}
