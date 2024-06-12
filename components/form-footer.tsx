import type { NextPage } from "next";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button } from "react-bootstrap";

export type FormFooterType = {
  className?: string;
};

const FormFooter: NextPage<FormFooterType> = ({ className = "" }) => {
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
          <a className="[text-decoration:none] absolute top-[34px] left-[0px] tracking-[0.01em] leading-[18px] text-[inherit]">
            Listings
          </a>
          <a className="[text-decoration:none] absolute top-[60px] left-[0px] tracking-[0.01em] leading-[18px] text-[inherit]">
            Blog Posts
          </a>
          <a className="[text-decoration:none] absolute top-[86px] left-[0px] tracking-[0.01em] leading-[18px] text-[inherit]">
            Shop / Store
          </a>
          <a className="[text-decoration:none] absolute top-[112px] left-[0px] tracking-[0.01em] leading-[18px] text-[inherit]">
            Community
          </a>
        </div>
        <div className="absolute top-[0px] left-[0px] w-[90px] h-[156px]">
          <b className="absolute top-[0px] left-[0px] tracking-[0.01em] leading-[18px]">
            Hobbycue
          </b>
          <a className="[text-decoration:none] absolute top-[34px] left-[0px] tracking-[0.01em] leading-[18px] text-[inherit]">
            About Us
          </a>
          <a className="[text-decoration:none] absolute top-[60px] left-[0px] tracking-[0.01em] leading-[18px] text-[inherit]">
            Our Services
          </a>
          <a className="[text-decoration:none] absolute top-[86px] left-[0px] tracking-[0.01em] leading-[18px] text-[inherit]">
            Work with Us
          </a>
          <a className="[text-decoration:none] absolute top-[112px] left-[0px] tracking-[0.01em] leading-[18px] text-[inherit]">
            FAQ
          </a>
          <a className="[text-decoration:none] absolute top-[138px] left-[0px] tracking-[0.01em] leading-[18px] text-[inherit]">
            Contact Us
          </a>
        </div>
        <div className="absolute top-[0px] left-[280px] w-[110px] h-[182px]">
          <b className="absolute top-[0px] left-[0px] tracking-[0.01em] leading-[18px]">
            How Do I
          </b>
          <a className="[text-decoration:none] absolute top-[34px] left-[0px] tracking-[0.01em] leading-[18px] text-[inherit]">
            Sign Up
          </a>
          <a className="[text-decoration:none] absolute top-[60px] left-[0px] tracking-[0.01em] leading-[18px] text-[inherit]">
            Add a Listing
          </a>
          <a className="[text-decoration:none] absolute top-[86px] left-[0px] tracking-[0.01em] leading-[18px] text-[inherit]">
            Claim Listing
          </a>
          <a className="[text-decoration:none] absolute top-[112px] left-[0px] tracking-[0.01em] leading-[18px] text-[inherit]">
            Post a Query
          </a>
          <a className="[text-decoration:none] absolute top-[138px] left-[0px] tracking-[0.01em] leading-[18px] text-[inherit]">
            Add a Blog Post
          </a>
          <a className="[text-decoration:none] absolute top-[164px] left-[0px] tracking-[0.01em] leading-[18px] text-[inherit]">
            Other Queries
          </a>
        </div>
        <div className="absolute top-[0px] left-[857px] w-[360px] h-[182px]">
          <div className="absolute top-[108px] left-[0px] w-[360px] h-[74px]">
            <b className="absolute top-[0px] left-[0px] tracking-[0.01em] leading-[18px]">
              Invite Friends
            </b>
            <div className="absolute top-[34px] left-[0px] w-[360px] h-10 text-xs text-white">
              <Form className="w-[360px] [border:none] bg-[transparent] absolute top-[0px] left-[0px]">
                <Form.Control type="email" />
              </Form>
              <Button
                className="w-[59px] absolute top-[0px] left-[301px]"
                variant="primary"
              />
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

export default FormFooter;
