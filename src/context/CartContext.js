import { createContext, useEffect, useReducer } from "react";
import reducer from "../reducer/CartReducer"
const CartContext = createContext();

const getLocalCartData = () => {
  let LocalCartData = localStorage.getItem("CartItems");

  // if(LocalCartData === []){
  //   return []
  // }else{
  //   return JSON.parse(LocalCartData)
  // }

  const parsedData = JSON.parse(LocalCartData);
    if(!Array.isArray(parsedData)) return [];
    return parsedData;
}

const initialState = {
  // cart: [],
  cart: getLocalCartData(),
  total_item: "",
  total_price: "",
  shipping_fee: 50000,
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addtoCart = (id, amount, product) => {
    // console.log(product);
    dispatch({ type: "ADD_TO_CART", payload: { id, amount, product } });
  };

  // delete cart items
  const removeItem = (id) => {
    console.log(id);
    dispatch({type: "REMOVE_ITEM", payload: id})
  }

  // to delete all cart items
  const clearCart = () => {
    dispatch({type: "CLEAR_CART"})
  }

  // increment and decrement quantity
  const setDecrese = (id) => {
    dispatch({type: "SET_DECREMENT", payload: id})
  }

  const setIncrese = (id) => {
    dispatch({type: "SET_INCREMENT", payload: id})
  }

  // To add data in localStorage
  useEffect(() => {
    dispatch({type: "CART_TOTAL_ITEM"})
    dispatch({type: "CART_TOTAL_PRICE"})
   localStorage.setItem("CartItems", JSON.stringify(state.cart))
  }, [state.cart]);

  return (
    <CartContext.Provider value={{ ...state, addtoCart,removeItem,clearCart,setDecrese,setIncrese }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartProvider, CartContext };
