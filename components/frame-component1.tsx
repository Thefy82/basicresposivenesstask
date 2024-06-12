import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type FrameComponent1Type = {
  className?: string;
  groupsBlack24dp11?: string;
  people?: string;
  anIndividualOrOrganizatio?: string;

  /** Style props */
  groupsBlack24dp11Border?: CSSProperties["border"];
  groupsBlack24dp11BackgroundColor?: CSSProperties["backgroundColor"];
  propColor?: CSSProperties["color"];
  propColor1?: CSSProperties["color"];
};

const FrameComponent1: NextPage<FrameComponent1Type> = ({
  className = "",
  groupsBlack24dp11,
  people,
  anIndividualOrOrganizatio,
  groupsBlack24dp11Border,
  groupsBlack24dp11BackgroundColor,
  propColor,
  propColor1,
}) => {
  const rectangleDivStyle: CSSProperties = useMemo(() => {
    return {
      border: groupsBlack24dp11Border,
      backgroundColor: groupsBlack24dp11BackgroundColor,
    };
  }, [groupsBlack24dp11Border, groupsBlack24dp11BackgroundColor]);

  const peopleStyle: CSSProperties = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  const anIndividualOrStyle: CSSProperties = useMemo(() => {
    return {
      color: propColor1,
    };
  }, [propColor1]);

  return (
    <div
      className={`w-[312px] relative h-[142px] text-left text-lg text-grey-darkest font-text-sm-bold ${className}`}
    >
      <div
        className="absolute top-[0px] left-[0px] rounded-lg bg-white box-border w-[312px] h-[142px] border-[2px] border-solid border-primary-full"
        style={rectangleDivStyle}
      />
      <div className="absolute top-[16px] left-[16px] flex flex-col items-start justify-start gap-[24px]">
        <div className="flex flex-row items-center justify-start gap-[8px]">
          <img
            className="w-8 relative h-8 overflow-hidden shrink-0"
            alt=""
            src={groupsBlack24dp11}
          />
          <div
            className="relative leading-[26px] font-semibold"
            style={peopleStyle}
          >
            {people}
          </div>
        </div>
        <div
          className="w-[280px] relative text-xs whitespace-pre-wrap inline-block"
          style={anIndividualOrStyle}
        >
          {anIndividualOrOrganizatio}
        </div>
      </div>
    </div>
  );
};

export default FrameComponent1;
