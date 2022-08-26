import {
  Box,
  Button,
  Container,
  Heading,
  HStack,
  Image,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MealDealsGetData } from "../../Api/DataApi";

const KindMomentsSinglPage = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  useEffect(() => {
    getData(id);
  }, [id]);
  const getData = (id) => {
    MealDealsGetData.get(`/KindMoments/${id}`)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  console.log(data);
  return (
    <>
      <Image src={data.Poster} width={"100%"} />
      <Container marginTop={"-90px"} maxW={"70%"} display={"flex"}>
        <HStack spacing={"10"}>
          <Box>
            <Image src={data.Avtar} p={"10px"} />
          </Box>
          <VStack>
            <HStack marginTop={"90px"}>
              <Heading fontSize={"2rem"}>{data.Name}</Heading>
              <Text fontSize={"2rem"}>.</Text>
              <Heading fontSize={"2rem"} fontWeight={"500"}>
                0 Followers
              </Heading>
            </HStack>

            <HStack>
              <Button colorScheme={"red"}>+ Follow Member</Button>
              <Button>Contact Member</Button>
            </HStack>
          </VStack>
        </HStack>
      </Container>
      <Container
        maxW={"container.md"}
        marginTop={"2rem"}
        boxShadow={"rgba(0, 0, 0, 0.16) 0px 1px 4px"}
        p={"5"}
      >
        <HStack justifyContent={"space-between"}>
          <HStack>
            <Image src="https://www.kindmeal.my/images/icon_shop_moment.png" />
            <Text>A Delicious KindMoment..</Text>
          </HStack>
          <Text>Aug 26th 2022, 4:10PM</Text>
        </HStack>
        <Box marginTop={"1rem"}>
          <Image src={data.Images} width={"780px"} height={"780px"} />
        </Box>
        <Text marginTop={"1rem"}>{data.Description}</Text>
      </Container>
    </>
  );
};

export default KindMomentsSinglPage;
