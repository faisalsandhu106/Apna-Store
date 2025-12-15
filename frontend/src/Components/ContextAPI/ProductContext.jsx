import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from '../Reducer/ProductReducer'
import axios from "axios";

const AppContext = createContext();
const API = "https://dummyjson.com/products"

const initialState = {
    isLoading: false,
    isError: false,
    products: [],
    Allproducts: [],
    isSingleLoading: false,
    isSingleError: false,
    singleProduct: {},
};

const AppProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initialState);

    // Get Method API Data
    const getProducts = async (url) => {
        dispatch({ type: "SET_LOADING" })
        try {
            const res = await axios.get(url)
            const products = await res.data.products;
            // console.log('data', products)
            dispatch({ type: "SET_PRODUCT_DATA", payload: products})

        } catch (error) {
            dispatch({ type: "SET_ERROR"})
        }
    };

    // Get SingleProduct From API

    const getSingleProduct = async (url) => {
        dispatch({ type: "SET_SINGLEPRODUCT_LOADING" })
        try {
            const res = await axios.get(url)
            const singleProduct = await res.data;
            dispatch({ type: "SET_SINGLEPRODUCT_DATA", payload: singleProduct })
        } catch (error) {
            dispatch({ type: "SINGLEPRODUCT_ERROR" })
        }
    };

    useEffect(() => {
        getProducts(API);
    }, []);

    return (
        <AppContext.Provider value={{ ...state, getSingleProduct }}>
            {children}
        </AppContext.Provider>
    )
};

// Custom Hook
const UseProductContext = () => {
    return useContext(AppContext)
}

export { AppContext, AppProvider, UseProductContext }