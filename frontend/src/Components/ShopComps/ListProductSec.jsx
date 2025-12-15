import React from 'react'
import RatingProduct from '../Common/RatingProduct';
import { NavLink } from 'react-router-dom';

const ListProductSec = ({ curElem }) => {
  const { id, images, title, price, stock, category, rating, description } = curElem;
  return (
    <>
      <div key={id} className='ProductComp grid xs:grid-cols-2 md:grid-cols-4 xs:p-3 md:py-4 w-full h-auto rounded-lg border-2 border-gray-300'>
        <figure className='flex items-center xs:justify-start md:justify-center w-full'>
          <img className='xs:w-[90%] sm:w-[90%] md:w-[80%] xl:w-[60%] h-auto bg-cover bg-center' src={images[0]} alt="" />
        </figure>
        <div className='flex flex-col md:col-span-3 justify-between xs:gap-y-[4px] md:gap-y-[6px] w-full text-[0.96em] tracking-[0.05px]'>
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
          <div className='flex justify-start gap-x-[6px] capitalize'>
            <p className='font-medium'>Stock:</p>
            <div>
              {stock}
            </div>
          </div>
          <div className='flex items-center justify-start gap-x-[6px] capitalize'>
            <p className='font-medium'>Category:</p>
            <div>
              {category}
            </div>
          </div>
          <div className='flex items-center justify-start gap-x-[6px] capitalize'>
            <p className='font-medium'>Rating:</p>
            <div>
              <RatingProduct rating={rating} />
            </div>
          </div>
          <div className='xs:hidden md:inline-flex flex items-start gap-x-[6px] capitalize'>
            <p className='font-medium'>Description:</p>
            <div>
              {description}
            </div>
          </div>
          <NavLink to={`/allproduct/${id}`}>
            <button className='flex items-center justify-center px-4 xs:mt-5 md:mt-6 xl:mt-7 w-fit p-[6px] text-[0.85em] tracking-[0.2px] font-semibold'>
              Read More
            </button>
          </NavLink>
        </div>
      </div>
    </>
  )
}

export default ListProductSec