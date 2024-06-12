import type { NextPage } from "next";
import FrameComponent1 from "../components/frame-component1";
import Footer from "../components/footer";

const Frame: NextPage = () => {
  return (
    <div className="relative w-full flex flex-col items-end justify-start gap-[16px]">
      <FrameComponent1
        groupsBlack24dp11="/groups-black-24dp-1-11.svg"
        people="People"
        anIndividualOrOrganizatio="An Individual or Organization.  Teacher, Coach, Professional or Online Seller.  Company, Business or Association."
        groupsBlack24dp11Border="unset"
        groupsBlack24dp11BackgroundColor="#8064a2"
        propColor="#fff"
        propColor1="#fff"
      />
      <FrameComponent1
        groupsBlack24dp11="/place1.svg"
        people="Place"
        anIndividualOrOrganizatio="An Address.  Classroom, Shop, Performance or Event Venue, Sports Arena, Play Area, Studio, School or Campus."
        groupsBlack24dp11Border="2px solid #77933c"
        groupsBlack24dp11BackgroundColor="#77933c"
        propColor="#fff"
        propColor1="#fff"
      />
      <FrameComponent1
        groupsBlack24dp11="/product-21.svg"
        people="Product"
        anIndividualOrOrganizatio="An Item that you can Book, Buy or Rent.  Appointment, Ticket, or Voucher.  Equipment, Instrument or Activity Kit."
        groupsBlack24dp11Border="unset"
        groupsBlack24dp11BackgroundColor="#c0504d"
        propColor="#fff"
        propColor1="#fff"
      />
      <Footer />
    </div>
  );
};

export default Frame;
