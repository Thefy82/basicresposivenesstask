import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type Property1AgreeAndContinueType = {
  className?: string;
  agreeAndContinue?: string;

  /** Style props */
  property1AgreeAndContinueOverflow?: CSSProperties["overflow"];
  property1AgreeAndContinueBackgroundColor?: CSSProperties["backgroundColor"];
  property1AgreeAndContinueBorder?: CSSProperties["border"];
  agreeAndContinueColor?: CSSProperties["color"];
};

const Property1AgreeAndContinue: NextPage<Property1AgreeAndContinueType> = ({
  className = "",
  agreeAndContinue,
  property1AgreeAndContinueOverflow,
  property1AgreeAndContinueBackgroundColor,
  property1AgreeAndContinueBorder,
  agreeAndContinueColor,
}) => {
  const property1AgreeAndContinueStyle: CSSProperties = useMemo(() => {
    return {
      overflow: property1AgreeAndContinueOverflow,
      backgroundColor: property1AgreeAndContinueBackgroundColor,
      border: property1AgreeAndContinueBorder,
    };
  }, [
    property1AgreeAndContinueOverflow,
    property1AgreeAndContinueBackgroundColor,
    property1AgreeAndContinueBorder,
  ]);

  const agreeAndContinueStyle: CSSProperties = useMemo(() => {
    return {
      color: agreeAndContinueColor,
    };
  }, [agreeAndContinueColor]);

  return (
    <div
      className={`rounded-lg bg-primary-full max-w-full overflow-hidden flex flex-row items-center justify-center py-3 px-[133.5px] box-border text-left text-sm text-white font-text-sm-bold ${className}`}
      style={property1AgreeAndContinueStyle}
    >
      <div
        className="relative leading-[16px] font-semibold"
        style={agreeAndContinueStyle}
      >
        {agreeAndContinue}
      </div>
    </div>
  );
};

export default Property1AgreeAndContinue;
