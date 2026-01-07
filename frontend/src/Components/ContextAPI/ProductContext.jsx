import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from '../Reducer/ProductReducer'
import axios from "axios";

const AppContext = createContext();
// const API = "https://dummyjson.com/products"
const API = "http://localhost:3000/api/allproducts"

const initialState = {
    isLoading: false,
    isError: false,
    Allproducts: [],
    featureProducts: [],
    singleProduct: {},
    isSingleLoading: false,
    singleProducError: false,
};

const AppProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initialState);


    // *-------------------------
    // *Get All Products API Data
    // *-------------------------
    const getProducts = async (url) => {
        dispatch({ type: "SET_LOADING" })
        try {
            const res = await axios.get(url)
            const Allproducts = await res.data.products;
            // console.log('data', products)
            dispatch({ type: "SET_PRODUCT_DATA", payload: Allproducts })

        } catch (error) {
            dispatch({ type: "SET_ERROR" })
        }
    };

    // *------------------------------
    // *Get Allproduct Individual Data
    // *------------------------------
    // const getIndividualProducts = async (id) => {
    //     dispatch({ type: "SET_SINGLEPRODUCT_LOADING" })
    //     try {
    //         const res = await axios.get(`${API}/${id}`)
    //         const singleProduct = await res.data;
    //         // console.log('data', singleProduct)
    //         dispatch({ type: "SET_SINGLEPRODUCT_DATA", payload: singleProduct })

    //     } catch (error) {
    //         dispatch({ type: "SINGLEPRODUCT_ERROR" })
    //     }
    // };

    useEffect(() => {
        getProducts(API);
        // getIndividualProducts(API);
    }, []);

    return (
        <AppContext.Provider value={{ ...state,  }}>
            {children}
        </AppContext.Provider>
    )
};

// Custom Hook
const UseProductContext = () => {
    return useContext(AppContext)
}

export { AppContext, AppProvider, UseProductContext }