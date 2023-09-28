import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function MarketSummary() {
  return (
    <div className='flex gap-8 mt-8 justify-between mx-36'>
      <div className='flex flex-col justify-between shadow-xl shadow-[#b0b0b040] rounded-2xl px-4 py-8 w-1/5'>
        <div className='bg-[#0141AC] rounded-3xl text-white flex justify-center items-center px-4 py-3 font-semibold'>
            <p>خلاصه بازار</p>
        </div>
        <div className='flex items-center justify-between gap-2 '>
            <div className='text-[#777777] text-sm font-semibold'>
                <p>
                  تراز لحظه ای  پول حقیقی 
                </p>
            </div>
            <div className='bg-[#F8F8F8] py-2 px-3 rounded-xl text-left'>
              <p className=''>
                21.546
              </p>
            </div>
        </div>
        <div className='flex items-center justify-between gap-2 '>
            <div className='text-[#777777] text-sm font-semibold'>
                <p>
                سرانه لحظه ای معاملات
                </p>
            </div>
            <div className='bg-[#F8F8F8] py-2 px-3  rounded-xl text-left'>
              <p>
              21.546.554
              </p>
            </div>
        </div>
        <div className='flex items-center justify-between gap-2 '>
            <div className='text-[#777777] text-sm font-semibold'>
                <p>
                برترین صندوق
                </p>
            </div>
            <div className='bg-[#F8F8F8] py-2 px-3 rounded-xl text-left'>
              <p>
              21.545.50
              </p>
            </div>
        </div>
        <div className='flex items-center justify-between gap-2 '>
            <div className='text-[#777777] text-sm font-semibold'>
                <p>
                برترین آپشن ها
                </p>
            </div>
            <div className='bg-[#F8F8F8] py-2 px-3 rounded-xl text-left'>
              <p>
                21.546
              </p>
            </div>
        </div>
        <div className='flex justify-center'>
          <Image className='w-full h-32' src={"/images/25694870_sl_022321_41020_29 2.svg"} width={0} height={0}/>
          
        </div>


      </div>
      <div className="relative w-3/4">
        <Image className='w-full' src={"/images/image 1.svg"} height={0} width={0} alt='market summary'/>
        <Link href={""}>
          <button className="absolute top-0 bg-[#367AFF]   hover:bg-[#401fac] text-white rounded-2xl py-1.5  px-4  m-4">ورود به مگاچارت</button>
        </Link>
        
      </div>
      
      
    </div>
  )
}
