import type { NextPage } from "next";
import HobbyCommunityContainer1 from "./hobby-community-container1";

export type HobbyCommunityContainer2Type = {
  className?: string;
};

const HobbyCommunityContainer2: NextPage<HobbyCommunityContainer2Type> = ({
  className = "",
}) => {
  return (
    <div
      className={`absolute top-[2729px] left-[0px] w-[1440px] h-[662px] text-left text-3xs text-primary-full font-text-sm-bold ${className}`}
    >
      <div className="absolute top-[0px] left-[0px] bg-blue-2 w-[1440px] h-[662px]" />
      <div className="absolute top-[330px] left-[100px] w-[1240px] h-[302px]">
        <img
          className="absolute top-[21px] left-[0px] w-[531px] h-[280px] overflow-hidden"
          alt=""
          src="/5820098-11.svg"
        />
        <img
          className="absolute top-[0px] left-[602px] w-[638px] h-[302px] overflow-hidden"
          alt=""
          src="/5820000-11.svg"
        />
      </div>
      <HobbyCommunityContainer1 />
      <div className="absolute top-[241px] left-[1296px] shadow-[0px_0px_5px_rgba(120,_120,_120,_0.14)] rounded-sm bg-white flex flex-row items-center justify-center py-[3px] px-1">
        <div className="relative tracking-[0.04em] leading-[12px] font-medium">
          Go to top (Ctrl+Home)
        </div>
      </div>
    </div>
  );
};

export default HobbyCommunityContainer2;
