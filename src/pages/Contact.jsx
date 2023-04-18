import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Contact = () => {
  const {isAuthenticated,user  } = useAuth0();
  return (
    <>
      <div>
        <h4 className="text-center my-4">Feel Free To Contact Us</h4>
        <div className="mapouter">
          <div className="gmap_canvas">
            <iframe
              width="100%"
              height="300vh"
              id="gmap_canvas"
              src="https://maps.google.com/maps?q=manki swabi&t=&z=11&ie=UTF8&iwloc=&output=embed"
              frameBorder={0}
              scrolling="no"
              marginHeight={0}
              marginWidth={0}
            />
          </div>
        </div>
        <div className="form container d-flex justify-content-center  my-5">
            <form className="d-flex flex-column w-25" action="https://formspree.io/f/xpzeoggb" method="post">
            <input type="text" name="username" placeholder="Username" value={isAuthenticated ? user.name : ""} required/> <br /> 
            <input type="email" name="email" placeholder="Email" value={isAuthenticated ? user.email : ""} required/> <br />
            <textarea name="message" id="" cols="30" rows="5" placeholder="Enter your message" required></textarea>
            <button className="btn my-3">Send</button>
            </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
