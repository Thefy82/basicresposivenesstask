import type { NextPage } from "next";

export type SectionCardType = {
  className?: string;
};

const SectionCard: NextPage<SectionCardType> = ({ className = "" }) => {
  return (
    <div
      className={`absolute top-[2132px] left-[1px] w-[360px] h-[708px] text-left text-base text-primary-full font-text-sm-bold ${className}`}
    >
      <div className="absolute top-[0px] left-[0px] bg-white w-[360px] h-[708px]" />
      <div className="absolute top-[48px] left-[24px] w-[312px] h-[612px]">
        <div className="absolute top-[0px] left-[0px] rounded-lg bg-purple-3 w-[312px] h-[612px]" />
        <div className="absolute top-[432px] left-[38px] w-[236px] h-[60px]">
          <div className="absolute top-[7px] left-[76px] tracking-[0.02em] font-semibold">
            Shubha Nagarajan
          </div>
          <div className="absolute top-[35px] left-[76px] text-xs tracking-[0.02em] text-blue-1">
            Classical Dancer
          </div>
          <img
            className="absolute top-[0px] left-[0px] rounded-[50%] w-[60px] h-[60px] object-cover"
            alt=""
            src="/ellipse-12@2x.png"
          />
        </div>
        <div className="absolute top-[24px] left-[77px] w-[158px] h-8 text-lg text-base-black">
          <img
            className="absolute top-[0px] left-[0px] w-8 h-8 overflow-hidden object-contain"
            alt=""
            src="/quote@2x.png"
          />
          <div className="absolute top-[2px] left-[40px] font-semibold">
            Testimonials
          </div>
        </div>
        <div className="absolute top-[68px] left-[24px] text-xs tracking-[0.02em] leading-[20px] font-light text-base-black text-center inline-block w-[264px]">
          In a fast growing and ever changing city like Bangalore, it sometimes
          becomes very difficult to find or connect with like minded people.
          Websites like hobbycue.com is a great service which helps me get in
          touch with, communicate, connect, and exchange ideas with other
          dancers. It also provides the extra benefit of finding products and
          services that I can avail, which I can be assured is going to be of
          great quality as it comes recommended by people of the hobbycue
          community. To have discussions, to get visibility, and to be able to
          safely explore various hobbies and activities in my city, all under
          one roof, is an excellent idea and I highly recommend it.
        </div>
        <div className="absolute top-[524px] left-[24px] w-[264px] h-16 text-5xs">
          <div className="absolute top-[0px] left-[0px] rounded-lg bg-purple-2 w-[264px] h-16" />
          <div className="absolute top-[12px] left-[12px] w-60 h-10">
            <img
              className="absolute top-[8px] left-[0px] w-6 h-6"
              alt=""
              src="/group-306.svg"
            />
            <div className="absolute top-[19px] left-[36px] rounded-sm bg-white w-[123px] h-0.5" />
            <div className="absolute top-[16px] left-[32px] rounded-[50%] bg-primary-full w-2 h-2" />
            <img
              className="absolute top-[0px] left-[196px] w-11 h-10"
              alt=""
              src="/group-307.svg"
            />
            <div className="absolute top-[14px] left-[171px]">0:00</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionCard;
