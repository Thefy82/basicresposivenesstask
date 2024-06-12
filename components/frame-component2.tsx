import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type FrameComponentType = {
  className?: string;
  program?: string;

  /** Style props */
  propColor?: CSSProperties["color"];
  propColor1?: CSSProperties["color"];
};

const FrameComponent: NextPage<FrameComponentType> = ({
  className = "",
  program,
  propColor,
  propColor1,
}) => {
  const programStyle: CSSProperties = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  const anEventWithStyle: CSSProperties = useMemo(() => {
    return {
      color: propColor1,
    };
  }, [propColor1]);

  return (
    <div
      className={`absolute top-[16px] left-[16px] flex flex-col items-start justify-start gap-[24px] text-left text-lg text-grey-darkest font-text-sm-bold ${className}`}
    >
      <div className="flex flex-col items-start justify-start">
        <div className="w-[121px] relative h-8">
          <img
            className="absolute top-[0px] left-[0px] w-8 h-8 overflow-hidden"
            alt=""
            src={program}
          />
          <div
            className="absolute top-[3px] left-[40px] leading-[26px] font-semibold"
            style={programStyle}
          >
            Program
          </div>
        </div>
      </div>
      <div
        className="w-[280px] relative text-xs whitespace-pre-wrap inline-block"
        style={anEventWithStyle}
      >
        An Event with Venue and Date. Meetup, Workshop or Webinar. Exhibition,
        Performance or Competition.
      </div>
    </div>
  );
};

export default FrameComponent;
