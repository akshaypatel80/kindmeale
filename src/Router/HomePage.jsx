import { Container, VStack } from "@chakra-ui/react";
import React from "react";
import AmazingSuperheroes from "../Components/Home/AmazingSuperheroes";
import Carousel from "../Components/Home/Carousel";
import DiscoverRestaurants from "../Components/Home/DiscoverRestaurants";
import LetestNews from "../Components/Home/LetestNews";
import PetFinder from "../Components/Home/petFinder";
import YummyliciousMoments from "../Components/Home/YummyliciousMoments";

const HomePage = () => {
  return (
    <div>
      <Container maxW={"90%"} backgroundColor={"#FCFCFC"}>
        <VStack spacing={"10"}>
          <Carousel />
          <LetestNews />
          <YummyliciousMoments />
          <DiscoverRestaurants />
          <AmazingSuperheroes />
        </VStack>
      </Container>
      <Container maxW={"100%"} paddingTop={"10"} bg={"#ffffff"}>
        <PetFinder />
      </Container>
    </div>
  );
};

export default HomePage;
