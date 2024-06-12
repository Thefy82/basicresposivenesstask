import type { NextPage } from "next";
import Property1Email from "./property1-email";
import Property1NewPassword from "./property1-new-password";
import Property1AgreeAndContinue from "./property1-agree-and-continue";

export type FrameComponent2Type = {
  className?: string;
};

const FrameComponent2: NextPage<FrameComponent2Type> = ({ className = "" }) => {
  return (
    <div
      className={`flex flex-col items-start justify-start gap-[12px] text-left text-xs text-grey-darker font-text-sm-bold ${className}`}
    >
      <div className="flex flex-col items-start justify-start gap-[16px]">
        <Property1Email />
        <Property1NewPassword property1NewPasswordPosition="relative" />
      </div>
      <div className="flex flex-col items-center justify-center gap-[12px]">
        <div className="w-[402px] relative inline-block">
          <span>{`By continuing, you agree to our `}</span>
          <span className="text-grey-darkest">Terms of Service</span>
          <span>{` and `}</span>
          <span className="text-grey-darkest">Privacy Policy</span>
          <span>.</span>
        </div>
        <Property1AgreeAndContinue
          agreeAndContinue="Agree and Continue"
          property1AgreeAndContinueOverflow="unset"
          property1AgreeAndContinueBackgroundColor="#8064a2"
          property1AgreeAndContinueBorder="unset"
          agreeAndContinueColor="#fff"
        />
      </div>
    </div>
  );
};

export default FrameComponent2;
