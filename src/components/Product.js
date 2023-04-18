import React from "react";
import { Link, NavLink } from "react-router-dom";
import FormatPrice from "../Helpers/FormatPrice";

const Product = ({ val }) => {
  return (
    <>
      <NavLink to={`/singleproduct/${val.id}`}>
        <figure className="d-flex justify-content-center">
          <img src={val.image} className="img-fluid" alt="iphone x" />
          <figcaption className="caption">{val.category}</figcaption>
        </figure>
      </NavLink>
      <div className="card-data">
        <div className="d-flex justify-content-between">
          <h3>{val.name}</h3>
          <p className="card-data--price">
            {<FormatPrice price={val.price} />}
          </p>
        </div>
      </div>
    </>
  );
};

export default Product;
