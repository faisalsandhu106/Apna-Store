import React from 'react'
import { TbTruckDelivery } from "react-icons/tb";
import { MdSecurity } from "react-icons/md";
import { GiReceiveMoney } from "react-icons/gi";
import { RiSecurePaymentFill } from "react-icons/ri";

const ServiceSec = () => {
    return (
        <>
            <div className="grid xs:grid-cols-1 md:grid-cols-3 justify-items-center xs:pt-5 sm:pt-7 lg:pt-10 xl:pt-16 pb-10 xs:gap-y-4 w-full h-auto">
                <div className='flex items-center xs:justify-center md:justify-end w-full'>
                    <div className="service-container flex flex-col items-center justify-center gap-y-3 xs:w-[320px] xs:h-[120px] md:w-[220px] md:h-[200px] lg:w-[280px] lg:h-[240px] xl:w-[300px] xl:h-[270px] rounded-lg">
                        <TbTruckDelivery className='text-3xl text-blue-600' />
                        <p className='xs:text-[0.94em] sm:text-[0.86em] lg:text-[0.9em] capitalize'>super fast and free delivrey</p>
                    </div>
                </div>
                <div className="grid grid-rows-2 justify-items-center gap-y-4 w-full">
                    <div className="service-container flex flex-col items-center justify-center gap-y-3 xs:w-[320px] xs:h-[120px] md:w-[240px] md:h-[150px] lg:w-[300px] lg:h-[190px] xl:w-[400px] xl:h-[200px] rounded-lg">
                        <MdSecurity className='text-3xl text-blue-600' />
                        <p className='xs:text-[0.94em] sm:text-[0.86em] lg:text-[0.9em] capitalize'>non-contact shipping</p>
                    </div>
                    <div className="service-container flex flex-col items-center justify-center gap-y-3 xs:w-[320px] xs:h-[120px] md:w-[240px] md:h-[150px] lg:w-[300px] lg:h-[190px] xl:w-[400px] xl:h-[200px] rounded-lg">
                        <GiReceiveMoney className='text-3xl text-blue-600' />
                        <p className='xs:text-[0.94em] sm:text-[0.86em] lg:text-[0.9em] capitalize'>money-back guaranteed</p>
                    </div>
                </div>
                <div className='flex items-center xs:justify-center md:justify-start w-full'>
                    <div className='service-container flex flex-col items-center justify-center gap-y-3 xs:w-[320px] xs:h-[120px] md:w-[220px] md:h-[200px] lg:w-[280px] lg:h-[240px] xl:w-[300px] xl:h-[270px] rounded-lg'>
                        <RiSecurePaymentFill className='text-3xl text-blue-600' />
                        <p className='xs:text-[0.94em] sm:text-[0.86em] lg:text-[0.9em] capitalize'>super secure payment system</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ServiceSec