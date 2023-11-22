import Image from 'next/image'
import React from 'react'

const Sidebar = () => {
  return (
    <nav className='h-screen hidden lg:block lg:flex-shrink-0 lg:bg-[#F5F5F5] lg:overflow-y-auto'>
        <div className="relative w-60 flex flex-col p-4">
            <div className='flex gap-4 p-2 justify-start items-center'>
                <Image src='/images/Logo.svg' alt='logo' width={30} height={30} />
                <h1 className='text-2xl text-center font-medium'>MS</h1>
            </div>
        </div>
    </nav>
  )
}

export default Sidebar