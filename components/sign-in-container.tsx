import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type SignInContainerType = {
  className?: string;

  /** Style props */
  visibilityBlack24dp1IconTop?: CSSProperties["top"];
  visibilityBlack24dp1IconLeft?: CSSProperties["left"];
  andBackgroundColor?: CSSProperties["backgroundColor"];
  andBorder?: CSSProperties["border"];
  groupDivBackgroundColor?: CSSProperties["backgroundColor"];
  groupDivBorder?: CSSProperties["border"];
  rectangleDivBackgroundColor?: CSSProperties["backgroundColor"];
  rectangleDivBackgroundColor1?: CSSProperties["backgroundColor"];
  orConnectWithBackgroundColor?: CSSProperties["backgroundColor"];
  propBackgroundColor?: CSSProperties["backgroundColor"];
  propBackgroundColor1?: CSSProperties["backgroundColor"];
};

const SignInContainer: NextPage<SignInContainerType> = ({
  className = "",
  visibilityBlack24dp1IconTop,
  visibilityBlack24dp1IconLeft,
  andBackgroundColor,
  andBorder,
  groupDivBackgroundColor,
  groupDivBorder,
  rectangleDivBackgroundColor,
  rectangleDivBackgroundColor1,
  orConnectWithBackgroundColor,
  propBackgroundColor,
  propBackgroundColor1,
}) => {
  const groupDiv2Style: CSSProperties = useMemo(() => {
    return {
      top: visibilityBlack24dp1IconTop,
      left: visibilityBlack24dp1IconLeft,
    };
  }, [visibilityBlack24dp1IconTop, visibilityBlack24dp1IconLeft]);

  const rectangleDiv1Style: CSSProperties = useMemo(() => {
    return {
      backgroundColor: andBackgroundColor,
      border: andBorder,
    };
  }, [andBackgroundColor, andBorder]);

  const rectangleDiv2Style: CSSProperties = useMemo(() => {
    return {
      backgroundColor: groupDivBackgroundColor,
      border: groupDivBorder,
    };
  }, [groupDivBackgroundColor, groupDivBorder]);

  const rectangleDiv3Style: CSSProperties = useMemo(() => {
    return {
      backgroundColor: rectangleDivBackgroundColor,
    };
  }, [rectangleDivBackgroundColor]);

  const rectangleDiv4Style: CSSProperties = useMemo(() => {
    return {
      backgroundColor: rectangleDivBackgroundColor1,
    };
  }, [rectangleDivBackgroundColor1]);

  const rectangleDiv5Style: CSSProperties = useMemo(() => {
    return {
      backgroundColor: orConnectWithBackgroundColor,
    };
  }, [orConnectWithBackgroundColor]);

  const rectangleDiv6Style: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  const rectangleDiv7Style: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor1,
    };
  }, [propBackgroundColor1]);

  return (
    <div
      className={`absolute top-[211px] left-[24px] w-[312px] h-[364px] text-left text-xs text-grey-dark font-text-sm-bold ${className}`}
      style={groupDiv2Style}
    >
      <div className="absolute top-[0px] left-[82px] w-[149px] h-7 text-base">
        <div className="absolute top-[0px] left-[0px] w-[55px] h-6">
          <div className="absolute top-[0px] left-[0px] font-semibold">
            Sign In
          </div>
          <div className="absolute top-[26px] left-[0px] bg-primary-full w-[55px] h-0.5 hidden" />
        </div>
        <div className="absolute top-[0px] left-[95px] w-[54px] h-7 text-primary-full">
          <div className="absolute top-[0px] left-[0px] font-semibold">
            Join In
          </div>
          <div className="absolute top-[26px] left-[0px] bg-primary-full w-[54px] h-0.5" />
        </div>
      </div>
      <div className="absolute top-[52px] left-[0px] w-[312px] h-8">
        <div
          className="absolute top-[0px] left-[0px] rounded-lg bg-white box-border w-[312px] h-8 border-[1px] border-solid border-grey-lighter"
          style={rectangleDiv1Style}
        />
        <div className="absolute top-[8px] left-[12px] leading-[16px]">
          Email
        </div>
      </div>
      <div className="absolute top-[100px] left-[0px] w-[312px] h-8">
        <div
          className="absolute top-[0px] left-[0px] rounded-lg bg-white box-border w-[312px] h-8 border-[1px] border-solid border-grey-lighter"
          style={rectangleDiv2Style}
        />
        <div className="absolute top-[8px] left-[12px] leading-[16px]">
          Password
        </div>
        <img
          className="absolute top-[8px] left-[284px] w-4 h-4 overflow-hidden"
          alt=""
          src="/visibility-black-24dp-1.svg"
        />
      </div>
      <div className="absolute top-[136px] left-[0px] w-[312px] h-4 text-3xs">
        <div
          className="absolute top-[6px] left-[0px] rounded-sm bg-white w-10 h-1"
          style={rectangleDiv3Style}
        />
        <div
          className="absolute top-[6px] left-[44px] rounded-sm bg-white w-10 h-1"
          style={rectangleDiv4Style}
        />
        <div
          className="absolute top-[6px] left-[88px] rounded-sm bg-white w-10 h-1"
          style={rectangleDiv5Style}
        />
        <div className="absolute top-[0px] left-[216px] leading-[16px] font-semibold">
          Password strength
        </div>
      </div>
      <div className="absolute top-[164px] left-[5px] text-4xs text-grey-darker">
        <span>{`By continuing, you agree to our `}</span>
        <span className="text-grey-darkest">Terms of Service</span>
        <span>{` and `}</span>
        <span className="text-grey-darkest">Privacy Policy</span>
        <span>.</span>
      </div>
      <div className="absolute top-[188px] left-[0px] w-[312px] h-8 text-white">
        <div className="absolute top-[0px] left-[0px] rounded-lg bg-primary-full w-[312px] h-8" />
        <div className="absolute top-[8px] left-[127px] leading-[16px] font-semibold">
          Continue
        </div>
      </div>
      <div className="absolute top-[244px] left-[0px] w-[312px] h-4 text-base-black">
        <div className="absolute top-[8px] left-[0px] bg-grey-light w-[100px] h-0.5" />
        <div className="absolute top-[8px] left-[213px] bg-grey-light w-[99px] h-0.5" />
        <div className="absolute top-[0px] left-[108px] leading-[16px] font-semibold">
          Or connect with
        </div>
      </div>
      <div className="absolute top-[284px] left-[0px] w-[312px] h-8 text-grey-darkest">
        <div
          className="absolute top-[0px] left-[0px] rounded-lg bg-purple-3 box-border w-[312px] h-8 border-[1px] border-solid border-primary-full"
          style={rectangleDiv6Style}
        />
        <div className="absolute top-[8px] left-[90px] leading-[16px] font-semibold">
          Continue with Google
        </div>
        <img
          className="absolute top-[8px] left-[16px] w-4 h-4 overflow-hidden"
          alt=""
          src="/1298745-google-brand-branding-logo-network-icon-1.svg"
        />
      </div>
      <div className="absolute top-[332px] left-[0px] w-[312px] h-8 text-grey-darkest">
        <div
          className="absolute top-[0px] left-[0px] rounded-lg bg-purple-3 box-border w-[312px] h-8 border-[1px] border-solid border-primary-full"
          style={rectangleDiv7Style}
        />
        <div className="absolute top-[8px] left-[82px] leading-[16px] font-semibold">
          Continue with Facebook
        </div>
        <img
          className="absolute top-[8px] left-[16px] w-4 h-4 overflow-hidden"
          alt=""
          src="/5296499-fb-facebook-facebook-logo-icon-1.svg"
        />
      </div>
    </div>
  );
};

export default SignInContainer;
