import type { NextPage } from "next";

export type HobbySectionType = {
  className?: string;
};

const HobbySection: NextPage<HobbySectionType> = ({ className = "" }) => {
  return (
    <div
      className={`absolute top-[2840px] left-[0px] w-[360px] h-[267px] text-left text-sm text-white font-text-sm-bold ${className}`}
    >
      <div className="absolute top-[0px] left-[0px] bg-blue-2 w-[360px] h-[267px]" />
      <div className="absolute top-[99px] left-[24px] w-[104px] h-7">
        <div className="absolute top-[0px] left-[0px] w-[104px] h-7">
          <div className="absolute top-[0px] left-[0px] rounded-lg bg-primary-full w-[104px] h-7" />
          <div className="absolute top-[4px] left-[12px] leading-[20px] font-semibold">
            Get started
          </div>
        </div>
      </div>
      <i className="absolute top-[48px] left-[24px] text-lg font-medium text-base-black">
        <span>{`Your `}</span>
        <span className="text-primary-full">Hobby</span>
        <span>{`, Your `}</span>
        <span className="text-blue-1">Community...</span>
      </i>
      <div className="absolute top-[175px] left-[24px] w-[312.1px] h-[76px]">
        <img
          className="absolute top-[5.3px] left-[0px] w-[133.6px] h-[70.5px] overflow-hidden"
          alt=""
          src="/5820098-1.svg"
        />
        <img
          className="absolute top-[0px] left-[151.5px] w-[160.6px] h-[76px] overflow-hidden"
          alt=""
          src="/5820000-1.svg"
        />
      </div>
    </div>
  );
};

export default HobbySection;
