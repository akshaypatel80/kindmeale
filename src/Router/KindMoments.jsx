import { Container, Stack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { MealDealsGetData } from "../Api/DataApi";
import KindMomentsGrid from "../Components/KindMoments/KindMomentsGrid";
import MenuBar from "../Components/KindMoments/MenuBar";
import TopBar from "../Components/KindMoments/TopBar";
import Pagination from "../Components/Pagination";

const KindMoments = () => {
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  useEffect(() => {
    handleData();
  }, [page]);
  const handleData = () => {
    MealDealsGetData.get(`/KindMoments?_page=${page}&_limit=12`)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  console.log(data);
  function handlePageChangeIncrs() {
    setPage(page - 1);
  }
  return (
    <div>
      <Container bg={"#F0F0F0"} maxW={"100%"} paddingBottom={"20px"}>
        <TopBar />
      </Container>
      <Container maxW={"75%"}>
        <Stack>
          <MenuBar />
          <Pagination
            currentPage={page}
            totalPage={2}
            handlePageChange={(page) => setPage(page)}
            handlePageChangeIncrs={handlePageChangeIncrs}
          />
          <KindMomentsGrid data={data} />
          <Pagination
            currentPage={page}
            totalPage={2}
            handlePageChange={(page) => setPage(page)}
            handlePageChangeIncrs={handlePageChangeIncrs}
          />
        </Stack>
      </Container>
    </div>
  );
};

export default KindMoments;
