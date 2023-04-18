const CartReducer = (state,action) => {
    switch (action.type) {
        case "ADD_TO_CART":
             let {id,amount} = action.payload;
             let existingProduct = state.cart.find((exeItem) => {
                return exeItem.id === id
             })

             if(existingProduct){
                let updatedProduct = state.cart.map((curElem) => {
                    if(curElem.id === id){
                        let newAmount = curElem.amount + amount;
                        if(newAmount >= curElem.product.stock) {
                            newAmount = curElem.product.stock;
                        }
                        return {
                            ...curElem,
                            amount: newAmount,
                        }
                    }
                    else{
                         return curElem
                    }
                })
                return {
                    ...state,
                    cart: updatedProduct,
                }
             } else {
                return{
                    ...state,
                    cart: [...state.cart, action.payload],
    
                }
             }
           
        case "SET_DECREMENT":
            let updatedProduct = state.cart.map((curElem) => {
                if(curElem.id === action.payload){
                    let decAmount = curElem.amount - 1;
                        if(decAmount <= 1){
                            decAmount = 1;
                        }

                    return{
                        ...curElem,
                        amount: decAmount
                    }
                }else{
                    return{
                        ...curElem
                    }
                }
            })
            return{
                ...state,
                cart: updatedProduct
            }

            case "SET_INCREMENT":
                let updatedProducts = state.cart.map((curElem) => {
                    if(curElem.id === action.payload){
                        let incAmount = curElem.amount + 1;
                            if(incAmount > curElem.product.stock){
                                incAmount = curElem.product.stock;
                            }
    
                        return{
                            ...curElem,
                            amount: incAmount
                        }
                    }else{
                        return{
                            ...curElem
                        }
                    }
                })
                return{
                    ...state,
                    cart: updatedProducts
                }
           
        case "CART_TOTAL_ITEM":
            let updatedItemVal = state.cart.reduce((initialVal,curElem) => {
                let {amount} = curElem;

                initialVal = initialVal + amount;
                return initialVal;
            },0)
            return{
                ...state,
                total_item : updatedItemVal 
            }

        case "CART_TOTAL_PRICE":
            let total_price =  state.cart.reduce((initialVal,curElem) => {
                let {amount} = curElem;

                initialVal = initialVal + curElem.product.price * amount;

                return initialVal 
            }, 0)

            return{
                ...state,
                total_price
            }
                
        case "REMOVE_ITEM":
            let updatedCart = state.cart.filter((curItem) => {
              return  curItem.id !== action.payload;
            })
            return{
                ...state,
                cart: updatedCart,
            }


        case "CLEAR_CART":

        return{
            ...state,
            cart: []
        }


        default:
      return state;
    }
}

export default CartReducer