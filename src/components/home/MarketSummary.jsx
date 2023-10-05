import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function MarketSummary() {
  return (
    <div className='flex md:flex-row mx-8 flex-col xl:gap-4 gap-3 lg:gap-4 mt-24 mb-12 justify-between 2xl:mx-36 xl:mx-24 md:mx-8  '>
      <div className='  flex flex-col space-y-6 justify-between shadow-xl shadow-[#b0b0b040] rounded-2xl px-4 py-8 sm:mx-32 md:mx-0 mx-6'>
        <div className='bg-[#0141AC] rounded-3xl text-white sm:text-base text-sm flex justify-center items-center my-4  px-4 py-2 font-semibold md:mx-0 '>
            <p>خلاصه بازار</p>
        </div>
        <div className='flex items-center justify-between sm:gap-2 gap-1 '>
            <div className='text-[#777777] sm:text-sm text-xs font-semibold'>
                <p>
                  تراز لحظه ای  پول حقیقی 
                </p>
            </div>
            <div className='bg-[#F8F8F8] py-2 px-3 rounded-xl text-left'>
              <p className='sm:text-base text-xs'>
                21.546
              </p>
            </div>
        </div>
        <div className='flex items-center justify-between sm:gap-2 gap-1 '>
            <div className='text-[#777777] sm:text-sm text-xs font-semibold'>
                <p>
                سرانه لحظه ای معاملات
                </p>
            </div>
            <div className='bg-[#F8F8F8] py-2 px-3  rounded-xl text-left'>
              <p className='sm:text-base text-xs'>
              21.546.554
              </p>
            </div>
        </div>
        <div className='flex items-center justify-between sm:gap-2 gap-1 '>
            <div className='text-[#777777] sm:text-sm text-xs font-semibold'>
                <p>
                برترین صندوق
                </p>
            </div>
            <div className='bg-[#F8F8F8] py-2 px-3 rounded-xl text-left'>
              <p className='sm:text-base text-xs'>
              21.545.50
              </p>
            </div>
        </div>
        <div className='flex items-center justify-between sm:gap-2 gap-1 '>
            <div className='text-[#777777] sm:text-sm text-xs font-semibold'>
                <p>
                برترین آپشن ها
                </p>
            </div>
            <div className='bg-[#F8F8F8] py-2 px-3 rounded-xl text-left'>
              <p className='sm:text-base text-xs'>
                21.546
              </p>
            </div>
        </div>
        <div className='flex justify-center'>
          <Image className='w-full h-32' src={"/images/25694870_sl_022321_41020_29 2.svg"} width={0} height={0}/>
          
        </div>


      </div>
      <div className="relative md:w-5/6 lg:w-4/5 2xl:w-2/3 xl:w-[70%]">
        <Image className='w-full' src={"/images/image 1.svg"} height={0} width={0} alt='market summary'/>
        <Link href={""}>
          <button className="absolute top-0 bg-[#367AFF]   hover:bg-[#401fac] text-white text-sm px-2 py-0.5 rounded-2xl md:py-1.5  md:px-4  m-4">ورود به مگاچارت</button>
        </Link>
        
      </div>
      
      
    </div>
  )
}
