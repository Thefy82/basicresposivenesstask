import type { NextPage } from "next";
import Property1ContinueWithGoogl from "./property1-continue-with-googl";

export type FacebookLoginContainerType = {
  className?: string;
};

const FacebookLoginContainer: NextPage<FacebookLoginContainerType> = ({
  className = "",
}) => {
  return (
    <div
      className={`flex flex-col items-start justify-start gap-[16px] ${className}`}
    >
      <Property1ContinueWithGoogl
        google="/1298745-google-brand-branding-logo-network-icon-1.svg"
        continueWithGoogle="Continue with Google"
        property1ContinueWithGoogGap="88px"
      />
      <Property1ContinueWithGoogl
        google="/facebook.svg"
        continueWithGoogle="Continue with Facebook"
        property1ContinueWithGoogGap="79px"
      />
    </div>
  );
};

export default FacebookLoginContainer;
