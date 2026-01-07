import React, { useEffect, useState } from 'react'
import { hendleError, hendleSuccess } from '../Components/Utils';
import { ToastContainer } from 'react-toastify';
import { MdEdit } from 'react-icons/md';

const UserProfile = () => {
    const [firstname, setFirstname] = useState('');    // State to hold logged-in user's name
    const [lastname, setLastname] = useState('');     // State to hold logged-in user's lastname
    const [isEmail, setUseremail] = useState('');     // State to hold logged-in user's email
    const [isAddress, setUserAddress] = useState(''); // State to hold logged-in user's Address

    useEffect(() => {
        setFirstname(localStorage.getItem("UserName"))
        setLastname(localStorage.getItem("LastName"))
        setUseremail(localStorage.getItem("Email"))
        setUserAddress(localStorage.getItem("Address"))
    })


    const [isUser, setIsuser] = useState({
        firstname: "",
        lastname: "",
        email: "",
        address: "",
    });

    // const { '' } = useParams();
    // console.log('Update User');

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
        const res = await fetch(`http://localhost:3000/auth//user/update/${''}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
        });

        if (res.ok) {
            hendleSuccess("Updated data Successfully")
        } else {
            hendleError("Not Updated Data")
        }
    };

    return (
        <>
            <div className='xs:px-2 sm:px-3 lg:px-7 py-16 w-full min-h-[100vh]'>
                <div className='grid xs:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 justify-items-center py-10 w-full h-auto'>
                    <div className='ProductComp hidden flex flex-col items-center justify-center gap-y-2 w-full h-[250px] hover:shadow-none hover:transform-none rounded-md'>
                        <div className='ProductComp w-20 h-20 rounded-full overflow-hidden'>
                            <img className='w-full h-full bg-cover' src="/pic/profile.png" alt="" />
                        </div>
                        <div className='text-[0.92em]'>
                            <p>BOI</p>
                        </div>
                        <div className='text-[1.05em] text-center'>
                            <p>{firstname ? `${'Hi, ' + firstname}` : 'Please, Login'}</p>
                        </div>
                        <div>
                            <button className='p-0 px-[8px] py-[6px] text-[0.76em]'>
                                Change Picture
                            </button>
                        </div>
                    </div>
                    <div className='ProductComp contact-form text-amber-50 flex flex-col xs:p-3 lg:p-5 py-5 gap-y-6 w-full h-auto rounded-md capitalize'>
                        <div className='flex items-center justify-between w-full'>
                            <div className='flex items-center gap-x-2'>
                                <div className='ProductComp w-16 h-16 rounded-full overflow-hidden'>
                                    <img className='w-full h-full bg-cover' src="/pic/profile.png" alt="" />
                                </div>
                                <div>
                                    <p className='text-[0.94em] font-medium'>
                                        {firstname ? `${'Hi, ' + firstname}` : 'Please, Login'}
                                    </p>
                                    <p className='text-[0.82em] lowercase'>
                                        {isEmail}
                                    </p>
                                </div>
                            </div>
                            <div>
                                <button className='p-0 px-[8px] py-[6px] text-[0.76em]'>
                                    Change Picture
                                </button>
                            </div>
                        </div>
                        <div className='flex flex-col gap-y-1 text-[0.9em]'>
                            <div className='flex justify-between w-full'>
                                <p className='min-w-[100px] font-medium'>First Name:</p>
                                <div>
                                    {firstname ? `${firstname}` : '--- ---'}
                                </div>
                            </div>
                            <div className='flex justify-between w-full'>
                                <p className='min-w-[100px] font-medium'>last name:</p>
                                <div>
                                    {lastname ? `${lastname}` : '--- ---'}
                                </div>
                            </div>
                            <div className='flex justify-between w-full'>
                                <p className='min-w-[100px] font-medium'>email:</p>
                                <div className='lowercase'>
                                    {isEmail ? `${isEmail}` : '--- ---'}
                                </div>
                            </div>
                            <div className='flex justify-between w-full'>
                                <p className='min-w-[100px] font-medium'>address:</p>
                                <div className='text-end'>
                                    {isAddress ? `${isAddress}` : '--- ---'}
                                </div>
                            </div>
                            <div className='flex mt-2 w-full'>
                                <button type='submit' className='flex gap-x-2 mt-3 px-[8px] py-[6px] text-[0.88em]'>
                                    <p>Edit</p>
                                    <MdEdit className='text-[1.3em]' />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </>
    )
}

export default UserProfile