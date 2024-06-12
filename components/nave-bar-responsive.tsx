import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type NaveBarResponsiveType = {
  className?: string;

  /** Style props */
  naveBarResponsiveOverflow?: CSSProperties["overflow"];
  naveBarResponsivePosition?: CSSProperties["position"];
  naveBarResponsiveTop?: CSSProperties["top"];
  naveBarResponsiveLeft?: CSSProperties["left"];
};

const NaveBarResponsive: NextPage<NaveBarResponsiveType> = ({
  className = "",
  naveBarResponsiveOverflow,
  naveBarResponsivePosition,
  naveBarResponsiveTop,
  naveBarResponsiveLeft,
}) => {
  const naveBarResponsiveStyle: CSSProperties = useMemo(() => {
    return {
      overflow: naveBarResponsiveOverflow,
      position: naveBarResponsivePosition,
      top: naveBarResponsiveTop,
      left: naveBarResponsiveLeft,
    };
  }, [
    naveBarResponsiveOverflow,
    naveBarResponsivePosition,
    naveBarResponsiveTop,
    naveBarResponsiveLeft,
  ]);

  return (
    <img
      className={`w-[360px] max-w-full overflow-hidden h-12 ${className}`}
      alt=""
      src="/nave-bar-responsive.svg"
      style={naveBarResponsiveStyle}
    />
  );
};

export default NaveBarResponsive;
