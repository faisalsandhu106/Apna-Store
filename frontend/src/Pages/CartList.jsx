import React from 'react'
import { TiShoppingCart } from 'react-icons/ti';
import { NavLink } from 'react-router-dom';
import { MdDeleteSweep } from 'react-icons/md';
import { PiEmptyLight } from 'react-icons/pi';
import { UseCartContext } from '../Components/ContextAPI/CartContext';

const CartList = () => {

    const { cart, updateCartData, cartClear, shipping_fee, total_price } = UseCartContext();
    // console.log(cart)

    // if (cart.length === 0) {
    //     return <div className='flex items-center justify-center gap-x-2 w-full min-h-screen text-[1.9em]'>
    //         Your Cart Empty <PiEmptyLight />
    //     </div>
    // }

    return (
        <>
            <div className='xs:p-4 sm:p-6 md:p-8 xl:p-16 w-full min-h-screen overflow-hidden'>
                <div>
                    <h2 className='flex items-center gap-x-1 py-5 text-2xl font-semibold'>
                        Your Cart
                        <TiShoppingCart />
                    </h2>
                </div>
                <div className='grid xs:grid-cols-3 lg:grid-cols-4 justify-items-center w-full h-auto py-5 capitalize xs:text-[0.9em] sm:text-[0.92em] font-medium border-[1px] border-gray-200 shadow-sm rounded-md'>
                    <p className='flex items-center'>
                        Product Name
                    </p>
                    <p className='xs:hidden lg:block'>
                        price
                    </p>
                    <p>
                        Quantity
                    </p>
                    <p>
                        Remove
                    </p>
                </div>
                <div className='flex flex-col gap-y-3 mt-5'>
                    {cart?.map((curItem, index) => {
                        const { id, title, amount, images, price } = curItem;
                        return (
                            <div key={index} className='grid xs:grid-cols-3 lg:grid-cols-4 justify-items-center w-full h-auto p-1 capitalize xs:text-[0.9em] sm:text-[0.9em] font-medium border-2 border-gray-300 rounded-md'>
                                <div className='flex items-center'>
                                    <h3 className='flex text-nowrap font-semibold'>
                                        {title}
                                    </h3>
                                    <figure className='w-[50px] h-[50px] object-cover rounded-sm'>
                                        <img className='w-full h-full object-cover' src={images} alt='Cart-List-Img' />
                                    </figure>
                                </div>
                                <div className='flex items-center justify-center xs:hidden lg:inline-flex'>
                                    Rs: {price}
                                </div>
                                <p className='flex items-center justify-center text-[1.15em]'>
                                    {amount}
                                </p>
                                <div className='flex items-center justify-center xs:hidden'>
                                    Rs: {price * amount}
                                </div>
                                <button className='flex items-center justify-center p-[5px] text-[1.7em] text-red-600 rounded-full bg-gradient-to-r from-none hover:bg-gradient-to-r from-none'>
                                    <MdDeleteSweep onClick={() => updateCartData(id)} />
                                </button>
                            </div>
                        )
                    })
                    }
                </div>

                <div className='flex items-center justify-between xs:py-7 md:py-9 xl:py-10 w-full h-auto xs:text-[0.75em] md:text-[0.83em] font-semibold'>
                    <NavLink to={`/shop`}>
                        <button className='px-3 py-2'>
                            Continue Shopping
                        </button>
                    </NavLink>
                    <button className='px-3 py-2' onClick={() => cartClear()}>
                        Clear Cart
                    </button>
                </div>

                <div className='flex items-center justify-end py-10 mt-10 w-full h-auto'>
                    <div className='p-4 xs:w-[80%] sm:w-[50%] md:w-[40%] lg:w-[30%] xl:w-[25%] 2xl:w-[22%] min-h-[10vh] xs:text-[0.9em] md:text-[0.95em] text-gray-900 bg-gray-200 rounded-md'>
                        <div className='flex items-center justify-between py-[6px] w-full h-auto'>
                            <p>SubTotal</p>
                            <p>Rs: {total_price}</p>
                        </div>
                        <div className='flex items-center justify-between py-[6px] w-full h-auto'>
                            <p>Shipping Fee</p>
                            <p>Rs: {shipping_fee}</p>
                        </div>
                        <hr className='mt-3 w-full border-gray-500' />
                        <div className='flex items-center justify-between py-[6px] w-full h-auto'>
                            <p>Order Total</p>
                            <p>Rs: {'' + 500} </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CartList
