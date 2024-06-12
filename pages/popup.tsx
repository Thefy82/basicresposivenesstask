import type { NextPage } from "next";
import SignInContainer from "../components/sign-in-container";
import PopupNavBar from "../components/popup-nav-bar";

const Popup: NextPage = () => {
  return (
    <div className="w-full relative bg-white h-[640px] overflow-hidden">
      <div className="absolute top-[72px] left-[24px] w-[312px] h-[364px]">
        <SignInContainer
          visibilityBlack24dp1IconTop="0px"
          visibilityBlack24dp1IconLeft="0px"
          andBackgroundColor="#ebedf0"
          andBorder="unset"
          groupDivBackgroundColor="#ebedf0"
          groupDivBorder="unset"
          rectangleDivBackgroundColor="#ebedf0"
          rectangleDivBackgroundColor1="#ebedf0"
          orConnectWithBackgroundColor="#ebedf0"
          propBackgroundColor="#fff"
          propBackgroundColor1="#fff"
        />
      </div>
      <PopupNavBar
        popupNavBarOverflow="unset"
        popupNavBarPosition="absolute"
        popupNavBarTop="0px"
        popupNavBarLeft="0px"
      />
    </div>
  );
};

export default Popup;
