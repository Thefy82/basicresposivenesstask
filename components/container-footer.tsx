import type { NextPage } from "next";

export type ContainerFooterType = {
  className?: string;
};

const ContainerFooter: NextPage<ContainerFooterType> = ({ className = "" }) => {
  return (
    <div
      className={`absolute top-[3391px] left-[0px] bg-white w-[1440px] h-[380px] text-left text-sm text-grey-darkest font-text-sm-bold ${className}`}
    >
      <div className="absolute top-[0px] left-[0px] bg-white w-[1440px] h-[380px]" />
      <div className="absolute top-[60px] left-[102px] w-[1217px] h-[182px]">
        <div className="absolute top-[0px] left-[580px] w-[87px] h-[130px]">
          <b className="absolute top-[0px] left-[0px] tracking-[0.01em] leading-[18px]">
            Quick Links
          </b>
          <div className="absolute top-[34px] left-[0px] tracking-[0.01em] leading-[18px]">
            Listings
          </div>
          <div className="absolute top-[60px] left-[0px] tracking-[0.01em] leading-[18px]">
            Blog Posts
          </div>
          <div className="absolute top-[86px] left-[0px] tracking-[0.01em] leading-[18px]">
            Shop / Store
          </div>
          <div className="absolute top-[112px] left-[0px] tracking-[0.01em] leading-[18px]">
            Community
          </div>
        </div>
        <div className="absolute top-[0px] left-[0px] w-[90px] h-[156px]">
          <b className="absolute top-[0px] left-[0px] tracking-[0.01em] leading-[18px]">
            Hobbycue
          </b>
          <div className="absolute top-[34px] left-[0px] tracking-[0.01em] leading-[18px]">
            About Us
          </div>
          <div className="absolute top-[60px] left-[0px] tracking-[0.01em] leading-[18px]">
            Our Services
          </div>
          <div className="absolute top-[86px] left-[0px] tracking-[0.01em] leading-[18px]">
            Work with Us
          </div>
          <div className="absolute top-[112px] left-[0px] tracking-[0.01em] leading-[18px]">
            FAQ
          </div>
          <div className="absolute top-[138px] left-[0px] tracking-[0.01em] leading-[18px]">
            Contact Us
          </div>
        </div>
        <div className="absolute top-[0px] left-[280px] w-[110px] h-[182px]">
          <b className="absolute top-[0px] left-[0px] tracking-[0.01em] leading-[18px]">
            How Do I
          </b>
          <div className="absolute top-[34px] left-[0px] tracking-[0.01em] leading-[18px]">
            Sign Up
          </div>
          <div className="absolute top-[60px] left-[0px] tracking-[0.01em] leading-[18px]">
            Add a Listing
          </div>
          <div className="absolute top-[86px] left-[0px] tracking-[0.01em] leading-[18px]">
            Claim Listing
          </div>
          <div className="absolute top-[112px] left-[0px] tracking-[0.01em] leading-[18px]">
            Post a Query
          </div>
          <div className="absolute top-[138px] left-[0px] tracking-[0.01em] leading-[18px]">
            Add a Blog Post
          </div>
          <div className="absolute top-[164px] left-[0px] tracking-[0.01em] leading-[18px]">
            Other Queries
          </div>
        </div>
        <div className="absolute top-[0px] left-[857px] w-[360px] h-[182px]">
          <div className="absolute top-[108px] left-[0px] w-[360px] h-[74px]">
            <b className="absolute top-[0px] left-[0px] tracking-[0.01em] leading-[18px]">
              Invite Friends
            </b>
            <div className="absolute top-[34px] left-[0px] w-[360px] h-10 text-xs text-white">
              <div className="absolute top-[0px] left-[0px] rounded-lg bg-white box-border w-[360px] h-10 border-[1px] border-solid border-primary-full" />
              <div className="absolute top-[0px] left-[301px] rounded-tl-none rounded-tr-lg rounded-br-lg rounded-bl-none bg-primary-full w-[59px] h-10" />
              <div className="absolute top-[12px] left-[313px] tracking-[0.01em] leading-[16px] font-semibold">
                Invite
              </div>
              <div className="absolute top-[12px] left-[16px] leading-[16px] text-grey-dark">
                Email ID
              </div>
            </div>
          </div>
          <div className="absolute top-[0px] left-[0px] w-[360px] h-[58px]">
            <b className="absolute top-[0px] left-[0px] tracking-[0.01em] leading-[18px]">
              Social Media
            </b>
            <div className="absolute top-[34px] left-[0px] w-[360px] h-6">
              <img
                className="absolute top-[0px] left-[48px] w-6 h-6"
                alt=""
                src="/group-61.svg"
              />
              <img
                className="absolute top-[0px] left-[0px] w-6 h-6"
                alt=""
                src="/group-60.svg"
              />
              <img
                className="absolute top-[0px] left-[96px] w-6 h-6"
                alt=""
                src="/group-62.svg"
              />
              <img
                className="absolute top-[0px] left-[144px] w-6 h-6"
                alt=""
                src="/group-63.svg"
              />
              <img
                className="absolute top-[0px] left-[192px] w-6 h-6"
                alt=""
                src="/group-59.svg"
              />
              <img
                className="absolute top-[0px] left-[240px] w-6 h-6"
                alt=""
                src="/group-58.svg"
              />
              <img
                className="absolute top-[0px] left-[288px] w-6 h-6"
                alt=""
                src="/group-57.svg"
              />
              <img
                className="absolute top-[0px] left-[336px] w-6 h-6"
                alt=""
                src="/group-56.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[302px] left-[0px] w-[1440px] h-[78px]">
        <div className="absolute top-[0px] left-[0px] bg-purple-3 w-[1440px] h-[78px]" />
        <div className="absolute top-[30px] left-[615px] tracking-[0.01em] leading-[18px] font-medium mix-blend-normal">
          © Purple Cues Private Limited
        </div>
      </div>
    </div>
  );
};

export default ContainerFooter;
