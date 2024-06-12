import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type Property1JoinInType = {
  className?: string;
  rectangleDiv?: boolean;
  showRectangleDiv?: boolean;

  /** Style props */
  groupDivHeight?: CSSProperties["height"];
  signInColor?: CSSProperties["color"];
  groupDivHeight1?: CSSProperties["height"];
  joinInColor?: CSSProperties["color"];
  joinInTextDecoration?: CSSProperties["textDecoration"];
};

const Property1JoinIn: NextPage<Property1JoinInType> = ({
  className = "",
  rectangleDiv,
  showRectangleDiv,
  groupDivHeight,
  signInColor,
  groupDivHeight1,
  joinInColor,
  joinInTextDecoration,
}) => {
  const groupDivStyle: CSSProperties = useMemo(() => {
    return {
      height: groupDivHeight,
    };
  }, [groupDivHeight]);

  const signInStyle: CSSProperties = useMemo(() => {
    return {
      color: signInColor,
    };
  }, [signInColor]);

  const groupDiv1Style: CSSProperties = useMemo(() => {
    return {
      height: groupDivHeight1,
    };
  }, [groupDivHeight1]);

  const joinInStyle: CSSProperties = useMemo(() => {
    return {
      color: joinInColor,
      textDecoration: joinInTextDecoration,
    };
  }, [joinInColor, joinInTextDecoration]);

  return (
    <div
      className={`flex flex-row items-start justify-center gap-[32px] text-left text-xl text-grey-dark font-text-sm-bold ${className}`}
    >
      <div className="w-[69px] relative h-[30px]" style={groupDivStyle}>
        <div
          className="absolute top-[0px] left-[0px] font-semibold"
          style={signInStyle}
        >
          Sign In
        </div>
        {!rectangleDiv && (
          <div className="absolute top-[32px] left-[0px] bg-primary-full w-[69px] h-0.5 hidden" />
        )}
      </div>
      <div
        className="w-[67px] relative h-[34px] text-primary-full"
        style={groupDiv1Style}
      >
        <div
          className="absolute top-[0px] left-[0px] font-semibold"
          style={joinInStyle}
        >
          Join In
        </div>
        {showRectangleDiv && (
          <div className="absolute top-[32px] left-[0px] bg-primary-full w-[67px] h-0.5" />
        )}
      </div>
    </div>
  );
};

export default Property1JoinIn;
