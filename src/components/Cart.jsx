import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { MdDelete } from "react-icons/md";
import FormatPrice from "../Helpers/FormatPrice";
import { GrFormAdd, GrFormSubtract } from "react-icons/gr";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const Cart = () => {
  const { cart, removeItem, clearCart, setDecrese, setIncrese,total_price,shipping_fee } =
    useContext(CartContext);
 
    const {isAuthenticated,user  } = useAuth0();

  return (
    <div className="container cart_sec my-5">
      {isAuthenticated ? <div className="d-flex align-items-center my-5"> <img src={user.profile} alt="" /> <h4>Wellcome! <span>{user.name}</span></h4></div>  : null}
      <div className="table m-auto">
        <div className="head d-flex align-items-center justify-content-between">
          <h5 className="table_head">item</h5>
          <h5 className="table_head">price</h5>
          <h5 className="table_head">quantity</h5>
          <h5 className="table_head">subtotal</h5>
          <h5 className="table_head">remove</h5>
        </div>
        <hr />
        {cart.length === 0 ? (
          <h2 className="text-center">No item in Cart</h2>
        ) : (
          cart.map((curElem, index) => {
            return (
              <div
                className="table_data d-flex align-items-center justify-content-between mb-3"
                key={index}
              >
                <div
                  className="d-flex align-items-center"
                  style={{ width: "20%" }}
                >
                  <img
                    src={curElem.product.image[0].url}
                    style={{ width: "25%" }}
                    alt=""
                  />
                  <p>{curElem.product.name}</p>
                </div>
                <div style={{ width: "24%" }}>
                  <p>
                    <FormatPrice price={curElem.product.price} />{" "}
                  </p>
                </div>
                <div style={{ width: "20%" }}>
                  <div className="count d-flex align-items-center justify-content-evenly w-25">
                    <GrFormSubtract
                      size={23}
                      style={{ cursor: "pointer" }}
                      onClick={() => setDecrese(curElem.id)}
                    />
                    <p style={{ margin: "0px 4px" }}>{curElem.amount}</p>
                    <GrFormAdd
                      size={23}
                      style={{ cursor: "pointer" }}
                      onClick={() => setIncrese(curElem.id)}
                    />
                  </div>
                </div>
                <div style={{ width: "16%" }}>
                  <p className="text-center">
                    <FormatPrice
                      price={curElem.product.price * curElem.amount}
                    />
                  </p>
                </div>
                <div style={{ width: "20%" }}>
                  <p className="text-end">
                    <MdDelete
                      size={25}
                      style={{ cursor: "pointer" }}
                      onClick={() => removeItem(curElem.id)}
                    />
                  </p>
                </div>
              </div>
            );
          })
        )}

        <hr />
        <div className="d-flex align-items-center justify-content-between">
          <Link to="/products">
            <button className="btn btn_left">continue shopping</button>
          </Link>
          <button className="btn btn_right" onClick={() => clearCart()}>
            clear cart
          </button>
        </div>
        {/* SubTotal Section */}
        <div className=" d-flex justify-content-end">
        <div className="sub_bg w-25">
          <div className="d-flex align-items-center justify-content-between">
            <p>Subtotal:</p>
            <strong><FormatPrice price={total_price}/></strong>
          </div>
          <div className="d-flex align-items-center justify-content-between">
            <p>Shipping Fee:</p>
            <strong><FormatPrice price={shipping_fee}/></strong>
          </div>
          <hr style={{margin: '4px'}} />
          <div className="d-flex align-items-center justify-content-between">
            <p>Order Total:</p>
            <strong><FormatPrice price={total_price + shipping_fee }/></strong>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
