import type { NextPage } from "next";

export type ContainerType = {
  className?: string;
};

const Container: NextPage<ContainerType> = ({ className = "" }) => {
  return (
    <div
      className={`absolute top-[208px] left-[24px] w-[312px] h-[178px] text-left text-4xs text-grey-darker font-text-sm-bold ${className}`}
    >
      <b className="absolute top-[0px] left-[0px] text-xs tracking-[0.01em] leading-[18px] text-grey-darkest">
        How Do I
      </b>
      <div className="absolute top-[30px] left-[0px] tracking-[0.01em] leading-[18px]">
        Sign Up
      </div>
      <div className="absolute top-[56px] left-[0px] tracking-[0.01em] leading-[18px]">
        Add a Listing
      </div>
      <div className="absolute top-[82px] left-[0px] tracking-[0.01em] leading-[18px]">
        Claim Listing
      </div>
      <div className="absolute top-[108px] left-[0px] tracking-[0.01em] leading-[18px]">
        Post a Query
      </div>
      <div className="absolute top-[134px] left-[0px] tracking-[0.01em] leading-[18px]">
        Add a Blog Post
      </div>
      <div className="absolute top-[160px] left-[0px] tracking-[0.01em] leading-[18px]">
        Other Queries
      </div>
      <img
        className="absolute top-[1px] left-[296px] w-4 h-4 overflow-hidden object-contain"
        alt=""
        src="/expand-more-black-24dp-3.svg"
      />
    </div>
  );
};

export default Container;
