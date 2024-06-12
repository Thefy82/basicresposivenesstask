import type { NextPage } from "next";

const Frame3: NextPage = () => {
  return (
    <div className="w-full relative h-[175px] text-left text-sm text-white font-text-sm-bold">
      <div className="absolute top-[0px] left-[0px] rounded-lg bg-green box-border w-[360px] h-[175px] border-[2px] border-solid border-green" />
      <div className="absolute top-[88px] left-[16px] whitespace-pre-wrap inline-block w-[328px]">
        An Address. Classroom, Shop, Performance or Event Venue, Sports Arena,
        Play Area, Studio, School or Campus.
      </div>
      <div className="absolute top-[24px] left-[16px] w-[104px] h-10 text-xl">
        <div className="absolute top-[0px] left-[0px] w-[104px] h-10">
          <img
            className="absolute top-[0px] left-[0px] w-10 h-10 overflow-hidden"
            alt=""
            src="/location-on-black-24dp-11.svg"
          />
          <div className="absolute top-[5px] left-[48px] font-semibold">
            Place
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frame3;
