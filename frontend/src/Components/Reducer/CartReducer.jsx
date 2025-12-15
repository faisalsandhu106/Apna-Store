
const CartReducer = (state, action) => {

    if (action.type === "ADD_TO_CART") {
        let { id, amount, product } = action.payload;

        // console.log(product)
        let cartProducts = {
                id: id,
                title: product.title,
                amount,
                images: product.images[0],
                price: product.price,
            }

            return {
                ...state,
                cart: [...state, cartProducts],
            }
    };

    //Delete Product From CartSection
    if (action.type === "REMOVE_ITEM") {
        let updateCart = state.cart.filter((curElem) => {
            return curElem.id !== action.payload
        })

        return {
            ...state,
            cart: updateCart
        }
    };

    //Clear Product List From CartSection
    if (action.type === "CART_CLEAR") {
        return {
            ...state,
            cart: []
        };
    };


    // Total Item In CartSection
    // if (action.type === "CART_TOTAL_ITEM_PRICE") {
    //     const { total_item, total_price } = state.cart.reduce((accum, curElem) => {
    //         let { price, amount } = curElem

    //         accum.total_item += amount
    //         accum.total_price += price * amount

    //         return accum;
    //     }, { total_item: 0, total_price: 0, })

    //     return {
    //         ...state,
    //         total_item,
    //         total_price,
    //     }
    // };

    return state

}

export default CartReducer
