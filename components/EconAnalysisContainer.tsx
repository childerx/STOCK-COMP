type EconAnalysisContainerProps = {
  title: string;
  body: string;
};

const EconAnalysisContainer = ({ title, body }: EconAnalysisContainerProps) => {
  return (
    <div className="w-[30%] flex flex-col justify-center items-center border border-[#B2B2C3] rounded-md px-6 py-14 gap-4">
      <h1 className="text-[#0400DD] text-[24px] font-[600] leading-8 uppercase ">
        {title}
      </h1>

      <p className="text-[18px] leading-8 font-[400] text-center">{body}</p>
    </div>
  );
};

export default EconAnalysisContainer;
