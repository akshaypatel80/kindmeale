import { Box, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import ArticalCard from "./ArticalCard";

const ArticalGride = ({ data }) => {
  return (
    <div>
      <SimpleGrid columns={1} spacing={10} paddingTop={"20px"}>
        {data &&
          data.map((item) => (
            <Box
              boxShadow={"rgba(0, 0, 0, 0.16) 0px 1px 4px"}
              borderRadius={"10px"}
            >
              <ArticalCard
                key={item.id}
                Images={item.Images}
                Titel={item.Titel}
                Description={item.Description}
                Date={item.Date}
              />
            </Box>
          ))}
      </SimpleGrid>
    </div>
  );
};

export default ArticalGride;
