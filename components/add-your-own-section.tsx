import type { NextPage } from "next";

export type AddYourOwnSectionType = {
  className?: string;
};

const AddYourOwnSection: NextPage<AddYourOwnSectionType> = ({
  className = "",
}) => {
  return (
    <div
      className={`absolute top-[1800px] left-[0px] w-[360px] h-[332px] text-left text-xs text-base-black font-text-sm-bold ${className}`}
    >
      <div className="absolute top-[0px] left-[0px] bg-blue-2 w-[360px] h-[332px]" />
      <div className="absolute top-[48px] left-[24px] w-[312px] h-[236px]">
        <div className="absolute top-[0px] left-[0px] rounded-lg bg-white box-border w-[312px] h-[236px] border-[1px] border-solid border-grey-light" />
        <div className="absolute top-[24px] left-[72px] w-[166px] h-8 text-lg">
          <img
            className="absolute top-[0px] left-[0px] w-8 h-8 overflow-hidden"
            alt=""
            src="/add.svg"
          />
          <div className="absolute top-[2px] left-[40px] font-semibold">
            Add your own
          </div>
        </div>
        <div className="absolute top-[68px] left-[24px] tracking-[0.02em] leading-[20px] font-light whitespace-pre-wrap text-center inline-block w-[264px]">
          Are you a teacher or expert? Do you sell or rent out equipment, venue
          or event tickets? Or, you know someone who should be on hobbycue? Go
          ahead and Add your Own page
        </div>
        <div className="absolute top-[180px] left-[24px] rounded-lg bg-white box-border w-[264px] h-8 text-primary-full border-[1px] border-solid border-primary-full">
          <div className="absolute top-[8px] left-[105px] leading-[16px] font-semibold">
            Add new
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddYourOwnSection;
