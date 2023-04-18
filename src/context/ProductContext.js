import axios from "axios";
import { createContext,useEffect, useReducer } from "react";
import reducer from '../../src/reducer/ProductReducer'

const AppContext = createContext();

const initialState = {
    isLoading: false,
    isError : false,
    products: [],
    featureProducts: [],
    isSingleLoading : false,
    singleProduct : {}
}

const AppProvider = ({children}) => {

    const [state, dispatch] = useReducer(reducer, initialState)

    const API = "https://api.pujakaitem.com/api/products";

    // Api call for Products
    const getProducts = async(url) =>{
        dispatch({type: "SET_LOADING"})
        try {
            const res = await axios.get(url)
            const products = await res.data;
            // console.log(products);
            dispatch({type: "SET_API_DATA", payload: products})
        } catch (error) {
            console.log(error);
            dispatch({type: "API_ERROR"})
        }
    }

    // Api call for single Product
    const getSingleProduct = async (url) => {
        dispatch({type: "SET_SINGLE_LOADING"})
        try {
            const res = await axios.get(url);
            const singleProduct = await res.data;
            dispatch({type: "SET_SINGLE_PRODUCT", payload: singleProduct})
        } catch (error) {
            console.log(error);
            dispatch({type: "SET_SINGLE_ERROR"})
        }
    }

    useEffect(() => {
       getProducts(API)
    }, []);

    return <AppContext.Provider value={{...state, getSingleProduct}}>{children}</AppContext.Provider>
}


 export {AppProvider,AppContext}