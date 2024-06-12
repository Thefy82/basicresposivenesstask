import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type ExploreListType = {
  className?: string;

  /** Style props */
  exploreListPosition?: CSSProperties["position"];
  exploreListTop?: CSSProperties["top"];
  exploreListLeft?: CSSProperties["left"];
};

const ExploreList: NextPage<ExploreListType> = ({
  className = "",
  exploreListPosition,
  exploreListTop,
  exploreListLeft,
}) => {
  const exploreListStyle: CSSProperties = useMemo(() => {
    return {
      position: exploreListPosition,
      top: exploreListTop,
      left: exploreListLeft,
    };
  }, [exploreListPosition, exploreListTop, exploreListLeft]);

  return (
    <div
      className={`shadow-[0px_0px_2px_rgba(147,_156,_163,_0.36),_0px_8px_12px_rgba(147,_156,_163,_0.12)] flex flex-col items-start justify-start relative text-left text-sm text-grey-darker font-text-sm-bold ${className}`}
      style={exploreListStyle}
    >
      <div className="bg-white overflow-hidden flex flex-row items-center justify-center py-3 pr-[61px] pl-3 z-[0]">
        <div className="relative tracking-[0.01em] leading-[18px]">
          People - Community
        </div>
      </div>
      <div className="bg-white overflow-hidden flex flex-row items-center justify-center py-3 pr-[94px] pl-3 z-[1]">
        <div className="relative tracking-[0.01em] leading-[18px]">
          Places - Venues
        </div>
      </div>
      <div className="bg-white overflow-hidden flex flex-row items-center justify-center py-3 pr-[78px] pl-3 z-[2]">
        <div className="relative tracking-[0.01em] leading-[18px]">
          Programs - Events
        </div>
      </div>
      <div className="bg-white overflow-hidden flex flex-row items-center justify-center py-3 pr-[93px] pl-3 z-[3]">
        <div className="relative tracking-[0.01em] leading-[18px]">
          Products - Store
        </div>
      </div>
      <div className="rounded-t-none rounded-b bg-white overflow-hidden flex flex-row items-center justify-center py-3 pr-[169px] pl-3 z-[4]">
        <div className="relative tracking-[0.01em] leading-[18px]">Blogs</div>
      </div>
      <div className="w-[220px] absolute !m-[0] top-[41px] left-[0px] bg-grey-light h-px z-[5]" />
      <div className="w-[220px] absolute !m-[0] top-[83px] left-[0px] bg-grey-light h-px z-[6]" />
      <div className="w-[220px] absolute !m-[0] top-[125px] left-[0px] bg-grey-light h-px z-[7]" />
      <div className="w-[220px] absolute !m-[0] top-[167px] left-[0px] bg-grey-light h-px z-[8]" />
    </div>
  );
};

export default ExploreList;
