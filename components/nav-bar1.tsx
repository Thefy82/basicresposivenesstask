import type { NextPage } from "next";

export type NavBar1Type = {
  className?: string;
};

const NavBar1: NextPage<NavBar1Type> = ({ className = "" }) => {
  return (
    <div
      className={`absolute top-[0px] left-[0px] w-[1440px] h-20 text-left text-xs text-grey-dark font-text-sm-bold ${className}`}
    >
      <div className="absolute top-[0px] left-[0px] shadow-[0px_2px_12px_rgba(0,_0,_0,_0.08)] bg-white w-[1440px] h-20" />
      <img
        className="absolute top-[10px] left-[97px] w-[293.3px] h-[60px] object-cover"
        alt=""
        src="/hobbycue-logo-v2-1@2x.png"
      />
      <div className="absolute top-[20px] left-[425px] w-[300px] h-10">
        <div className="absolute top-[0px] left-[0px] rounded-lg bg-grey-hover box-border w-[300px] h-10 mix-blend-normal border-[1px] border-solid border-grey-lighter" />
        <div className="absolute top-[12px] left-[12px] leading-[16px] font-light">
          Search here...
        </div>
        <div className="absolute top-[0px] left-[260px] w-10 h-10">
          <div className="absolute top-[0px] left-[0px] rounded-tl-none rounded-tr-lg rounded-br-lg rounded-bl-none bg-primary-full w-10 h-10" />
          <img
            className="absolute top-[12px] left-[12px] rounded-tl-none rounded-tr-lg rounded-br-lg rounded-bl-none w-4 h-4 overflow-hidden"
            alt=""
            src="/icons8-search-1.svg"
          />
        </div>
      </div>
      <div className="absolute top-[20px] left-[815px] w-[525px] h-10 text-sm text-base-black">
        <div className="absolute top-[8px] left-[0px] w-[107px] h-6">
          <div className="absolute top-[1px] left-[28px] leading-[22px] font-medium">
            Explore
          </div>
          <img
            className="absolute top-[0px] left-[0px] w-6 h-6 overflow-hidden"
            alt=""
            src="/explore1.svg"
          />
          <img
            className="absolute top-[0px] left-[83px] w-6 h-6 overflow-hidden"
            alt=""
            src="/icons8-expand-arrow-1.svg"
          />
        </div>
        <div className="absolute top-[8px] left-[131px] w-[114px] h-6">
          <div className="absolute top-[2px] left-[28px] leading-[22px] font-medium">
            Hobbies
          </div>
          <img
            className="absolute top-[0px] left-[0px] w-6 h-6 overflow-hidden"
            alt=""
            src="/hobbies1.svg"
          />
          <img
            className="absolute top-[0px] left-[90px] w-6 h-6 overflow-hidden"
            alt=""
            src="/icons8-expand-arrow-1.svg"
          />
          <div className="absolute top-[0px] left-[0px] w-6 h-6 flex flex-row items-center justify-center gap-[10px]">
            <img
              className="w-[19px] relative h-[19px] z-[0]"
              alt=""
              src="/polygon-3.svg"
            />
            <img
              className="w-3 absolute !m-[0] top-[6px] left-[6px] rounded-12xs-4 h-3 z-[1]"
              alt=""
              src="/star-1.svg"
            />
          </div>
        </div>
        <img
          className="absolute top-[8px] left-[269px] w-6 h-6 overflow-hidden"
          alt=""
          src="/bookmark-black-24dp-1.svg"
        />
        <img
          className="absolute top-[8px] left-[317px] w-6 h-6 overflow-hidden"
          alt=""
          src="/notifications-black-24dp-1.svg"
        />
        <img
          className="absolute top-[8px] left-[365px] w-6 h-6 overflow-hidden"
          alt=""
          src="/product-3.svg"
        />
        <div className="absolute top-[0px] left-[413px] w-28 h-10 text-primary-full">
          <div className="absolute top-[0px] left-[0px] w-28 h-10">
            <div className="absolute top-[0px] left-[0px] rounded-lg bg-white box-border w-28 h-10 border-[1px] border-solid border-primary-full" />
            <div className="absolute top-[10px] left-[32px] leading-[16px] font-semibold">
              Sign In
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar1;