import Image from "next/image";

export default function Home() {
  return (
    <main className="p-10">
      <div className="flex items-center">
        <div className="">
          <h1 className="text-[48px] text-[#1E1E1E] font-[600]">
            The <span className="text-[#0400DD]">stock market </span> is a
            device for transferring money from the
            <span className="text-[#0400DD]">impatient</span> to the{" "}
            <span className="text-[#0400DD]">patient.</span>
          </h1>
          <span className="text-[#6F6F6F] text-[20px] font-[500]">
            warren buffet
          </span>
        </div>

        <div className="">
          {/* <Image src='/images/warren.jpg' alt='home page image' width={300} height={300} /> */}
        </div>
      </div>
    </main>
  );
}
