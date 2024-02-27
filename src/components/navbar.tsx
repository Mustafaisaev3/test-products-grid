import Search from './search'
import BrandSelect from './brand-select'
import PriceRange from './price-range'

const Navbar = () => {
  return (
    <div className='w-full h-[80px] bg-[#262626] rounded-md p-4 text-white flex items-center justify-between'>
      <Search />
      <div className='w-[300px] flex items-center gap-6'>
        <PriceRange />
        <BrandSelect />
      </div>
    </div>
  )
}

export default Navbar