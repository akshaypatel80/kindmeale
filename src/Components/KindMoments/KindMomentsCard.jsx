import {
  Avatar,
  Button,
  Container,
  HStack,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
// Avtar: "https://www.kindmeal.my/photos/member/36/36991-m.jpg"
// Commit: 0
// Description: "煮了干盘面，加日本毛豆+萝卜丝+花椰菜+玉米🌽，淋上特制香椿调料包就可以吃了，好吃又方便"
// Images: "https://www.kindmeal.my/photos/moment/24/24310-46683-l.jpg"
// Like: 0
// Name: "HelenWang"
// Photos: 2
// Poster: "https://www.kindmeal.my/images/default_member_cover-5.jpg"
// id: 1
const KindMomentsCard = ({
  id,
  Avtar,
  Commit,
  Description,
  Images,
  Like,
  Name,
  Photos,
  Poster,
}) => {
  return (
    <Stack>
      <HStack justify={"space-between"}>
        <Avatar src={Avtar} />
        <Text>{Name}</Text>
        <Link to={`/KindMoments/${id}`}>
          <Button colorScheme={"red"}>View</Button>
        </Link>
      </HStack>
      <Image src={Images} height={"270px"} width={"100%"} />
      <HStack display={"flex"} spacing={"10"} justifyContent={"center"}>
        <HStack>
          <Image
            src="https://www.kindmeal.my/images/icon_heart_darkgrey.svg"
            width={"35px"}
          />
          <Text>{Like}</Text>
        </HStack>
        <HStack>
          <Image
            src="https://www.kindmeal.my/images/icon_camera_darkgrey.png"
            width={"35px"}
          />
          <Text>{Photos}</Text>
        </HStack>
        <HStack>
          <Image
            src="https://www.kindmeal.my/images/icon_comment_darkgrey.png"
            width={"35px"}
          />
          <Text>{Commit}</Text>
        </HStack>
      </HStack>
      <Text>{Description}</Text>
    </Stack>
  );
};

export default KindMomentsCard;
