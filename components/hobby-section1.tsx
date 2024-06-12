import type { NextPage } from "next";

export type HobbySection1Type = {
  className?: string;
};

const HobbySection1: NextPage<HobbySection1Type> = ({ className = "" }) => {
  return (
    <div
      className={`absolute top-[48px] left-[0px] w-[360px] h-[720px] text-left text-lg text-base-black font-text-sm-bold ${className}`}
    >
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
            eco-system of experts, teachers, suppliers, classes, workshops, and
            places to practice, participate or perform.
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
        <div className="absolute top-[211px] left-[24px] w-[312px] h-[364px] text-xs">
          <div className="absolute top-[0px] left-[82px] w-[149px] h-7 text-base text-primary-full">
            <div className="absolute top-[0px] left-[0px] w-[55px] h-7">
              <div className="absolute top-[0px] left-[0px] font-semibold">
                Sign In
              </div>
              <div className="absolute top-[26px] left-[0px] bg-primary-full w-[55px] h-0.5" />
            </div>
            <div className="absolute top-[0px] left-[95px] w-[54px] h-6 text-grey-dark">
              <div className="absolute top-[0px] left-[0px] font-semibold">
                Join In
              </div>
              <div className="absolute top-[26px] left-[0px] bg-primary-full w-[54px] h-0.5 hidden" />
            </div>
          </div>
          <div className="absolute top-[52px] left-[0px] w-[312px] h-8 text-grey-dark">
            <div className="absolute top-[0px] left-[0px] rounded-lg bg-white box-border w-[312px] h-8 border-[1px] border-solid border-grey-lighter" />
            <div className="absolute top-[8px] left-[12px] leading-[16px]">
              Email
            </div>
          </div>
          <div className="absolute top-[100px] left-[0px] w-[312px] h-8 text-grey-dark">
            <div className="absolute top-[0px] left-[0px] rounded-lg bg-white box-border w-[312px] h-8 border-[1px] border-solid border-grey-lighter" />
            <div className="absolute top-[8px] left-[12px] leading-[16px]">
              Password
            </div>
            <img
              className="absolute top-[8px] left-[284px] w-4 h-4 overflow-hidden"
              alt=""
              src="/visibility-black-24dp-1.svg"
            />
          </div>
          <div className="absolute top-[148px] left-[0px] w-[116px] h-4">
            <div className="absolute top-[0px] left-[0px] w-4 h-4">
              <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-sm bg-purple-3 box-border border-[1px] border-solid border-primary-full" />
            </div>
            <div className="absolute top-[0px] left-[24px] leading-[16px] inline-block w-[92px]">
              Remember me
            </div>
          </div>
          <div className="absolute top-[148px] left-[179px] w-[133px] h-4">
            <img
              className="absolute top-[0px] left-[0px] w-4 h-4 overflow-hidden"
              alt=""
              src="/lock-black-24dp-1.svg"
            />
            <div className="absolute top-[0px] left-[24px] leading-[16px] inline-block w-[109px]">
              Forgot password?
            </div>
          </div>
          <div className="absolute top-[188px] left-[0px] w-[312px] h-8 text-white">
            <div className="absolute top-[0px] left-[0px] rounded-lg bg-primary-full w-[312px] h-8" />
            <div className="absolute top-[8px] left-[127px] leading-[16px] font-semibold">
              Continue
            </div>
          </div>
          <div className="absolute top-[244px] left-[0px] w-[312px] h-4">
            <div className="absolute top-[8px] left-[0px] bg-grey-light w-[100px] h-0.5" />
            <div className="absolute top-[8px] left-[213px] bg-grey-light w-[99px] h-0.5" />
            <div className="absolute top-[0px] left-[108px] leading-[16px] font-semibold">
              Or connect with
            </div>
          </div>
          <div className="absolute top-[284px] left-[0px] w-[312px] h-8 text-grey-darkest">
            <div className="absolute top-[0px] left-[0px] rounded-lg bg-purple-3 box-border w-[312px] h-8 border-[1px] border-solid border-primary-full" />
            <div className="absolute top-[8px] left-[90px] leading-[16px] font-semibold">
              Continue with Google
            </div>
            <img
              className="absolute top-[8px] left-[16px] w-4 h-4 overflow-hidden"
              alt=""
              src="/1298745-google-brand-branding-logo-network-icon-1.svg"
            />
          </div>
          <div className="absolute top-[332px] left-[0px] w-[312px] h-8 text-grey-darkest">
            <div className="absolute top-[0px] left-[0px] rounded-lg bg-purple-3 box-border w-[312px] h-8 border-[1px] border-solid border-primary-full" />
            <div className="absolute top-[8px] left-[82px] leading-[16px] font-semibold">
              Continue with Facebook
            </div>
            <img
              className="absolute top-[8px] left-[16px] w-4 h-4 overflow-hidden"
              alt=""
              src="/5296499-fb-facebook-facebook-logo-icon-1.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HobbySection1;
