import type { NextPage } from "next";

const Group1: NextPage = () => {
  return (
    <div className="w-full relative h-8">
      <div className="absolute top-[0px] left-[0px] shadow-[0px_0px_2px_rgba(147,_156,_163,_0.36),_0px_8px_12px_rgba(147,_156,_163,_0.12)] rounded-[50%] bg-white w-8 h-8" />
      <img
        className="absolute top-[8px] left-[8px] w-4 h-4 overflow-hidden object-contain"
        alt=""
        src="/arrow-forward-ios-black-24dp-1@2x.png"
      />
    </div>
  );
};

export default Group1;
