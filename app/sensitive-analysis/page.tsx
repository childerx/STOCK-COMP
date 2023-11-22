import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <main className="mt-16 p-16 border-t border-t-[#e3e3e3] w-full text-center mx-auto">
      <h1 className="text-[#1E1E1E] font-[600] text-[24px] uppercase mb-2">
        {" "}
        SENSITIVITY ANALYSIS: Table
      </h1>
      <div className="h-1 bg-[#0F0CB0] rounded-full w-[25%] mx-auto mb-10" />
      <div className='flex mt-36 justify-center items-center ml-16 mb-10'>
            <Image src={"/images/charts/table_1.png"} alt={"industrial-analysis"} width={1000} height={700} />
        </div> 
        <h1 className="text-[#1E1E1E] font-[600] text-[24px] uppercase mb-2">
        {" "}
        SENSITIVITY ANALYSIS: Detailed Analysis
      </h1>
      <div className="h-1 bg-[#0F0CB0] rounded-full w-[25%] mx-auto mb-10" />
      <p className="text-[18px] font-[400] leading-8 mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Purus non
          enim praesent elementum facilisis leo vel fringilla est. Tristique
          senectus et netus et malesuada fames. Amet mattis vulputate enim nulla
          aliquet. Malesuada bibendum arcu vitae elementum curabitur. Ultrices
          sagittis orci a scelerisque purus semper eget duis. Sodales ut eu sem
          integer vitae justo eget magna. Nisl purus in mollis nunc sed id
          semper risus. Sed vulputate odio ut enim blandit volutpat maecenas.
          Gravida dictum fusce ut placerat orci nulla pellentesque dignissim
          enim. </p>
          <p className="text-[18px] font-[400] leading-8 mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Purus non
          enim praesent elementum facilisis leo vel fringilla est. Tristique
          senectus et netus et malesuada fames. Amet mattis vulputate enim nulla
          aliquet. Malesuada bibendum arcu vitae elementum curabitur. Ultrices
          sagittis orci a scelerisque purus semper eget duis. Sodales ut eu sem
          integer vitae justo eget magna. Nisl purus in mollis nunc sed id
          semper risus. Sed vulputate odio ut enim blandit volutpat maecenas.
          Gravida dictum fusce ut placerat orci nulla pellentesque dignissim
          enim. Est ultricies integer quis auctor elit sed vulputate mi. </p>
          <p className="text-[18px] font-[400] leading-8 mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Purus non
          enim praesent elementum facilisis leo vel fringilla est. Tristique
          senectus et netus et malesuada fames. Amet mattis vulputate enim nulla
          aliquet. Malesuada bibendum arcu vitae elementum curabitur. Ultrices
          sagittis orci a scelerisque purus semper eget duis. Sodales ut eu sem
          integer vitae justo eget magna. Nisl purus in mollis nunc sed id
          semper risus. Sed vulputate odio ut enim blandit volutpat maecenas.
          Gravida dictum fusce ut placerat orci nulla pellentesque dignissim
          enim. Est ultricies integer quis auctor elit sed vulputate mi. Euismod
          nisi porta lorem mollis aliquam ut. Quis vel eros donec ac odio tempor
          orci dapibus ultrices.
        </p>
      </main>
  )
}

export default page