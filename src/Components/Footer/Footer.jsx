import React from "react";
import { Text, Container, Stack } from "@chakra-ui/react";
const Footer = () => {
  return (
    <Container
      bg={"#2BB673"}
      display={"flex"}
      maxW={"container"}
      justifyContent={"center"}
      textAlign={"left"}
      listStyleType={"none"}
      color={"white"}
      gap={"20"}
      p={"20px"}
      fontSize={"13px"}
    >
      <ul>
        <Text fontWeight={700}>Ganral</Text>
        <li>Home</li>
        <li>Sign Up</li>
        <li> Businesses / Restaurateurs</li>
        <li>Advertising</li>
        <li>About KindMeal.my</li>
        <li>Help & FAQ</li>
        <li>Terms & Conditions</li>
        <li>Inspiring Partners</li>
        <li>Lifestyle Ambassadors</li>
        <li>Jobs & Careers</li>
        <li>Contact Us</li>
      </ul>
      <ul>
        <Text fontWeight={700}>Features</Text>
        <li>Meat-Free Deals</li>
        <li>Tasty Menus</li>
        <li>Kind Moments</li>
        <li>Meat-Free Recipes</li>
        <li>Member Recommendations</li>
        <li>Featured Restaurants</li>
        <li>Vegetarian & Vegan Directory</li>
        <li>Food Map</li>
        <li>Become A Superhero</li>
        <li>Vegan News & Vegetarian Articles</li>
        <li>Latest Comments</li>
      </ul>
      <ul>
        <Text fontWeight={700}>Social Media</Text>
        <li>KindMeal Widget</li>
        <li>Facebook</li>
        <li>Twitter</li>
        <li>Instagram</li> Instagram
      </ul>
      <Stack>
        <ul>
          <Text fontWeight={700}>Mobile</Text>
          <li>iPhone & iPod App</li>
          <li>Android App</li>
        </ul>
        <ul>
          <Text fontWeight={700}>Exciting Promos</Text>
          <li>Gadhimai: Ending Mass Slaughter</li>
          <li>Food Bloggers</li>
          <li>Uber CHIRP</li>
          <li>Jane Goodall Contest</li>
          <li>Win Digi iPhone 6</li>
          <li>Feed The Poor</li>
          <li>Win Superhero Gifts</li>
          <li>Win an iPad Mini 3</li>
        </ul>
      </Stack>
      <ul>
        <Text fontWeight={700}>Exciting Promos</Text>
        <li>Adopt A Pet</li>
        <li>Smartphone Apps</li>
        <li>WAGazine</li>
        <li>Discussion Forum</li>
        <li>Medical Fund</li>
      </ul>
    </Container>
  );
};

export default Footer;
