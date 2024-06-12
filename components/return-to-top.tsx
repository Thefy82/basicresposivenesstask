import type { NextPage } from "next";

export type ReturnToTopType = {
  className?: string;
};

const ReturnToTop: NextPage<ReturnToTopType> = ({ className = "" }) => {
  return (
    <div
      className={`w-[213px] text-sm leading-[18px] font-semibold font-text-sm-bold text-base-black text-left inline-block ${className}`}
    >
      Return to top faeture(Default)
    </div>
  );
};

export default ReturnToTop;
