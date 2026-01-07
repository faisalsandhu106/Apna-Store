import React from 'react'
import { MdContactMail } from 'react-icons/md';
import { UseAdminContext } from '../Components/ContextAPI/AdminContext';
import LoadingAnimate from '../Components/Common/LoadingAnimate';
import { ToastContainer } from 'react-toastify';
import { NavLink } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';
import { hendleError, hendleSuccess } from '../Components/Utils';

const AdminContactForm = () => {
  const { isContactLoading, getAllcontactForm } = UseAdminContext();
  // console.log("getAllcontactForm", getAllcontactForm)

  if (isContactLoading) {
    return (
      <LoadingAnimate />
    )
  };

  // !---------------------------------
  // *Delete ContactForm In admin Penal
  // !---------------------------------
  const deleteContactFormData = async (id) => {
    const res = await fetch(`https://apna-store-mern-backend.vercel.app/admin/user/contactform/delete/${id}`, {
      method: "DELETE",
      headers: {
        'Content-Type': 'application/json'
      },
    })

    // const data = await res.json()
    // console.log("After Delete", data)

    if (res.ok) {
      hendleSuccess("Contact Form Delete Successfully, Please Refresh Your Page")
    } else {
      hendleError("Contact form Delete Error")
    }
  };

  return (
    <>
      <div className='flex flex-col justify-start xs:px-4 sm:px-6 md:px-8 lg:px-8 xl:px-10 w-full h-auto duration-150'>
        <div className='flex items-center justify-end pb-6 gap-x-2 text-[1.1em] font-semibold'>
          <div className='flex items-center gap-x-1'>
            <p className='border-bottom mt-[4px]'>Contact</p> Form
          </div>
          <MdContactMail className='text-2xl ' />
          <div>
            {getAllcontactForm.length}
          </div>
        </div>
        <div className='grid xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xs:gap-y-8 sm:gap-x-5 lg:gap-x-5 w-full h-auto'>
          {
            getAllcontactForm.map((items, index) => {
              const { _id, name, email, address, message } = items;
              return (
                <div key={index} className='header-theme ProductComp flex flex-col px-5 py-5 w-full h-fit text-[0.99em] rounded-md xs:order-2 md:order-1'>
                  <div className='flex items-center flex-col gap-y-1 w-full h-auto text-[1.1em] font-medium capitalize'>
                    <div className='bg-[#7700ffbd] text-amber-50 flex items-center justify-center w-10 h-10 rounded-full overflow-hidden'>
                      <FaUser />
                    </div>
                    <h1>
                      {`${name}`}
                    </h1>
                  </div>
                  <div className='flex flex-col gap-y-6 mt-9 w-full h-auto'>
                    <div className='custom-input admin-form-border'>
                      {email}
                    </div>

                    <div className='custom-input admin-form-border' >
                      {address}
                    </div>

                    <div className='custom-textarea admin-form-border w-full xs:min-h-[190px] sm:min-h-[120px] xl:min-h-[180px] max-h-[300px] leading-[20px] overflow-hidden'>
                      {message}
                    </div>
                  </div>
                  <div className='flex md:items-center xs:pt-3 sm:pt-4 gap-x-3'>
                    <NavLink to={`/admin/alluser/contactForm/${_id}/edit`} >
                      <button className='px-[10px] py-[5px] text-[0.84em] uppercase hover:bg-blue-800'>
                        Edit
                      </button>
                    </NavLink>
                    <button onClick={() => deleteContactFormData(_id)} className='px-[8px] py-[5px] text-[0.84em] uppercase bg-red-600 hover:bg-red-400 duration-100 bg-gradient-to-b from-none hover:bg-gradient-to-b from-none'>
                      Delete
                    </button>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
      <ToastContainer />
    </>
  )
}

export default AdminContactForm
