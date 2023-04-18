import React, { useContext } from "react";
import { FilterContext } from "../../../context/FilterContext";
import { FaCheck } from "react-icons/fa";
import FormatPrice from "../../../Helpers/FormatPrice";

const FilterSection = () => {
  const {
    filter: { text ,color, price ,minPrice,maxPrice },
    updateFilterValue,
    clearFilters,
    all_products,
  } = useContext(FilterContext);


  // To get the unique data of each field

  const getUniqueData = (data,property) => {
    let newVal = data.map((curElem) => {
      return curElem[property];
    });

    if(property === "colors")
    {
      return newVal = ["All", ...new Set([].concat(...newVal))]
    }else{
      return newVal = ["All", ...new Set(newVal)]
    }

   
    // console.log(newVal);
  }

  // We need unique data
  const categoryData = getUniqueData(all_products, "category")
  const companyData = getUniqueData(all_products, "company")
  const colorsData = getUniqueData(all_products, "colors")

  return (
    <>
      <div className="filter_search">
        {/* <form submit={(e) => e.preventDefault()}> */}
          <input
            type="text"
            name="text"
            placeholder="Search"
            value={text}
            onChange={updateFilterValue}
          />
        {/* </form> */}
      </div>

      <div className="catergory mt-5">
        <h5>Category</h5>
        <ul className="mt-4">
          {categoryData.map((val, index) => {
            return (
            <li>
               <button name="category" key={index} value={val} onClick={updateFilterValue}>{val}</button>
            </li>
            )
          })}
          
        </ul>
      </div>

      <div className="company mt-5">
        <h5>Company</h5>
        <select className="mt-2" name="company" id="company" onClick={updateFilterValue}>
          {companyData.map((val, index) => {
            return (
              <option value={val} name="company" key={index} >{val}</option>
            )
          })}
          
        </select>
      </div>

      <div className="color mt-5">
        <h5>Colors</h5>
        <div className="filter-color-style d-flex  align-items-center">
          {colorsData.map((val,index) => {
            if(val === "All"){
              return (
                <button
                key={index}
                type="button"
                value={val}
                name="color"
                className="color_all_style"
                onClick={updateFilterValue}
              >
                All
              </button>
              )
            }
            return (
              <button
              key={index}
              type="button"
              value={val}
              name="color"
              style={{backgroundColor: val}}
              className={color === val ? "btnStyle active" : "btnStyle"}
              onClick={updateFilterValue}
            >
              {color === val ? <FaCheck color="#fff"/> : null}
            </button>
            )
          })}
         
        </div>
      </div>

      <div className="price mt-5">
        <h5>Price</h5>
        <p><FormatPrice price={price}/></p>
        <input
          type="range"
          name="price"
          min={minPrice}
          max={maxPrice}
          value={price}
          onChange={updateFilterValue}
        />
      </div>

      <div className="clear_filter mt-4">
        <button onClick={clearFilters}>Clear Filter</button>
      </div>
    </>
  );
};

export default FilterSection;
