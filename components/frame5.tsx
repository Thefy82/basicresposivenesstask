import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type Frame5Type = {
  className?: string;

  /** Style props */
  frameIconOverflow?: CSSProperties["overflow"];
  frameIconPosition?: CSSProperties["position"];
  frameIconTop?: CSSProperties["top"];
  frameIconLeft?: CSSProperties["left"];
};

const Frame5: NextPage<Frame5Type> = ({
  className = "",
  frameIconOverflow,
  frameIconPosition,
  frameIconTop,
  frameIconLeft,
}) => {
  const frameIconStyle: CSSProperties = useMemo(() => {
    return {
      overflow: frameIconOverflow,
      position: frameIconPosition,
      top: frameIconTop,
      left: frameIconLeft,
    };
  }, [frameIconOverflow, frameIconPosition, frameIconTop, frameIconLeft]);

  return (
    <img
      className={`w-[360px] max-w-full overflow-hidden h-12 ${className}`}
      alt=""
      src="/frame-1095.svg"
      style={frameIconStyle}
    />
  );
};

export default Frame5;
