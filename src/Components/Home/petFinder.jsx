import {
  Button,
  Container,
  Grid,
  GridItem,
  Heading,
  HStack,
  Image,
  Img,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";

const PetFinder = () => {
  return (
    <div>
      <Container maxW={"75%"} alignContent={"center"}>
        <Stack justify={"center"}>
          <Heading fontSize={"36px"} color={"#666666"}>
            Introducing The World's 1st Meat-Free Lifestyle Platform
          </Heading>
          <HStack justify={"center"}>
            <Text fontSize={"20px"} color={"#999999"}>
              Brought to you by
            </Text>
            <Image
              src="https://www.kindmeal.my/images/logo-petfinder.png"
              width={"25%"}
            />
          </HStack>
          <Heading fontSize={"26px"} color={"#888888"} pt={"25px"}>
            Instant coupon & dining. No upfront coupon payment, booking or
            printing.
          </Heading>
          <Grid
            templateColumns="repeat(4, 1fr)"
            gap={6}
            textAlign={"center"}
            alignContent={"center"}
            p={"20"}
          >
            <GridItem
              w="100%"
              boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"}
              p={"30px"}
              borderRadius={"10px"}
            >
              <Image
                src="https://www.kindmeal.my/images/intro_deal.png"
                width={"100%"}
              />
              <Text fontSize={"20px"} fontWeight={"400"} color={"#666666"}>
                Get Great Deals
              </Text>
              <Text color={"#666666"} fontSize={"14px"}>
                Show our FREE digital coupons to instantly enjoy exciting deals
              </Text>
            </GridItem>
            <GridItem
              w="100%"
              boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"}
              p={"30px"}
              borderRadius={"10px"}
            >
              <Image
                src="https://www.kindmeal.my/images/intro_kindmoment.png"
                width={"100%"}
              />
              <Text fontSize={"20px"} fontWeight={"400"} color={"#666666"}>
                Share KindMoments
              </Text>
              <Text color={"#666666"} fontSize={"14px"}>
                Spread the joy by sharing your yummy dining moments
              </Text>
            </GridItem>
            <GridItem
              w="100%"
              boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"}
              p={"30px"}
              borderRadius={"10px"}
            >
              <Image
                src="https://www.kindmeal.my/images/intro_menu.png"
                width={"100%"}
              />
              <Text fontSize={"20px"} fontWeight={"400"} color={"#666666"}>
                Discover Delicious Food
              </Text>
              <Text color={"#666666"} fontSize={"14px"}>
                Explore the latest exquisite offerings and creative menus
              </Text>
            </GridItem>
            <GridItem
              w="100%"
              boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"}
              p={"30px"}
              borderRadius={"10px"}
            >
              <Image
                src="https://www.kindmeal.my/images/intro_friends.png"
                width={"100%"}
              />
              <Text fontSize={"20px"} fontWeight={"400"} color={"#666666"}>
                Meet Food Lovers
              </Text>
              <Text color={"#666666"} fontSize={"14px"}>
                Make new, compassionate friends and share great food tips
              </Text>
            </GridItem>
          </Grid>
          <Text
            fontSize={"20px"}
            color={"#888888"}
            pt={"25px"}
            textAlign={"center"}
          >
            Any restaurant or cafe can join KindMeal, vegetarian or not, as long
            as the deals and menu featured are meat-free. Enjoy a great
            meat-free dining experience. Easily save animal lives, health,
            environment and money now!
          </Text>
          <Stack align={"center"} pt={"60px"}>
            <Button
              fontSize={"40px"}
              width={"50%"}
              height={"70px"}
              colorScheme={"red"}
            >
              Join KindMeal Now
            </Button>
          </Stack>
          <Text
            fontSize={"25px"}
            color={"#888888"}
            fontWeight={"500"}
            pt={"20px"}
          >
            As Featured In
          </Text>
          <Image src="https://www.kindmeal.my/images/media-feature2.png" />
          <Image src="https://www.kindmeal.my/images/banner_whykindmeal.png" />
        </Stack>
      </Container>
    </div>
  );
};

export default PetFinder;
