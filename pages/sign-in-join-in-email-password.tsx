import type { NextPage } from "next";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form } from "react-bootstrap";
import PopupNavBar from "../components/popup-nav-bar";

const SignInJoinInEmailPassword: NextPage = () => {
  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-center justify-end gap-[24px]">
      <PopupNavBar
        popupNavBarOverflow="unset"
        popupNavBarPosition="relative"
        popupNavBarTop="unset"
        popupNavBarLeft="unset"
      />
      <Form.Select
        className="w-[312px] font-text-sm-bold font-semibold text-base text-primary-full"
        value="Join In"
      >
        <option>Sign In</option>
        <option value="Sign In">Sign In</option>
        <option value="Join In">Join In</option>
        <option value="Remember me">Remember me</option>
        <option value="Forgot password?">Forgot password?</option>
        <option value="Continue with Google">Continue with Google</option>
        <option value="Continue with Facebook">Continue with Facebook</option>
        <option value="Email">Email</option>
        <option value="Password">Password</option>
        <option value="Continue">Continue</option>
        <option value="Or connect with">Or connect with</option>
      </Form.Select>
    </div>
  );
};

export default SignInJoinInEmailPassword;
