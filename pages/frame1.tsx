import type { NextPage } from "next";

const Frame1: NextPage = () => {
  return (
    <div className="w-full relative h-[175px] text-left text-sm text-white font-text-sm-bold">
      <div className="absolute top-[0px] left-[0px] rounded-lg bg-primary-full box-border w-[360px] h-[175px] border-[2px] border-solid border-primary-full" />
      <div className="absolute top-[88px] left-[16px] whitespace-pre-wrap inline-block w-[328px]">
        An Individual or Organization. Teacher, Coach, Professional or Online
        Seller. Company, Business or Association.
      </div>
      <div className="absolute top-[24px] left-[16px] w-[117px] h-10 text-xl">
        <div className="absolute top-[0px] left-[0px] w-[117px] h-10">
          <img
            className="absolute top-[0px] left-[0px] w-10 h-10 overflow-hidden"
            alt=""
            src="/groups-black-24dp-1-13.svg"
          />
          <div className="absolute top-[5px] left-[48px] font-semibold">
            People
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frame1;
