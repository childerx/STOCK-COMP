import Image from "next/image";

export default function Home() {
  return (
    <main className="mt-16 p-16 border-t border-t-[#e3e3e3]">
      <header className="flex items-center gap-5">
        <div className="w-full">
          <h1 className="text-[48px] text-[#1E1E1E] font-[600]">
            The <span className="text-[#0400DD]">stock market </span> is a
            device for transferring money from the
            <span className="text-[#0400DD]"> impatient</span> to the{" "}
            <span className="text-[#0400DD]">patient.</span>
          </h1>
          <span className="text-[#6F6F6F] text-[20px] font-[500] uppercase mt-6 block ">
            warren buffet
          </span>
        </div>

        <img
          src="/images/homeProfile.svg"
          alt="home page image"
          width={"100%"}
          height={"450px"}
          className="h-[450px] object-cover"
        />
      </header>

      <section className="text-center mt-16 px-10 mx-auto">
        <h1 className="text-[#1E1E1E] font-[600] text-[24px] uppercase mb-2">
          {" "}
          introduction
        </h1>
        <div className="h-1 bg-[#0F0CB0] rounded-full w-[25%] mx-auto mb-10" />

        <p className="text-[18px] font-[400] leading-8 mb-16">
          An investment is something of value purchased to make more money.
          While the term &apos;investment&apos; is often applied to stocks,
          bonds, and other financial instruments, investments also commonly
          include real estate, artwork, collectibles, and even wine (Rosenberg,
          2021). In his work, (Rosenberg, 2021) averred that there are often
          risks involved with investing, but those risks regularly pay off for
          countless investors worldwide. Here, we shall look at investments
          pertaining to stocks. This essay intends to walk the reader through
          the stock market of Ghana and shall recommend an investment
          opportunity for the company, MTN Ghana. It shall describe the Ghanaian
          stock market, MTN Ghana company, investment thesis, industrial
          analysis, economic analysis, valuation, company analysis, sensitivity
          analysis, porters five, SWOT and PESTLE analysis.
        </p>

        <h1 className="text-[#1E1E1E] font-[600] text-[24px] uppercase mb-2">
          {" "}
          overview of ghana stock exchange
        </h1>
        <div className="h-1 bg-[#0F0CB0] rounded-full w-[25%] mx-auto mb-10" />

        <p className="text-[18px] font-[400] leading-8 ">
          According to (Hayes, 2023), the stock market provides a venue where
          companies raise capital by selling shares of stock, or equity, to
          investors. Stocks give shareholders voting rights as well as a
          residual claim on corporate earnings in the form of capital gains and
          dividends. Individual and institutional investors come together on
          stock exchanges to buy and sell shares in the public market. When you
          buy a share of stock on the stock market, you are not buying it from
          the company, you are buying it from an existing shareholder (Hayes,
          2023).
        </p>

        <p className="text-[18px] font-[400] leading-8 mb-12">
          The Ghana Stock Exchange was established in July 1989 as a private
          company limited by guarantee under the Companies Code of 1963. It was
          given recognition as an authorized Stock Exchange under the Stock
          Exchange Act of 1971 (Act 384) in October 1990 (Ghana Stock Exchange,
          n.d.). However, the Exchange changed its status to a public company
          limited by guarantee in April 1994 (Ghana Stock Exchange, n.d.). With
          the vision to become an internationally recognized securities market
          relevant to Ghana’s economy, and a mission to provide an efficient
          securities market for national economic development through access to
          capital and investment, GSE is known to possess Professionalism,
          Excellence, Transparency, Integrity, Teamwork and Efficiency as its
          values.
        </p>

        <h1 className="text-[22px] font-[700] leading-8 text-center mb-4">
          Historically, GSE was set up with the following objects:
        </h1>

        <ul className="text-left text-[18px] font-[400] leading-8 mb-6 list-disc ">
          <li className="mb-2">
            To provide the facilities and framework to the public for the
            purchase and sales of bonds, shares, and other securities.
          </li>
          <li className="mb-2">
            To control the granting of quotations on the securities market in
            respect of bonds, shares, and other securities of any company,
            corporation, government, municipality, local authority, or other
            body corporate.
          </li>
          <li className="mb-2">
            To regulate the dealings of members with their clients and other
            members.
          </li>
          <li className="mb-2">
            To co-ordinate the stock dealing activities of members and
            facilitate the exchange of information including prices of
            securities listed for their mutual advantages and for the benefit of
            their clients.
          </li>
          <li>
            To co-operate with associations of stockbrokers and Stock Exchanges
            in other countries, and to obtain and make available to members
            information and facilities likely to be useful to them or to their
            clients.
          </li>
        </ul>

        <p className="text-[18px] font-[400] leading-8 mb-6">
          GSE as a public company limited by guarantee has no owners or
          shareholders as such, but members are either corporate bodies or
          individuals (Ghana Stock Exchange, n.d.). On their website, it is
          captured that there are two categories of members, namely Licensed
          Dealing Members (LDMs) and Associate Members. An LDM is a corporate
          body licensed by the Exchange to deal in all securities. An Associate
          member is an individual or corporate body that has satisfied the
          Exchange’s membership requirements but is not licensed to deal in
          securities.
        </p>
        <p className="text-[18px] font-[400] leading-8 mb-6">
          GSE has two categories of listing. These are the Official list and the
          Ghana Alternative Market (GAX). The GAX is essentially aimed at small
          and medium-sized enterprises (SMEs). Types of Securities that can be
          listed include Shares (preference or equities); Debt in the form of
          corporate bonds (and notes), municipal bonds (and notes) and
          government bonds (and notes); and close-end unit trusts and mutual
          funds (Ghana Stock Exchange, n.d.). There are over 30 companies listed
          on GSE.
        </p>
      </section>

      <section className="text-center mt-16 px-10 mx-auto">
        <h1 className="text-[#1E1E1E] font-[600] text-[24px] uppercase mb-2">
          {" "}
          companies of the ghana stock exchange
        </h1>
        <div className="h-1 bg-[#0F0CB0] rounded-full w-[25%] mx-auto mb-10" />

        <div className="flex items-center justify-around px-12">
          <img src="images/mtn.svg" alt="mtn" width={"60px"} height={"60px"} />
          <img
            src="images/ecobank.svg"
            alt="ecobank"
            width={"110px"}
            height={"60px"}
          />
          <img
            src="images/calbank.svg"
            alt="calbank"
            width={"120px"}
            height={"60px"}
          />
          <img
            src="images/goil.svg"
            alt="goil"
            width={"60px"}
            height={"60px"}
          />
          <img
            src="images/guinnes.svg"
            alt="guinnes"
            width={"60px"}
            height={"60px"}
          />
        </div>
      </section>

      <section className="text-center mt-16 px-10 mx-auto">
        <h1 className="text-[#1E1E1E] font-[600] text-[24px] uppercase mb-2">
          {" "}
          mtn ghana
        </h1>
        <div className="h-1 bg-[#0F0CB0] rounded-full w-[25%] mx-auto mb-10" />

        <p className="text-[18px] font-[400] leading-8 mb-6">
          MTN’s history began in 1994 with the registration of Scancom Limited
          as a company in Ghana and the launch of operations two years later, in
          November 1996, under the trade name, Spacefon. Spacefon introduced
          into Ghana’s telecoms market the first GSM (Global System for Mobile
          Communication) service along with enhanced features such as Caller ID,
          call forwarding, call waiting, call barring and itemized billing.
        </p>

        <p className="text-[18px] font-[400] leading-8 mb-6">
          MTN Ghana is a successful business which has been operating in Ghana
          since 2008 (Business Essay, n.d.). MTN Ghana is the leading provider
          of mobile telecommunications services in Ghana and is listed on the
          Ghana Stock Exchange (African Financials, 2023). According to MTN
          Ghana’s 2022 financial report, its Mobile subscribers increased by
          12.8% to 28.6 million.
        </p>

        <p className="text-[18px] font-[400] leading-8 mb-6">
          MTN acknowledges that an effective board must have the expertise and
          competence to promptly and appropriately address current and emerging
          issues to ensure the delivery of our strategy. A clear division of
          responsibilities at the head of the company ensures a balance of
          authority. No individual has unfettered powers of decision-making, and
          no block of individuals can dominate the Board. MTN Ghana’s Board
          Charter stipulates that operation of the Board and the executive
          responsibility for running the business are separate tasks (MTN Ghana,
          n.d.). On their website is the display of their board which consists
          of eleven members: an independent non-executive chairman, four
          independent non-executive directors, four non-executive directors and
          two executive directors.
        </p>
        <p className="text-[18px] font-[400] leading-8 mb-6">
          MTN Ghana has over the years proven to be a very competent and
          promising company. It combines competencies such as its subscription
          base, durability of its competitive advantage, mobile money service
          and subscriptions, great leadership and skilled labor, product
          differentiation and its strong brand name to maintain and dominate the
          telecommunications industry of Ghana.
        </p>
      </section>
    </main>
  );
}
