import React from 'react'

const featuredProducts = [
    {
        "id": 1,
        "name": "Wireless Noise-Cancelling Headphones",
        "price": 129.99,
        "picture": "https://pk.hellofaster.com/cdn/shop/files/5_5d3a2193-cb4c-4421-99b8-7fd53c4536d6.jpg?v=1706272783&width=1946",
        "short_description": "Bluetooth over-ear headphones with active noise cancellation.",
        "rating": 4.6
    },
    {
        "id": 2,
        "name": "Smart Fitness Watch",
        "price": 79.50,
        "picture": "https://png.pngtree.com/png-clipart/20241021/original/pngtree-black-smart-watch-on-white-background-png-image_16440165.png",
        "short_description": "Water-resistant fitness tracker with heart-rate and sleep monitoring.",
        "rating": 4.3
    },
    {
        "id": 3,
        "name": "Portable Bluetooth Speaker",
        "price": 39.99,
        "picture": "https://myshop.pk/pub/media/catalog/product/cache/26f8091d81cea4b38d820a1d1a4f62be/_/a/_anker_-myshop-pk-1_13.jpg",
        "short_description": "Compact speaker with deep bass and 12-hour battery life.",
        "rating": 4.5
    },
    {
        "id": 4,
        "name": "4K Action Camera",
        "price": 149.00,
        "picture": "https://m.media-amazon.com/images/I/61Vj8rSjjFL._AC_UF1000%2C1000_QL80_.jpg",
        "short_description": "Ultra HD waterproof action camera with stabilization.",
        "rating": 4.2
    },
    {
        "id": 5,
        "name": "Gaming Mechanical Keyboard",
        "price": 59.99,
        "picture": "https://img.lovepik.com/bg/20240507/Sleek-Black-Desk-Set-Up-3D-Rendered-Image-of-Illuminated_10065411_wh1200.jpg",
        "short_description": "RGB backlit mechanical keyboard with tactile switches.",
        "rating": 4.7
    },
    {
        "id": 6,
        "name": "Ergonomic Office Chair",
        "price": 199.99,
        "picture": "https://images.offerup.com/mcXBToATix28lC3w5gIxY9D3-vE%3D/1200x1200/8c1a/8c1a358f0f3d431680bf165facb95421.jpg",
        "short_description": "Adjustable ergonomic office chair with lumbar support.",
        "rating": 4.4
    },
    {
        "id": 7,
        "name": "USB-C Fast Charger",
        "price": 24.99,
        "picture": "https://m.media-amazon.com/images/I/61DEdHkwPOL._AC_UF1000%2C1000_QL80_.jpg",
        "short_description": "20W fast charger with smart protection chipset.",
        "rating": 4.8
    },
    {
        "id": 8,
        "name": "Electric Toothbrush",
        "price": 49.99,
        "picture": "https://m.media-amazon.com/images/I/91u8TfkTXaL.jpg",
        "short_description": "Rechargeable electric toothbrush with multiple cleaning modes.",
        "rating": 4.3
    },
    {
        "id": 9,
        "name": "LED Desk Lamp",
        "price": 32.00,
        "picture": "https://flyingcart.pk/cdn/shop/files/Screenshot2024-11-29153559.jpg?v=1732876804&width=1445",
        "short_description": "Adjustable LED desk lamp with touch dimming controls.",
        "rating": 4.6
    },
    {
        "id": 10,
        "name": "Cordless Vacuum Cleaner",
        "price": 129.00,
        "picture": "https://store.tineco.com/cdn/shop/files/tineco-pure-one-s11-smart-stickhandheld-vacuum-cleaner-319191.jpg?v=1720762688&width=1214",
        "short_description": "Lightweight cordless vacuum cleaner with strong suction.",
        "rating": 4.1
    },
    {
        "id": 11,
        "name": "Stainless Steel Water Bottle",
        "price": 18.99,
        "picture": "https://bergnerhome.in/cdn/shop/files/BGIN-6565_CML_7246fce4-f374-433a-92e5-7b4eecf77d12.jpg?v=1752251167&width=1500",
        "short_description": "Insulated water bottle keeps drinks cold for 24 hours.",
        "rating": 4.9
    },
    {
        "id": 12,
        "name": "Laptop Cooling Pad",
        "price": 27.99,
        "picture": "https://www.lowyat.net/wp-content/uploads/2024/09/Razer-Laptop-Cooling-Pad-1.jpg",
        "short_description": "Dual-fan laptop cooling pad for overheating protection.",
        "rating": 4.2
    },
    {
        "id": 13,
        "name": "Wireless Charging Stand",
        "price": 29.50,
        "picture": "https://m.media-amazon.com/images/I/61Wbo78P-ZL.jpg",
        "short_description": "Qi-compatible charging stand for phones and earbuds.",
        "rating": 4.4
    },
    {
        "id": 14,
        "name": "Smart Home LED Strip",
        "price": 22.99,
        "picture": "https://cleanlife.com/cdn/shop/products/RGB-Tunable-White-Light-Strip-Stock_7.jpg?v=1644866867&width=2000",
        "short_description": "Color-changing LED strip controllable via mobile app.",
        "rating": 4.5
    },
    {
        "id": 15,
        "name": "Portable Power Bank",
        "price": 34.99,
        "picture": "https://png.pngtree.com/png-vector/20240731/ourmid/pngtree-a-power-bank-png-image_13308902.png",
        "short_description": "10,000mAh compact power bank with fast charging output.",
        "rating": 4.7
    }
]

const FeaturedSec = () => {
    return (
        <>
            <div className='xs:px-4 sm:px-4 lg:px-6 xs:pt-20 sm:pt-16 lg:pt-24 xl:pt-36 pb-10 w-full h-auto overflow-hidden'>
                <div className='flex flex-col items-center justify-center w-full h-auto'>
                    <p className='text-[0.88rem] underline'>
                        Click Me
                    </p>
                    <h1 className='capitalize xs:text-[1.7rem] md:text-[1.6rem] lg:text-[1.8rem] font-semibold'>
                        our feature products
                    </h1>
                </div>
                <div className='grid xs:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 xs:pt-8 sm:pt-10 lg:pt-12 xs:gap-x-3 xs:gap-y-5 sm:gap-x-4 sm:gap-y-8 lg:gap-x-5 lg:gap-y-10 xl:gap-x-5 xl:gap-y-12 w-full h-auto'>
                    {featuredProducts.map((items, id) => {
                        const { name, price, picture, short_description, rating } = items
                        return (
                            <div key={id} className='ProductComp flex items-start justify-between flex-col xs:pt-[10px] gap-y-4 xs:text-[0.94em] sm:text-[0.9em] text-balance border-2 rounded-md overflow-hidden shadow-sm'>
                                <div className='flex items-center flex-col xs:px-[7px] w-full'>
                                    <div className='flex items-center justify-center xs:w-[110px] xs:h-[110px] sm:w-[130px] sm:h-[130px] md:w-[130px] md:h[130px] lg:w-[130px] lg:h-[130px] overflow-hidden'>
                                        <img className='w-full h-auto bg-cover' src={picture} alt="product_img" />
                                    </div>
                                    {/* <div className='pt-4'>
                                        {name.length > 17 ? name.slice(0, 17) + '...' : name}
                                    </div> */}
                                    <div className='pt-4'>
                                        {short_description}
                                    </div>
                                </div>
                                <div className='flex items-center justify-between xs:px-[7px] w-full py-1 text-white bg-gradient-to-r from-[#963FFF] to-[#7022FF]'>
                                    <div>
                                        {rating}
                                    </div>
                                    <div>
                                        ${price.toLocaleString()}
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div >
        </>
    )
}

export default FeaturedSec