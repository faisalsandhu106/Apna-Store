import React from 'react'
import { FaInstagram } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLongArrowAltUp } from "react-icons/fa";

const Footer = () => {

    const GoMoveToTop = () => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
    }

    return (
        <>
            <footer className='footer-theme flex flex-col text-white overflow-hidden'>
                <div className='grid xs:grid-cols-1 md:grid-cols-5 xs:gap-y-10 md:justify-items-center py-10 px-4 w-full h-auto xs:text-[0.95em] md:text-[0.85em] lg:text-[0.9em] tracking-[0.2px] leading-[1.5]'>
                    <div className='flex flex-col items-start'>
                        <p className='text-[1.1em] font-semibold'>
                            Talk to us today
                        </p>
                        <button className='mt-3 text-[0.8em]'>
                            Get STARTED
                        </button>
                    </div>
                    <div className='flex flex-col md:col-span-2'>
                        <h3 className='text-[1.05em] font-semibold'>
                            Apna Store
                        </h3>
                        <p className='mt-1 tracking-[0.1px]'>
                            Stay updated with the latest deals, new arrivals, and exclusive offers. Join our newsletter and never miss a great deal again!
                        </p>
                        <div className="flex flex-col mt-4">
                            <p className='mb-2'>
                                Subscribe to get important updates
                            </p>
                            <form action="https://formspree.io/f/xpwqvdya" method="POST" className='flex flex-col justify-center items-start'>
                                <input
                                    className='w-[80%] py-[0.55em] text-[1em]'
                                    type="email"
                                    name='UserEmail'
                                    placeholder='Your Email'
                                    required
                                    autoComplete='off' />
                                <button type='submit' className='mt-4 text-[0.88em] tracking-[0.4px]'>
                                    SUBSCRIBE
                                </button>
                            </form>
                        </div>
                    </div>
                    <div className='flex flex-col gap-y-3'>
                        <p>Follow Us</p>
                        <div className='flex items-center gap-x-4'>
                            <a href="#">
                                <FaInstagram className='text-2xl rounded-md hover:bg-gray-300 hover:text-black duration-100' />
                            </a>
                            <a href="#">
                                <FaFacebookF className='text-2xl rounded-md hover:bg-gray-300 hover:text-black duration-100' />
                            </a>
                            <a href="#">
                                <FaYoutube className='text-2xl rounded-md hover:bg-gray-300 hover:text-black duration-100' />
                            </a>
                        </div>
                    </div>
                    <div className='flex flex-col gap-y-1'>
                        <p>Call Us</p>
                        <a href="tel:3046594966" className='hover:text-[#8080fc] duration-100'>
                            +92 3046594966
                        </a>
                    </div>
                </div>
                <div className='flex items-center justify-between xs:px-3 md:px-8 lg:px-16 py-4 text-wrap xs:text-[0.75em] md:text-[0.85em] border-t-2 border-gray-500'>
                    <p className='xs:hidden md:inline-flex'>
                        Apna Store
                    </p>
                    <p className='xs:w-[80%] md:w-auto'>
                        Copyright © 2025 Design By Faisal Nazir Design By Faisal Nazir
                    </p>
                    <div onClick={GoMoveToTop} className='flex items-center justify-center w-[32px] h-[32px] text-lg cursor-pointer text-black bg-white rounded-full animate-bounce'>
                        <FaLongArrowAltUp />
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer