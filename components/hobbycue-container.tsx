import type { NextPage } from "next";

export type HobbycueContainerType = {
  className?: string;
};

const HobbycueContainer: NextPage<HobbycueContainerType> = ({
  className = "",
}) => {
  return (
    <div
      className={`absolute top-[24px] left-[24px] w-[312px] h-[152px] text-left text-4xs text-grey-darker font-text-sm-bold ${className}`}
    >
      <b className="absolute top-[0px] left-[0px] text-xs tracking-[0.01em] leading-[18px] text-grey-darkest">
        Hobbycue
      </b>
      <div className="absolute top-[30px] left-[0px] tracking-[0.01em] leading-[18px]">
        About Us
      </div>
      <div className="absolute top-[56px] left-[0px] tracking-[0.01em] leading-[18px]">
        Our Services
      </div>
      <div className="absolute top-[82px] left-[0px] tracking-[0.01em] leading-[18px]">
        Work with Us
      </div>
      <div className="absolute top-[108px] left-[0px] tracking-[0.01em] leading-[18px]">
        FAQ
      </div>
      <div className="absolute top-[134px] left-[0px] tracking-[0.01em] leading-[18px]">
        Contact Us
      </div>
      <img
        className="absolute top-[1px] left-[296px] w-4 h-4 overflow-hidden object-contain"
        alt=""
        src="/expand-more-black-24dp-3.svg"
      />
    </div>
  );
};

export default HobbycueContainer;
