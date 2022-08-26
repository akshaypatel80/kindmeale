import React, { useEffect, useState } from "react";
import {
  Stack,
  Image,
  Text,
  VStack,
  HStack,
  Button,
  Divider,
  Skeleton,
} from "@chakra-ui/react";
// Avtar: "https://www.kindmeal.my/photos/deal/7/708-4923-l.jpg"
// Categories: "Chinese"
// DietRestriction: (3) ['https://www.kindmeal.my/images/icon_egg_disabled.png', 'https://www.kindmeal.my/images/icon_milk.png', 'https://www.kindmeal.my/images/icon_alcohol_disabled.png']
// Discount: 10
// Expires In: 6
// Location: "Kepong, Selangor"
// Rating: 1
// RatingStar: (5) ['https://www.kindmeal.my/images/icon_star.png', 'https://www.kindmeal.my/images/icon_star.png', 'https://www.kindmeal.my/images/icon_star.png', 'https://www.kindmeal.my/images/icon_star.png', 'https://www.kindmeal.my/images/icon_star.png']
// RestaurantsName: "Camp Forest"
// ShortDescription: "Camp Forest presents a pure, natural dining ambience, serving you a healthy, delectable selection of fusion Chinese and Western de"
// id: 1
const MealDealsSingalCard = ({
  id,
  Avtar,
  RestaurantsName,
  Location,
  ShortDescription,
  RatingStar,
  Rating,
  DietRestriction,
  Discount,
  ExpiresIn,
}) => {
  const [isLoding, setLoding] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setLoding(true);
    }, 2000);
  });
  return (
    <Stack spacing={"10px"}>
      <Skeleton isLoaded={isLoding}>
        <Image
          src={Avtar}
          alt={RestaurantsName}
          borderRadius={"10px 10px 0px 0px"}
        />
      </Skeleton>

      <HStack>
        <Skeleton isLoaded={isLoding}>
          <Text p={"0px 10px"} color={"#777777"} fontSize={"20px"}>
            {RestaurantsName}
          </Text>
        </Skeleton>

        <Text color={"#999999"} fontSize={"14px"}>
          -
        </Text>
        <Skeleton isLoaded={isLoding}>
          <Text color={"#999999"} fontSize={"14px"}>
            {Location}
          </Text>
        </Skeleton>
      </HStack>
      <Skeleton isLoaded={isLoding}>
        <Text p={"0px 10px"} textAlign={"left"}>
          {ShortDescription}
        </Text>
      </Skeleton>
      <Skeleton isLoaded={isLoding}>
        <HStack p={"0px 10px"} justify={"space-between"}>
          <Button colorScheme="red">Get FREE Coupon</Button>
          <HStack>
            {RatingStar.map((i) => (
              <Image src={i} width={"7"} />
            ))}
            <Text color={"#999999"}>{`(${Rating})`}</Text>
          </HStack>
        </HStack>
      </Skeleton>
      <hr />
      <HStack p={"0px 10px"} justify={"space-around"}>
        <Skeleton isLoaded={isLoding}>
          <HStack>
            {DietRestriction.map((d) => (
              <Image src={d} width={"9"} />
            ))}
          </HStack>
        </Skeleton>
        <Divider orientation="vertical" height="50px" />
        <Skeleton isLoaded={isLoding}>
          <VStack align={"center"} spacing={1}>
            <Text>KindMeal Discount</Text>
            <Text
              color={"#fb2222"}
              fontSize={"24px"}
            >{`${Discount}% Off`}</Text>
          </VStack>
        </Skeleton>
        <Divider orientation="vertical" height="50px" />
        <Skeleton isLoaded={isLoding}>
          <VStack align={"center"} spacing={1}>
            <Text>KindMeal Discount</Text>
            <Text
              color={"#888888"}
              fontSize={"24px"}
            >{`${ExpiresIn} Days`}</Text>
          </VStack>
        </Skeleton>
      </HStack>
    </Stack>
  );
};

export default MealDealsSingalCard;
