import React, { useContext } from "react";

import { FilterContext } from "../../../context/FilterContext";
import GridView from "./GridView";
import ListView from "./ListView";
import Sort from "./Sort";

const ProductList = () => {
  const { filter_products, grid_view } = useContext(FilterContext);
  // console.log(grid_view);
  return (
    <>
      <Sort/>
      {grid_view === true ? (
        <GridView filter_products={filter_products} />
      ) : (
        <ListView filter_products={filter_products} />
      )}
    </>
  );
};

export default ProductList;
