import type { NextPage } from "next";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import Link from "next/link";
import ExploreHobbyContainer from "./explore-hobby-container";
import Property1JoinIn from "./property1-join-in";
import FacebookLoginContainer from "./facebook-login-container";
import ConnectWithSeparator from "./connect-with-separator";
import PasswordContainer from "./password-container";
import Property1AgreeAndContinue from "./property1-agree-and-continue";

export type HobbyScreen1Type = {
  className?: string;
};

const HobbyScreen1: NextPage<HobbyScreen1Type> = ({ className = "" }) => {
  return (
    <div
      className={`absolute top-[128px] left-[18px] w-[1440px] h-[678px] text-left text-xs text-base-black font-text-sm-bold ${className}`}
    >
      <div className="absolute top-[0px] left-[calc(50%_-_720px)] bg-purple-3 w-[1440px] h-[678px]" />
      <ExploreHobbyContainer />
      <div className="absolute top-[103px] left-[930px] flex flex-col items-start justify-start gap-[32px]">
        <Property1JoinIn
          rectangleDiv
          showRectangleDiv={false}
          groupDivHeight="34px"
          signInColor="#8064a2"
          groupDivHeight1="30px"
          joinInColor="#939ca3"
          joinInTextDecoration="none"
        />
        <div className="flex flex-col items-start justify-start gap-[28px]">
          <FacebookLoginContainer />
          <ConnectWithSeparator connectWithSeparatorPosition="relative" />
          <div className="flex flex-col items-start justify-start gap-[24px]">
            <PasswordContainer />
            <div className="flex flex-col items-start justify-start gap-[24px]">
              <div className="w-[410px] relative h-4">
                <div className="absolute top-[0px] left-[0px] w-[116px] h-4">
                  <div className="absolute top-[0px] left-[0px] w-4 h-4">
                    <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-sm bg-purple-3 box-border border-[1px] border-solid border-primary-full" />
                  </div>
                  <div className="absolute top-[0px] left-[24px] leading-[16px] inline-block w-[92px]">
                    Remember me
                  </div>
                </div>
                <div className="absolute top-[0px] left-[279px] w-[131px] h-4">
                  <img
                    className="absolute top-[0px] left-[0px] w-[15.8px] h-4 overflow-hidden"
                    alt=""
                    src="/lock-black-24dp-11.svg"
                  />
                  <Button
                    className="w-[107.4px] absolute top-[0px] left-[23.6px]"
                    variant="outline-primary"
                  >
                    Forgot password?
                  </Button>
                </div>
              </div>
              <Property1AgreeAndContinue
                agreeAndContinue="Continue"
                property1AgreeAndContinueOverflow="hidden"
                property1AgreeAndContinueBackgroundColor="unset"
                property1AgreeAndContinueBorder="1px solid #000"
                agreeAndContinueColor="#000"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HobbyScreen1;
