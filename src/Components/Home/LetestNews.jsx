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
              src="https://scontent-xsp1-2.xx.fbcdn.net/v/t15.5256-10/299422929_532303268656114_1171069442538634629_n.jpg?stp=dst-jpg_p720x720&_nc_cat=103&ccb=1-7&_nc_sid=ad6a45&_nc_ohc=9g-ObL4eDlMAX8oMTS2&_nc_ht=scontent-xsp1-2.xx&edm=ALdPpPkEAAAA&oh=00_AT9hCEZF3Z6K0G-_yye8lw9oEW6ahWJsU4Uv24Nk1-GKrg&oe=630FA60B"
              width={"100%"}
              height={"200px"}
            />
            <Text>Interesting Facts About Transparent Animals.</Text>
          </VStack>
          <VStack width={"210px"}>
            <Image
              src="	https://scontent-xsp1-2.xx.fbcdn.net/v/t15.5256-10/17882065_1280487598696404_688886872805474304_n.jpg?stp=dst-jpg_p720x720&_nc_cat=104&ccb=1-7&_nc_sid=ad6a45&_nc_ohc=cORCCJv1RCsAX8u-9-Q&_nc_ht=scontent-xsp1-2.xx&edm=ALdPpPkEAAAA&oh=00_AT91IQyEGQeFDjfozMw-jH7mGrxSCWsAlJ79gqUZHm4xJw&oe=6310D187"
              width={"100%"}
              height={"200px"}
            />
            <Text>Spicy Sweet Potato Hash Browns</Text>
          </VStack>
          <VStack width={"210px"}>
            <Image
              src="https://scontent-xsp1-2.xx.fbcdn.net/v/t39.30808-6/300515466_5641073709286201_6306044406856564917_n.jpg?stp=dst-jpg_p720x720&_nc_cat=100&ccb=1-7&_nc_sid=8024bb&_nc_ohc=C41im-L7egMAX9zQW-b&_nc_ht=scontent-xsp1-2.xx&edm=ALdPpPkEAAAA&oh=00_AT9psE0b4aCI7PUaj76onvaRk16c0FrXcRYZZIZWkoLV2g&oe=6310049F"
              width={"100%"}
              height={"200px"}
            />
            <Text>
              Yishensu Groceries, Ipoh Offers You A Wide Range Of Healthy,..
            </Text>
          </VStack>
          <VStack width={"210px"}>
            <Image
              src="https://scontent-xsp1-2.xx.fbcdn.net/v/t15.5256-10/235433054_4659896290709181_3418939128455632101_n.jpg?stp=dst-jpg_s720x720&_nc_cat=107&ccb=1-7&_nc_sid=ad6a45&_nc_ohc=6BHr5CRnXmUAX9qM8NO&_nc_ht=scontent-xsp1-2.xx&edm=ALdPpPkEAAAA&oh=00_AT_EqgXskTVXZaKdcVpYFvLlMQ4RYnfeFc2o__Rv9zuu5g&oe=630F4AD8"
              width={"100%"}
              height={"200px"}
            />
            <Text>Rescued Cow Asks For More Scratches</Text>
          </VStack>
          <VStack width={"210px"}>
            <Image
              src="https://scontent-xsp1-2.xx.fbcdn.net/v/t15.5256-10/298275514_1793992247612870_4102622818283493322_n.jpg?stp=dst-jpg_s720x720&_nc_cat=107&ccb=1-7&_nc_sid=ad6a45&_nc_ohc=ohQAqw2b7VYAX8GnXRn&_nc_ht=scontent-xsp1-2.xx&edm=ALdPpPkEAAAA&oh=00_AT-lwuGPr_Ilc6yjvPBMAPvoTDiiNF_UkQXTIBuLTd4YKQ&oe=630F6F02"
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
