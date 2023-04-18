import { createContext,useContext,useReducer,useEffect } from "react";
import { AppContext } from "./ProductContext";
import reducer from "../reducer/filterReducer"

const FilterContext = createContext();

const initialState = {
    filter_products : [],
    all_products: [],
    grid_view: true,    
    sorting_value: "lowest",
    filter: {
        text: "",
        category: 'All',
        company: 'All',
        color: 'All',
        maxPrice: 0,
        price: 0,
        minPrice: 0
    }
}

const FilterContextProvider = ({children}) => {
    const {products} = useContext(AppContext)
    // console.log(products);
    const [state, dispatch] = useReducer(reducer, initialState)

    // To set the grid view

    const setGridView = () => {
        dispatch({type: "SET_GRID_VIEW"})
    }

    // To set the List view

    const setListView = () => {
        dispatch({type: "SET_LIST_VIEW"})
    }

    // sorting function

    const sorting = (event) => {
        let userValue = event.target.value;
        // console.log(userValue);
        dispatch({type: "GET_SORT_VALUE",payload : userValue})
    }

    
    // To sort the products
    
    useEffect(() => {
        dispatch({type: "FILTER_PRODUCTS"});
        dispatch({type: "SORTING_PRODUCTS"})
    }, [products,state.sorting_value,state.filter])
    

    // To clear filters

    const clearFilters = () => {
        dispatch({type: "CLEAR_FILTERS"})
    }
    
    // update the filter value
    const updateFilterValue = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        // console.log(value);
        return dispatch({type: "UPDATE_FILTER_VALUE", payload : {name,value}})

    }

    useEffect(() => {
     dispatch({type: "LOAD_FILTER_PRODUCTS", payload : products})
    }, [products])
    

    return (
        <FilterContext.Provider value={{...state, setGridView,setListView,sorting,updateFilterValue,clearFilters}}>
            {children}
        </FilterContext.Provider>
    )
}

export {FilterContextProvider,FilterContext}