type FactsContainerProps = {
  title: string;
  figure: string;
  unit: string;
};

const FactsContainer = ({ title, figure, unit }: FactsContainerProps) => {
  return (
    <div className="w-full flex flex-col justify-between items-between border border-[#B2B2C3] rounded-md px-6 py-7 h-[267px]">
      <h1 className="text-[24px] font-[600] leading-8 capitalize">{title}</h1>

      <h1 className="text-[80px] text-[#0400DD] leading-8 font-[600] text-center">
        {figure}
      </h1>

      <p className="uppercase text-[18px] font-[400]  leading-8 ">{unit}</p>
    </div>
  );
};

export default FactsContainer;
