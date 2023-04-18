import React from "react";
import { Link } from "react-router-dom";


const Hero = () => {
  return (
    <div className="hero_sec container">
      <div className="row">
        <div className="col-md-6 col-12">
          <div className="hero_left">
            <p className="top_para">welcome to</p>
            <h2 className="left_head">Hamza Store</h2>
            <p className="mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
              atque temporibus veniam doloribus libero ad error omnis voluptates
              animi! Suscipit sapiente.
            </p>
           <div className="mt-4">
           <Link className="bottom_btn" to="/products">show now</Link>
           </div>
          </div>
        </div>
        <div className="col-md-6 col-12">
          {/* <div className="back_color">
            
          </div> */}
          <div className="back_img">
            <img src="../../assets/images/hero.jpg"  alt="hero" className="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
