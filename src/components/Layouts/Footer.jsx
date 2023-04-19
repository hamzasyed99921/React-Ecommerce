import React from "react";
import { BsGithub } from "react-icons/bs";
import { FaDiscord } from "react-icons/fa";
import { BsYoutube } from "react-icons/bs";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer
        className="footer text-center text-lg-start text-white"
        style={{ backgroundColor: "#0a1435" }}
      >
        <div className="container">
          <div className="row ">
            <div className="col-md-3 col-12">
              <p>Syed Hamza</p>
              <h5>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h5>
            </div>
            <div className="col-md-3 col-12">
              <p>Subscribe to get important updates</p>
              <input type="text" className="p-2"  placeholder="Your Email" />
             <div className=" mt-3 mb-3">
             <Link className="footer_btn">Subscribe</Link>
             </div>
            </div>
            <div className="col-md-3 col-12">
              <p>Follow Us</p>
             <div>
              <FaDiscord className="icon" size={34}/>
              <BsYoutube className="icon" size={34}/>
              <BsGithub className="icon" size={34}/>
             </div>
            </div>
            <div className="col-md-3 col-12">
              <p>Call Us</p>
              <p>+92 3129954838</p>
            </div>
          </div>
          <div className="mt-4 d-flex align-items-center justify-content-center">
            <div className="py-4" style={{ color: "#b7b8bb" }}>
              <strong>@2023 SyedHamza. All Rights Reserved</strong>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
