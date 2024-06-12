import type { NextPage } from "next";

export type PeopleContainerType = {
  className?: string;
};

const PeopleContainer: NextPage<PeopleContainerType> = ({ className = "" }) => {
  return (
    <div
      className={`absolute top-[816px] left-[24px] w-[312px] h-[216px] text-left text-xs text-base-black font-text-sm-bold ${className}`}
    >
      <div className="absolute top-[0px] left-[0px] rounded-lg bg-white box-border w-[312px] h-[216px] border-[1px] border-solid border-grey-light" />
      <div className="absolute top-[24px] left-[104px] w-[102px] h-8 text-lg">
        <div className="absolute top-[0px] left-[0px] w-[102px] h-8">
          <img
            className="absolute top-[0px] left-[0px] w-8 h-8 overflow-hidden"
            alt=""
            src="/groups-black-24dp-1-1.svg"
          />
          <div className="absolute top-[2px] left-[40px] font-semibold">
            People
          </div>
        </div>
      </div>
      <div className="absolute top-[68px] left-[24px] tracking-[0.02em] leading-[20px] font-light whitespace-pre-wrap text-center inline-block w-[264px]">
        Find a teacher, coach, or expert for your hobby interest in your
        locality. Find a partner, teammate, accompanist or collaborator.
      </div>
      <div className="absolute top-[160px] left-[24px] rounded-lg bg-white box-border w-[264px] h-8 text-primary-full border-[1px] border-solid border-primary-full">
        <div className="absolute top-[8px] left-[105px] leading-[16px] font-semibold">
          Connect
        </div>
      </div>
    </div>
  );
};

export default PeopleContainer;
