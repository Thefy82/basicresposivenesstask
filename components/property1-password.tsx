import type { NextPage } from "next";

export type Property1PasswordType = {
  className?: string;
};

const Property1Password: NextPage<Property1PasswordType> = ({
  className = "",
}) => {
  return (
    <div
      className={`rounded-lg bg-white box-border max-w-full overflow-hidden flex flex-row items-center justify-center p-3 gap-[312px] text-left text-xs text-grey-dark font-text-sm-bold border-[1px] border-solid border-grey-lighter ${className}`}
    >
      <div className="relative leading-[16px]">Password</div>
      <img
        className="w-4 relative h-4 overflow-hidden shrink-0"
        alt=""
        src="/password.svg"
      />
    </div>
  );
};

export default Property1Password;
