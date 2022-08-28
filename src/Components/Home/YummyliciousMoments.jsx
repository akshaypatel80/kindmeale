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

const YummyliciousMoments = () => {
  return (
    <>
      <Stack
        maxW={"container.lg"}
        boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"}
        p={"10px"}
      >
        <HStack spacing={"32%"}>
          <Text fontSize={"26px"} fontWeigh={"600"} color={"#999999"}>
            Yummylicious Moments
          </Text>
          <Breadcrumb>
            <BreadcrumbItem>
              <BreadcrumbLink href="#" color={"#2148ff"}>
                Secret Recipes
              </BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem>
              <BreadcrumbLink href="#" color={"#2148ff"}>
                Member Hot Picks
              </BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem isCurrentPage>
              <BreadcrumbLink href="#" color={"#2148ff"}>
                Photo Moments
              </BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
        </HStack>
        <HStack fontSize={"12px"} color={"#999999"}>
          <VStack width={"210px"}>
            <Image
              src="	https://www.kindmeal.my/photos/moment/24/24336-46765-s.jpg"
              width={"100%"}
              height={"200px"}
            />
            <Text>D'Life Cafe</Text>
            <Text>VyVian</Text>
          </VStack>
          <VStack width={"210px"}>
            <Image
              src="https://www.kindmeal.my/photos/moment/24/24337-46767-m.jpg"
              width={"100%"}
              height={"200px"}
            />
            <Text>Love the meatball curry</Text>
            <Text>ramen noodles</Text>
          </VStack>
          <VStack width={"210px"}>
            <Image
              src="https://www.kindmeal.my/photos/moment/24/24334-46760-s.jpg"
              width={"100%"}
              height={"200px"}
            />
            <Text>Maillard Grill</Text>
            <Text>FatJedi</Text>
          </VStack>
          <VStack width={"210px"}>
            <Image
              src="https://www.kindmeal.my/photos/moment/24/24333-46757-s.jpg"
              width={"100%"}
              height={"200px"}
            />
            <Text>Malaysian Vegan Experience</Text>
            <Text>WongEeLynn</Text>
          </VStack>
          <VStack width={"210px"}>
            <Image
              src="https://www.kindmeal.my/photos/moment/24/24332-46753-s.jpg"
              width={"100%"}
              height={"200px"}
            />
            <Text>Good Food By Gan</Text>
            <Text>YeeHuanGan</Text>
          </VStack>
        </HStack>
      </Stack>
    </>
  );
};

export default YummyliciousMoments;
