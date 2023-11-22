import Image from 'next/image'
import React from 'react'

const Page = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
        <h1 className='text-center mt-10 text-2xl'>COMPANY ANALYSIS: Charts</h1>
        <div className='border-b-2 border-b-active border w-52'></div>
        <div className='grid grid-cols-3 mt-10 gap-8 justify-center items-center'>
            <img src={"/images/charts/chart_1.svg"} alt={"industrial-analysis"}/>
            <img src={"/images/charts/chart_2.svg"} alt={"industrial-analysis"} width={340} className='object-contain h-[250px]'/>
            <img src={"/images/charts/chart_3.svg"} alt={"industrial-analysis"} />

            <img src={"/images/charts/chart_4.svg"} alt={"industrial-analysis"} width={330} height={330} />
            <img src={"/images/charts/chart_5.svg"} alt={"industrial-analysis"} width={340} className='object-cover h-[220px]'/>
            <img src={"/images/charts/chart_6.svg"} alt={"industrial-analysis"} width={350} height={350} />

            <img src={"/images/charts/chart_7.svg"} alt={"industrial-analysis"} width={330} height={330} />
            <img src={"/images/charts/chart_8.svg"} alt={"industrial-analysis"} width={340} className='object-cover h-[220px]'/>
            <img src={"/images/charts/chart_9.svg"} alt={"industrial-analysis"} width={350} height={350} />

        </div>


        <div className='flex mt-36 justify-center items-center ml-16 mb-10'>
            <Image src={"/images/charts/table_1.png"} alt={"industrial-analysis"} width={1000} height={700} />
        </div> 

        <div className='flex mt-16 justify-center items-center ml-16 mb-10'>
            <Image src={"/images/charts/table_1.png"} alt={"industrial-analysis"} width={1000} height={700} />
        </div>
    </div>
  )
}

export default Page