import { Container, Image, Stack, HStack } from "@chakra-ui/react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
const Images = [
  {
    Image1: "https://www.kindmeal.my/photos/deal/7/719-5142-m.jpg",
    Image2: "https://www.kindmeal.my/photos/shop/6/623-4761-m.jpg",
  },
  {
    Image1: "https://www.kindmeal.my/photos/deal/6/614-3355-m.jpg",
    Image2: "https://www.kindmeal.my/photos/shop/4/490-3254-m.jpg",
  },
  {
    Image1: "https://www.kindmeal.my/photos/deal/6/669-4206-m.jpg",
    Image2: "https://www.kindmeal.my/photos/shop/5/549-4094-m.jpg",
  },
  {
    Image1: "https://www.kindmeal.my/photos/deal/6/649-3919-m.jpg",
    Image2: "https://www.kindmeal.my/photos/shop/5/528-3776-m.jpg",
  },
  {
    Image1: "https://www.kindmeal.my/photos/deal/7/706-4801-m.jpg",
    Image2: "https://www.kindmeal.my/photos/shop/6/600-4468-m.jpg",
  },
  {
    Image1: "https://www.kindmeal.my/photos/deal/6/696-5075-m.jpg",
    Image2: "https://www.kindmeal.my/photos/shop/5/587-4745-m.jpg",
  },
  {
    Image1: "https://www.kindmeal.my/photos/deal/6/657-4063-m.jpg",
    Image2: "https://www.kindmeal.my/photos/shop/5/537-3973-m.jpg",
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
    <Container
      maxW={"container.lg"}
      boxShadow={"rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px"}
      paddingBottom={20}
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
          <Image src={img.Image1} width={"130px"} />
        ))}
      </HStack>
    </Container>
  );
};

export default Carousel;
