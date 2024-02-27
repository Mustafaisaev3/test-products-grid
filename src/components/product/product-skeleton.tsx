import React from 'react'
import { Skeleton } from '../ui/skeleton'

const ProductSkeleton = () => {
  return (
    <div className='w-full h-[250px] bg-[#262626] rounded-md p-4'>
      <div className="flex flex-col space-y-3">
        <Skeleton className="h-[125px] w-auto rounded-md" />
        <div className="space-y-2">
            <Skeleton className="h-4 w-auto" />
            <Skeleton className="h-4 w-auto" />
            <Skeleton className="h-4 w-auto" />
        </div>
      </div>
    </div>
  )
}

export default ProductSkeleton