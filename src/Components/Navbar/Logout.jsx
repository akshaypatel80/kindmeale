import { ChevronDownIcon } from "@chakra-ui/icons";
import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import React from "react";

const Logout = ({ handleLogoutButton }) => {
  return (
    <div>
      <Menu>
        <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
          Akshay Patel
        </MenuButton>
        <MenuList>
          <MenuItem>My Coupons</MenuItem>
          <MenuItem>Create Recipes</MenuItem>
          <MenuItem>My KindMeal Profile</MenuItem>
          <MenuItem>Update Profile</MenuItem>
          <MenuItem>Account Setting</MenuItem>
          <MenuItem onClick={handleLogoutButton}>Logout</MenuItem>
        </MenuList>
      </Menu>
    </div>
  );
};

export default Logout;
