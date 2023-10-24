import axios from "axios";

const API_KEY = "178f998348a99d8499adee8715d9e023";
const API_ID = "7d68e422";
const LOG_FOOD_URL = "https://trackapi.nutritionix.com/v2/natural/nutrients";

export const logFood = (query) => {
  const requestBody = {
    query: query,
    timezone: "US/Eastern",
  };

  return axios
    .post(LOG_FOOD_URL, requestBody, {
      headers: {
        "Content-Type": "application/json",
        "x-app-id": API_ID,
        "x-app-key": API_KEY,
      },
    })
    .then((response) => {
      if (response.status === 200) {
        return response.data;
      } else {
        throw new Error("Failed to log food");
      }
    });
};
