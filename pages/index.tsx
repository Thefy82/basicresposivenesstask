import type { NextPage } from "next";
import NaveBarResponsive from "../components/nave-bar-responsive";
import FrameComponent1 from "../components/frame-component1";
import ProgramCard from "../components/program-card";

const MyCues: NextPage = () => {
  return (
    <div className="w-full relative bg-white h-[768px] overflow-hidden text-left text-xl text-grey-darkest font-text-sm-bold">
      <NaveBarResponsive
        naveBarResponsiveOverflow="unset"
        naveBarResponsivePosition="absolute"
        naveBarResponsiveTop="0px"
        naveBarResponsiveLeft="0px"
      />
      <div className="absolute top-[128px] left-[24px] flex flex-col items-start justify-start gap-[16px]">
        <FrameComponent1
          groupsBlack24dp11="/groups-black-24dp-1-1.svg"
          people="People"
          anIndividualOrOrganizatio="An Individual or Organization.  Teacher, Coach, Professional or Online Seller.  Company, Business or Association."
        />
        <FrameComponent1
          groupsBlack24dp11="/place.svg"
          people="Place"
          anIndividualOrOrganizatio="An Address.  Classroom, Shop, Performance or Event Venue, Sports Arena, Play Area, Studio, School or Campus."
          groupsBlack24dp11Border="2px solid #77933c"
          groupsBlack24dp11BackgroundColor="#fff"
          propColor="#08090a"
          propColor1="#08090a"
        />
        <FrameComponent1
          groupsBlack24dp11="/product-2.svg"
          people="Product"
          anIndividualOrOrganizatio="An Item that you can Book, Buy or Rent.  Appointment, Ticket, or Voucher.  Equipment, Instrument or Activity Kit."
          groupsBlack24dp11Border="2px solid #c0504d"
          groupsBlack24dp11BackgroundColor="#fff"
          propColor="#08090a"
          propColor1="#08090a"
        />
        <ProgramCard />
      </div>
      <div className="absolute top-[72px] left-[76px] flex flex-row items-center justify-start gap-[12px]">
        <img
          className="w-8 relative h-8 overflow-hidden shrink-0"
          alt=""
          src="/add.svg"
        />
        <div className="relative font-semibold">Add Your Listing</div>
      </div>
    </div>
  );
};

export default MyCues;
