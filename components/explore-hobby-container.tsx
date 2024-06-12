import type { NextPage } from "next";

export type ExploreHobbyContainerType = {
  className?: string;
};

const ExploreHobbyContainer: NextPage<ExploreHobbyContainerType> = ({
  className = "",
}) => {
  return (
    <div
      className={`absolute top-[100px] left-[100px] w-[707px] h-[578px] text-left text-sm text-base-black font-text-sm-bold ${className}`}
    >
      <div className="absolute top-[362px] left-[0px] w-[697.1px] h-[216px]">
        <img
          className="absolute top-[0px] left-[0px] w-[337px] h-[216px] overflow-hidden"
          alt=""
          src="/5793404-11.svg"
        />
        <img
          className="absolute top-[0px] left-[351.4px] w-[345.7px] h-[216px] overflow-hidden"
          alt=""
          src="/5793401-11.svg"
        />
      </div>
      <div className="absolute top-[0px] left-[0px] w-[707px] h-[282px]">
        <div className="absolute top-[86px] left-[0px] tracking-[0.02em] leading-[30px] font-light inline-block w-[706px]">
          Sign-in to interact with a community of fellow hobbyists and an
          eco-system of experts, teachers, suppliers, classes, workshops, and
          places to practice, participate or perform. Your hobby may be about
          visual or performing arts, sports, games, gardening, model making,
          cooking, indoor or outdoor activities…
        </div>
        <div className="absolute top-[222px] left-[1px] tracking-[0.02em] leading-[30px] font-light whitespace-pre-wrap inline-block w-[706px]">
          If you are an expert or a seller, you can Add your Listing and promote
          yourself, your students, products, services or events. Hop on your
          hobbyhorse and enjoy the ride.
        </div>
        <i className="absolute top-[0px] left-[0px] text-17xl tracking-[0.02em] inline-block font-semibold w-[580px]">
          <span>Explore your</span>
          <span className="text-blue-1"> hobby</span>
          <span>{` or `}</span>
          <span className="text-primary-full">passion</span>
        </i>
      </div>
    </div>
  );
};

export default ExploreHobbyContainer;
