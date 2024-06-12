import type { NextPage } from "next";

export type HoverExampleTextType = {
  className?: string;
};

const HoverExampleText: NextPage<HoverExampleTextType> = ({
  className = "",
}) => {
  return (
    <div
      className={`w-[365px] text-29xl font-semibold font-text-sm-bold text-base-black text-left inline-block ${className}`}
    >
      Hover Example
    </div>
  );
};

export default HoverExampleText;
