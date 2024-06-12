import type { NextPage } from "next";

export type HobbyCommunityContainer1Type = {
  className?: string;
};

const HobbyCommunityContainer1: NextPage<HobbyCommunityContainer1Type> = ({
  className = "",
}) => {
  return (
    <div
      className={`absolute top-[100px] left-[100px] w-[565px] h-[130px] text-left text-17xl text-base-black font-text-sm-bold ${className}`}
    >
      <i className="absolute top-[0px] left-[0px] font-medium">
        <span>{`Your `}</span>
        <span className="text-primary-full">Hobby</span>
        <span>{`, Your `}</span>
        <span className="text-blue-1">Community...</span>
      </i>
      <div className="absolute top-[84px] left-[0px] rounded-lg bg-primary-full overflow-hidden flex flex-row items-center justify-center py-2 px-4 text-xl text-white">
        <div className="relative font-semibold">Get started</div>
      </div>
    </div>
  );
};

export default HobbyCommunityContainer1;
