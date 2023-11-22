'use client'
import { navigationLinks } from '@/constants';
import Image from 'next/image'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'

type navLink = {
    name: string;
    path: string;
    img_src: string;
};

const Sidebar = () => {
  const pathname = usePathname()

  return (
    <nav className='h-screen hidden lg:block  lg:bg-[#F5F5F5] lg:overflow-y-auto'>
        <div className="relative w-80 flex flex-col p-4">
            <div className='flex gap-4 p-2 justify-start items-center'>
                <Image src='/images/Logo.svg' alt='logo' width={30} height={30} />
                <h1 className='text-2xl text-center font-medium'>MS</h1>
            </div>

            <div className='flex flex-col gap-4 p-1 mt-4'>
                {navigationLinks.map((navigationLink: navLink) => (
                <Link
                    key={navigationLink.path}
                    href={navigationLink.path}
                    className={`hover:text-blue-500 transition-colors duration-300 ${
                    navigationLink.path === pathname ? 'text-active bg-selected' : 'text-normal'
                    }`}
                >
                    <div className='flex gap-6 p-2'>
                        <Image src={navigationLink.img_src} alt={navigationLink.name} width={20} height={20} />
                        {navigationLink.name}
                    </div>
                </Link>
                
                ))}

                <div className='flex gap-9 p-2 mt-48 flex-col'>
                        <div className='flex gap-6 ml-2'>
                            <Image src={"/images/chat.svg"} alt={"chat"} width={20} height={20} />
                            <p>About MimTech Solutions Team</p>
                        </div>
                        <div className='flex gap-6'>
                            <Image src={"/images/profile.svg"} alt={"profile"} width={40} height={40} />
                            <div>
                                <p className=''>Michael Smith</p>
                                <p className='text-sm'>michaelsmith12@gmail.com</p>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    </nav>
  )
}

export default Sidebar

