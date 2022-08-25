import React, { useEffect, useState } from "react";
import { SimpleGrid, Box } from "@chakra-ui/react";

import axios from "axios";
import { MealDealsGetData } from "../../Api/DataApi";
import MealDealsSingalCard from "./MealDealsSingalCard";
const MealDealsGrid = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function getData() {
      const res = await MealDealsGetData.get("/MealDeals?_page=6");
      setData(res.data);
    }
    getData();
  }, []);
  console.log(data);
  return (
    <div>
      <SimpleGrid columns={2} spacing={10} paddingTop={"8"}>
        {data &&
          data.map((item) => (
            <Box
              boxShadow={"rgba(0, 0, 0, 0.16) 0px 1px 4px"}
              borderRadius={"10px"}
            >
              <MealDealsSingalCard
                id={item.id}
                key={item.id}
                Avtar={item.Avtar}
                RestaurantsName={item.RestaurantsName}
                Location={item.Location}
                ShortDescription={item.ShortDescription}
                RatingStar={item.RatingStar}
                Rating={item.Rating}
                DietRestriction={item.DietRestriction}
                Discount={item.Discount}
                ExpiresIn={item.ExpiresIn}
              />
            </Box>
          ))}
      </SimpleGrid>
    </div>
  );
};

export default MealDealsGrid;
