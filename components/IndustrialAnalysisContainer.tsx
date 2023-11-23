type IndustrialAnalysisContainerProps = {
  imgPath: string;
  title: string;
  clac: string;
  width: string;
};

const IndustrialAnalysisContainer = ({
  imgPath,
  title,
  clac,
  width,
}: IndustrialAnalysisContainerProps) => {
  return (
    <div className="flex flex-col gap-3 w-[32%]">
      <img
        src={imgPath}
        alt="first industrial analysis"
        width={width}
        height={"240px"}
        className="object-contain mb-4"
      />
      <div className="text-left ">
        <h1 className="font-[600] text-[16px] capitalize">{title}</h1>
      </div>
      <div className="text-left ">
        <p className="font-[400] text-[16px] leading-7">{clac}</p>
      </div>
    </div>
  );
};

export default IndustrialAnalysisContainer;
