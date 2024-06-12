import type { NextPage } from "next";

export type Property1EmailType = {
  className?: string;
};

const Property1Email: NextPage<Property1EmailType> = ({ className = "" }) => {
  return (
    <div
      className={`rounded-lg bg-white box-border max-w-full overflow-hidden flex flex-row items-center justify-center py-3 pr-[365px] pl-3 text-left text-xs text-grey-dark font-text-sm-bold border-[1px] border-solid border-grey-lighter ${className}`}
    >
      <div className="relative leading-[16px]">Email</div>
    </div>
  );
};

export default Property1Email;
