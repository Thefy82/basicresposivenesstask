import type { NextPage } from "next";

export type FormContainerType = {
  className?: string;
};

const FormContainer: NextPage<FormContainerType> = ({ className = "" }) => {
  return (
    <div
      className={`absolute top-[1560px] left-[0px] bg-white w-[1440px] h-[530px] text-left text-lg text-grey-darkest font-text-sm-bold ${className}`}
    >
      <div className="absolute top-[100px] left-[100px] w-[1240px] h-[330px]">
        <div className="absolute top-[0px] left-[0px] rounded-lg bg-white box-border w-[1240px] h-[330px] border-[1px] border-solid border-grey-light" />
        <div className="absolute top-[174px] left-[40px] tracking-[0.02em] leading-[30px] font-light whitespace-pre-wrap inline-block w-[1160px]">
          Are you a teacher or expert? Do you sell or rent out equipment, venue
          or event tickets? Or, you know someone who should be on hobbycue? Go
          ahead and Add your Own page
        </div>
        <div className="absolute top-[40px] left-[459px] w-[322px] h-[54px] text-17xl">
          <div className="absolute top-[0px] left-[70px] font-semibold">
            Add your own
          </div>
          <img
            className="absolute top-[0px] left-[0px] w-[54px] h-[54px] overflow-hidden"
            alt=""
            src="/add2.svg"
          />
        </div>
        <div className="absolute top-[250px] left-[40px] rounded-lg bg-white box-border w-[122px] h-10 text-sm text-primary-full border-[1px] border-solid border-primary-full">
          <div className="absolute top-[12px] left-[29px] leading-[16px] font-semibold">
            Add new
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormContainer;
