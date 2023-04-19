import React, { useContext } from "react";
import { BsGridFill, BsList } from "react-icons/bs";
import { FilterContext } from "../../../context/FilterContext";

const Sort = () => {
  const { grid_view, setGridView, setListView, filter_products, sorting } = useContext(FilterContext);
  return (
    <>
      <div className="sort mb-5 d-flex justify-content-between align-items-center flex-wrap">
        <div className="grid_btn">
          <button
            className={grid_view ? "active grid_btn" : "grid_btn"}
            onClick={setGridView}
          >
            <BsGridFill className="icon" />
          </button>
          <button
            className={!grid_view ? "active grid_btn" : "grid_btn"}
            onClick={setListView}
          >
            <BsList className="icon" />
          </button>
        </div>
        <div>
          <p
            style={{ margin: "0px" }}
          >{`${filter_products.length} Products Avaliable`}</p>
        </div>
        <div className="filter_search mt-3">
          <form action="#">
            <label htmlFor="sort"></label>
            <select
              name="sort"
              id="sort"
              className="sort_dropdown"
              onClick={sorting}
            >
              <option value="lowest">Price (lowest)</option>
              <option value="highest">Price (highest)</option>
              <option value="a-z">Price (a-z)</option>
              <option value="z-a">Price (z-a)</option>
            </select>
          </form>
        </div>
      </div>
    </>
  );
};

export default Sort;
