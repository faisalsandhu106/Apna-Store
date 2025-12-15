import { FaListUl, FaSearch } from 'react-icons/fa'
import { MdGridView } from 'react-icons/md'

const FilterSec = ({ search, setSearch, setFilter, category, setCategory, grid, setGrid, filterProduct }) => {

    const handleInputChange = (event) => {
        event.preventDefault();
        setSearch(event.target.value)
    };

    const handleFilterChange = (event) => {
        event.preventDefault();
        setFilter(event.target.value)
    };

    const handleCategoryChange = (event) => {
        event.preventDefault();
        setCategory(event.target.value)
    };

    const CategoryList = [
        {
            id: '1',
            categoryProduct: 'All',
            value: 'All'

        },
        {
            id: '2',
            categoryProduct: 'groceries',
            value: 'groceries'

        },
        {
            id: '3',
            categoryProduct: 'beauty',
            value: 'beauty'

        },
        {
            id: '4',
            categoryProduct: 'fragrances',
            value: 'fragrances'
        },
        {
            id: '5',
            categoryProduct: 'furniture',
            value: 'furniture'

        },
    ];

    return (
        <>
            {/* Searching ------ Total Product ------ Sorting */}
            <div className='grid xs:grid-cols-1 md:grid-cols-3 items-center gap-y-3 w-full h-auto'>
                <form onSubmit={(e) => e.preventDefault()} className='flex items-center justify-start gap-x-1 h-full'>
                    <input
                        type="text"
                        name='text'
                        value={search}
                        placeholder='Search....'
                        onChange={handleInputChange}
                        className='px-2 py-[6px] xs:w-full sm:w-[82%] lg:w-[75%] xl:w-[65%] rounded-md lowercase'
                    />
                    <div className='border flex items-center justify-center px-2 w-fit h-[98%] rounded-md'>
                        <FaSearch />
                    </div>
                </form>
                <div className='xs:hidden md:inline-flex flex justify-center w-full text-[0.96em]'>
                    <p>
                        {`${filterProduct.length} Available Products`}
                    </p>
                </div>
                <div className='flex xs:justify-between md:justify-end gap-x-7 w-full'>
                    <div id='grid-list-view' className='flex items-center justify-center gap-x-3'>
                        <div className={`p-[7px] rounded-[4px] ${grid ? 'active' : 'unactive'}`} onClick={() => setGrid(true)}>
                            <MdGridView onClick={() => setGrid(true)} />
                        </div>
                        <div className={`p-[5.4px] rounded-[4px] ${!grid ? 'active' : 'unactive'}`} onClick={() => setGrid(false)}>
                            <FaListUl onClick={() => setGrid(false)} />
                        </div>
                    </div>
                    <form action="#">
                        <label htmlFor="sort"></label>
                        <select
                            name="sort"
                            id="sort"
                            onClick={handleFilterChange}
                            className='p-1 rounded-md text-[0.9em] tracking-[0.1px]'>
                            <option value="lowest">Price (lowest)</option>
                            <option value="highest">Price (highest)</option>
                            <option value="a-z">A-Z</option>
                            <option value="z-a">Z-A</option>
                        </select>
                    </form>
                </div>
            </div>

            {/* ---------Searching By Category Method--------- */}
            <div className='text-underLine flex items-center xs:justify-around sm:justify-center gap-x-5 mt-3 py-1 w-full h-auto text-nowrap overflow-x-scroll scrollbar-hide'>
                {
                    CategoryList.map((item, id) => {
                        const { categoryProduct, value } = item
                        return (
                            <button
                                key={id}
                                type='button'
                                name="category"
                                value={value}
                                onClick={handleCategoryChange}
                                className={`text-underLine px-[7px] py-[4px] capitalize cursor-pointer text-[0.76em] font-medium duration-100 ${item === category ? "active" : ''}`}>
                                {categoryProduct}
                            </button>
                        )
                    })
                }

            </div>

        </>
    )
}

export default FilterSec