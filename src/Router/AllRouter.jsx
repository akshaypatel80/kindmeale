import React from "react";
import { Routes, Route } from "react-router-dom";
import KindMomentsSinglPage from "../Components/KindMoments/KindMomentsSinglPage";
import Articles from "./Articles";
import Directory from "./Directory";
import Help from "./Help";
import HomePage from "./HomePage";
import HotPicks from "./HotPicks";
import KindMoments from "./KindMoments";
import MealDeals from "./MealDeals";
import Recipes from "./Recipes";
const AllRouter = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/MealDeals" element={<MealDeals />}></Route>
        <Route path="/KindMoments" element={<KindMoments />}></Route>
        <Route
          path="/KindMoments/:id"
          element={<KindMomentsSinglPage />}
        ></Route>
        <Route path="/HotPicks" element={<HotPicks />}></Route>
        <Route path="/Recipes" element={<Recipes />}></Route>
        <Route path="/Directory" element={<Directory />}></Route>
        <Route path="/Articles" element={<Articles />}></Route>
        <Route path="/Help" element={<Help />}></Route>
      </Routes>
    </div>
  );
};

export default AllRouter;
