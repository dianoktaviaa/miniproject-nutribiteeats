import { useState, useEffect } from "react";
import Modal from "react-modal";
import AiAvatar from "../assets/ai_avatar.avif";
import UserAvatar from "../assets/user_avatar.jpg";
import { Button, ButtonBlue } from "../components/button";
import Swal from "sweetalert2";
import Footer from "../components/footer";
import Copyrights from "../components/footer-copyrights";
import { Input, SelectField } from "../components/input";
import Navbar from "../components/navbar";
import Table from "../components/table";
import { logFood } from "../utils/apis/nutrisies/search";
import { analyzeText } from "../utils/openai/openai";

function Details() {
  const [foodLog, setFoodLog] = useState("");
  const [foodData, setFoodData] = useState(null);
  const [error, setError] = useState(null);
  const [tableData, setTableData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [analysisResult, setAnalysisResult] = useState(null);
  const [selectedAgeAverage, setSelectedAgeAverage] = useState("");
  const [selectedGender, setSelectedGender] = useState("");
  const [openAiInput, setOpenAiInput] = useState("");

  const ageAverage = [
    "1-10",
    "11-20",
    "21-30",
    "31-40",
    "41-50",
    "51-60",
    "61-70",
    "71-80",
    "81-90",
    "91-100",
  ];

  const gender = ["man", "woman"];

  const totalCarbohydrates = tableData.reduce(
    (total, food) => total + food.nf_total_carbohydrate,
    0
  );
  const totalCalories = tableData.reduce(
    (total, food) => total + food.nf_calories,
    0
  );
  const totalCholesterol = tableData.reduce(
    (total, food) => total + food.nf_cholesterol,
    0
  );
  const totalProtein = tableData.reduce(
    (total, food) => total + food.nf_protein,
    0
  );
  const totalSugars = tableData.reduce(
    (total, food) => total + food.nf_sugars,
    0
  );
  const totalFat = tableData.reduce(
    (total, food) => total + food.nf_total_fat,
    0
  );

  useEffect(() => {
    const storedTableData = localStorage.getItem("tableData");
    if (storedTableData) {
      setTableData(JSON.parse(storedTableData));
    }
  }, []);

  const handleLogFood = () => {
    logFood(foodLog)
      .then((data) => {
        console.log("Food log response:", data);
        setFoodData(data.foods[0]);
      })
      .catch((error) => {
        console.error("Error while logging food:", error);
        setFoodData(null);
        setError("Data tidak ditemukan");
      });
  };

  const handleAddFoodToTable = (food) => {
    if (food) {
      if (!tableData.find((item) => item.food_name === food.food_name)) {
        const updatedTableData = [...tableData, food];
        setTableData(updatedTableData);

        localStorage.setItem("tableData", JSON.stringify(updatedTableData));
      }
    }
  };

  const handleDelete = (index) => {
    const updatedTableData = [...tableData];
    Swal.fire({
      title: "Are you sure you want to delete this data?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#EFD372",
      cancelButtonColor: "#FF6E6E",
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        updatedTableData.splice(index, 1);
        setTableData(updatedTableData);
        localStorage.setItem("tableData", JSON.stringify(updatedTableData));
        Swal.fire("Successfully deleted this data", "success");
      }
    });
  };

  const handleAnalyzeNutritions = () => {
    const textToAnalyze = `I am ${selectedAgeAverage} years old average age and a ${selectedGender}, my nutrisies from my daily food are
    Total carbohydrate: ${totalCarbohydrates} g. 
    Total calories: ${totalCalories} Calories. 
    Total cholesterol: ${totalCholesterol} mg. 
    Total protein: ${totalProtein} g. 
    Total sugars: ${totalSugars} mg. 
    Total fat: ${totalFat} g. 
    Is this amount sufficient for daily nutrition based on dietary allowance (RDA)?`;

    analyzeText(textToAnalyze)
      .then((result) => {
        setAnalysisResult(result);
        setIsModalOpen(true);
      })
      .catch((error) => {
        console.error("Error while analyzing text:", error);
      });
  };

  const handleOpenAiSubmit = () => {
    analyzeText(openAiInput)
      .then((result) => {
        setAnalysisResult(result);
      })
      .catch((error) => {
        console.error("Error while analyzing text:", error);
      });
  };

  return (
    <div>
      <Navbar />
      <div className="p-36 text-center bg-[#F1EFF0]">
        <p className="search-content pb-2">Check The Food</p>
        <h1 className="font-extrabold text-2xl pb-10">
          Your Food Nutrisies is here
        </h1>
        <div className="flex gap-4">
          <Input
            placeholder="Search food in here..."
            type="text"
            value={foodLog}
            onChange={(e) => setFoodLog(e.target.value)}
          />
          <ButtonBlue label="search" type="button" onClick={handleLogFood} />
        </div>
        {foodData ? (
          <div className="text-start flex">
            <div className="w-[890px]">
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
            <div className="w-40 ms-10 self-end">
              <Button
                label="Add Food Data"
                onClick={() => handleAddFoodToTable(foodData)}
              />
            </div>
          </div>
        ) : (
          <p className="text-start text-red-800 font-bold">{error || ""}</p>
        )}
      </div>
      <div className="text-center px-36 pt-24 pb-4">
        <p className="search-content pb-2">Daily Food</p>
        <h1 className="font-extrabold text-2xl">Your Daily Food Nutrisies</h1>
      </div>

      <div className="flex gap-4 mx-36">
        <div className="w-60">
          <SelectField
            label="Age Average"
            id="ageAverage"
            options={ageAverage.map((category) => ({
              value: category,
              label: category,
            }))}
            value={selectedAgeAverage}
            onChange={(e) => setSelectedAgeAverage(e.target.value)}
          ></SelectField>
        </div>
        <div className="w-60">
          <SelectField
            label="Gender"
            id="gender"
            options={gender.map((gender) => ({
              value: gender,
              label: gender,
            }))}
            value={selectedGender}
            onChange={(e) => setSelectedGender(e.target.value)}
          ></SelectField>
        </div>
      </div>

      <Table data={tableData} onDelete={handleDelete} />
      <div className="pb-24 pt-6 mx-36 w-48">
        <ButtonBlue
          label="Analyze Nutritions"
          onClick={handleAnalyzeNutritions}
        />

        <Modal
          isOpen={isModalOpen}
          onRequestClose={() => setIsModalOpen(false)}
        >
          <button
            onClick={() => setIsModalOpen(false)}
            className="close-button"
          >
            X
          </button>
          <h2 className="font-extrabold text-2xl pb-8 text-center">
            Analysis Result
          </h2>
          <div className="chat chat-start">
            <div className="chat-image avatar">
              <div className="w-10 rounded-full">
                <img src={UserAvatar} alt="user avatar" />
              </div>
            </div>
            <div className="chat-header">User</div>
            <div className="chat-bubble">
              <p>
                I am {selectedAgeAverage} years old average age and a{" "}
                {selectedGender}, my nutrisies from my daily food are
                <br /> Total carbohydrates: {totalCarbohydrates} grams. <br />
                Total calories: {totalCalories} Calories.
                <br /> Total cholesterol: {totalCholesterol} mg.
                <br /> Total protein: {totalProtein} g.
                <br /> Total sugars: {totalSugars} mg.
                <br /> Total fat: {totalFat} g.
                <br /> Is this amount sufficient for daily nutrition based on
                dietary allowance (RDA)?
              </p>
            </div>
          </div>
          <div className="chat chat-end">
            <div className="chat-image avatar">
              <div className="w-10 rounded-full">
                <img src={AiAvatar} alt="ai avatar" />
              </div>
            </div>
            <div className="chat-header">Ai Assistant</div>
            <div className="chat-bubble">
              {analysisResult ? (
                <div>
                  <p>{analysisResult}</p>
                </div>
              ) : (
                <p>No analysis data available.</p>
              )}
            </div>
            <div className="pt-20 flex gap-5 w-full ">
              <Input
                type="text"
                value={openAiInput}
                onChange={(e) => setOpenAiInput(e.target.value)}
              />
              <Button onClick={handleOpenAiSubmit} label="Submit" />
            </div>
          </div>
        </Modal>
      </div>

      <Footer />
      <Copyrights />
    </div>
  );
}

export default Details;
