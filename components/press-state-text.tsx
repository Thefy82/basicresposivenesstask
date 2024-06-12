import type { NextPage } from "next";

export type PressStateTextType = {
  className?: string;
};

const PressStateText: NextPage<PressStateTextType> = ({ className = "" }) => {
  return (
    <div
      className={`w-[79px] text-sm leading-[18px] font-semibold font-text-sm-bold text-base-black text-left inline-block ${className}`}
    >
      Press state
    </div>
  );
};

export default PressStateText;
