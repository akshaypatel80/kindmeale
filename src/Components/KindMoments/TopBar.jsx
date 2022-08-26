import {
  Box,
  Button,
  Container,
  HStack,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";

const TopBar = () => {
  return (
    <div>
      <Container maxW={"75%"}>
        <Stack textAlign={"left"}>
          <HStack fontSize={"24px"}>
            <Text fontWeight={"500"}>KindMoments</Text>
            <Text color={"#444444"}>|</Text>
            <Text color={"#444444"}>Saving Lives with Yummy Photos</Text>
          </HStack>
          <HStack align={"center"} justify={"space-between"}>
            <VStack>
              <Text>
                Discover new, delicious meat-free cuisines enjoyed by other
                compassionate food lovers. Share your interesting KindMoments,
                and build your own fans and followers to encourage kind, healthy
                meals.
              </Text>
              <Text>
                Download our mobile app to easily showcase your masterpieces and
                interact with food lovers.Get started sharing your tasty moments
                now.
              </Text>
            </VStack>
            <Box bg={"white"} textAlign={"center"} borderRadius={"10px"} p={3}>
              <Text fontSize={"20px"}>Share Your KindMoment</Text>
              <p>
                Interesting food or restaurant? Share with 1000s of food lovers!
              </p>
              <Button colorScheme={"red"} width={"80%"}>
                Share
              </Button>
            </Box>
          </HStack>
        </Stack>
      </Container>
    </div>
  );
};

export default TopBar;
