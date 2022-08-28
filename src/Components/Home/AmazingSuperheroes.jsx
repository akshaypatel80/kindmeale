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

const AmazingSuperheroes = () => {
  return (
    <>
      <Stack
        maxW={"container.lg"}
        boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"}
        p={"10px"}
      >
        <HStack spacing={"32%"}>
          <Text fontSize={"26px"} fontWeigh={"600"} color={"#999999"}>
            Amazing Superheroes
          </Text>
          <Breadcrumb>
            <BreadcrumbItem>
              <BreadcrumbLink href="#" color={"#2148ff"}>
                Latest Buzz
              </BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem>
              <BreadcrumbLink href="#" color={"#2148ff"}>
                Lifestyle Ambassadors
              </BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem isCurrentPage>
              <BreadcrumbLink href="#" color={"#2148ff"}>
                Win Gifts!
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
            <Text>NurainiRudi</Text>
          </VStack>
          <VStack width={"210px"}>
            <Image
              src="https://www.kindmeal.my/photos/member/41/41576-m.jpg"
              width={"100%"}
              height={"200px"}
            />
            <Text>KellyLim1</Text>
          </VStack>
          <VStack width={"210px"}>
            <Image
              src="https://www.kindmeal.my/photos/member/41/41524-m.jpg"
              width={"100%"}
              height={"200px"}
            />
            <Text>YihChoy</Text>
          </VStack>
          <VStack width={"210px"}>
            <Image
              src="https://www.kindmeal.my/photos/member/23/23028-m.jpg"
              width={"100%"}
              height={"200px"}
            />
            <Text>YinYinBoey</Text>
          </VStack>
          <VStack width={"210px"}>
            <Image
              src="https://www.kindmeal.my/photos/member/16/16140-m.jpg"
              width={"100%"}
              height={"200px"}
            />
            <Text>KenixKua</Text>
          </VStack>
        </HStack>
      </Stack>
    </>
  );
};

export default AmazingSuperheroes;
