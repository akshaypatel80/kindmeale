import {
  Container,
  HStack,
  Stack,
  Link,
  Text,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Image,
  VStack,
} from "@chakra-ui/react";
import React from "react";

const DiscoverRestaurants = () => {
  return (
    <>
      <Stack
        maxW={"container.lg"}
        boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"}
        p={"10px"}
      >
        <HStack spacing={"32%"}>
          <Text fontSize={"26px"} fontWeigh={"600"} color={"#999999"}>
            Discover Restaurants
          </Text>
          <Breadcrumb>
            <BreadcrumbItem>
              <BreadcrumbLink href="#" color={"#2148ff"}>
                Vegetarian Directory
              </BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem>
              <BreadcrumbLink href="#" color={"#2148ff"}>
                Restaurant Menu
              </BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem isCurrentPage>
              <BreadcrumbLink href="#" color={"#2148ff"}>
                Food Map
              </BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
        </HStack>
        <HStack fontSize={"12px"} color={"#999999"}>
          <VStack width={"210px"}>
            <Image
              src="https://www.kindmeal.my/photos/item/0/512-6666-s.jpg"
              width={"100%"}
              height={"200px"}
            />
            <Text>Cheese Ball</Text>
          </VStack>
          <VStack width={"210px"}>
            <Image
              src="https://www.kindmeal.my/photos/item/0/604-8947-s.jpg"
              width={"100%"}
              height={"200px"}
            />
            <Text>Butterfly Pea Flower Tea</Text>
          </VStack>
          <VStack width={"210px"}>
            <Image
              src="https://www.kindmeal.my/photos/item/0/171-1790-s.jpg"
              width={"100%"}
              height={"200px"}
            />
            <Text>Mango Delight</Text>
          </VStack>
          <VStack width={"210px"}>
            <Image
              src="https://www.kindmeal.my/photos/item/0/467-5477-s.jpg"
              width={"100%"}
              height={"200px"}
            />
            <Text>Spicy Garlic Tomato Chips</Text>
          </VStack>
          <VStack width={"210px"}>
            <Image
              src="https://www.kindmeal.my/photos/item/0/624-9440-s.jpg"
              width={"100%"}
              height={"200px"}
            />
            <Text>Yishensu, Vegetarian Delight Chicken 1kg</Text>
          </VStack>
        </HStack>
      </Stack>
    </>
  );
};

export default DiscoverRestaurants;
