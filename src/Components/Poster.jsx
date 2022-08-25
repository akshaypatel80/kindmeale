import { Container, Image } from "@chakra-ui/react";
import React from "react";

const Poster = ({ poster }) => {
  return (
    <div>
      <Image src={poster} />
    </div>
  );
};

export default Poster;
