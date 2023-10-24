import Footer from "../components/footer";
import Copyrights from "../components/footer-copyrights";
import Navbar from "../components/navbar";
import AboutImage from "../assets/aboutus.png";
import Offer1 from "../assets/about1.png";
import Offer2 from "../assets/about2.png";
import { IoRestaurant, IoAlarm } from "react-icons/io5";

function Aboutus() {
  return (
    <div>
      <Navbar />
      <div className="px-36 py-24 text-center bg-[#F1EFF0]">
        <h1 className="font-extrabold text-3xl pb-10">About Us</h1>
      </div>
      <div className="flex p-36">
        <div className="pe-12">
          <img src={AboutImage} alt="About Image" />
        </div>
        <div className="w-[900px] self-center">
          <p className="search-content pb-2">About Us</p>
          <h1 className="font-extrabold text-2xl pb-10 w-[420px]">
            Unlock Your Nutritional Potential with Nutrisies Checker
          </h1>
          <h2 className="pb-4 text-justify">
            In a world filled with health information, Nutrisies Checker serves
            as your trusted compass, helping you navigate the labyrinth of
            nutrition and dietary choices. Our mission is to provide you with
            the knowledge, tools, and resources to elevate your nutritional
            journey.
          </h2>
          <h2 className="text-justify">
            Our website is more than just a digital platform; its a culmination
            of centuries of understanding and innovation. Join us on this
            transformative journey, where we turn ancient wisdom into modern
            solutions. With Nutrisies Checker, you are not just reading text;
            you are experiencing a paradigm shift in how you approach your
            health and nutrition.
          </h2>
          <div className="flex mt-6">
            <div className="container border-2 text-[#68a47f] border-[#68a47f] w-44 p-4 rounded-xl me-12">
              <IoRestaurant />
              <h1 className="mt-4">Deeper Nutritional Insights</h1>
            </div>
            <div className="container border-2 text-[#68a47f] border-[#68a47f] w-44 p-4 rounded-xl">
              <IoAlarm />
              <h1 className="mt-4">Personalized Daily Nutritions</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="px-36 py-24 text-center bg-[#274C5B] text-white">
        <p className="search-content pb-2">About Us</p>
        <h1 className="font-extrabold text-2xl pb-10">What We Offer For You</h1>
        <div className="flex gap-4 justify-center">
          <div className="w-[500px]">
            <img src={Offer1} alt="Image Offer 1" />
          </div>
          <div className="w-[500px]">
            <img src={Offer2} alt="Image Offer 2" />
          </div>
        </div>
      </div>
      <Footer />
      <Copyrights />
    </div>
  );
}

export default Aboutus;
