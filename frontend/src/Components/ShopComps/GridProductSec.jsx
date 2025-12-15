import React from 'react'
import { NavLink } from 'react-router-dom';
import RatingProduct from '../Common/RatingProduct';

const GridProductSec = ({ curElem }) => {
    const { id, images, title, price, category, rating, } = curElem;

    return (
        <>
            <NavLink to={`/allproduct/${id}`} key={id} className='ProductComp flex flex-col xs:p-2 md:p-3 rounded-lg border-2 border-gray-300'>
                <figure className='flex items-center justify-center relative w-full h-auto overflow-hidden'>
                    <figcaption className=' capitalize absolute top-0 right-0 z-10 px-[3px] text-[0.62em] rounded-sm text-white bg-[#7700ffbd]'>
                        {category}
                    </figcaption>
                    <img className='w-[70%] h-auto bg-cover bg-center bg-no-repeat' src={images[0]} alt="Product_Img" />
                </figure>
                <div className='flex flex-col gap-y-1 pt-3 w-full h-auto xs:text-[0.92em] md:text-[0.9em] tracking-[0.05px]'>
                    <div className='flex justify-start gap-x-[6px] capitalize'>
                        <p className='font-medium'>Name:</p>
                        <div>
                            {title.length > 8 ? title.slice(0, 8) + '...' : title}
                        </div>
                    </div>
                    <div className='flex justify-start gap-x-[6px] capitalize'>
                        <p className='font-medium'>Price:</p>
                        <div>
                            ${price.toLocaleString()}
                        </div>
                    </div>
                    <div className='flex items-center justify-start gap-x-[6px] capitalize'>
                        <p className='font-medium'>Rating:</p>
                        <div>
                            <RatingProduct rating={rating} />
                        </div>
                    </div>
                    <button className='flex items-center justify-center gap-x-1 mt-3 w-full p-[6px] text-[0.85em] tracking-[0.2px] font-semibold '>
                        Read More
                    </button>
                </div>
            </NavLink>
        </>
    )
}

export default GridProductSec