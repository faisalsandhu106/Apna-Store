import React from 'react'
import { BsFillSendPlusFill } from "react-icons/bs";
import { FaAddressBook, FaLinkedinIn, FaPhoneAlt, } from 'react-icons/fa';
import { CgProfile } from "react-icons/cg";
import { MdOutlineMailOutline } from 'react-icons/md';
import { NavLink } from 'react-router-dom';

const contactLinks = [
  {
    'id': 1,
    'contactLinksIcon': <FaAddressBook className='text-xl' />,
    'contactInfo': 'Khurrianwala 266RB, Faisalabad, Pakistan',
    'url': 'https://maps.app.goo.gl/uiJtGXsYBnCtVp1h7',
  },
  {
    'id': 2,
    'contactLinksIcon': <MdOutlineMailOutline className='text-xl' />,
    'contactInfo': 'faisalsandhu106@gmail.com',
    'url': 'mailto:faisalsandhu106@gmail.com',
  },
  {
    'id': 3,
    'contactLinksIcon': <FaPhoneAlt className='text-xl' />,
    'contactInfo': '+92 3046594966',
    'url': 'tel:+92 3046594966',
  },
  {
    'id': 4,
    'contactLinksIcon': <CgProfile className='text-xl' />,
    'contactInfo': 'https://faisalnazir-portfolio.',
    'url': 'https://faisalnazir-portfolio.netlify.app/#home',
  },
]

const ContactUs = () => {
  return (
    <>
      <div className='flex flex-col pt-24 pb-10 px-2 w-full h-auto'>
        <div className="w-full xs:px-0 sm:px-4 md:px-10 xs:h-[40vh] xl:h-[60vh]">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27216.032081330206!2d73.25255493706702!3d31.496573593565966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.    1!3m3!1m2!1s0x39226e035f67f90d%3A0xa4d3c7d11054e1be!2sKhurianwala%2C%20Pakistan!5e0!3m2!1sen!2s!4v1742716774173!5m2!1sen!2s" width="100%" height="100%"></iframe>
        </div>
        <div className="grid grid-cols-1 justify-items-center xs:pt-0 md:pt-28 w-full h-auto">
          <h1 className='text-[1.7em] font-semibold xs:hidden md:inline-flex'>
            Contact Us!
          </h1>
          <div className='grid xs:grid-cols-1 md:grid-cols-2 xs:px-[0px] sm:px-[10px] md:px-[6px] lg:px-[50px] xl:px-[160px] pt-20 gap-x-2 w-full'>
            {/* Contact-Form */}
            <form className='flex flex-col items-start justify-center xs:px-[14px] md:px-[30px] lg:px-[45px] xl:px-[60px] py-10 xs:gap-y-6 w-full xs:text-[1em] sm:text-[0.99em] md:text-[0.95em] xl:text-[0.94em] tracking-[0.08px] rounded-md bg-gradient-to-b from-[#722F98] to-[#362A98] xs:order-2 md:order-1'
              action="https://formspree.io/f/xpwqvdya" method="POST">
              <div className='flex items-center justify-center pb-5 w-full h-auto'>
                <h1 className='text-[1.5em] font-semibold text-white'>
                  Send us a message
                </h1>
              </div>
              <input
                type="text"
                placeholder='Name'
                autoComplete='off'
                required
                name='Name'
                className='px-[7px] py-[12px] w-full border-[1px] rounded-[4px] text-white bg-transparent' />

              <input
                type="email"
                placeholder='Email Address'
                autoComplete='off'
                required
                name='Email Address'
                className='px-[7px] py-[12px] w-full border-[1px] rounded-[4px] text-white bg-transparent' />

              <input
                type="text"
                placeholder='Subject'
                autoComplete='off'
                required
                name='Subject'
                className='px-[7px] py-[12px] w-full border-[1px] rounded-[4px] text-white bg-transparent' />

              <textarea
                type="text"
                placeholder='Enter a message'
                autoComplete='off'
                name="Message"
                required
                className='px-[7px] py-[8px] w-full min-h-[160px] max-h-[300px] focus:outline-none border-[1px] rounded-[4px] text-white bg-transparent overflow-y-hidden'>
              </textarea>
              <button type='submit' className='flex items-center justify-center gap-x-2 mt-2 tracking-[0.25px] text-white bg-none hover:bg-none bg-[#C93794] hover:bg-[#a41570]'>
                Submit
                <BsFillSendPlusFill />
              </button>
            </form>
            {/* Form-Info-Links */}
            <div className='flex flex-col items-start justify-start xs:px-[10px] md:px-[30px] lg:px-[45px] xl:px-[60px] py-12 xs:gap-y-9 w-full xs:text-[0.99em] sm:text-[0.99em] md:text-[0.97em] tracking-[0.08px] xs:order-1 md:order-2'>
              <div className='flex items-center justify-center pb-5 w-full h-auto'>
                <h1 className='text-[1.5em] font-semibold'>
                  Get In Touch
                </h1>
              </div>
              {contactLinks.map((items, id) => {
                const { contactLinksIcon, contactInfo, url } = items;
                return (
                  <div key={id} className='flex items-center justify-start w-full xs:gap-x-5 md:gap-x-6'>
                    <div className='w-[50px] h-full'>
                      <NavLink to={url} className='flex items-center justify-center w-[45px] h-[45px] border-2 border-gray-500 rounded-full hover:border-blue-700 hover:text-blue-700 duration-100'>
                        {contactLinksIcon}
                      </NavLink>
                    </div>
                    <NavLink to={url} className='underline hover:text-blue-700 duration-100'>
                      {contactInfo}
                    </NavLink>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ContactUs