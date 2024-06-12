import type { NextPage } from "next";
import GroupComponent from "../components/group-component";
import ExploreHobbyContainer from "../components/explore-hobby-container";
import Property1JoinIn from "../components/property1-join-in";
import Property1ContinueWithGoogl from "../components/property1-continue-with-googl";
import ConnectWithSeparator from "../components/connect-with-separator";
import FrameComponent2 from "../components/frame-component2";
import NavBar1 from "../components/nav-bar1";

const LandingPageJoinIn: NextPage = () => {
  return (
    <div className="w-full relative bg-white h-[1024px] overflow-hidden text-left text-5xl text-base-black font-text-sm-bold">
      <div className="absolute top-[758px] left-[0px] w-[1440px] h-[818px]">
        <div className="absolute top-[0px] left-[0px] bg-white w-[1440px] h-[818px]" />
        <div className="absolute top-[100px] left-[100px] w-[1240px] h-[618px]">
          <GroupComponent
            groupsBlack24dp11="/groups-black-24dp-1-12.svg"
            people="People"
            findATeacherCoachOrExpert="Find a teacher, coach, or expert for your hobby interest in your locality.  Find a partner, teammate, accompanist or collaborator."
            connect="Connect"
            propTop="0px"
            propLeft="0px"
            propWidth="147px"
            propLeft1="30px"
          />
          <GroupComponent
            groupsBlack24dp11="/shopping-basket-black-24dp-2-11.svg"
            people="Product"
            findATeacherCoachOrExpert="Find equipment or supplies required for your hobby.  Buy, rent or borrow from shops, online stores or from community members."
            connect="Get it"
            propTop="321px"
            propLeft="0px"
            propWidth="160px"
            propLeft1="42px"
          />
          <div className="absolute top-[0px] left-[632px] w-[608px] h-[297px]">
            <div className="absolute top-[0px] left-[0px] rounded-lg bg-white box-border w-[608px] h-[297px] border-[1px] border-solid border-grey-light" />
            <div className="absolute top-[40px] left-[44px] w-[131px] h-10">
              <img
                className="absolute top-[0px] left-[0px] w-10 h-10 overflow-hidden"
                alt=""
                src="/location-on-black-24dp-1.svg"
              />
              <div className="absolute top-[2px] left-[64px] font-semibold">
                Place
              </div>
            </div>
            <div className="absolute top-[104px] left-[44px] text-lg font-light whitespace-pre-wrap inline-block w-[520px]">
              Find a class, school, playground, auditorium, studio, shop or an
              event venue. Book a slot at venues that allow booking through
              hobbycue.
            </div>
            <div className="absolute top-[217px] left-[44px] rounded-lg bg-white flex flex-row items-center justify-center py-3 px-8 text-sm text-primary-full border-[1px] border-solid border-primary-full">
              <div className="relative leading-[16px] font-semibold">
                Meet up
              </div>
            </div>
          </div>
          <GroupComponent
            groupsBlack24dp11="/program2.svg"
            people="Program"
            findATeacherCoachOrExpert="Find events, meetups and workshops related to your hobby.  Register or buy tickets online."
            connect="Attend"
            propTop="321px"
            propLeft="632px"
            propWidth="171px"
            propLeft1="37px"
          />
        </div>
      </div>
      <div className="absolute top-[80px] left-[0px] w-[1440px] h-[678px]">
        <div className="absolute top-[0px] left-[calc(50%_-_720px)] bg-purple-3 w-[1440px] h-[678px]" />
        <ExploreHobbyContainer />
        <div className="absolute top-[103px] left-[930px] flex flex-col items-start justify-start gap-[32px]">
          <Property1JoinIn
            rectangleDiv={false}
            showRectangleDiv
            groupDivHeight="30px"
            signInColor="#939ca3"
            groupDivHeight1="34px"
            joinInColor="#8064a2"
            joinInTextDecoration="unset"
          />
          <div className="flex flex-col items-start justify-start gap-[28px]">
            <div className="flex flex-col items-start justify-start gap-[16px]">
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
            <ConnectWithSeparator connectWithSeparatorPosition="relative" />
            <FrameComponent2 />
          </div>
        </div>
      </div>
      <NavBar1 />
    </div>
  );
};

export default LandingPageJoinIn;
