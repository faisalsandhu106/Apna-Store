
import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom';
import { hendleError, hendleSuccess } from '../Components/Utils';
import { ToastContainer } from 'react-toastify';
import { FaLongArrowAltLeft } from 'react-icons/fa';
import { GiReceiveMoney } from 'react-icons/gi';
import { TbReplace, TbTruckDelivery } from 'react-icons/tb';
import { RiSecurePaymentFill } from 'react-icons/ri';

const AdminUpdateProduct = () => {
    const { id } = useParams();
    const [isUpdate, setIsupdate] = useState({
        title: '',
        longDescription: '',
        shortDescription: '',
        category: '',
        price: '',
        discountPercentage: '',
        rating: '',
        stock: '',
        tags: '',
        brand: '',
        sku: '',
        warrantyInformation: '',
        shippingInformation: '',
        availabilityStatus: '',
        returnPolicy: '',
        deliveryFree: '',
        securePayment: '',
        minimumOrderQuantity: '',
        images: '',
        feature: '',
        status: ''
    });

    // *------------------------------------------
    // *Get Individual Product Data In Admin Panel ----- In File
    // *------------------------------------------
    const getAllproductIndividual = async () => {
        const res = await fetch(`http://localhost:3000/admin/allproduct/${id}`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            },
        })

        const data = await res.json()
        setIsupdate(data)
    };

    const handleInputValue = (e) => {
        const { name, value } = e.target;
        const copyUpdate = { ...isUpdate };
        copyUpdate[name] = value;
        setIsupdate(copyUpdate);
    };

    // TODO--------------------------
    // *Product Update In Admin Panel----- In UpdateProduct File
    // TODO--------------------------
    const handleUpdateProduct = async (event) => {
        event.preventDefault();
        const { feature, status } = isUpdate;
        if (!feature & !status) {
            return hendleError("Please, Feature & Status inputs requried");
        };
        const url = `http://localhost:3000/admin/allproduct/update/${id}`;
        const res = await fetch(url, {
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(isUpdate)
        });

        // const data = await res.json();
        // console.log('Update Data', data)

        if (res.ok) {
            hendleSuccess('Product Updated Successfully "Please Refresh Your Page"')
            setIsupdate({
                title: '',
                longDescription: '',
                shortDescription: '',
                category: '',
                price: '',
                discountPercentage: '',
                rating: '',
                stock: '',
                tags: '',
                brand: '',
                sku: '',
                warrantyInformation: '',
                shippingInformation: '',
                availabilityStatus: '',
                returnPolicy: '',
                deliveryFree: '',
                securePayment: '',
                minimumOrderQuantity: '',
                images: '',
                feature: '',
                status: ''
            })
        } else {
            hendleError('Updated Error')
        }
    };

    useEffect(() => {
        getAllproductIndividual()
    }, [])

    return (
        <>
            <div className='flex flex-col w-full h-auto overflow-hidden'>
                <div className='flex items-center justify-end xs:px-4 sm:px-6 lg:px-8 w-full h-auto text-[0.94em]'>
                    <NavLink to="/admin/allproducts" className='flex items-center gap-x-2 my-4 font-semibold hover:text-gray-500 duration-100'>
                        <FaLongArrowAltLeft /> Back to Products
                    </NavLink>
                </div>
                <form onSubmit={handleUpdateProduct} className='flex xs:flex-col xl:flex-row gap-4 xs:px-2 sm:px-5 lg:px-7 xl:px-5 pt-6 w-full h-auto'>
                    <div className='xs:py-8 xl:py-11 flex flex-col xs:items-center justify-start xl:w-[60%] h-auto'>
                        {/* <img className=' xs:w-[280px] xs:h-[200px] md:w-[330px] md:h-[240px] lg:w-[370px] lg:h-[260px] bg-cover rounded-md' src='' alt="Product-Img" /> */}
                        <p className='font-medium'>IMG URL:</p>
                        <input type="text" placeholder='Image URL' name='images' value={isUpdate.images} onChange={handleInputValue} className='custom-input-2 min-w-[90%]' />
                    </div>
                    <div className='flex flex-col justify-center w-full h-auto xs:px-3 sm:px-5 lg:px-5 xl:px-6 py-5 gap-y-4 text-[0.96em] rounded-md capitalize'>
                        <div className='mb-1 text-2xl font-semibold'>
                            <input type="text" placeholder='Product Name' name='title' value={isUpdate.title} onChange={handleInputValue} className='bg-transparent w-full' />
                        </div>
                        <div className='flex items-end gap-x-[10px]'>
                            <p className='font-medium'>Product ID:</p>
                            <span>{id}</span>
                        </div>
                        <div className='flex items-end gap-x-[6px] line-through'>
                            <p className='font-medium text-nowrap'>MRP :</p>
                            <input type="number" placeholder='Price' name='price' value={isUpdate.price} onChange={handleInputValue} className='custom-input-2' />
                        </div>
                        <div className='flex items-end gap-x-[10px] text-blue-600'>
                            <p className='font-medium'>Deal of the Days:</p>
                            <input type="number" placeholder='Discount Percentage' name='discountPercentage' value={isUpdate.discountPercentage} onChange={handleInputValue} className='custom-input-2' />
                        </div>
                        <div className='flex items-end gap-x-[10px]'>
                            <p className='font-medium'>Rating:</p>
                            <input type="number" placeholder='Rating' name='rating' value={isUpdate.rating} onChange={handleInputValue} className='custom-input-2' />
                        </div>
                        <div className='flex items-end gap-x-[10px]'>
                            <p className='font-medium'>Tag:</p>
                            <input type="text" placeholder='Tag' name='tags' value={isUpdate.tags} onChange={handleInputValue} className='custom-input-2' />
                        </div>
                        <div className='flex items-end gap-x-[10px]'>
                            <p className='font-medium'>category:</p>
                            <input type="text" placeholder='Category' name='category' value={isUpdate.category} onChange={handleInputValue} className='custom-input-2' />
                        </div>
                        <div className='flex items-end gap-x-[10px]'>
                            <p className='font-medium'>Brand:</p>
                            <input type="text" placeholder='Brand' name='brand' value={isUpdate.brand} onChange={handleInputValue} className='custom-input-2' />
                        </div>
                        <div className='flex items-end gap-x-[10px]'>
                            <p className='font-medium'>SKU:</p>
                            <input type="text" placeholder='SKU' name='sku' value={isUpdate.sku} onChange={handleInputValue} className='custom-input-2' />
                        </div>
                        <div className='flex items-end gap-x-[10px]'>
                            <p className='font-medium'>stock:</p>
                            <input type="number" placeholder='Stock' name='stock' value={isUpdate.stock} onChange={handleInputValue} className='custom-input-2' />
                        </div>
                        <div className='flex items-end gap-x-[10px]'>
                            <p className='font-medium'>availability Status:</p>
                            <input type="text" placeholder='Availability Status' name='availabilityStatus' value={isUpdate.availabilityStatus} onChange={handleInputValue} className='custom-input-2' />
                        </div>
                        <div className='flex items-end gap-x-[10px]'>
                            <p className='font-medium'>Minimum Order Quantity:</p>
                            <input type="number" placeholder='Minimum Order Quantity:' name='minimumOrderQuantity' value={isUpdate.minimumOrderQuantity} onChange={handleInputValue} className='custom-input-2' />
                        </div>
                        <div className='flex items-end gap-x-[10px]'>
                            <p className='font-medium'>shippingInformation:</p>
                            <input type="text" placeholder='Shipping Information' name='shippingInformation' value={isUpdate.shippingInformation} onChange={handleInputValue} className='custom-input-2' />
                        </div>
                        <div className='flex items-end gap-x-[10px]'>
                            <div className='flex items-center gap-x-[6px]'>
                                <p className='font-medium'>Delivery fee</p>
                                <TbTruckDelivery className='text-xl' />
                            </div>
                            <input type="text" placeholder='Delivery Free' name='deliveryFree' value={isUpdate.deliveryFree} onChange={handleInputValue} className='custom-input-2' />
                        </div>
                        <div className='flex items-end gap-x-[10px]'>
                            <div className='flex items-center gap-x-[6px]'>
                                <p className='font-medium'>return Policy</p>
                                <TbReplace className='text-xl' />
                            </div>
                            <input type="text" placeholder='Return Policy' name='returnPolicy' value={isUpdate.returnPolicy} onChange={handleInputValue} className='custom-input-2' />
                        </div>
                        <div className='flex items-end gap-x-[10px]'>
                            <div className='flex items-center gap-x-[6px]'>
                                <p className='font-medium'>securePayment</p>
                                <RiSecurePaymentFill className='text-xl' />
                            </div>
                            <input type="text" placeholder='Secure Payment' name='securePayment' value={isUpdate.securePayment} onChange={handleInputValue} className='custom-input-2' />
                        </div>
                        <div className='flex items-end gap-x-[10px]'>
                            <div className='flex items-center gap-x-[6px]'>
                                <p className='font-medium'>Warranty Information</p>
                                <GiReceiveMoney className='text-xl' />
                            </div>
                            <input type="text" placeholder='Warranty Information' name='warrantyInformation' value={isUpdate.warrantyInformation} onChange={handleInputValue} className='custom-input-2' />
                        </div>
                        <div className='flex items-end gap-x-[10px]'>
                            <p className='font-medium'>featured:</p>
                            <input type="text" placeholder='true & false' name='feature' value={isUpdate.feature} onChange={handleInputValue} className='custom-input-2 lowercase' />
                        </div>
                        <div className='flex items-end gap-x-[10px]'>
                            <p className='font-medium'>status:</p>
                            <input type="text" placeholder='true & false' name='status' value={isUpdate.status} onChange={handleInputValue} className='custom-input-2 lowercase' />
                        </div>
                        <div className='flex flex-col gap-y-[6px]'>
                            <p className='font-medium'>Short Description:</p>
                            <textarea type="text" placeholder='Short Description' name='shortDescription' value={isUpdate.shortDescription} onChange={handleInputValue} className='custom-textarea-2 rounded-md xs:min-h-[100px] sm:min-h-[100px] lg:min-h-[80px] max-h-[150px] leading-[21px] overflow-hidden' />
                        </div>
                        <div className='flex flex-col gap-y-[6px]'>
                            <p className='font-medium'>Long Description:</p>
                            <textarea type="text" placeholder='Long Description' name='longDescription' value={isUpdate.longDescription} onChange={handleInputValue} className='custom-textarea-2 rounded-md xs:min-h-[200px] sm :min-h-[180px] lg:min-h-[190px] max-h-[400px] leading-[21px] overflow-hidden' />
                        </div>
                        <div className='mt-2 w-full h-auto'>
                            <button type='submit' className='w-full'>
                                Update Product
                            </button>
                        </div>
                    </div>
                </form>
            </div>
            <ToastContainer />
        </>
    )
}

export default AdminUpdateProduct