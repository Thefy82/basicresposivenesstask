import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type ConnectWithSeparatorType = {
  className?: string;

  /** Style props */
  connectWithSeparatorPosition?: CSSProperties["position"];
};

const ConnectWithSeparator: NextPage<ConnectWithSeparatorType> = ({
  className = "",
  connectWithSeparatorPosition,
}) => {
  const connectWithSeparatorStyle: CSSProperties = useMemo(() => {
    return {
      position: connectWithSeparatorPosition,
    };
  }, [connectWithSeparatorPosition]);

  return (
    <div
      className={`w-[410px] max-w-full h-4 text-left text-xs text-base-black font-text-sm-bold ${className}`}
      style={connectWithSeparatorStyle}
    >
      <div className="absolute h-[12.5%] w-[36.34%] top-[50%] right-[63.66%] bottom-[37.5%] left-[0%] bg-grey-light" />
      <div className="absolute h-[12.5%] w-[36.1%] top-[50%] right-[0%] bottom-[37.5%] left-[63.9%] bg-grey-light" />
      <div className="absolute top-[0%] left-[38.29%] leading-[16px] font-semibold">
        Or connect with
      </div>
    </div>
  );
};

export default ConnectWithSeparator;
