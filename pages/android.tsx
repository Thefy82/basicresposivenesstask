import type { NextPage } from "next";
import HobbySection1 from "../components/hobby-section1";
import PeopleContainer from "../components/people-container";
import AddYourOwnSection from "../components/add-your-own-section";
import SectionCard from "../components/section-card";
import HobbySection from "../components/hobby-section";
import Container from "../components/container";
import HobbycueContainer from "../components/hobbycue-container";
import Frame5 from "../components/frame5";

const Android: NextPage = () => {
  return (
    <div className="w-full relative bg-white h-[3903px] overflow-hidden text-left text-xs text-base-black font-text-sm-bold">
      <HobbySection1 />
      <PeopleContainer />
      <div className="absolute top-[1056px] left-[25px] w-[312px] h-[216px]">
        <div className="absolute top-[0px] left-[0px] rounded-lg bg-white box-border w-[312px] h-[216px] border-[1px] border-solid border-grey-light" />
        <div className="absolute top-[24px] left-[110px] w-[91px] h-8 text-lg">
          <img
            className="absolute top-[0px] left-[0px] w-8 h-8 overflow-hidden"
            alt=""
            src="/place.svg"
          />
          <div className="absolute top-[2px] left-[40px] font-semibold">
            Place
          </div>
        </div>
        <div className="absolute top-[68px] left-[24px] tracking-[0.02em] leading-[20px] font-light whitespace-pre-wrap text-center inline-block w-[264px]">
          Find a class, school, playground, auditorium, studio, shop or an event
          venue. Book a slot at venues that allow booking through hobbycue.
        </div>
        <div className="absolute top-[160px] left-[24px] rounded-lg bg-white box-border w-[264px] h-8 text-primary-full border-[1px] border-solid border-primary-full">
          <div className="absolute top-[8px] left-[107px] leading-[16px] font-semibold">
            Meet up
          </div>
        </div>
      </div>
      <div className="absolute top-[1296px] left-[25px] w-[312px] h-[216px]">
        <div className="absolute top-[0px] left-[0px] rounded-lg bg-white box-border w-[312px] h-[216px] border-[1px] border-solid border-grey-light" />
        <div className="absolute top-[24px] left-[99px] w-28 h-8 text-lg">
          <img
            className="absolute top-[0px] left-[0px] w-8 h-8 overflow-hidden"
            alt=""
            src="/shopping-basket-black-24dp-2-1.svg"
          />
          <div className="absolute top-[2px] left-[40px] font-semibold">
            Product
          </div>
        </div>
        <div className="absolute top-[68px] left-[24px] tracking-[0.02em] leading-[20px] font-light whitespace-pre-wrap text-center inline-block w-[264px]">
          Find equipment or supplies required for your hobby. Buy, rent or
          borrow from shops, online stores or from community members.
        </div>
        <div className="absolute top-[160px] left-[24px] rounded-lg bg-white box-border w-[264px] h-8 text-primary-full border-[1px] border-solid border-primary-full">
          <div className="absolute top-[8px] left-[116px] leading-[16px] font-semibold">
            Get it
          </div>
        </div>
      </div>
      <div className="absolute top-[1536px] left-[25px] w-[312px] h-[216px]">
        <div className="absolute top-[0px] left-[0px] rounded-lg bg-white box-border w-[312px] h-[216px] border-[1px] border-solid border-grey-light" />
        <div className="absolute top-[24px] left-[95px] w-[121px] h-8 text-lg">
          <img
            className="absolute top-[0px] left-[0px] w-8 h-8 overflow-hidden"
            alt=""
            src="/program.svg"
          />
          <div className="absolute top-[2px] left-[40px] font-semibold">
            Program
          </div>
        </div>
        <div className="absolute top-[68px] left-[24px] tracking-[0.02em] leading-[20px] font-light whitespace-pre-wrap text-center inline-block w-[264px]">
          Find events, meetups and workshops related to your hobby. Register or
          buy tickets online.
        </div>
        <div className="absolute top-[160px] left-[24px] rounded-lg bg-white box-border w-[264px] h-8 text-primary-full border-[1px] border-solid border-primary-full">
          <div className="absolute top-[8px] left-[111px] leading-[16px] font-semibold">
            Attend
          </div>
        </div>
      </div>
      <AddYourOwnSection />
      <SectionCard />
      <HobbySection />
      <div className="absolute top-[3107px] left-[0px] w-[360px] h-[796px] text-grey-darkest">
        <div className="absolute top-[0px] left-[0px] bg-white w-[360px] h-[796px]" />
        <div className="absolute top-[662px] left-[24px] w-[312px] h-[62px]">
          <b className="absolute top-[0px] left-[0px] tracking-[0.01em] leading-[18px]">
            Invite Friends
          </b>
          <div className="absolute top-[30px] left-[0px] w-[312px] h-8 text-white">
            <div className="absolute top-[0px] left-[0px] rounded-lg bg-white box-border w-[312px] h-8 border-[1px] border-solid border-primary-full" />
            <div className="absolute top-[0px] left-[253px] rounded-tl-none rounded-tr-lg rounded-br-lg rounded-bl-none bg-primary-full w-[59px] h-8" />
            <div className="absolute top-[8px] left-[265px] tracking-[0.01em] leading-[16px] font-semibold">
              Invite
            </div>
            <div className="absolute top-[8px] left-[16px] leading-[16px] text-grey-dark">
              Email ID
            </div>
          </div>
        </div>
        <div className="absolute top-[576px] left-[24px] w-[304px] h-[54px]">
          <b className="absolute top-[0px] left-[0px] tracking-[0.01em] leading-[18px]">
            Social Media
          </b>
          <div className="absolute top-[30px] left-[0px] w-[304px] h-6">
            <img
              className="absolute top-[0px] left-[40px] w-6 h-6"
              alt=""
              src="/group-61.svg"
            />
            <img
              className="absolute top-[0px] left-[0px] w-6 h-6"
              alt=""
              src="/group-60.svg"
            />
            <img
              className="absolute top-[0px] left-[80px] w-6 h-6"
              alt=""
              src="/group-62.svg"
            />
            <img
              className="absolute top-[0px] left-[120px] w-6 h-6"
              alt=""
              src="/group-63.svg"
            />
            <img
              className="absolute top-[0px] left-[160px] w-6 h-6"
              alt=""
              src="/group-59.svg"
            />
            <img
              className="absolute top-[0px] left-[200px] w-6 h-6"
              alt=""
              src="/group-58.svg"
            />
            <img
              className="absolute top-[0px] left-[240px] w-6 h-6"
              alt=""
              src="/group-57.svg"
            />
            <img
              className="absolute top-[0px] left-[280px] w-6 h-6"
              alt=""
              src="/group-56.svg"
            />
          </div>
        </div>
        <div className="absolute top-[418px] left-[24px] w-[312px] h-[126px] text-4xs text-grey-darker">
          <b className="absolute top-[0px] left-[0px] text-xs tracking-[0.01em] leading-[18px] text-grey-darkest">
            Quick Links
          </b>
          <div className="absolute top-[30px] left-[0px] tracking-[0.01em] leading-[18px]">
            Listings
          </div>
          <div className="absolute top-[56px] left-[0px] tracking-[0.01em] leading-[18px]">
            Blog Posts
          </div>
          <div className="absolute top-[82px] left-[0px] tracking-[0.01em] leading-[18px]">
            Shop / Store
          </div>
          <div className="absolute top-[108px] left-[0px] tracking-[0.01em] leading-[18px]">
            Community
          </div>
          <img
            className="absolute top-[1px] left-[296px] w-4 h-4 overflow-hidden object-contain"
            alt=""
            src="/expand-more-black-24dp-3.svg"
          />
        </div>
        <Container />
        <HobbycueContainer />
        <div className="absolute top-[756px] left-[0px] w-[360px] h-10">
          <div className="absolute top-[0px] left-[0px] bg-purple-3 w-[360px] h-10" />
          <div className="absolute top-[11px] left-[90px] tracking-[0.01em] leading-[18px] font-medium mix-blend-normal">
            © Purple Cues Private Limited
          </div>
        </div>
      </div>
      <Frame5
        frameIconOverflow="unset"
        frameIconPosition="absolute"
        frameIconTop="0px"
        frameIconLeft="0px"
      />
    </div>
  );
};

export default Android;
