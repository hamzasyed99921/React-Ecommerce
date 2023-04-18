import React, { useContext, useState } from "react";
import { GrFormAdd, GrFormSubtract } from "react-icons/gr";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const AddToCart = ({ product }) => {
  const {addtoCart} = useContext(CartContext)
  const { id, stock } = product;
  // const [color, setColor] = useState(colors[0]);
  const [amount , setAmount] = useState(1)
  const setDecrese = () => {
    amount > 1 ? setAmount(amount - 1) : setAmount(1);
  }

  const setIncrese = () => {
    amount < stock ? setAmount(amount + 1) : setAmount(stock);
  }
  return (
    <>
      {/* <div className="colors d-flex align-items-center">
         <p>
          Color:
          {colors.map((curColor, index) => {
            return (
              <button
                key={index}
                style={{ backgroundColor: curColor }}
                className={color === curColor ? "btnStyle active" : "btnStyle"}
                onClick={() => setColor(curColor)}>
                {color === curColor ? <FaCheck className="checkStyle" /> : null}
              </button>
            );
          })}
        </p>
      </div> */}
      <div className="count d-flex align-items-center justify-content-evenly w-25">
        <GrFormSubtract size={23} style={{cursor: 'pointer'}} onClick={() => setDecrese()} />
        <p style={{ margin: "0px" }}>{amount}</p>
        <GrFormAdd size={23} style={{cursor: 'pointer'}} onClick={() => setIncrese()}/>
      </div>
      <div className="cart_btn mt-3">
       <Link to="/cart"  >
       <button className="btn" onClick={() => addtoCart(id,amount,product)}>ADD TO CART</button>
       </Link>
      </div>
    </>
  );
};

export default AddToCart;
