import { NavLink, useNavigate } from 'react-router-dom'
import { RiMenuLine } from "react-icons/ri";
import { RiCloseLargeFill } from "react-icons/ri";
import { useContext, useEffect, useState } from 'react';
import { ThemeContext } from '../ContextAPI/ThemeProvider';
import { CiLight } from 'react-icons/ci'
import { MdOutlineDarkMode } from 'react-icons/md'
import { hendleSuccess } from '../Utils';
import { ToastContainer } from 'react-toastify';
import { easeIn, motion } from 'motion/react';
import { IoCameraOutline } from 'react-icons/io5';
import { IoMdAdd } from "react-icons/io";
import { PiSignOutBold } from "react-icons/pi";
import { MdOutlineLightMode } from "react-icons/md";
import { MdNightlight } from "react-icons/md";
import { FiShoppingCart } from 'react-icons/fi';
import { UseCartContext } from '../ContextAPI/CartContext';

const Header = () => {
    const [isMenu, setIsMenu] = useState(true);
    const [isProfile, setIsProfile] = useState(true);
    const [loginUser, setLoginUser] = useState('');  // State to hold logged-in user's name
    const Navigate = useNavigate();

    const { total_item } = UseCartContext();

    const toggleMenbar = () => {
        setIsMenu(!isMenu)
    };

    const toggleProfile = () => {
        setIsProfile(!isProfile)
    };

    // ---------------------User Data LocalStorage----------------------- //
    useEffect(() => {
        setLoginUser(localStorage.getItem("UserName"))
    })

    const handleLogout = () => {
        localStorage.removeItem("Token")      // Clear stored token
        localStorage.removeItem("UserName")  // Clear stored user name
        hendleSuccess('Logout Successful')
        setTimeout(() => {
            setIsProfile(!isProfile)
            Navigate('/login')
        }, 1000)
    };
    // ---------------------User Data LocalStorage---------------------- //

    // -----------------------Dark Light------------------------------ //
    const { storedValue, setStoredValue } = useContext(ThemeContext)

    useEffect(() => {
        if (storedValue === "dark") {
            document.documentElement.setAttribute("data-theme", storedValue)
        } else {
            document.documentElement.setAttribute("data-theme", storedValue)
        }
    }, [storedValue])
    // -----------------------Dark Light------------------------------ //

    return (
        <>
            <div className='header-theme fixed top-0 left-0 z-[50] flex items-center justify-between xs:px-4 md:px-7 xl:px-8 py-3 gap-x-4 w-full h-auto capitalize'>
                <NavLink to='/home' className='xs:text-[1.3em] md:text-[1.2em] xl:text-[1.3em] font-medium cursor-pointer'>
                    <h1>Logo</h1>
                </NavLink>
                <div className='flex items-center justify-end lg:gap-x-12 xl:gap-x-20 w-full h-auto'>

                    {/* -------------------------------Navbar Page Links--------------------------------------- */}
                    <ul className='xs:hidden lg:inline-flex flex items-center justify-center gap-x-10'>
                        <NavLink to='/home' className='lg:text-[1em] xl:text-[0.97em] cursor-pointer'>
                            <li>Home</li>
                        </NavLink>
                        <NavLink to='/service' className='lg:text-[1em] xl:text-[0.97em] cursor-pointer'>
                            <li>Service</li>
                        </NavLink>
                        <NavLink to='/shop' className='lg:text-[1em] xl:text-[0.97em] cursor-pointer'>
                            <li>Shop</li>
                        </NavLink>
                        <NavLink to='/contact' className='lg:text-[1em] xl:text-[0.97em] cursor-pointer'>
                            <li>Contact</li>
                        </NavLink>
                    </ul>
                    {/* -------------------------------Navbar Page Links--------------------------------------- */}

                    {/* -------------------------------User Profile Column-------------------------------------- */}
                    <div className='flex items-center gap-x-4 w-fit h-auto'>
                        {/* --------------------------------Total-item-Cart------------------------------------- */}
                        <NavLink to={'./cartlist'} className="text-[1.3rem]">
                            <FiShoppingCart />
                            <div className='absolute top-3 xs:right-24 md:right-28 lg:right-40 p-[8px] w-4 h-4 bg-red-600 text-white text-[0.7rem] font-medium rounded-full flex items-center justify-center'>
                                {total_item}
                            </div>
                        </NavLink>
                        {/* --------------------------------Total-item-Cart-------------------------------------- */}

                        {/* -------------------------------Dark Light Button------------------------------------- */}
                        <div className='w-fit h-auto xs:hidden lg:inline-flex'>
                            {storedValue === "dark" ? (
                                <div
                                    onClick={() => setStoredValue("")}
                                    className='flex items-center gap-x-2 px-3 py-2 border-2 rounded-md bg-white text-black'>
                                    <CiLight />
                                </div>
                            )
                                :
                                (
                                    <button
                                        onClick={() => setStoredValue("dark")}
                                        className='flex items-center gap-x-2 px-3 py-2 border-2 rounded-md bg-gray-700 text-white'>
                                        <MdOutlineDarkMode />
                                    </button>
                                )
                            }
                        </div>
                        {/* ------------------------------Dark Light Button-------------------------------------- */}

                        {/* -----------------------------User Profile DropDown------------------------------------ */}
                        <div className='relative xs:w-10 xs:h-10 rounded-full border-2 border-gray-300 overflow-hidden'>
                            <img onClick={toggleProfile} className='w-full h-auto bg-cover cursor-pointer' src="/pic/profile.png" alt="rofile_Img" />
                        </div>
                        {
                            !isProfile && (
                                <motion.div
                                    initial={{ y: -20, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    transition={{ duration: 0, ease: easeIn }}
                                    className='fixed top-20 z-[50] right-[4%] px-2 py-5 xs:w-[92%] md:w-[50%] md:h-auto lg:w-[40%] xl:w-[30%] h-auto rounded-lg duration-300 shadow-lg bg-[#EEF1F5]'>
                                    <div className='flex items-center justify-between w-full px-4'>
                                        <div className='w-2'></div>
                                        <div className=' text-[15px] font-medium '>
                                            faisalsandhu106@gmail.com
                                        </div>
                                        <div onClick={toggleProfile} className='flex items-center justify-center cursor-pointer w-7 h-7 rounded-full'>
                                            <RiCloseLargeFill className='text-2xl font-extrabold text-[#5800cb]' />
                                        </div>
                                    </div>
                                    <div className='flex items-center flex-col mt-2 w-full'>
                                        <div className='relative flex items-center justify-center w-full mt-2'>
                                            <img src="/pic/profile.png" alt="Profile_Img" className='w-16 h-16 border-2 rounded-full object-cover cursor-pointer ' />
                                            <div className='absolute top-[75%] flex items-center justify-center w-6 h-6 rounded-full bg-white'>
                                                <IoCameraOutline className='text-lg text-black' />
                                            </div>
                                        </div>
                                        <div>
                                            <p className='mt-4'>Hi, {loginUser}</p>
                                        </div>
                                        <div className='flex items-center justify-center mt-6 px-5 py-[6px] border-2 rounded-full cursor-pointer border-[#cccccc] '>
                                            <a className=' text-blue-700 text-[14px] font-medium ' href="">Manage your Google Account</a>
                                        </div>
                                    </div>
                                    <div className='flex justify-center w-full gap-1 mt-7'>
                                        <button className='flex items-center justify-center w-[45%] min-h-12 gap-3 text-nowrap cursor-pointer rounded-l-full'>
                                            <div className='flex items-center justify-center w-6 h-6 rounded-full bg-gray-200 '>
                                                <IoMdAdd className=' text-blue-700 text-[21px] font-semibold ' />
                                            </div>
                                            <p className='text-[14.5px] font-medium'>
                                                Add account
                                            </p>
                                        </button>
                                        <button onClick={handleLogout} type='submit' className='flex items-center justify-center w-[45%] min-h-12 gap-3 text-nowrap cursor-pointer rounded-r-full'>
                                            <div className='flex items-center justify-center w-6 h-6 rounded-full bg-gray-200 '>
                                                <PiSignOutBold className='text-blue-700 text-[21px] font-semibold' />
                                            </div>
                                            <p className='text-[14.5px] font-medium'>
                                                Sign out
                                            </p>
                                        </button>
                                    </div>
                                    <div className='flex items-center justify-center w-full py-5 gap-4'>
                                        <a href='' className='xs:text-[0.92em] md:text-[0.9em]'>Privacy Policy</a>
                                        <a href='' className='xs:text-[0.92em] md:text-[0.9em]'>Term of Serviec</a>
                                    </div>
                                    <div className='flex items-center justify-end flex-col mt-10 w-full xs:text-[0.92em] md:text-[0.9em]'>
                                        <p>
                                            All Rights Reserved
                                        </p>
                                        <p>
                                            Copyright © 2025 || Apna Store
                                        </p>
                                    </div>
                                    <ToastContainer />
                                </motion.div>
                            )

                        }
                        {/* -----------------------------User Profile DropDown------------------------------------ */}
                    </div>
                    {/* -------------------------------User Profile Column--------------------------------------- */}
                </div>


                {/* ----------------------------------Responsive Navbar----------------------------------- */}
                {
                    isMenu ?
                        <div onClick={toggleMenbar} className='xs:text-[1.3em] font-medium cursor-pointer xs:inline-flex lg:hidden'>
                            <RiMenuLine />
                        </div>
                        :
                        <div onClick={toggleMenbar} className='xs:text-[1.3em] font-medium cursor-pointer xs:inline-flex lg:hidden'>
                            <RiCloseLargeFill />
                        </div>
                }
                {
                    !isMenu && (
                        <div className='header-theme absolute top-14 left-0 z-[60] flex items-center justify-start flex-col pt-10 w-full min-h-[100vh]'>
                            <div className='flex items-center justify-start pl-5 w-full h-auto'>
                                <div className='flex items-center gap-x-2'>
                                    <p className='text-[1.1em] font-semibold'>Theme:) </p>
                                    {storedValue === "dark" ? (
                                        <div
                                            onClick={() => setStoredValue("")}
                                            className='flex items-center gap-x-2 px-3 py-2 rounded-md text-[1.1em] bg-white text-black'>
                                            <CiLight />
                                        </div>
                                    )
                                        :
                                        (
                                            <button
                                                onClick={() => setStoredValue("dark")}
                                                className='flex items-center gap-x-2 px-3 py-2 rounded-md text-[1.1em] bg-gray-700 text-white'>
                                                <MdOutlineDarkMode />
                                            </button>
                                        )
                                    }
                                </div>
                            </div>
                            <ul className='flex items-center justify-center flex-col pt-20 gap-y-5 w-full xs:text-[1.2em] md:text-[1.32em] font-medium capitalize'>
                                <NavLink onClick={toggleMenbar} to='/home' className='lg:text-[1em] xl:text-[0.97em] cursor-pointer'>
                                    <li>Home</li>
                                </NavLink>
                                <NavLink onClick={toggleMenbar} to='/service' className='lg:text-[1em] xl:text-[0.97em] cursor-pointer'>
                                    <li>Service</li>
                                </NavLink>
                                <NavLink onClick={toggleMenbar} to='/shop' className='lg:text-[1em] xl:text-[0.97em] cursor-pointer'>
                                    <li>Shop</li>
                                </NavLink>
                                <NavLink onClick={toggleMenbar} to='/contact' className='lg:text-[1em] xl:text-[0.97em] cursor-pointer'>
                                    <li>Contact</li>
                                </NavLink>
                            </ul>
                        </div>
                    )
                }
                {/* ----------------------------------Responsive Navbar----------------------------------- */}
            </div>
        </>
    )
}

export default Header