import Image from 'next/image'
import React from 'react'

const Page = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
        <h1 className='text-center mt-10 text-2xl'>COMPANY ANALYSIS: Charts</h1>
        <div className='border-b-2 border-b-active border w-52'></div>
        <div className='grid grid-cols-3 mt-10 gap-8 justify-center items-center p-3'>
            <img src={"/images/charts/chart_1.svg"} alt={"industrial-analysis"}/>
            <img src={"/images/charts/chart_2.svg"} alt={"industrial-analysis"} width={340} className='object-contain h-[250px]'/>
            <img src={"/images/charts/chart_3.svg"} alt={"industrial-analysis"} />

            <ul className='object-contain h-[170px] list-disc text-[18px] leading-8 pl-5'>
              <li >
              24.8% YoY revenue growth
              </li>
              <li>
              5 year forecast gh 17.81 bn
              </li>
              <li>
              OPEX gh 4.4 bn : grew COS & <br></br>Opex by 18.5% and 31.5%
              </li>
              <li>
              Efficient cost structures
              </li>
            </ul>
            <ul className='object-contain h-[170px] list-disc text-[18px] leading-8 pl-8'>
            <li >
            The profit of MTN increasing over the <br></br>years
              </li>
              <li>
              Consistency in the performance of the <br></br>company
              </li>
              
            </ul>
            <ul className='object-contain h-[170px] list-disc text-[18px] leading-8 pl-8'>
            <li >
            Average Conversion = 51%
              </li>
              <li>
              In 5 yrs time its projected to be 59%
              </li>
              <li>
              MTN must improve on Trade <br></br>receivables position
              </li>
              <li>
              Efficient cost structures
              </li>
            </ul>
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