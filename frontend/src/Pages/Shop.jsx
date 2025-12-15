import { useState } from 'react'
import LoadingAnimate from '../Components/Common/LoadingAnimate'
import { PiEmptyLight } from 'react-icons/pi'
import ListProductSec from '../Components/ShopComps/ListProductSec'
import GridProductSec from '../Components/ShopComps/GridProductSec'
import FilterSec from '../Components/ShopComps/FilterSec.jsx'
import { UseProductContext } from '../Components/ContextAPI/ProductContext.jsx'

const Shop = () => {
  const [search, setSearch] = useState()
  const [filter, setFilter] = useState("lowest")
  const [category, setCategory] = useState("All")
  const [grid, setGrid] = useState(true)

  const { isLoading, Allproducts } = UseProductContext();

  if (isLoading) {
    return (
      <LoadingAnimate />
    )
  };

  // Search By Input Method-----------------------------
  const searchProduct = (product) => {
    if (search) {
      return product.title.toLowerCase().includes(search.toLowerCase())
    }
    return product
  };

  // Search By Sorting Method-----------------------------
  const sortProduct = (a, b) => {
    if (filter === "lowest") {
      return a.price - b.price
    }

    if (filter === "highest") {
      return b.price - a.price
    }

    if (filter === "a-z") {
      return a.title.localeCompare(b.title)
    }

    if (filter === "z-a") {
      return b.title.localeCompare(a.title)
    }
  };

  // Search By Category Method-----------------------------
  const searchCategory = (categ) => {
    if (category === "All") return categ
    return categ.category === category
  }

  const filterProduct = Allproducts.filter((product) => searchProduct(product) && searchCategory(product) && Allproducts.sort(sortProduct));


  return (
    <>
      <div className='header-theme relative w-full min-h-[100vh] overflow-hidden'>
        {/* ----------FilterSection-------- */}
        <div className='header-theme fixed top-16 z-40 flex flex-col items-center justify-around py-1 xs:px-2 sm:px-5 lg:px-6 xl:px-8 w-full min-h-[130px] border-y-2 border-b-gray-300'>
          <FilterSec
            search={search}
            setSearch={setSearch}
            setFilter={setFilter}
            category={category}
            setCategory={setCategory}
            grid={grid}
            setGrid={setGrid}
            filterProduct={filterProduct}
          />
        </div>
        {/* ----------Product API---------- */}
        <div className='header-theme xs:mt-48 md:mt-44 py-5 w-full min-h-[100vh]'>
          <div className={`${grid ? 'grid xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-6 2xl:grid-cols-7 justify-items-center' : 'grid grid-cols-1'} xs:px-3 sm:px-5 md:px-5 xl:px-10 py-5 xs:gap-x-2 md:gap-x-3 xl:gap-x-4 xs:gap-y-6 md:gap-y-7 xl:gap-y-8 w-full h-full`}>
            {
              grid ?
                filterProduct.map((curElem, index) => {
                  return <GridProductSec curElem={curElem} key={index} />
                })
                :
                filterProduct.map((curElem, index) => {
                  return <ListProductSec curElem={curElem} key={index} />
                })
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default Shop