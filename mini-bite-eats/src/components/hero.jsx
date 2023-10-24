import { Button } from "./button";
import imageHeader from "../assets/hero_nutrisies.png";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <div className="flex ps-36 bg-[#F1EFF0]">
      <div className="w-[540px] self-center pe-32 sm:h-96 ">
        <p className="hero-content">Explore The Food</p>
        <h1 className="font-extrabold text-5xl pb-10">
          Check the nutrisies, and make better choices
        </h1>
        <Link to="/nutritions">
          <Button type="button" label="Explore Now" />
        </Link>
      </div>
      <div className="sm:hidden lg:block">
        <img className="w-[693px]" src={imageHeader} alt="Hero" />
      </div>
    </div>
  );
}
