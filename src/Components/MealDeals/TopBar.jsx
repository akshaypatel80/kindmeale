import {
  Container,
  Text,
  VStack,
  HStack,
  Stack,
  Input,
  Select,
  Button,
} from "@chakra-ui/react";
import React from "react";

const TopBar = ({ handlChangeCategoris }) => {
  return (
    <div>
      <Container maxW={"75%"}>
        <Stack textAlign={"left"}>
          <HStack fontSize={"24px"}>
            <Text fontWeight={"500"}>Meat-Free Deals</Text>
            <Text color={"#444444"}>|</Text>
            <Text color={"#444444"}> Restaurants In Malaysia</Text>
          </HStack>
          <Text>
            Browse delicious meat-free, vegetarian deals from top restaurants
            and cafes! Just click on "Get Free Coupon" to obtain instant
            discounts and dine at the restaurants. No upfront payment, booking
            or printing is needed. If you share it on social media, you'll even
            DOUBLE your discount!
          </Text>
          <Text>
            Download our mobile app now to easily get coupons and start dining
            in a few seconds. Effortlessly save lives, health, environment and
            money now!
          </Text>
          <HStack spacing={10}>
            <Input
              placeholder="Search Shop or Deal Name"
              bg={"white"}
              size="md"
            />
            <Select
              variant="outline"
              placeholder="All Categories"
              bg={"white"}
              size="md"
              onChange={(e) => handlChangeCategoris(e.target.value)}
            >
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
            <Select
              variant="outline"
              placeholder="Outline"
              bg={"white"}
              size="md"
            ></Select>
            <Button width={"80%"} colorScheme="red">
              Search Deals
            </Button>
            <Button width={"80%"} colorScheme="whatsapp">
              Browse Restaurants
            </Button>
          </HStack>
        </Stack>
      </Container>
    </div>
  );
};

export default TopBar;
