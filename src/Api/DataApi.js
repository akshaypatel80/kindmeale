import axios from "axios";

export const MealDealsGetData = axios.create({
  baseURL: "https://domineering-kick.herokuapp.com",
});
