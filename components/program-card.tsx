import type { NextPage } from "next";
import FrameComponent from "./frame-component";

export type ProgramCardType = {
  className?: string;
};

const ProgramCard: NextPage<ProgramCardType> = ({ className = "" }) => {
  return (
    <div
      className={`w-[312px] relative h-[142px] text-left text-lg text-grey-darkest font-text-sm-bold ${className}`}
    >
      <div className="absolute top-[0px] left-[0px] rounded-lg bg-white box-border w-[312px] h-[142px] border-[2px] border-solid border-blue-1" />
      <FrameComponent program="/program.svg" />
      <img
        className="absolute top-[110px] left-[283px] w-8 h-8"
        alt=""
        src="/group-1210.svg"
      />
    </div>
  );
};

export default ProgramCard;
