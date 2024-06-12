import type { NextPage } from "next";
import ListingFormContainer1 from "../components/listing-form-container1";
import NavBar from "../components/nav-bar";

const AddNew1: NextPage = () => {
  return (
    <div className="w-full relative bg-grey-hover h-[865px] overflow-hidden">
      <ListingFormContainer1 />
      <NavBar />
    </div>
  );
};

export default AddNew1;
