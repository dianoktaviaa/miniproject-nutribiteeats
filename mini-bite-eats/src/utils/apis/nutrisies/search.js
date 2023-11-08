import axios from "axios";

const API_KEY = import.meta.env.VITE_API_KEY;
const API_ID = import.meta.env.VITE_API_ID;
const LOG_FOOD_URL = import.meta.env.VITE_LOG_FOOD_URL;

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
