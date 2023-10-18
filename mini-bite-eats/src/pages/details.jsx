import { ButtonBlue } from "../components/button";
import Footer from "../components/footer";
import Copyrights from "../components/footer-copyrights";
import Input from "../components/input";
import Navbar from "../components/navbar";
import Table from "../components/table";

function Details() {
  return (
    <div>
      <Navbar />
      <div className="p-36 text-center bg-[#F1EFF0]">
        <p className="search-content pb-2">Check The Food</p>
        <h1 className="font-extrabold text-2xl pb-10">
          Your Food Nutrisies is here
        </h1>
        <div className="flex gap-4">
          <Input placeholder="Search food in here..." />
          <ButtonBlue label="search" type="button" />
        </div>
      </div>
      <div className="text-center px-36 pt-24 pb-4">
        <p className="search-content pb-2">Daily Food</p>
        <h1 className="font-extrabold text-2xl">Your Daily Food Nutrisies</h1>
      </div>
      <Table />
      <div className="pb-24 mx-36 w-48">
        <ButtonBlue label="Analyze Nutritions" />
      </div>
      <Footer />
      <Copyrights />
    </div>
  );
}

export default Details;
