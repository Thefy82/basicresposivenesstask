import type { NextPage } from "next";

export type TestimonialContainerType = {
  className?: string;
};

const TestimonialContainer: NextPage<TestimonialContainerType> = ({
  className = "",
}) => {
  return (
    <div
      className={`absolute top-[2057px] left-[0px] bg-white w-[1440px] h-[672px] text-left text-lg text-primary-full font-text-sm-bold ${className}`}
    >
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
  );
};

export default TestimonialContainer;
