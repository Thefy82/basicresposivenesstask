import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type Property1ContinueWithGooglType = {
  className?: string;
  google?: string;
  continueWithGoogle?: string;

  /** Style props */
  property1ContinueWithGoogGap?: CSSProperties["gap"];
};

const Property1ContinueWithGoogl: NextPage<Property1ContinueWithGooglType> = ({
  className = "",
  google,
  continueWithGoogle,
  property1ContinueWithGoogGap,
}) => {
  const property1ContinueWithGooglStyle: CSSProperties = useMemo(() => {
    return {
      gap: property1ContinueWithGoogGap,
    };
  }, [property1ContinueWithGoogGap]);

  return (
    <div
      className={`rounded-lg bg-purple-3 box-border max-w-full overflow-hidden flex flex-row items-start justify-start py-3 pr-32 pl-6 gap-[88px] text-left text-sm text-grey-darkest font-text-sm-bold border-[1px] border-solid border-primary-full ${className}`}
      style={property1ContinueWithGooglStyle}
    >
      <img
        className="w-4 relative h-4 overflow-hidden shrink-0"
        alt=""
        src={google}
      />
      <div className="relative leading-[16px] font-semibold">
        {continueWithGoogle}
      </div>
    </div>
  );
};

export default Property1ContinueWithGoogl;
