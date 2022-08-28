import { Container, Stack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { MealDealsGetData } from "../Api/DataApi";
import ArticalGride from "../Articles/ArticalGride";
import ArticlesTop from "../Articles/ArticlesTop";
import Pagination from "../Components/Pagination";

const Articles = () => {
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);

  useEffect(() => {
    handleData();
  }, [page]);

  const handleData = () => {
    MealDealsGetData.get(`/Articles?_page=${page}&_limit=12`)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handlePageChangeIncrs = () => {
    setPage(page - 1);
  };

  return (
    <div>
      <Container bg={"#F0F0F0"} maxW={"100%"} paddingBottom={"20px"}>
        <ArticlesTop />
      </Container>
      <Container maxW={"75%"}>
        <Stack>
          <Pagination
            currentPage={page}
            totalPage={3}
            handlePageChange={(page) => setPage(page)}
            handlePageChangeIncrs={handlePageChangeIncrs}
          />
          <ArticalGride data={data} />
        </Stack>
      </Container>
    </div>
  );
};

export default Articles;
