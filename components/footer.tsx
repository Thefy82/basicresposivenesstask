import type { NextPage } from "next";
import FrameComponent from "./frame-component2";

export type FooterType = {
  className?: string;
};

const Footer: NextPage<FooterType> = ({ className = "" }) => {
  return (
    <div className={`w-[312px] relative h-[142px] ${className}`}>
      <div className="absolute top-[0px] left-[0px] rounded-lg bg-blue-1 w-[312px] h-[142px]" />
      <FrameComponent
        program="/program1.svg"
        propColor="#fff"
        propColor1="#fff"
      />
    </div>
  );
};

export default Footer;