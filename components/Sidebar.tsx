"use client";
import { navigationLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

type navLink = {
  name: string;
  path: string;
  img_src: string;
};

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <nav className="h-screen hidden lg:block  lg:bg-[#F5F5F5] lg:overflow-y-auto fixed">
      <div className="h-full w-80 flex flex-col p-4">
        <div className="flex gap-4 p-2 items-center select-none">
          <Image src="/images/Logo.svg" alt="logo" width={32} height={32} />
          <h1 className="text-2xl text-center text-[#324054] font-semibold">MS</h1>
        </div>

        <div className="flex flex-col h-full justify-between gap-4 p-1 mt-4">
          <div className="">
          {navigationLinks.map((navigationLink: navLink) => (
            <Link
              key={navigationLink.path}
              href={navigationLink.path}
              className={`hover:text-blue-500 text-base font-medium transition-colors duration-300 ${
                navigationLink.path === pathname
                  ? "text-active bg-selected"
                  : "text-normal"
              }`}
            >
              <div className="flex gap-6 p-2">
                <Image
                  src={navigationLink.img_src}
                  alt={navigationLink.name}
                  width={20}
                  height={20}
                />
                {navigationLink.name}
              </div>
            </Link>
          ))}
          </div>
         

          <div className="flex gap-9 p-2 flex-col">
            <div className="flex gap-6 ml-2">
              <Image
                src={"/images/chat.svg"}
                alt={"chat"}
                width={20}
                height={20}
              />
              <Link href="about" className="text-sm font-medium">About MimTech Solutions Team</Link>
            </div>
            <div className="flex items-center gap-6">
              <Image
                src={"/images/profile.svg"}
                alt={"profile"}
                width={40}
                height={40}
              />
              <div>
                <p className="text-xs text-[#324054]">Michael Smith</p>
                <p className="text-xs text-[#71839B]">michaelsmith12@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
