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
import { PiSignOutBold } from "react-icons/pi";
import { FiShoppingCart } from 'react-icons/fi';
import { UseCartContext } from '../ContextAPI/CartContext';
import { GrUpdate } from 'react-icons/gr';

const Header = () => {
    const [isMenu, setIsMenu] = useState(true);
    const [isProfile, setIsProfile] = useState(true);
    const [UserName, setUserName] = useState('');  // State to hold logged-in user's name
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
        setUserName(localStorage.getItem("UserName"))
    })

    const handleLogout = () => {
        localStorage.removeItem("Token")      // Clear stored token
        localStorage.removeItem("UserName")   // Clear stored user name
        localStorage.removeItem("LastName")
        localStorage.removeItem("Email")
        localStorage.removeItem("Address")
        hendleSuccess('Logout Successfully')
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
            <div className='header-theme fixed top-0 left-0 z-[50] flex items-center justify-between xs:px-4 md:px-7 xl:px-8 py-3 gap-x-4 w-full h-auto capitalize shadow-sm duration-150'>
                <NavLink to='/home' className='xs:text-[1.3em] md:text-[1.2em] xl:text-[1.3em] font-medium cursor-pointer'>
                    <h1>Logo</h1>
                </NavLink>
                <div className='flex items-center justify-end lg:gap-x-12 xl:gap-x-20 w-full h-auto'>
                    {/* -------------------------------Navbar Page Links--------------------------------------- */}
                    <ul className='xs:hidden lg:inline-flex flex items-center justify-center lg:gap-x-6 xl:gap-x-9'>
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
                        <NavLink to='/admin/dashboard' className='lg:text-[1em] xl:text-[0.97em] cursor-pointer'>
                            <li>Admin</li>
                        </NavLink>
                    </ul>
                    {/* -------------------------------Navbar Page Links--------------------------------------- */}

                    {/* -------------------------------User Profile-------------------------------------- */}
                    <div className='flex items-center gap-x-4 w-fit h-auto'>
                        {/* --------------------------------Total-item-Cart------------------------------------- */}
                        <NavLink to={'./cartlist'} className="text-[1.4em] lg:pr-4">
                            <FiShoppingCart />
                            <div className='absolute top-3 xs:right-[105px] md:right-32 lg:right-40 lg:mr-2 p-[8px] w-4 h-4 bg-red-600 text-white text-[0.7rem] font-medium rounded-full flex items-center justify-center'>
                                {total_item}
                            </div>
                        </NavLink>
                        {/* --------------------------------Total-item-Cart-------------------------------------- */}

                        {/* -------------------------------Dark Light Button------------------------------------- */}
                        <div className='w-fit h-auto xs:hidden lg:inline-flex'>
                            {storedValue === "dark" ? (
                                <div
                                    onClick={() => setStoredValue("")}
                                    className='text-[1.4em] cursor-pointer duration-100'>
                                    <CiLight />
                                </div>
                            )
                                :
                                (
                                    <div
                                        onClick={() => setStoredValue("dark")}
                                        className='text-[1.4em] cursor-pointer duration-100'>
                                        <MdOutlineDarkMode />
                                    </div>
                                )
                            }
                        </div>
                        {/* ------------------------------Dark Light Button-------------------------------------- */}

                        {/* -----------------------------User Profile DropDown------------------------------------ */}
                        <div>
                            <div className='relative xs:w-10 xs:h-10 rounded-full border-2 xs:ml-[6px] md:ml-4 lg:ml-0 border-gray-300 overflow-hidden'>
                                <img onClick={toggleProfile} className='w-full h-auto bg-cover cursor-pointer' src="/pic/profile.png" alt="rofile_Img" />
                            </div>
                            {
                                !isProfile && (
                                    <motion.div
                                        initial={{ y: -20, opacity: 0 }}
                                        whileInView={{ y: 0, opacity: 1 }}
                                        transition={{ duration: 0, ease: easeIn }}
                                        className='header-theme ProductComp fixed top-[70px] z-[50] right-[4%] px-2 py-5 xs:w-[92%] md:w-[50%] md:h-auto lg:w-[40%] xl:w-[30%] h-auto rounded-lg duration-300 shadow-lg'>
                                        <div className='flex items-center justify-between w-full px-4'>
                                            <div className='w-2'></div>
                                            <div onClick={toggleProfile} className='flex items-center justify-center cursor-pointer w-7 h-7 rounded-full'>
                                                <RiCloseLargeFill className='text-2xl font-extrabold text-[#9664d6]' />
                                            </div>
                                        </div>
                                        <div className='flex items-center flex-col mt-2 w-full'>
                                            <div className='relative flex items-center justify-center w-full mt-2'>
                                                <img src="/pic/profile.png" alt="Profile_Img" className='w-16 h-16 border-2 rounded-full object-cover cursor-pointer ' />
                                                <div className='absolute top-[75%] flex items-center justify-center w-6 h-6 rounded-full bg-white'>
                                                    <IoCameraOutline className='text-lg text-black' />
                                                </div>
                                            </div>
                                            <div className='mt-4'>
                                                {UserName ? `${'Hi, ' + UserName}` : 'Please, Login'}
                                            </div>
                                            <div className='flex items-center justify-center mt-6 px-5 py-[6px] border-2 rounded-full cursor-pointer border-[#cccccc] '>
                                                <a className=' text-blue-700 text-[14px] font-medium ' href="">Manage your Google Account</a>
                                            </div>
                                        </div>
                                        <div className='flex justify-center w-full gap-1 mt-7'>
                                            <NavLink to={`/user/profile`} onClick={toggleProfile} className='logout-btn flex items-center justify-center w-[35%] min-h-11 gap-x-2 text-[0.94em] text-nowrap cursor-pointer rounded-l-full'>
                                                <div className='header-theme ProductComp flex items-center justify-center w-6 h-6 rounded-full'>
                                                    <GrUpdate className='text-blue-500 text-[15px] font-semibold ' />
                                                </div>
                                                <p className='font-medium'>
                                                    Profile
                                                </p>
                                            </NavLink>
                                            <a href='/login' onClick={handleLogout} type='submit' className='logout-btn flex items-center justify-center w-[35%] min-h-11 gap-x-2 text-[0.94em] text-nowrap cursor-pointer rounded-r-full'>
                                                <div className='header-theme ProductComp flex items-center justify-center w-6 h-6 rounded-full'>
                                                    <PiSignOutBold className='text-blue-500 text-[15px] font-semibold' />
                                                </div>
                                                <p className='font-medium'>
                                                    Sign out
                                                </p>
                                            </a>
                                        </div>
                                        <div className='flex items-center justify-center w-full py-5 gap-4'>
                                            <div className='xs:text-[0.92em] md:text-[0.9em]'>Privacy Policy</div>
                                            <div className='xs:text-[0.92em] md:text-[0.9em]'>Term of Serviec</div>
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
                        </div>
                        {/* -----------------------------User Profile DropDown------------------------------------ */}
                    </div>
                    {/* -------------------------------User Profile--------------------------------------- */}
                </div>

                {/* ----------------------------------Responsive Navbar----------------------------------- */}
                <div className='w-fit h-auto'>
                    {
                        isMenu ?
                            <div onClick={toggleMenbar} className='text-[1.4em] cursor-pointer xs:inline-flex lg:hidden'>
                                <RiMenuLine />
                            </div>
                            :
                            <div onClick={toggleMenbar} className='text-[1.4em] cursor-pointer xs:inline-flex lg:hidden'>
                                <RiCloseLargeFill />
                            </div>
                    }
                    {
                        !isMenu && (
                            <motion.div
                                initial={{ y: 500 }}
                                whileInView={{ y: 0 }}
                                transition={{ duration: 0.6, ease: [0, 0.71, 0.2, 1.01] }}
                                className='header-theme absolute top-14 left-0 z-[60] flex items-center justify-start flex-col pt-10 w-full min-h-[100vh]'>
                                <div className='flex items-center justify-start pl-5 w-full h-auto'>
                                    {storedValue === "dark" ? (
                                        <div
                                            onClick={() => setStoredValue("")}
                                            className='flex items-center gap-x-2 text-[1.5em] cursor-pointer duration-100'>
                                            <p className='text-[0.8em] font-semibold'>Theme:)</p>
                                            <CiLight />
                                        </div>
                                    )
                                        :
                                        (
                                            <div
                                                onClick={() => setStoredValue("dark")}
                                                className='flex items-center gap-x-2 text-[1.5em] cursor-pointer duration-100'>
                                                <p className='text-[0.8em] font-semibold'>Theme:)</p>
                                                <MdOutlineDarkMode />
                                            </div>
                                        )
                                    }
                                </div>
                                <ul className='flex items-center justify-center flex-col pt-40 gap-y-4 w-full xs:text-[1.2em] md:text-[1.32em] font-semibold uppercase'>
                                    <NavLink onClick={toggleMenbar} to='/home' className='text-[1em]'>
                                        <li>Home</li>
                                    </NavLink>
                                    <NavLink onClick={toggleMenbar} to='/service' className='text-[1em]'>
                                        <li>Service</li>
                                    </NavLink>
                                    <NavLink onClick={toggleMenbar} to='/shop' className='text-[1em]'>
                                        <li>Shop</li>
                                    </NavLink>
                                    <NavLink onClick={toggleMenbar} to='/contact' className='text-[1em]'>
                                        <li>Contact</li>
                                    </NavLink>
                                    <NavLink onClick={toggleMenbar} to='/admin/dashboard' className='text-[1em]'>
                                        <li>Admin</li>
                                    </NavLink>
                                </ul>
                            </motion.div>
                        )
                    }
                </div>
                {/* ----------------------------------Responsive Navbar----------------------------------- */}
            </div>
        </>
    )
}

export default Header