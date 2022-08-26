import React, { useEffect, useState } from "react";
import TopBar from "../Components/MealDeals/TopBar";
import { Container, Skeleton, Stack } from "@chakra-ui/react";
import Poster from "../Components/Poster";
import MealDealsGrid from "../Components/MealDeals/MealDealsGrid";
import Pagination from "../Components/Pagination";
import { MealDealsGetData } from "../Api/DataApi";
const MealDeals = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [categories, setCategories] = useState("");
  const [isLoding, setLoding] = useState(false);
  useEffect(() => {
    getDat(page);
    getCategories(categories);
  }, [page, categories]);

  const getDat = (page) => {
    setLoding(true);
    MealDealsGetData.get(`/MealDeals?_page=${page}_limit=10`)
      .then((res) => {
        setLoding(false);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const getCategories = (categories) => {
    MealDealsGetData.get(`/MealDeals?Categories=${categories}`)
      .then((res) => {
        if (categories === "") {
          getDat(page);
        }
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
  function handlChangeCategoris(e) {
    setCategories(e);
  }

  console.log(categories);
  return (
    <div>
      <Container bg={"#F0F0F0"} maxW={"100%"} paddingBottom={"20px"}>
        <TopBar handlChangeCategoris={(value) => handlChangeCategoris(value)} />
      </Container>
      <Container maxW={"75%"}>
        <Stack paddingY={"3rem"}>
          <Poster
            poster={
              "https://www.kindmeal.my/images/ads/banner_janegoodall_message.jpg"
            }
          />

          <Pagination
            totalPage={7}
            currentPage={page}
            handlePageChange={(page) => setPage(page)}
            handlePageChangeIncrs={handlePageChangeIncrs}
          />
          <MealDealsGrid data={data} />
          <Pagination
            totalPage={7}
            currentPage={page}
            handlePageChange={(page) => setPage(page)}
            handlePageChangeIncrs={handlePageChangeIncrs}
          />
        </Stack>
        <Poster
          poster={"	https://www.kindmeal.my/images/how_kindmeal_works.png"}
        />
      </Container>
    </div>
  );
};

export default MealDeals;
