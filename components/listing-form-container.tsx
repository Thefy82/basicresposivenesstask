import type { NextPage } from "next";

export type ListingFormContainerType = {
  className?: string;
};

const ListingFormContainer: NextPage<ListingFormContainerType> = ({
  className = "",
}) => {
  return (
    <div
      className={`absolute top-[104px] left-[300px] w-[840px] h-[542px] text-left text-sm text-grey-darkest font-text-sm-bold ${className}`}
    >
      <div className="absolute top-[0px] left-[0px] rounded-lg bg-white w-[840px] h-[542px]" />
      <div className="absolute top-[40px] left-[293px] w-[253px] h-10 text-5xl">
        <div className="absolute top-[2px] left-[56px] font-semibold">
          Add Your Listing
        </div>
        <img
          className="absolute top-[0px] left-[0px] w-10 h-10 overflow-hidden"
          alt=""
          src="/add1.svg"
        />
      </div>
      <div className="absolute top-[112px] left-[40px] w-[360px] h-[175px]">
        <div className="absolute top-[0px] left-[0px] rounded-lg bg-white box-border w-[360px] h-[175px] border-[2px] border-solid border-primary-full" />
        <div className="absolute top-[88px] left-[16px] whitespace-pre-wrap inline-block w-[328px]">
          An Individual or Organization. Teacher, Coach, Professional or Online
          Seller. Company, Business or Association.
        </div>
        <div className="absolute top-[24px] left-[16px] w-[117px] h-10 text-xl">
          <div className="absolute top-[0px] left-[0px] w-[117px] h-10">
            <img
              className="absolute top-[0px] left-[0px] w-10 h-10 overflow-hidden"
              alt=""
              src="/groups-black-24dp-1-12.svg"
            />
            <div className="absolute top-[5px] left-[48px] font-semibold">
              People
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[327px] left-[40px] w-[360px] h-[175px]">
        <div className="absolute top-[0px] left-[0px] rounded-lg bg-white box-border w-[360px] h-[175px] border-[2px] border-solid border-red" />
        <div className="absolute top-[88px] left-[16px] whitespace-pre-wrap inline-block w-[328px]">
          An Item that you can Book, Buy or Rent. Appointment, Ticket, or
          Voucher. Equipment, Instrument or Activity Kit.
        </div>
        <div className="absolute top-[24px] left-[16px] w-32 h-10 text-xl">
          <div className="absolute top-[0px] left-[0px] w-32 h-10">
            <img
              className="absolute top-[0px] left-[0px] w-10 h-10 overflow-hidden"
              alt=""
              src="/5402359-basket-cart-ecommerce-shopping-buy-icon-1.svg"
            />
            <div className="absolute top-[5px] left-[48px] font-semibold">
              Product
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[112px] left-[440px] w-[360px] h-[175px]">
        <div className="absolute top-[0px] left-[0px] rounded-lg bg-white box-border w-[360px] h-[175px] border-[2px] border-solid border-green" />
        <div className="absolute top-[88px] left-[16px] whitespace-pre-wrap inline-block w-[328px]">
          An Address. Classroom, Shop, Performance or Event Venue, Sports Arena,
          Play Area, Studio, School or Campus.
        </div>
        <div className="absolute top-[24px] left-[16px] w-[104px] h-10 text-xl">
          <div className="absolute top-[0px] left-[0px] w-[104px] h-10">
            <img
              className="absolute top-[0px] left-[0px] w-10 h-10 overflow-hidden"
              alt=""
              src="/location-on-black-24dp-1.svg"
            />
            <div className="absolute top-[5px] left-[48px] font-semibold">
              Place
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[327px] left-[440px] w-[360px] h-[175px]">
        <div className="absolute top-[0px] left-[0px] rounded-lg bg-white box-border w-[360px] h-[175px] border-[2px] border-solid border-blue-1" />
        <div className="absolute top-[88px] left-[16px] whitespace-pre-wrap inline-block w-[328px]">
          An Event with Venue and Date. Meetup, Workshop or Webinar. Exhibition,
          Performance or Competition.
        </div>
        <div className="absolute top-[24px] left-[16px] w-[138px] h-10 text-base text-white">
          <div className="absolute top-[0px] left-[0px] w-[138px] h-10">
            <div className="absolute top-[0px] left-[0px] w-10 h-10">
              <img
                className="absolute top-[0px] left-[0px] w-10 h-10 overflow-hidden"
                alt=""
                src="/program2.svg"
              />
              <div className="absolute top-[44px] left-[-7px] font-semibold hidden">
                People
              </div>
            </div>
            <div className="absolute top-[5px] left-[48px] text-xl font-semibold text-grey-darkest">
              Program
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListingFormContainer;
