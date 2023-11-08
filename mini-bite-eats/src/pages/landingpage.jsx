import { useState } from "react";
import { ButtonBlue } from "../components/button";
import Footer from "../components/footer";
import Copyrights from "../components/footer-copyrights";
import Hero from "../components/hero";
import { Input } from "../components/input";
import Navbar from "../components/navbar";
import { logFood } from "../utils/apis/nutrisies/search";

function App() {
  const [foodLog, setFoodLog] = useState("");
  const [foodData, setFoodData] = useState(null);
  const [error, setError] = useState(null);

  const handleLogFood = () => {
    logFood(foodLog)
      .then((data) => {
        console.log("Food log response:", data);
        setFoodData(data.foods[0]);
        setError(null);
      })
      .catch((error) => {
        console.error("Error while logging food:", error);
        setFoodData(null);
        setError("Data tidak ditemukan");
      });
  };

  return (
    <div className="w-full h-full">
      <Navbar />
      <Hero />
      <div className="p-36 text-center">
        <p className="search-content pb-2">Check The Food</p>
        <h1 className="font-extrabold text-2xl pb-10">
          Your Food Nutrisies is here
        </h1>
        <div className="flex gap-4">
          <div className="w-full">
            <Input
              placeholder="Search food here..."
              type="text"
              value={foodLog}
              onChange={(e) => setFoodLog(e.target.value)}
            />
          </div>
          <div>
            <ButtonBlue label="search" type="button" onClick={handleLogFood} />
          </div>
        </div>
        {foodData ? (
          <div className="text-start flex">
            <div className="w-[960px]">
              <h2 className="text-3xl font-extrabold text-[#274C5B]">
                Food Information
              </h2>
              <h3 className="text-[#7EB693] font-bold ps-8 py-6">
                Amount per servings
              </h3>
              <div className="ps-10 text-[#274C5B]">
                <p className="font-extrabold text-4xl pb-6">
                  {foodData.food_name}
                </p>
                <p>Calories: {foodData.nf_calories}</p>
                <p>Cholesterol: {foodData.nf_cholesterol} mg</p>
                <p>Protein: {foodData.nf_protein} g</p>
                <p>Sugars: {foodData.nf_sugars} mg</p>
                <p>Total Fat: {foodData.nf_total_fat} g</p>
                <p>Total Carbohydrate: {foodData.nf_total_carbohydrate} g</p>
              </div>
            </div>
            <div>
              {foodData.photo && foodData.photo.thumb && (
                <img
                  src={foodData.photo.thumb}
                  alt={foodData.food_name}
                  className="w-36 pt-20"
                />
              )}
            </div>
          </div>
        ) : (
          <p className="text-start text-red-800 font-bold">{error || ""}</p>
        )}
      </div>

      <Footer />
      <Copyrights />
    </div>
  );
}

export default App;
