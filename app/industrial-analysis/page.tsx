import Image from 'next/image'
import React from 'react'

const Page = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
        <h1 className='text-center mt-10 text-2xl'>INDUSTRIAL ANALYSIS: Market Share(Subscriptions)</h1>
        <div className='border-b-2 border-b-active border w-52'></div>
        <div className='flex mt-10 justify-center items-center'>
            <Image src={"/images/charts/voice_mno.png"} alt={"industrial-analysis"} width={350} height={350} />
            <Image src={"/images/charts/voice_fno.png"} alt={"industrial-analysis"} width={350} height={350} />
            <Image src={"/images/charts/data_fno.png"} alt={"industrial-analysis"} width={350} height={350} />
        </div>
        <div className='flex mt-20 justify-start items-center -ml-[25rem]'>
            <Image src={"/images/charts/data_mno.png"} alt={"industrial-analysis"} width={350} height={350} />
            <Image src={"/images/charts/data_mno.png"} alt={"industrial-analysis"} width={350} height={350} />
        </div>   

        <div className='flex mt-36 justify-center items-center ml-16 mb-10'>
            <Image src={"/images/charts/table_1.png"} alt={"industrial-analysis"} width={1000} height={700} />
        </div> 
    </div>
  )
}

export default Page