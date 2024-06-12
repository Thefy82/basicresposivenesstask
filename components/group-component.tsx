import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type GroupComponentType = {
  className?: string;
  groupsBlack24dp11?: string;
  people?: string;
  findATeacherCoachOrExpert?: string;
  connect?: string;

  /** Style props */
  propTop?: CSSProperties["top"];
  propLeft?: CSSProperties["left"];
  propWidth?: CSSProperties["width"];
  propLeft1?: CSSProperties["left"];
};

const GroupComponent: NextPage<GroupComponentType> = ({
  className = "",
  groupsBlack24dp11,
  people,
  findATeacherCoachOrExpert,
  connect,
  propTop,
  propLeft,
  propWidth,
  propLeft1,
}) => {
  const groupDiv3Style: CSSProperties = useMemo(() => {
    return {
      top: propTop,
      left: propLeft,
    };
  }, [propTop, propLeft]);

  const groupDiv4Style: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const connectStyle: CSSProperties = useMemo(() => {
    return {
      left: propLeft1,
    };
  }, [propLeft1]);

  return (
    <div
      className={`absolute top-[0px] left-[0px] w-[608px] h-[297px] text-left text-5xl text-base-black font-text-sm-bold ${className}`}
      style={groupDiv3Style}
    >
      <div className="absolute top-[0px] left-[0px] rounded-lg bg-white box-border w-[608px] h-[297px] border-[1px] border-solid border-grey-light" />
      <div
        className="absolute top-[40px] left-[44px] w-[147px] h-10"
        style={groupDiv4Style}
      >
        <img
          className="absolute top-[0px] left-[0px] w-10 h-10 overflow-hidden"
          alt=""
          src={groupsBlack24dp11}
        />
        <div className="absolute top-[2px] left-[64px] font-semibold">
          {people}
        </div>
      </div>
      <div className="absolute top-[104px] left-[44px] text-lg font-light whitespace-pre-wrap inline-block w-[520px]">
        {findATeacherCoachOrExpert}
      </div>
      <div className="absolute top-[217px] left-[44px] rounded-lg bg-white box-border w-[122px] h-10 text-sm text-primary-full border-[1px] border-solid border-primary-full">
        <div
          className="absolute top-[12px] left-[30px] leading-[16px] font-semibold"
          style={connectStyle}
        >
          {connect}
        </div>
      </div>
    </div>
  );
};

export default GroupComponent;
