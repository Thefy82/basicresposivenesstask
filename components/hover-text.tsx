import type { NextPage } from "next";

export type HoverTextType = {
  className?: string;
};

const HoverText: NextPage<HoverTextType> = ({ className = "" }) => {
  return (
    <div
      className={`w-[143px] text-29xl font-semibold font-text-sm-bold text-base-black text-left inline-block ${className}`}
    >
      Hover
    </div>
  );
};

export default HoverText;
