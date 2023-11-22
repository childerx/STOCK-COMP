type ProfileContainerProps = {
  imgPath: string;
  name: string;
};

const ProfileContainer = ({ imgPath, name }: ProfileContainerProps) => {
  return (
    <div className="flex  flex-col justify-center items-center border border-[#B2B2C3] px-4 py-7 rounded-lg gap-6">
      <img src={imgPath} alt="profile" width={"200px"} height={"200px"} />
      <h1 className="text-[#1E1E1E] text-[24px] leading-8 uppercase">{name}</h1>
    </div>
  );
};

export default ProfileContainer;
