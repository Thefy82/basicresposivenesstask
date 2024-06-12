import type { NextPage } from "next";
import GroupComponent from "../components/group-component";
import FormContainer from "../components/form-container";
import TestimonialsContainer from "../components/testimonials-container";
import HobbyCommunityContainer from "../components/hobby-community-container";
import ContainerFooter from "../components/container-footer";
import TestimonialContainer from "../components/testimonial-container";
import HobbyScreen from "../components/hobby-screen";
import NavBar1 from "../components/nav-bar1";

const LandingPageSignIn: NextPage = () => {
  return (
    <div className="w-full relative bg-white h-[3771px] overflow-hidden text-left text-5xl text-base-black font-text-sm-bold">
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
          <div className="absolute top-[321px] left-[0px] w-[608px] h-[297px]">
            <div className="absolute top-[0px] left-[0px] rounded-lg bg-white box-border w-[608px] h-[297px] border-[1px] border-solid border-grey-light" />
            <div className="absolute top-[40px] left-[44px] w-40 h-10">
              <img
                className="absolute top-[0px] left-[0px] w-10 h-10 overflow-hidden"
                alt=""
                src="/shopping-basket-black-24dp-2-11.svg"
              />
              <div className="absolute top-[2px] left-[64px] font-semibold">
                Product
              </div>
            </div>
            <div className="absolute top-[104px] left-[44px] text-lg font-light whitespace-pre-wrap inline-block w-[520px]">
              Find equipment or supplies required for your hobby. Buy, rent or
              borrow from shops, online stores or from community members.
            </div>
            <div className="absolute top-[217px] left-[44px] rounded-lg bg-white flex flex-row items-center justify-center py-3 px-[42px] text-sm text-primary-full border-[1px] border-solid border-primary-full">
              <div className="relative leading-[16px] font-semibold">
                Get it
              </div>
            </div>
          </div>
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
          <div className="absolute top-[321px] left-[632px] w-[608px] h-[297px]">
            <div className="absolute top-[0px] left-[0px] rounded-lg bg-white box-border w-[608px] h-[297px] border-[1px] border-solid border-grey-light" />
            <div className="absolute top-[40px] left-[44px] w-[171px] h-10">
              <img
                className="absolute top-[0px] left-[0px] w-10 h-10 overflow-hidden"
                alt=""
                src="/program2.svg"
              />
              <div className="absolute top-[2px] left-[64px] font-semibold">
                Program
              </div>
            </div>
            <div className="absolute top-[104px] left-[44px] text-lg font-light whitespace-pre-wrap inline-block w-[520px]">
              Find events, meetups and workshops related to your hobby. Register
              or buy tickets online.
            </div>
            <div className="absolute top-[217px] left-[44px] rounded-lg bg-white flex flex-row items-center justify-center py-3 px-9 text-sm text-primary-full border-[1px] border-solid border-primary-full">
              <div className="relative leading-[16px] font-semibold">
                Attend
              </div>
            </div>
          </div>
        </div>
      </div>
      <FormContainer />
      <TestimonialsContainer />
      <HobbyCommunityContainer />
      <ContainerFooter />
      <TestimonialContainer />
      <img
        className="absolute top-[2912px] left-[1300px] w-10 h-10"
        alt=""
        src="/group-77.svg"
      />
      <HobbyScreen />
      <NavBar1 />
    </div>
  );
};

export default LandingPageSignIn;
