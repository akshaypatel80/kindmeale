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

const LetestNews = () => {
  return (
    <>
      <Stack
        maxW={"container.lg"}
        boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"}
        p={"10px"}
      >
        <HStack spacing={"25%"}>
          <Text fontSize={"26px"} fontWeigh={"600"} color={"#999999"}>
            Latest News & Videos
          </Text>
          <Breadcrumb>
            <BreadcrumbItem>
              <BreadcrumbLink href="#" color={"#2148ff"}>
                Save Lives with Your Blog
              </BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem>
              <BreadcrumbLink href="#" color={"#2148ff"}>
                News & Articles{" "}
              </BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem isCurrentPage>
              <BreadcrumbLink href="#" color={"#2148ff"}>
                Follow Our Facebook
              </BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
        </HStack>
        <HStack fontSize={"12px"} color={"#999999"}>
          <VStack width={"210px"}>
            <Image
              src="https://scontent-xsp1-2.xx.fbcdn.net/v/t15.5256-10/291422646_573014587525199_3892685742425568101_n.jpg?stp=dst-jpg_p720x720&_nc_cat=110&ccb=1-7&_nc_sid=ad6a45&_nc_ohc=_OEPT5Tb5l8AX96O2fB&_nc_ht=scontent-xsp1-2.xx&edm=ALdPpPkEAAAA&oh=00_AfBQuj3l72MWQyX_46AwYjbjUFnwAtyTpVuRuHK9Uhn4zA&oe=636C2B3F"
              width={"100%"}
              height={"200px"}
            />
            <Text>Interesting Facts About Transparent Animals.</Text>
          </VStack>
          <VStack width={"210px"}>
            <Image
              src="	https://scontent-xsp1-2.xx.fbcdn.net/v/t15.5256-10/275003363_278209630970215_750071011921898739_n.jpg?stp=dst-jpg_s720x720&_nc_cat=102&ccb=1-7&_nc_sid=ad6a45&_nc_ohc=z8RN6Jh794IAX_Ld8O5&_nc_ht=scontent-xsp1-2.xx&edm=ALdPpPkEAAAA&oh=00_AfCWC1aDOIkAMspXr7dUNkzUStWdNN0ZbCI-mS2jX2iQ0Q&oe=636C42AC"
              width={"100%"}
              height={"200px"}
            />
            <Text>Spicy Sweet Potato Hash Browns</Text>
          </VStack>
          <VStack width={"210px"}>
            <Image
              src="https://scontent-xsp1-2.xx.fbcdn.net/v/t39.30808-6/313416090_5847482218645348_4525448899058244063_n.jpg?stp=dst-jpg_p720x720&_nc_cat=110&ccb=1-7&_nc_sid=8024bb&_nc_ohc=4C8vhgghVXgAX88hS18&_nc_ht=scontent-xsp1-2.xx&edm=ALdPpPkEAAAA&oh=00_AfBo3Vo5wD8F2Oy6WpS-Q-6vMuC0WuNtmnOkg-7qS4wG6A&oe=636C5496"
              width={"100%"}
              height={"200px"}
            />
            <Text>
              Yishensu Groceries, Ipoh Offers You A Wide Range Of Healthy,..
            </Text>
          </VStack>
          <VStack width={"210px"}>
            <Image
              src="https://scontent-xsp1-2.xx.fbcdn.net/v/t15.5256-10/201254277_197073982205381_1178447353447578195_n.jpg?stp=dst-jpg_s720x720&_nc_cat=102&ccb=1-7&_nc_sid=ad6a45&_nc_ohc=Fp32xQ2-0XgAX9yTF-4&_nc_ht=scontent-xsp1-2.xx&edm=ALdPpPkEAAAA&oh=00_AfDHOj9u9TL4lyXh1CSEcK18gfEIZEUuZoD5_SKx84uudA&oe=636AAF4E"
              width={"100%"}
              height={"200px"}
            />
            <Text>Rescued Cow Asks For More Scratches</Text>
          </VStack>
          <VStack width={"210px"}>
            <Image
              src="https://scontent-xsp1-2.xx.fbcdn.net/v/t39.30808-6/312454342_5844722105588026_4073528978857099174_n.jpg?stp=dst-jpg_p720x720&_nc_cat=106&ccb=1-7&_nc_sid=8024bb&_nc_ohc=h-wCxPfPAmYAX-vjmyc&_nc_ht=scontent-xsp1-2.xx&edm=ALdPpPkEAAAA&oh=00_AfBBt5w_cDIWAuiLQSXpBzhWHZW53gRmK3y3r5PeJREJrw&oe=636C000E"
              width={"100%"}
              height={"200px"}
            />
            <Text>The Top 7 Smartest Animals</Text>
          </VStack>
        </HStack>
      </Stack>
    </>
  );
};

export default LetestNews;
