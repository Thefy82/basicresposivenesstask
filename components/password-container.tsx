import type { NextPage } from "next";
import Property1Email from "./property1-email";
import Property1Password from "./property1-password";

export type PasswordContainerType = {
  className?: string;
};

const PasswordContainer: NextPage<PasswordContainerType> = ({
  className = "",
}) => {
  return (
    <div
      className={`flex flex-col items-start justify-start gap-[16px] ${className}`}
    >
      <Property1Email />
      <Property1Password />
    </div>
  );
};

export default PasswordContainer;
