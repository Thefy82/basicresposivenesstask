import type { NextPage } from "next";

export type NavBarType = {
  className?: string;
};

const NavBar: NextPage<NavBarType> = ({ className = "" }) => {
  return (
    <div
      className={`absolute top-[0px] left-[0px] w-[1440px] h-20 text-left text-xs text-grey-dark font-text-sm-bold ${className}`}
    >
      <div className="absolute top-[0px] left-[0px] shadow-[0px_2px_12px_rgba(0,_0,_0,_0.08)] bg-white w-[1440px] h-20" />
      <img
        className="absolute top-[10px] left-[97px] w-[60px] h-[60px] object-cover"
        alt=""
        src="/hobbycue-logo-v2-1@2x.png"
      />
      <div className="absolute top-[20px] left-[181px] w-[300px] h-10">
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
      <div className="absolute top-[16px] left-[851px] w-[489px] h-12 text-sm text-base-black">
        <div className="absolute top-[12px] left-[0px] w-[107px] h-6">
          <div className="absolute top-[1px] left-[28px] font-medium">
            Explore
          </div>
          <img
            className="absolute top-[0px] left-[0px] w-6 h-6 overflow-hidden"
            alt=""
            src="/explore.svg"
          />
          <img
            className="absolute top-[0px] left-[83px] w-6 h-6 overflow-hidden"
            alt=""
            src="/icons8-expand-arrow-1.svg"
          />
        </div>
        <div className="absolute top-[12px] left-[131px] w-[114px] h-6">
          <div className="absolute top-[2px] left-[28px] font-medium">
            Hobbies
          </div>
          <img
            className="absolute top-[0px] left-[0px] w-6 h-6 overflow-hidden"
            alt=""
            src="/hobbies.svg"
          />
          <img
            className="absolute top-[0px] left-[90px] w-6 h-6 overflow-hidden"
            alt=""
            src="/icons8-expand-arrow-1.svg"
          />
        </div>
        <img
          className="absolute top-[12px] left-[269px] w-6 h-6 overflow-hidden"
          alt=""
          src="/bookmark-black-24dp-1.svg"
        />
        <img
          className="absolute top-[12px] left-[317px] w-6 h-6 overflow-hidden"
          alt=""
          src="/notifications-black-24dp-1.svg"
        />
        <img
          className="absolute top-[12px] left-[365px] w-6 h-6 overflow-hidden"
          alt=""
          src="/product-3.svg"
        />
        <img
          className="absolute top-[0px] left-[413px] rounded-[50%] w-12 h-12 object-cover"
          alt=""
          src="/ellipse-23@2x.png"
        />
        <img
          className="absolute h-3/6 w-[4.91%] top-[25%] right-[0%] bottom-[25%] left-[95.09%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/arrow.svg"
        />
      </div>
    </div>
  );
};

export default NavBar;
