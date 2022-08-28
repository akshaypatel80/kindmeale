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

const ArticlesTop = () => {
  return (
    <div>
      <Container maxW={"75%"}>
        <Stack textAlign={"left"}>
          <HStack fontSize={"24px"}>
            <Text fontWeight={"500"} color={"#444444"}>
              Yummy News, Articles & Videos
            </Text>
          </HStack>
          <Stack textAlign={"left"}>
            <Text>
              Want to keep updated on the latest news of delicious meat-free
              meals and adorable animals? Check out this section for interesting
              daily happenings and articles that will melt your tummy and heart
              too.
            </Text>
            <Text textAlign={"left"}>
              You can also follow our Facebook Page or Twitter for more news and
              updates.
            </Text>
          </Stack>
        </Stack>
      </Container>
    </div>
  );
};

export default ArticlesTop;
