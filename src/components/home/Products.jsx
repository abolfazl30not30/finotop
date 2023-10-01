import React from 'react'
import ProductCard from './ProductCard'
import Image from 'next/image'
import WatchList from './WatchList'

export default function Products() {
  return (
    <div className='bg-[#F8F8F8] pt-16 pb-8 space-y-16 px-56'>
      <div>
        <h2 className='text-[#0141AC] text-4xl font-bold text-center '>محصولات ارزش پرداز یکان</h2>
      </div>
      <div className='flex justify-between '>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
      </div>
      <div className='px-8 bg-white  bgCandle rounded-3xl'>
        <div className='space-y-4 p-8 '>
          <div className='flex gap-2'>
            <div className='w-[2%] '>
              <Image className='w-full' src={"/images/Capa_4.svg"}  height={0} width={0} alt='product'/>

            </div>
            <div>
              <p className='text-[#0141AC] text-2xl font-bold '>مگا چارت</p>
            </div>
          </div>
          <div>
            <p className='text-right text-2xl font-bold  text-[#FF9C35]'>
               هرچه از چارت برای تحلیل نیازدارید 
            </p>
          </div>
          <div>
            <p className='text-[#777] text-xl '>
              واچ لیست خودت را بساز 
            </p>
          </div>
          <div className='flex justify-between gap-16'>
            <WatchList/>
            <WatchList/>
            <WatchList/>
            <WatchList/>
            <WatchList/>
          </div>


        </div>
        
      </div>

    </div>
  )
}
