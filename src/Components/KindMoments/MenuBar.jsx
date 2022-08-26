import { Button, Container, HStack, Input, Select } from "@chakra-ui/react";
import React from "react";

const MenuBar = () => {
  return (
    <div>
      <Container
        maxW={"100%"}
        display={"flex"}
        justifyContent={"space-between"}
        p={"20px"}
      >
        <HStack>
          <Button colorScheme={"whatsapp"}>Moments</Button>
          <Button>Deal Reviews</Button>
          <Button>Following</Button>
        </HStack>
        <HStack>
          <Input placeholder="Search User or Shop" />
          <Select>
            <option value="Pasta">Pasta</option>
            <option value="Burger">Burger</option>
            <option value="Breakfast">Breakfast</option>
            <option value="Salad">Salad</option>
            <option value="Bakery">Bakery</option>
            <option value="TeaDessert">Tea & Dessert</option>
            <option value="LocalDelights">Local Delights</option>
            <option value="Jap&Korean">Jap & Korean</option>
            <option value="Chinese">Chinese</option>
            <option value="Indian">Indian</option>
            <option value="Soup">Soup</option>
          </Select>
          <Button colorScheme={"red"} width={"80%"}>
            Search
          </Button>
        </HStack>
      </Container>
    </div>
  );
};

export default MenuBar;
