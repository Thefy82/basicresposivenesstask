import type { NextPage } from "next";

const Frame2: NextPage = () => {
  return (
    <div className="w-full relative h-[175px] text-left text-sm text-white font-text-sm-bold">
      <div className="absolute top-[0px] left-[0px] rounded-lg bg-red box-border w-[360px] h-[175px] border-[2px] border-solid border-red" />
      <div className="absolute top-[88px] left-[16px] whitespace-pre-wrap inline-block w-[329px]">
        An Item that you can Book, Buy or Rent. Appointment, Ticket, or Voucher.
        Equipment, Instrument or Activity Kit.
      </div>
      <div className="absolute top-[24px] left-[16px] w-32 h-10 text-xl">
        <div className="absolute top-[0px] left-[0px] w-32 h-10">
          <img
            className="absolute top-[0px] left-[0px] w-10 h-10 overflow-hidden"
            alt=""
            src="/5402359-basket-cart-ecommerce-shopping-buy-icon-11.svg"
          />
          <div className="absolute top-[5px] left-[48px] font-semibold">
            Product
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frame2;
