import axios from "axios";

export const MealDealsGetData = axios.create({
  baseURL: "http://localhost:5000",
});
