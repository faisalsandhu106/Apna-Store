import { motion } from 'motion/react';
import React, { useContext, useEffect, useState } from 'react'
import { FiUserPlus } from 'react-icons/fi';
import { GrContact } from 'react-icons/gr';
import { MdOutlineDarkMode, MdProductionQuantityLimits } from 'react-icons/md';
import { RiCloseLargeFill, RiHome4Line, RiMenuLine } from 'react-icons/ri';
import { NavLink } from 'react-router-dom';
import { ThemeContext } from '../ContextAPI/ThemeProvider';
import { CiLight } from 'react-icons/ci';


const AdminSidarLinks = [
    {
        id: '1',
        button: 'User Profile',
        icon: <FiUserPlus />,
        url: '/admin/alluser'
    },
    {
        id: '2',
        button: 'Contact Form',
        icon: <GrContact />,
        url: '/admin/alluser/contactForm'
    },
    {
        id: '3',
        button: 'All Products',
        icon: <MdProductionQuantityLimits />,
        url: '/admin/allproducts'
    },
    {
        id: '4',
        button: 'Back To Home',
        icon: <RiHome4Line />,
        url: '/home'
    },
]

const AdminSideBar = () => {
    const [MenuBar, setMenuBar] = useState(true);
    const { storedValue, setStoredValue } = useContext(ThemeContext);
    const [loginUser, setLoginUser] = useState('');

    const handleMenuBar = () => {
        setMenuBar(!MenuBar)
    };

    useEffect(() => {
        setLoginUser(localStorage.getItem("UserName"))
    }, []);

    useEffect(() => {
        if (storedValue === "dark") {
            document.documentElement.setAttribute("data-theme", storedValue)
        } else {
            document.documentElement.setAttribute("data-theme", storedValue)
        }
    }, [storedValue]);

    return (
        <>
            <div className='header-theme fixed top-0 z-[150] flex items-center justify-between gap-y-5 xs:px-4 sm:px-6 lg:px-8 py-3 w-full h-auto shadow-md duration-150'>
                {/* --------------------Admin Logo-------------------------- */}
                <div className='flex items-start justify-between'>
                    <NavLink to={'/admin/dashboard'}>
                        <div className='flex items-center justify-start gap-x-2'>
                            <figure className='xs:w-12 xs:h-12 border rounded-full overflow-hidden'>
                                <img src="/pic/profile.png" alt="Admin-Img" className='w-full h-full bg-cover' />
                            </figure>
                            <div className='text-[0.88em] text-nowrap'>
                                <h1>{loginUser ? `${'Hi, ' + loginUser}` : 'Please, Login'}</h1>
                                <h1 className='text-[0.8em]'> {`${loginUser ? "You Admin" : " " }`}</h1>
                            </div>
                        </div>
                    </NavLink>
                </div>

                {/* -------------------Admin Dashboard Pages---------------------- */}
                <div className='flex items-center lg:gap-x-6 w-fit h-auto'>
                    <div className='-underLine flex lg:gap-x-6 xl:gap-x-8 xs:hidden lg:inline-flex'>
                        {AdminSidarLinks.map((items, index) => {
                            const { id, button, icon, url } = items
                            return (
                                <NavLink
                                    key={id}
                                    to={url}
                                    className={`flex items-center flex-nowrap gap-x-2 hover:pb-[2px] hover:text-gray-500 duration-150 ${items === index ? "active" : ''}`}>
                                    <div className='xs:text-[1.05em] sm:text-[1.02em] lg:text-[0.92em]'> {button} </div>
                                    {/* <div className='xs:text-[1.6em] sm:text-[1.5em] lg:text-[1.2em]'> {icon} </div> */}
                                </NavLink>
                            )
                        })}
                    </div>

                    {/* ------------------Dark Or Light Mood------------------------ */}
                    <div className='flex items-center xs:gap-x-4 lg:gap-x-0 lg:pl-5 w-fit h-auto'>
                        <div className='flex items-center  w-fit h-auto'>
                            {storedValue === "dark" ? (
                                <button
                                    onClick={() => setStoredValue("")}
                                    className='flex items-center px-[8px] py-[4px] gap-x-[2px] text-[0.8em] font-semibold cursor-pointer duration-100'>
                                    <CiLight className='text-[1.5em]' />
                                </button>
                            )
                                :
                                <button
                                    onClick={() => setStoredValue("dark")}
                                    className='flex items-center px-[7px] py-[4px] gap-x-[2px] text-[0.8em] font-semibold cursor-pointer duration-100'>
                                    <MdOutlineDarkMode className='text-[1.5em]' />
                                </button>
                            }
                        </div>
                        {/* ------------------Responsive Menu Botton------------------------ */}
                        <div className='lg:hidden'>
                            {
                                MenuBar ?
                                    <div onClick={handleMenuBar} className='xs:text-[1.4em] cursor-pointer xs:inline-flex lg:hidden'>
                                        <RiMenuLine />
                                    </div>
                                    :
                                    <div onClick={handleMenuBar} className='xs:text-[1.4em] cursor-pointer xs:inline-flex lg:hidden'>
                                        <RiCloseLargeFill />
                                    </div>
                            }
                        </div>
                    </div>
                </div>
            </div>

            {/* ----------------------Responsive Navbar----------------------------- */}
            <div className='w-full h-auto'>
                {
                    !MenuBar && (
                        <motion.div
                            initial={{ y: 500 }}
                            whileInView={{ y: 0 }}
                            transition={{ duration: 0.6, ease: [0, 0.71, 0.2, 1.01] }}
                            className='header-theme lg:hidden fixed top-16 left-0 z-[150] flex items-center justify-start flex-col pt-10 w-full min-h-[100vh]'>
                            <div className='-underLine flex items-center justify-center flex-col pt-40 gap-y-4 w-full font-semibold uppercase'>
                                {AdminSidarLinks.map((items, index) => {
                                    const { id, button, icon, url } = items
                                    return (
                                        <NavLink
                                            key={id}
                                            to={url}
                                            onClick={handleMenuBar}
                                            className={`flex items-center gap-x-2 ${items === index ? "active" : ''}`}>
                                            <div className='xs:text-[1.2em]'> {button} </div>
                                            <div className='xs:text-[1.6em]'> {icon} </div>
                                        </NavLink>
                                    )
                                })}
                            </div>
                        </motion.div>
                    )
                }
            </div>
            {/* ----------------------Responsive Navbar----------------------------- */}
        </>
    )
}

export default AdminSideBar