import type { NextPage } from "next";
import ListingFormContainer from "../components/listing-form-container";
import NavBar from "../components/nav-bar";

const AddNew: NextPage = () => {
  return (
    <div className="w-full relative bg-grey-hover h-[865px] overflow-hidden">
      <ListingFormContainer />
      <NavBar />
    </div>
  );
};

export default AddNew;
