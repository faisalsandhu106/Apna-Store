import React from 'react'
import { FaLongArrowAltRight } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import HeroSilder from './HeroSilder';

const HeroSec = () => {
    return (
        <>
            <div className='grid xs:grid-cols-1 md:grid-cols-2 px-4 xs:pt-16 sm:pt-10 md:pt-5 lg:pt-10 xl:pt-24 gap-y-10 w-full xs:min-h-[65vh] md:min-h-[50vh] lg:min-h-[45vh] xl:min-h-[80vh]'>
                <div className='flex flex-col justify-center items-start md:mt-0 md:pl-10 lg:pl-20 xs:order-2 md:order-1'>
                    <h4>
                        welcome to
                    </h4>
                    <h1 className='xs:text-[2.22rem] md:text-[2.2rem] lg:text-[2.4rem] xl:text-[3rem] font-semibold'>
                        Apna Store
                    </h1>
                    <p className='py-2 xs:text-[0.89em] md:text-[0.93em] lg:text-[0.96em] tracking-[0.2px] leading-[1.47]'>
                        Welcome to ApnaStore, your trusted online marketplace offering a wide range of high-quality products at unbeatable prices. Whether you're shopping for fashion, electronics, home essentials, beauty products, or daily groceries, ApnaStore brings everything you need right to your doorstep.
                    </p>
                    <NavLink to={'/shop'}>
                        <button className='mt-5 px-5 text-[0.85em] rounded-md'>
                            <p className='flex items-center gap-x-2'>
                                SHOW NOW <FaLongArrowAltRight className='text-lg ' />
                            </p>
                        </button>
                    </NavLink>
                </div>
                <div className='flex items-center justify-center xs:mt-10 w-full overflow-hidden xs:order-1 md:order-2'>
                    <div className='xs:w-[400px] xs:h-[220px] md:w-[340px] md:h-[230px] lg:w-[450px] lg:h-[260px] xl:w-[500px] xl:h-[300px] overflow-hidden'>
                        <HeroSilder />
                    </div>
                </div>
            </div>
        </>
    )
}

export default HeroSec