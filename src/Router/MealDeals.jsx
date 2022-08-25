import React from "react";
import TopBar from "../Components/MealDeals/TopBar";
import { Container, Stack } from "@chakra-ui/react";
import Poster from "../Components/Poster";
import MealDealsGrid from "../Components/MealDeals/MealDealsGrid";
import Pagination from "../Components/Pagination";
const MealDeals = () => {
  return (
    <div>
      <Container bg={"#F0F0F0"} maxW={"100%"} paddingBottom={"20px"}>
        <TopBar />
      </Container>
      <Container maxW={"75%"}>
        <Stack paddingY={"3rem"}>
          <Poster
            poster={
              "https://www.kindmeal.my/images/ads/banner_janegoodall_message.jpg"
            }
          />
          <Pagination />
          <MealDealsGrid />
        </Stack>
      </Container>
    </div>
  );
};

export default MealDeals;
