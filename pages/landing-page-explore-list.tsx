import type { NextPage } from "next";
import ExploreHobbyContainer from "../components/explore-hobby-container";
import Property1JoinIn from "../components/property1-join-in";
import Property1ContinueWithGoogl from "../components/property1-continue-with-googl";
import ConnectWithSeparator from "../components/connect-with-separator";
import FrameComponent2 from "../components/frame-component2";
import GroupComponent from "../components/group-component";
import FormContainer from "../components/form-container";
import ContainerFooter from "../components/container-footer";
import ExploreList from "../components/explore-list";
import NavBar1 from "../components/nav-bar1";

const LandingPageExploreList: NextPage = () => {
  return (
    <div className="w-full relative bg-white h-[1036px] overflow-hidden text-left text-lg text-base-black font-text-sm-bold">
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
      <div className="absolute top-[758px] left-[0px] w-[1440px] h-[818px] text-5xl">
        <div className="absolute top-[0px] left-[0px] bg-white w-[1440px] h-[818px]" />
        <div className="absolute top-[100px] left-[100px] w-[1240px] h-[618px]">
          <GroupComponent
            groupsBlack24dp11="/groups-black-24dp-1-12.svg"
            people="People"
            findATeacherCoachOrExpert="Find a teacher, coach, or expert for your hobby interest in your locality.  Find a partner, teammate, accompanist or collaborator."
            connect="Connect"
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
      <FormContainer />
      <div className="absolute top-[1576px] left-[0px] bg-blue-2 w-[1440px] h-[484px] text-grey-darkest">
        <div className="absolute top-[100px] left-[100px] w-[1240px] h-[284px]">
          <div className="absolute top-[0px] left-[0px] rounded-lg bg-white box-border w-[1240px] h-[284px] border-[1px] border-solid border-grey-light" />
          <div className="absolute top-[112px] left-[40px] tracking-[0.02em] leading-[30px] font-light whitespace-pre-wrap inline-block w-[1160px]">
            Are you a teacher or expert? Do you sell or rent out equipment,
            venue or event tickets? Or, you know someone who should be on
            hobbycue? Go ahead and Add your Own page
          </div>
          <div className="absolute top-[40px] left-[40px] w-[232px] h-10 text-5xl">
            <div className="absolute top-[2px] left-[64px] font-semibold">
              Add your own
            </div>
            <img
              className="absolute top-[0px] left-[0px] w-10 h-10 overflow-hidden"
              alt=""
              src="/add1.svg"
            />
          </div>
          <div className="absolute top-[204px] left-[40px] rounded-lg bg-white box-border w-[122px] h-10 text-sm text-primary-full border-[1px] border-solid border-primary-full">
            <div className="absolute top-[12px] left-[29px] leading-[16px] font-semibold">
              Add new
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[2729px] left-[0px] w-[1440px] h-[662px] text-17xl">
        <div className="absolute top-[0px] left-[0px] bg-blue-2 w-[1440px] h-[662px]" />
        <div className="absolute top-[330px] left-[100px] w-[1240px] h-[302px]">
          <img
            className="absolute top-[21px] left-[0px] w-[531px] h-[280px] overflow-hidden"
            alt=""
            src="/5820098-11.svg"
          />
          <img
            className="absolute top-[0px] left-[602px] w-[638px] h-[302px] overflow-hidden"
            alt=""
            src="/5820000-11.svg"
          />
        </div>
        <div className="absolute top-[100px] left-[100px] w-[565px] h-[130px]">
          <i className="absolute top-[0px] left-[0px] font-medium">
            <span>{`Your `}</span>
            <span className="text-primary-full">Hobby</span>
            <span>{`, Your `}</span>
            <span className="text-blue-1">Community...</span>
          </i>
          <div className="absolute top-[84px] left-[0px] w-[147px] h-[46px] text-xl text-white">
            <div className="absolute top-[0px] left-[0px] rounded-lg bg-primary-full w-[147px] h-[46px]" />
            <div className="absolute top-[8px] left-[16px] font-semibold">
              Get started
            </div>
          </div>
        </div>
      </div>
      <ContainerFooter />
      <div className="absolute top-[2057px] left-[0px] bg-white w-[1440px] h-[672px] text-primary-full">
        <div className="absolute top-[100px] left-[100px] w-[1240px] h-[472px]">
          <div className="absolute top-[0px] left-[0px] rounded-lg bg-purple-3 w-[1240px] h-[472px]" />
          <div className="absolute top-[40px] left-[40px] w-[221px] h-10 text-5xl text-grey-darkest">
            <div className="absolute top-[0px] left-[0px] w-[221px] h-10">
              <div className="absolute top-[2px] left-[64px] font-semibold">
                Testimonials
              </div>
              <img
                className="absolute top-[0px] left-[0px] w-10 h-10 overflow-hidden object-contain"
                alt=""
                src="/quote@2x.png"
              />
            </div>
          </div>
          <div className="absolute top-[112px] left-[40px] tracking-[0.02em] leading-[30px] font-light text-grey-darker inline-block w-[1160px]">
            In a fast growing and ever changing city like Bangalore, it
            sometimes becomes very difficult to find or connect with like minded
            people. Websites like hobbycue.com is a great service which helps me
            get in touch with, communicate, connect, and exchange ideas with
            other dancers. It also provides the extra benefit of finding
            products and services that I can avail, which I can be assured is
            going to be of great quality as it comes recommended by people of
            the hobbycue community. To have discussions, to get visibility, and
            to be able to safely explore various hobbies and activities in my
            city, all under one roof, is an excellent idea and I highly
            recommend it.
          </div>
          <div className="absolute top-[332px] left-[896px] w-[304px] h-[100px]">
            <img
              className="absolute top-[0px] left-[0px] rounded-[50%] w-[100px] h-[100px] object-cover"
              alt=""
              src="/ellipse-12@2x.png"
            />
            <div className="absolute top-[24px] left-[124px] w-[180px] h-[52px]">
              <div className="absolute top-[0px] left-[0px] tracking-[0.02em] font-semibold">
                Shubha Nagarajan
              </div>
              <div className="absolute top-[31px] left-[0px] text-sm tracking-[0.02em] text-blue-1">
                Classical Dancer
              </div>
            </div>
          </div>
          <div className="absolute top-[332px] left-[40px] w-[776px] h-[100px] text-xs">
            <div className="absolute top-[0px] left-[0px] rounded-lg bg-purple-2 w-[776px] h-[100px]" />
            <div className="absolute top-[30px] left-[32px] rounded-[50%] bg-white w-10 h-10" />
            <img
              className="absolute top-[38px] left-[40px] w-6 h-6 overflow-hidden"
              alt=""
              src="/play-arrow-black-24dp-1.svg"
            />
            <div className="absolute top-[49px] left-[118px] rounded-sm bg-white w-[468px] h-0.5" />
            <div className="absolute top-[44px] left-[112px] rounded-[50%] bg-primary-full w-3 h-3" />
            <img
              className="absolute top-[19px] left-[684px] rounded-[50%] w-[60px] h-[60px] object-cover"
              alt=""
              src="/ellipse-12@2x.png"
            />
            <img
              className="absolute top-[47px] left-[672px] w-8 h-8 overflow-hidden"
              alt=""
              src="/mic-black-24dp-1.svg"
            />
            <div className="absolute top-[42px] left-[598px] leading-[16px]">
              0:00
            </div>
          </div>
        </div>
      </div>
      <img
        className="absolute top-[2912px] left-[1300px] w-10 h-10"
        alt=""
        src="/group-77.svg"
      />
      <div className="absolute top-[80px] left-[0px] w-[1440px] h-[956px]" />
      <ExploreList
        exploreListPosition="absolute"
        exploreListTop="80px"
        exploreListLeft="818px"
      />
      <NavBar1 />
    </div>
  );
};

export default LandingPageExploreList;
