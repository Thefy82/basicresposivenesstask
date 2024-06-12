import type { NextPage } from "next";
import HobbyCommunityContainer1 from "./hobby-community-container1";

export type HobbyCommunityContainerType = {
  className?: string;
};

const HobbyCommunityContainer: NextPage<HobbyCommunityContainerType> = ({
  className = "",
}) => {
  return (
    <div
      className={`absolute top-[2729px] left-[0px] w-[1440px] h-[662px] text-left text-17xl text-base-black font-text-sm-bold ${className}`}
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
    </div>
  );
};

export default HobbyCommunityContainer;
