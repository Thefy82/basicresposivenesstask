import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type Property1NewPasswordType = {
  className?: string;

  /** Style props */
  property1NewPasswordPosition?: CSSProperties["position"];
};

const Property1NewPassword: NextPage<Property1NewPasswordType> = ({
  className = "",
  property1NewPasswordPosition,
}) => {
  const property1NewPasswordStyle: CSSProperties = useMemo(() => {
    return {
      position: property1NewPasswordPosition,
    };
  }, [property1NewPasswordPosition]);

  return (
    <div
      className={`w-[410px] max-w-full h-[60px] text-left text-xs text-grey1 font-text-sm-bold ${className}`}
      style={property1NewPasswordStyle}
    >
      <div className="absolute h-[66.67%] w-full top-[0%] right-[0%] bottom-[33.33%] left-[0%] rounded-lg bg-white box-border overflow-hidden flex flex-row items-center justify-center p-3 gap-[312px] border-[1px] border-solid border-grey-lighter">
        <div className="relative leading-[16px]">Password</div>
        <img
          className="w-4 relative h-4 overflow-hidden shrink-0"
          alt=""
          src="/visibility-black-24dp-1.svg"
        />
      </div>
      <div className="absolute h-[26.67%] w-full top-[73.33%] right-[0%] bottom-[0%] left-[0%] text-3xs text-grey-dark">
        <div className="absolute h-1/4 w-[14.63%] top-[37.5%] right-[85.37%] bottom-[37.5%] left-[0%] rounded-sm bg-white" />
        <div className="absolute h-1/4 w-[14.63%] top-[37.5%] right-[70.24%] bottom-[37.5%] left-[15.12%] rounded-sm bg-white" />
        <div className="absolute h-1/4 w-[14.63%] top-[37.5%] right-[55.12%] bottom-[37.5%] left-[30.24%] rounded-sm bg-white" />
        <div className="absolute top-[0%] left-[76.59%] leading-[16px] font-semibold">
          Password strength
        </div>
      </div>
    </div>
  );
};

export default Property1NewPassword;
