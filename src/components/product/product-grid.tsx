import React from 'react'
import ProductItem from './product-item'

const ProductsGrid = () => {
  return (
    <div className='w-full h-auto grid grid-cols-10 gap-6 mt-8'>
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