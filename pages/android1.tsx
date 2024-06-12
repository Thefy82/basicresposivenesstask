import type { NextPage } from "next";
import SignInContainer from "../components/sign-in-container";
import Frame5 from "../components/frame5";

const Android1: NextPage = () => {
  return (
    <div className="w-full relative bg-white h-[768px] overflow-hidden text-left text-lg text-base-black font-text-sm-bold">
      <div className="absolute top-[48px] left-[0px] w-[360px] h-[886px]">
        <div className="absolute top-[0px] left-[0px] w-[360px] h-[720px]">
          <div className="absolute top-[0px] left-[0px] bg-purple-3 w-[360px] h-[720px]" />
          <div className="absolute top-[32px] left-[24px] w-[312px] h-[131px]">
            <i className="absolute top-[0px] left-[0px] tracking-[0.02em] font-semibold">
              <span>Explore your</span>
              <span className="text-blue-1"> hobby</span>
              <span>{` or `}</span>
              <span className="text-primary-full">passion</span>
            </i>
            <div className="absolute top-[43px] left-[0px] text-xs tracking-[0.02em] leading-[22px] font-light inline-block w-[312px]">
              Sign-in to interact with a community of fellow hobbyists and an
              eco-system of experts, teachers, suppliers, classes, workshops,
              and places to practice, participate or perform.
            </div>
          </div>
          <div className="absolute top-[623px] left-[24px] w-[312px] h-[96.7px]">
            <img
              className="absolute top-[0px] left-[0px] w-[150.9px] h-[96.7px] overflow-hidden"
              alt=""
              src="/5793404-1.svg"
            />
            <img
              className="absolute top-[0px] left-[157.2px] w-[154.8px] h-[96.7px] overflow-hidden"
              alt=""
              src="/5793401-1.svg"
            />
          </div>
          <SignInContainer />
        </div>
      </div>
      <Frame5
        frameIconOverflow="unset"
        frameIconPosition="absolute"
        frameIconTop="0px"
        frameIconLeft="0px"
      />
    </div>
  );
};

export default Android1;
