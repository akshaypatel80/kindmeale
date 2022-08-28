import {
  Button,
  Container,
  HStack,
  Image,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";

const ArticalCard = ({ id, Images, Titel, Description, Date }) => {
  return (
    <HStack display={"flex"} gap={"30px"}>
      <Stack>
        <Image src={Images} alt={Titel} width={"500px"} height={"300px"} />
      </Stack>

      <Stack padding={"40px"} width={"60%"}>
        <VStack>
          <Text fontSize={"20px"} fontWeight={"500"}>
            {Titel}
          </Text>
          <Text textAlign={"left"}>by KindMeal.my</Text>
        </VStack>
        <Stack>
          <Text>{Description}</Text>
        </Stack>
        <HStack justify={"space-between"}>
          <Button colorScheme={"red"}>View Video</Button>
          <Text color={"#999999"}>{Date}</Text>
        </HStack>
      </Stack>
    </HStack>
  );
};

export default ArticalCard;
