import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import { TbReplace, TbTruckDelivery } from 'react-icons/tb';
import { RiSecurePaymentFill } from 'react-icons/ri';
import { GiReceiveMoney } from 'react-icons/gi';
import { FaLongArrowAltLeft } from 'react-icons/fa';
import { hendleError, hendleSuccess } from '../Components/Utils';
import { ToastContainer } from 'react-toastify';

const AdminCreateProduct = () => {
  const [isCreate, setIscreate] = useState({
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
  });

  const handleInputValue = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setIscreate({
      ...isCreate,
      [name]: value
    })
  };

  const handleCreateProduct = async (event) => {
    event.preventDefault();
    const url = "http://localhost:3000/admin/craeteproduct";
    const { feature } = isCreate;
    if (!feature ) {
      return hendleError("Please, Feature inputs requried");
    };
    const res = await fetch(url, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(isCreate)
    });

    // const data = await res.json();
    // console.log('Update Data', data)

    if (res.ok) {
      hendleError('Product created Error')
    } else {
      hendleSuccess("Product created Successfully, Please Refresh Your Page")
    }
  };

  return (
    <>
      <div className='flex flex-col w-full h-auto overflow-hidden'>
        <div className='flex items-center justify-end xs:px-4 sm:px-6 lg:px-8 w-full h-auto text-[0.94em]'>
          <NavLink to="/admin/allproducts" className='flex items-center gap-x-2 my-4 font-semibold hover:text-gray-500 duration-100'>
            <FaLongArrowAltLeft /> Back to Products
          </NavLink>
        </div>
        <form onSubmit={handleCreateProduct} className='flex xs:flex-col xl:flex-row xs:px-2 sm:px-5 lg:px-7 xl:px-5 pt-6 gap-4 w-full h-auto'>
          <div className='xs:py-8 xl:py-11 flex flex-col xs:items-center justify-start xl:w-[60%] h-auto'>
            {/* <img className=' xs:w-[280px] xs:h-[200px] md:w-[330px] md:h-[240px] lg:w-[370px] lg:h-[260px] bg-cover rounded-md' src='' alt="Product-Img" /> */}
            <p className='font-medium'>IMG URL:</p>
            <input type="text" placeholder='Image URL' name='images' value={isCreate.images} onChange={handleInputValue} className='custom-input-2 min-w-[100%]' />
          </div>
          <div className='flex flex-col justify-center xs:px-3 sm:px-5 lg:px-5 xl:px-6 py-5 w-full h-auto gap-y-4 text-[0.97em] rounded-md capitalize'>
            <div className='flex items-end gap-x-[10px] mb-1 font-semibold'>
              <p className='font-medium text-nowrap'>Name:</p>
              <input type="text" placeholder='Product Name' name='title' value={isCreate.title} onChange={handleInputValue} className='custom-input-2' />
            </div>
            <div className='flex items-end gap-x-[10px]'>
              <p className='font-medium text-nowrap'>MRP:</p>
              <input type="number" placeholder='price' name='price' value={isCreate.price} onChange={handleInputValue} className='custom-input-2' />
            </div>
            <div className='flex items-end gap-x-[10px]'>
              <p className='font-medium'>Deal of the Days:</p>
              <input type="number" placeholder='Discount Percentage' name='discountPercentage' value={isCreate.discountPercentage} onChange={handleInputValue} className='custom-input-2' />
            </div>
            <div className='flex items-end gap-x-[10px]'>
              <p className='font-medium'>Rating:</p>
              <input type="number" placeholder='Rating' name='rating' value={isCreate.rating} onChange={handleInputValue} className='custom-input-2' />
            </div>
            <div className='flex items-end gap-x-[10px]'>
              <p className='font-medium'>Tag:</p>
              <input type="text" placeholder='Tag' name='tags' value={isCreate.tags} onChange={handleInputValue} className='custom-input-2' />
            </div>
            <div className='flex items-end gap-x-[10px]'>
              <p className='font-medium'>category:</p>
              <input type="text" placeholder='Category' name='category' value={isCreate.category} onChange={handleInputValue} className='custom-input-2 lowercase' />
            </div>
            <div className='flex items-end gap-x-[10px]'>
              <p className='font-medium'>Brand:</p>
              <input type="text" placeholder='Brand' name='brand' value={isCreate.brand} onChange={handleInputValue} className='custom-input-2' />
            </div>
            <div className='flex items-end gap-x-[10px]'>
              <p className='font-medium'>SKU:</p>
              <input type="text" placeholder='SKU' name='sku' value={isCreate.sku} onChange={handleInputValue} className='custom-input-2' />
            </div>
            <div className='flex items-end gap-x-[10px]'>
              <p className='font-medium'>stock:</p>
              <input type="number" placeholder='Stock' name='stock' value={isCreate.stock} onChange={handleInputValue} className='custom-input-2' />
            </div>
            <div className='flex items-end gap-x-[10px]'>
              <p className='font-medium'>availability Status:</p>
              <input type="text" placeholder='Availability Status' name='availabilityStatus' value={isCreate.availabilityStatus} onChange={handleInputValue} className='custom-input-2' />
            </div>
            <div className='flex items-end gap-x-[10px]'>
              <p className='font-medium'>Minimum Order Quantity:</p>
              <input type="number" placeholder='Minimum Order Quantity:' name='minimumOrderQuantity' value={isCreate.minimumOrderQuantity} onChange={handleInputValue} className='custom-input-2' />
            </div>
            <div className='flex items-end gap-x-[10px]'>
              <p className='font-medium'>shipping Information:</p>
              <input type="text" placeholder='Shipping Information' name='shippingInformation' value={isCreate.shippingInformation} onChange={handleInputValue} className='custom-input-2' />
            </div>
            <div className='flex items-end gap-x-[10px]'>
              <div className='flex items-center gap-x-[6px]'>
                <p className='font-medium'>Delivery fee</p>
                <TbTruckDelivery className='text-xl' />
              </div>
              <input type="text" placeholder='Delivery Free' name='deliveryFree' value={isCreate.deliveryFree} onChange={handleInputValue} className='custom-input-2' />
            </div>
            <div className='flex items-end gap-x-[10px]'>
              <div className='flex items-center gap-x-[6px]'>
                <p className='font-medium'>return Policy</p>
                <TbReplace className='text-xl' />
              </div>
              <input type="text" placeholder='Return Policy' name='returnPolicy' value={isCreate.returnPolicy} onChange={handleInputValue} className='custom-input-2' />
            </div>
            <div className='flex items-end gap-x-[10px]'>
              <div className='flex items-center gap-x-[6px]'>
                <p className='font-medium'>secure Payment</p>
                <RiSecurePaymentFill className='text-xl' />
              </div>
              <input type="text" placeholder='Secure Payment' name='securePayment' value={isCreate.securePayment} onChange={handleInputValue} className='custom-input-2' />
            </div>
            <div className='flex items-end gap-x-[10px]'>
              <div className='flex items-center gap-x-[6px]'>
                <p className='font-medium'>Warranty Information</p>
                <GiReceiveMoney className='text-xl' />
              </div>
              <input type="text" placeholder='Warranty Information' name='warrantyInformation' value={isCreate.warrantyInformation} onChange={handleInputValue} className='custom-input-2' />
            </div>
            <div className='flex items-end gap-x-[10px]'>
              <p className='font-medium'>featured:</p>
              <input type="text" placeholder='true & false' name='feature' value={isCreate.feature} onChange={handleInputValue} className='custom-input-2 lowercase' />
            </div>
            <div className='flex flex-col gap-y-[6px]'>
              <p className='font-medium'>Short Description:</p>
              <textarea type="text" placeholder='Short Description' name='shortDescription' value={isCreate.shortDescription} onChange={handleInputValue} className='custom-textarea-2 rounded-md xs:min-h-[100px] sm:min-h-[100px] lg:min-h-[80px] max-h-[150px] leading-[21px] overflow-hidden' />
            </div>
            <div className='flex flex-col gap-y-[6px]'>
              <p className='font-medium'>Long Description:</p>
              <textarea type="text" placeholder='Long Description' name='longDescription' value={isCreate.longDescription} onChange={handleInputValue} className='custom-textarea-2 rounded-md xs:min-h-[200px] sm :min-h-[180px] lg:min-h-[190px] max-h-[400px] leading-[21px] overflow-hidden' />
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

export default AdminCreateProduct