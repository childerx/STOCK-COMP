type SwotContainerProps = {
  title: string;
  point1: string;
  point2?: string;
  point3?: string;
};

const SwotContainer = ({
  title,
  point1,
  point2,
  point3,
}: SwotContainerProps) => {
  return (
    <div className="">
      <div className="bg-[#0400DD] px-5 py-3 mb-4">
        <h1 className="text-[20px] font-[700] text-[#ffffff] capitalize">
          {title}
        </h1>
      </div>

      <div className="pl-10">
        <ol className="mb-4 list-decimal text-[16px] font-[400] leading-8">
          <li className="mb-3">{point1}</li>
          {point2 && <li className="mb-3">{point2}</li>}
          {point3 && <li className="mb-3">{point3}</li>}
        </ol>
      </div>
    </div>
  );
};

export default SwotContainer;
