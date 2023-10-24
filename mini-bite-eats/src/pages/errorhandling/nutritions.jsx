import Footer from "../../components/footer";
import Copyrights from "../../components/footer-copyrights";
import Navbar from "../../components/navbar";
import Image from "../../assets/errorhandling.png";

export default function Nutritions() {
  return (
    <div>
      <Navbar />
      <div className="flex justify-center bg-[#E3F1E9] px-36 py-14">
        <div className="w-[600px] me-8">
          <img src={Image} alt="Image Flower" />
        </div>
        <div className="self-center text-center">
          <h1 className="font-extrabold text-9xl text-[#8FA8A8]">404</h1>
          <p className="my-2 font-medium text-[#274C5B] text-xl">
            Page Not Found
          </p>
          <h2 className="font-bold text-[#274C5B] text-xl">
            You must login to use this features
          </h2>
        </div>
      </div>
      <Footer />
      <Copyrights />
    </div>
  );
}
