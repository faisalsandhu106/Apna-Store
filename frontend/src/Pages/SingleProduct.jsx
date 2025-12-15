import React, { useEffect } from 'react'
import { UseProductContext } from '../Components/ContextAPI/ProductContext';
import { NavLink, useParams } from 'react-router-dom';
import LoadingAnimate from '../Components/Common/LoadingAnimate';
import { FaLongArrowAltLeft } from 'react-icons/fa';
import RatingProduct from '../Components/Common/RatingProduct';
import { TbReplace, TbTruckDelivery } from 'react-icons/tb';
import { RiSecurePaymentFill } from 'react-icons/ri';
import { GiReceiveMoney } from 'react-icons/gi';
import ImgProduct from '../Components/ShopComps/ImgProduct';
import AddProductButton from '../Components/ShopComps/AddProductButton';

const SingleProduct = () => {
    const { isSingleLoading, isLoading, getSingleProduct, singleProduct } = UseProductContext();

    const API = "https://dummyjson.com"
    const { id } = useParams();

    if (isSingleLoading) {
        return (
            <LoadingAnimate />
        )
    };

    const {
        id: alise,
        images,
        title,
        price,
        description,
        rating,
        brand,
        stock,
        discountPercentage,
        tags,
        sku,
        // weight,
        // reviews,
        // dimensions,
        warrantyInformation,
        // shippingInformation,
        // availabilityStatus,
        returnPolicy,
        // minimumOrderQuantity,
        // meta,
        // thumbnail,

    } = singleProduct

    useEffect(() => {
        getSingleProduct(`${API}/products/${id}`)
    }, [API])

    // console.log(getSingleProduct)


    return (
        <div className='flex flex-col pt-24 w-full min-h-[100vh] overflow-hidden'>
            <div className='flex items-center justify-between w-full h-auto xs:px-3 sm:px-6 md:px-8 lg:px-10 xs:text-[0.83em] md:xs:text-[0.88em] xl:xs:text-[0.9em] shadow-sm'>
                <NavLink to="/shop" className='flex items-center gap-x-2 my-4 font-semibold hover:text-gray-500 duration-100'>
                    <FaLongArrowAltLeft /> Back to Products
                </NavLink>
                <div>
                    Product ID: {id}
                </div>
            </div>
            <div className='grid grid-cols-1 xl:grid-cols-2 gap-4 xs:px-4 sm:px-6 md:px-8 lg:px-10 w-full h-auto'>
                <div className='w-full h-auto'>
                    <ImgProduct picture={images} />
                </div>
                <div className='flex flex-col justify-center py-10 w-full h-auto gap-y-3 text-[0.91em] capitalize'>
                    <div className='mb-2 text-2xl font-semibold'>
                        {title}
                    </div>
                    <div>
                        <RatingProduct rating={rating} />
                    </div>
                    <div className='flex gap-x-2 font-medium'>
                        MRP : ${price}
                    </div>
                    <div className='text-blue-800'>
                        Deal of the Days : discount {discountPercentage}%
                    </div>
                    <p className='text-[0.99em] leading-[1.6]'>
                        {description}
                    </p>
                    <div className='flex items-center justify-between xs:gap-x-5 sm:gap-x-0 w-full h-auto mb-3 py-4 text-[0.85em] text-center'>
                        <div className='flex flex-col items-center justify-center'>
                            <TbTruckDelivery className='text-2xl' />
                            <p className='mt-[6px]'>
                                Free Delivrey
                            </p>
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <TbReplace className='text-2xl' />
                            <p className='mt-[6px]'>
                                {returnPolicy}
                            </p>
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <RiSecurePaymentFill className='text-2xl' />
                            <p className='mt-[6px]'>
                                Secure Payment
                            </p>
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <GiReceiveMoney className='text-2xl' />
                            <p className='mt-[6px]'>
                                {warrantyInformation}
                            </p>
                        </div>
                    </div>
                    <div className='flex justify-start gap-x-[6px] capitalize'>
                        <p className='font-medium'>Tag:</p>
                        <span>{tags}</span>
                    </div>
                    <div className='flex justify-start gap-x-[6px] capitalize'>
                        <p className='font-medium'>Product ID:</p>
                        <span>{id}</span>
                    </div>
                    <div className='flex justify-start gap-x-[6px] capitalize'>
                        <p className='font-medium'>Available:</p>
                        {stock > 0 ? "In Stock" : "Out of Stock"}
                    </div>
                    {/* <div>
                        minimum Order Quantity: <span>{minimumOrderQuantity}</span>
                    </div> */}
                    <div className='flex justify-start gap-x-[6px] capitalize'>
                        <p className='font-medium'>SKU:</p>
                        {sku}
                    </div>
                    <div className='flex justify-start gap-x-[6px] pb-2 border-b border-gray-400'>
                        <p className='font-medium'>Brand:</p>
                        {brand ? brand : 'undefined'}
                    </div>
                    <div className='w-full h-auto'>
                        {stock > 0 && <AddProductButton product={singleProduct} />}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleProduct