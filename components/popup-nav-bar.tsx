import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type PopupNavBarType = {
  className?: string;

  /** Style props */
  popupNavBarOverflow?: CSSProperties["overflow"];
  popupNavBarPosition?: CSSProperties["position"];
  popupNavBarTop?: CSSProperties["top"];
  popupNavBarLeft?: CSSProperties["left"];
};

const PopupNavBar: NextPage<PopupNavBarType> = ({
  className = "",
  popupNavBarOverflow,
  popupNavBarPosition,
  popupNavBarTop,
  popupNavBarLeft,
}) => {
  const popupNavBarStyle: CSSProperties = useMemo(() => {
    return {
      overflow: popupNavBarOverflow,
      position: popupNavBarPosition,
      top: popupNavBarTop,
      left: popupNavBarLeft,
    };
  }, [
    popupNavBarOverflow,
    popupNavBarPosition,
    popupNavBarTop,
    popupNavBarLeft,
  ]);

  return (
    <img
      className={`w-[360px] max-w-full overflow-hidden h-12 ${className}`}
      alt=""
      src="/popup-nav-bar.svg"
      style={popupNavBarStyle}
    />
  );
};

export default PopupNavBar;
