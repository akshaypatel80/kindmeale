import { Container, Image, Stack, HStack } from "@chakra-ui/react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
const Images = [
  {
    Image1: "https://www.kindmeal.my/photos/deal/7/720-5195-m.jpg",
    Image2: "https://www.kindmeal.my/photos/shop/6/624-4812-m.jpg",
  },
  {
    Image1: "https://www.kindmeal.my/photos/deal/6/628-4921-m.jpg",
    Image2: "https://www.kindmeal.my/photos/shop/5/505-4609-m.jpg",
  },
  {
    Image1: "https://www.kindmeal.my/photos/deal/7/715-5155-m.jpg",
    Image2: "https://www.kindmeal.my/photos/shop/6/609-4803-m.jpg",
  },
  {
    Image1: "https://www.kindmeal.my/photos/deal/7/713-5140-m.jpg",
    Image2: "https://www.kindmeal.my/photos/shop/6/607-4802-m.jpg",
  },
  {
    Image1: "https://www.kindmeal.my/photos/deal/6/665-4120-m.jpg",
    Image2: "https://www.kindmeal.my/photos/shop/5/546-4018-m.jpg",
  },
  {
    Image1: "https://www.kindmeal.my/photos/deal/7/712-5119-m.jpg",
    Image2: "https://www.kindmeal.my/photos/shop/5/599-4453-m.jpg",
  },
  {
    Image1: "https://www.kindmeal.my/photos/deal/7/719-5142-m.jpg",
    Image2: "https://www.kindmeal.my/photos/shop/6/623-4761-m.jpg",
  },
];

const Carousel = () => {
  var settings = {
    dotsClass: "slick-dots slick-thumb",
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
  };
  return (
    <Stack
      maxW={"container.lg"}
      boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"}
      paddingBottom={2}
    >
      <Slider {...settings}>
        {Images.map((item, i) => (
          <Container
            key={i}
            display={"flex"}
            maxW={"container.xl"}
            align={"center"}
          >
            <HStack spacing={0}>
              <Image src={item.Image1} width={"65%"} height={"350px"} />
              <Image src={item.Image2} width={"40%"} height={"350px"} />
            </HStack>
          </Container>
        ))}
      </Slider>
      <HStack align={"center"}>
        {Images.map((img) => (
          <Image src={img.Image1} width={"138px"} />
        ))}
      </HStack>
    </Stack>
  );
};

export default Carousel;
