import React from "react";
import NavbarTop from "./NavbarTop";
import { NavLink } from "react-router-dom";
import style from "../Navbar/NavLinke.module.css";
import { HStack, Container } from "@chakra-ui/react";
const Links = [
  {
    path: "/",
    title: "Home",
  },
  {
    path: "/MealDeals",
    title: "Meal Deals",
  },
  {
    path: "/KindMoments",
    title: "KindMoments",
  },
  {
    path: "/HotPicks",
    title: "Hot Picks",
  },
  {
    path: "/Recipes",
    title: "Recipes",
  },
  {
    path: "/Directory",
    title: "Directory",
  },
  {
    path: "/Articles",
    title: "Articles",
  },
  {
    path: "/Help",
    title: "Help",
  },
];

const Navbar = () => {
  return (
    <div>
      <NavbarTop />
      <Container
        maxW={"container"}
        marginTop={5}
        bg={"#2BB673"}
        alignItems={"center"}
      >
        <HStack spacing={"10px"} justifyContent={"center"}>
          {Links.map((link) => (
            <NavLink
              className={({ isActive }) =>
                isActive ? style.activeClassName : style.undefined
              }
              key={link.title}
              to={link.path}
            >
              {link.title}
            </NavLink>
          ))}
        </HStack>
      </Container>
    </div>
  );
};

export default Navbar;
