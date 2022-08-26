import { Box, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import KindMomentsCard from "./KindMomentsCard";

const KindMomentsGrid = ({ data }) => {
  return (
    <div>
      <SimpleGrid columns={3} spacing={10} paddingTop={"20px"}>
        {data &&
          data.map((item) => (
            <Box
              boxShadow={"rgba(0, 0, 0, 0.16) 0px 1px 4px"}
              borderRadius={"10px"}
            >
              <KindMomentsCard
                id={item.id}
                key={item.id}
                Avtar={item.Avtar}
                Commit={item.Commit}
                Description={item.Description}
                Images={item.Images}
                Like={item.Like}
                Name={item.Name}
                Photos={item.Photos}
                Poster={item.Poster}
              />
            </Box>
          ))}
      </SimpleGrid>
    </div>
  );
};

export default KindMomentsGrid;
