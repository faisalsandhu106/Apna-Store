import React from 'react'

const ProductReducer = (state, action) => {
    switch (action.type) {
        // Get Method API Data
        case "SET_LOADING":
            return {
                ...state,
                isLoading: true,
            };

        case "SET_PRODUCT_DATA":
            // const Allproducts = action.payload.filter((curElem) => {
            //     return curElem.featured !== false;
            // });

            return {
                ...state,
                isLoading: false,
                products: action.payload,
                Allproducts: action.payload,
            };

        case "SET_ERROR":
            return {
                ...state,
                isLoading: false,
                isError: true
            };

        // Get SingleProduct From API---------------------------------------------------
        case "SET_SINGLEPRODUCT_LOADING":
            return {
                ...state,
                // isSingleLoading: true,
            };

        case "SET_SINGLEPRODUCT_DATA":
            return {
                ...state,
                // isSingleLoading: false,
                singleProduct: action.payload,
            };

        case "SINGLEPRODUCT_ERROR":
            return {
                ...state,
                isSingleError: true
            };

        default:
            return {
                state,
            };
    };
};

export default ProductReducer