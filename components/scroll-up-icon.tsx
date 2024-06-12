import type { NextPage } from "next";

export type ScrollUpIconType = {
  className?: string;
};

const ScrollUpIcon: NextPage<ScrollUpIconType> = ({ className = "" }) => {
  return (
    <div
      className={`w-[406px] text-sm tracking-[0.01em] leading-[18px] font-text-sm-bold text-base-black text-left inline-block ${className}`}
    >
      Scroll up icon should be there throughout the application.
    </div>
  );
};

export default ScrollUpIcon;
