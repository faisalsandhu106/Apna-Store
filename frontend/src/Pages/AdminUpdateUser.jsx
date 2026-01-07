import React, { useEffect, useState } from 'react'
import { hendleError, hendleSuccess } from '../Components/Utils';
import { NavLink, useParams } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { BsFillSendPlusFill } from 'react-icons/bs';
import { RiAccountCircle2Fill } from 'react-icons/ri';
import { FaLongArrowAltLeft } from 'react-icons/fa';

const AdminUpdateUser = () => {
    const { id } = useParams();
    //* console.log('params single product', id);
    
    const [isUser, setIsuser] = useState({
        firstname: "",
        lastname: "",
        email: "",
        address: "",
        // password: ""
    });

    // *---------------------------------------------
    // *Get Allproduct Individual Data In Admin Panel
    // *---------------------------------------------
    const getSingleProductData = async () => {
        const res = await fetch(`http://localhost:3000/admin/user/${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
        });

        const data = await res.json();
        setIsuser(data)

        // if (res.ok) {
        //     hendleSuccess(data.message)
        // } else {
        //     hendleError(data.message)
        // }

    };

    const handleInputValue = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        setIsuser({
            ...isUser,
            [name]: value
        })
    };

    // TODO--------------------------
    // *Product Update In admin Penal
    // TODO--------------------------
    const handleUpdateUser = async (event) => {
        event.preventDefault();
        const res = await fetch(`http://localhost:3000/admin/user/update/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(isUser)
        });

        if (res.ok) {
            hendleSuccess("Updated data Successfully")
        } else {
            hendleError("Not Updated Data")
        }
    };


    useEffect(() => {
        getSingleProductData()
    }, [])

    return (
        <>
            <div className='flex items-center justify-between flex-col xs:pt-20 md:pt-16 w-full min-h-screen overflow-hidden '>
                <div className='flex items-center justify-end w-full h-auto xs:px-3 sm:px-5 lg:px-6 xs:text-[1em] xl:text-[0.94em]'>
                    <NavLink to="/admin/alluser" className='flex items-center gap-x-2 font-semibold hover:text-gray-500 duration-100'>
                        <FaLongArrowAltLeft /> Back to Products
                    </NavLink>
                </div>
                <div className='flex items-center justify-center py-10 w-full h-auto'>
                    <form onSubmit={handleUpdateUser} className='contact-form ProductComp flex flex-col items-center justify-center py-8 xs:px-[8px] sm:px-[21px] lg:px-[25px] xs:w-[405px] sm:w-[410px] lg:w-[460px] xl:w-[445px] rounded-md text-[0.98em] text-amber-50'>
                        <h2 className='flex items-center justify-center gap-x-1 text-[1.45em] font-semibold'>
                            Update User
                            <RiAccountCircle2Fill className='text-3xl' />
                        </h2>
                        <div className='flex flex-col gap-y-8 mt-9 w-full'>
                            <div className='grid grid-cols-2 gap-x-3 w-full'>
                                <div className='w-full'>
                                    <input
                                        type="text"
                                        placeholder='Firstname'
                                        autoComplete='off'
                                        name='firstname'
                                        onChange={handleInputValue}
                                        value={isUser.firstname}
                                        className='custom-input' />
                                </div>
                                <div className='w-full'>
                                    <input
                                        type="text"
                                        placeholder='Lastname'
                                        autoComplete='off'
                                        name='lastname'
                                        onChange={handleInputValue}
                                        value={isUser.lastname}
                                        className='custom-input' />
                                </div>
                            </div>
                            <input
                                type="text"
                                placeholder='Email Address'
                                autoComplete='off'
                                name='email'
                                onChange={handleInputValue}
                                value={isUser.email}
                                className='custom-input' />
                            <input
                                type="text"
                                placeholder='Address, City'
                                autoComplete='off'
                                name='address'
                                onChange={handleInputValue}
                                value={isUser.address}
                                className='custom-input' />
                            {/* <input
                                type="text"
                                placeholder='Password'
                                autoComplete='off'
                                name='password'
                                onChange={handleInputValue}
                                value={isUser.password}
                                className='custom-input' /> */}
                        </div>
                        <div className='mt-8 w-full'>
                            <button type='submit' className='flex items-center justify-center gap-x-1 w-full py-[8px] text-[0.98em]  font-medium rounded-md bg-none hover:bg-none bg-[#db319d] hover:bg-[#a41570]'>
                                UPADTE
                                <BsFillSendPlusFill />
                            </button>
                        </div>
                    </form>
                    <ToastContainer />
                </div>
                <div></div>
            </div>
        </>

    )
}

export default AdminUpdateUser