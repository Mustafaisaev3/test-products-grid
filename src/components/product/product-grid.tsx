import React from 'react'
import ProductItem from './product-item'

const ProductsGrid = () => {
  return (
    <div className='w-full h-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 lg:grid-cols-8 gap-6 mt-8'>
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
    </div>
  )
}

export default ProductsGrid