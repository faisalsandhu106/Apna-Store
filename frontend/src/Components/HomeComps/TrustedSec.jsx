import React from 'react'
const trustCompanie = [
    {
        'id': 1,
        'pic-url': './pic/levis-clothing-vector-logo.png'
    },
    {
        'id': 2,
        'pic-url': './pic/images (2).png'
    },
    {
        'id': 3,
        'pic-url': './pic/fedex-square.png.webp'
    },
    {
        'id': 4,
        'pic-url': './pic/images.png'
    },
    {
        'id': 5,
        'pic-url': './pic/nbc-logo-vector.png'
    },
]
const TrustedSec = () => {

    return (
        <>
            <div className='flex flex-col items-center justify-center px-4 xs:pt-20 sm:pt-24 lg:pt-28 xl:pt-36 pb-10 w-full h-auto overflow-hidden'>
                <div className='capitalize xs:text-[1.35rem] md:text-[1.4rem] lg:text-[1.65rem] xl:text-[1.45rem] text-center font-semibold'>
                    <h2>Trusted By 50+ Companies</h2>
                </div>
                <div className="flex flex-wrap items-center justify-center xs:gap-x-12 md:gap-x-16 xl:gap-x-24 gap-y-6 pt-14 pb-8 w-full h-auto">
                    {trustCompanie.map((item, id) => {
                        return (
                            <div key={id} className='xs:w-[20%] md:w-[10%] lg:w-[10%] xl:w-[6%] overflow-hidden'>
                                <img className='w-full h-auto bg-cover' src={item['pic-url']} alt="companies_logo" />
                            </div>
                        )
                    })}
                </div>
            </div >
        </>
    )
}

export default TrustedSec