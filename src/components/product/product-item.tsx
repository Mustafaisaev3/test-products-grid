import React from 'react'

const ProductItem = () => {
  return (
    <div className='w-full h-[250px] bg-[#262626] rounded-md p-4'>
      <div className="flex flex-col space-y-3">
        <div className='w-auto h-[125px] rounded-md bg-white text-[#262626] flex items-center p-4'>59a9b5b4-6546-417f-9c0a-7ec1b9385af1</div>
        <div className='w-full h-full flex flex-col text-white'>
          <div>Название</div>
          <div>Цена $</div>
          <div>Бренд</div>
        </div>
      </div>
    </div>
  )
}

export default ProductItem