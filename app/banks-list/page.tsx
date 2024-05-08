import SwotContainer from "@/components/SwotContainer";
import Image from "next/image";

interface Bank {
  profile: string;
  name: string;
  description: string;
  width?: number;
  height?: number;
}

const banks = [
  {
    profile: "/images/gcb.svg",
    name: "Ghana Commercial Bank",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      width: 168,
      height: 140,
  },
  {
    profile: "/images/absa.svg",
    name: "Absa Bank",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      width: 140,
      height: 140,
  },
  {
    profile: "/images/ecobank.svg",
    name: "Ecobank",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      width: 255,
      height: 140,
  },
  {
    profile: "/images/calbank.svg",
    name: "Calbank",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      width: 280,
      height: 140,
  },
  {
    profile: "/images/prudential.svg",
    name: "Prudential Bank",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      width: 150,
      height: 150,
  },
];

const page = () => {
  const bankObj = ({profile, name, description, width, height}: Bank) => {
    return (
      <div className="max-w-[28.813rem]">
        <div className="ring-1 ring-[#D9D9D9] rounded-lg p-8 w-fit h-[14rem]">
          <Image
            src={profile}
            alt="bank profile"
            width={width}
            height={height}
            className=""
            priority
          />
        </div>
        <div className="mt-5">
          <h2 className="font-semibold text-2xl text-[#1E1E1E] mb-4">
            {name}
          </h2>
          <p className="text-lg text-[#676767] mb-5">
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
      </div>
    );
  };
  return (
    <main className="mt-10 p-16 w-full mx-auto">
      <div className="">
        <h1 className="font-bold text-3xl text-[#344054]">Banks List</h1>
        <p className="text-base font-medium text-[#848199] mt-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        </p>
      </div>
      <div className="mt-8 flex gap-10 flex-wrap">
        {banks.map((bank) => (
          <div key={bank.name}>{bankObj(bank)}</div>
        ))}
  
      </div>
    </main>
  );
};

export default page;
