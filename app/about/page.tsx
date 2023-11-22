import ProfileContainer from "@/components/ProfileContainer";
import React from "react";

const page = () => {
  return (
    <main className="mt-16 p-16 border-t border-t-[#e3e3e3] w-full text-center mx-auto">
      <h1 className="text-[#1E1E1E] font-[600] text-[24px] uppercase mb-2">
        {" "}
        the MimTech solutions team
      </h1>
      <div className="h-1 bg-[#0F0CB0] rounded-full w-[25%] mx-auto mb-10" />

      <div className="grid grid-cols-3 gap-10">
        <ProfileContainer imgPath="images/smith.svg" name="caleb smith" />
        <ProfileContainer
          imgPath="images/johnson.svg"
          name="JOHNSON KWADWO OFORI ADOMAKO"
        />
        <ProfileContainer
          imgPath="images/kyie.svg"
          name="WILLIAM KYEI FRIMPONG"
        />
      </div>
    </main>
  );
};

export default page;
