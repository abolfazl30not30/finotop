import React from 'react'
import Image from 'next/image'

export default function ProductCard() {
    
  return (
    <div className='rounded-3xl bgProduct flex flex-col items-center px-14 py-6 space-y-4 '>
        <div className='w-1/2 flex justify-center '>
            <Image className='w-full ' src={"/images/Capa_1.svg"} height={0} width={0} alt='product'/>    
        </div>
        <div>
            <p className='text-white text-xl font-semibold leading-8'>
                مگا چارت
            </p>
        </div>

    </div>
  )
}
