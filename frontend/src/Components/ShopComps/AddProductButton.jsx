import React, { useState } from 'react'
import { FiMinus } from 'react-icons/fi';
import { IoAdd } from 'react-icons/io5';
import { NavLink } from 'react-router-dom';
import { UseCartContext } from '../ContextAPI/CartContext';

const AddProductButton = ({ product }) => {

    const { addToCart } = UseCartContext();
    const { id, stock } = product;

    const [amount, setAmount] = useState(1);

    const decreaseAmount = () => {
        amount > 1 ? setAmount(amount - 1) : setAmount(1)
    };

    const increaseAmount = () => {
        amount < stock ? setAmount(amount + 1) : setAmount(stock)
    };

    return (
        <>
            <div className='flex items-center gap-x-3 py-5 w-full h-auto'>
                <span>Quantities:</span>
                <button className='p-[5px] text-lg rounded-full'
                    onClick={decreaseAmount}>
                    <FiMinus />
                </button>
                <span>
                    {amount}
                </span>
                <button className='p-[5px] text-xl rounded-full'
                    onClick={increaseAmount}>
                    <IoAdd />
                </button>
            </div>
            <div className='w-full h-auto xs:mt-5 xl:mt-7'>
                <NavLink to={`/cartlist`}>
                    <button className='rounded-sm text-[0.9em] font-semibold' onClick={() => addToCart(id, amount, product)}>
                        Add to Cart
                    </button>
                </NavLink>
            </div>
        </>
    )
}

export default AddProductButton