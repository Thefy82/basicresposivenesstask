import type { NextPage } from "next";

const Frame4: NextPage = () => {
  return (
    <div className="w-full relative h-[175px] text-left text-sm text-white font-text-sm-bold">
      <div className="absolute top-[0px] left-[0px] rounded-lg bg-blue-1 box-border w-[360px] h-[175px] border-[2px] border-solid border-blue-1" />
      <div className="absolute top-[88px] left-[16px] whitespace-pre-wrap inline-block w-[328px]">
        An Event with Venue and Date. Meetup, Workshop or Webinar. Exhibition,
        Performance or Competition.
      </div>
      <div className="absolute top-[24px] left-[16px] w-[138px] h-10 text-base">
        <div className="absolute top-[0px] left-[0px] w-[138px] h-10">
          <div className="absolute top-[0px] left-[0px] w-10 h-10">
            <img
              className="absolute top-[0px] left-[0px] w-10 h-10 overflow-hidden"
              alt=""
              src="/program3.svg"
            />
            <div className="absolute top-[44px] left-[-7px] font-semibold hidden">
              People
            </div>
          </div>
          <div className="absolute top-[5px] left-[48px] text-xl font-semibold">
            Program
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frame4;
