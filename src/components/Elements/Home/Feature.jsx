import React, { useContext } from "react";
import { AppContext } from "../../../context/ProductContext";
import Product from "../../Product";

const Feature = () => {
  const { isLoading, featureProducts } = useContext(AppContext);

  if(isLoading){
    return <div className="loading">Loading ...</div>
  }
  // console.log(featureProducts);
  return (
    <div className=" feature_sec">
      <div className="container">
        <small className="small_txt">check now!</small>
        <h2 className="feature_head">our feature services</h2>
        <div className="row">
          {featureProducts.map((val) => {
            return (
              
                <div className="col-md-4" key={val.id}>
                  <div className="card">
                   <Product val={val}/>
                  </div>
                </div>

            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Feature;
