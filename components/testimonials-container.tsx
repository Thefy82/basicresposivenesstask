import type { NextPage } from "next";

export type TestimonialsContainerType = {
  className?: string;
};

const TestimonialsContainer: NextPage<TestimonialsContainerType> = ({
  className = "",
}) => {
  return (
    <div
      className={`absolute top-[1576px] left-[0px] bg-blue-2 w-[1440px] h-[484px] text-left text-5xl text-grey-darkest font-text-sm-bold ${className}`}
    >
      <div className="absolute top-[100px] left-[100px] w-[1240px] h-[284px]">
        <div className="absolute top-[0px] left-[0px] rounded-lg bg-white box-border w-[1240px] h-[284px] border-[1px] border-solid border-grey-light" />
        <div className="absolute top-[calc(50%_-_102px)] left-[calc(50%_-_580px)] flex flex-col items-start justify-start gap-[32px]">
          <div className="w-[232px] relative h-10">
            <div className="absolute top-[2px] left-[64px] font-semibold">
              Add your own
            </div>
            <img
              className="absolute top-[0px] left-[0px] w-10 h-10 overflow-hidden"
              alt=""
              src="/add1.svg"
            />
          </div>
          <div className="w-[1160px] relative text-lg tracking-[0.02em] leading-[30px] font-light whitespace-pre-wrap inline-block">
            Are you a teacher or expert? Do you sell or rent out equipment,
            venue or event tickets? Or, you know someone who should be on
            hobbycue? Go ahead and Add your Own page
          </div>
          <div className="rounded-lg bg-white flex flex-row items-center justify-center py-3 px-[29px] text-sm text-primary-full border-[1px] border-solid border-primary-full">
            <div className="relative leading-[16px] font-semibold">Add new</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsContainer;
