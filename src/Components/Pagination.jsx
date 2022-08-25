import React from "react";
import { Button } from "@chakra-ui/react";
function CreateArrayOfSize(n) {
  return new Array(n).fill(0);
}
const Pagination = ({ totalPage, currentPage, handlePageChange }) => {
  let page = CreateArrayOfSize(totalPage).map((a, i) => {
    return (
      <Button
        key={i + 1}
        disable={i + 1 === currentPage}
        onClick={() => handlePageChange(i + 1)}
      >
        {i + 1}
      </Button>
    );
  });
  return <div>{page}</div>;
};

export default Pagination;
