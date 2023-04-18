import React from "react";
import FilterSection from "../components/Elements/Products/FilterSection";
import ProductList from "../components/Elements/Products/ProductList";

const Products = () => {
  return (
    <>
      <div className="container py-5">
        <div className="row">
            <div className="col-md-2">
            <FilterSection/>
            </div>
            <div className="col-md-10">
                <div className="product_list">
                    <ProductList/>
                </div>
            </div>
        </div>
       
      </div>
    </>
  );
};

export default Products;
