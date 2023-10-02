import React from 'react'
import Image from 'next/image'

export default function Properties() {
  return (
    <div>
        <div className='text-[#0141AC] font-bold text-3xl text-center mt-16'>
            <p>
                ویژگی های ما

            </p>
        </div>
    <div className='flex justify-between mx-48 gap-16 mt-28'>
        <div>
        <div className=' relative border border-dashed border-[#DFDFDF] rounded-2xl'>
            <div >
                <p className='text-center font-semibold text-lg text-[#777] py-16 px-12'>
                    بزرگ ترین ارائه دهنده محصولات تحلیلی در بورس ایران
                </p>
            </div>
            <div className='absolute w-1/3 -top-[40%] left-[33%] bg-[#F8F8F8] rounded-full p-6'>
                <Image className='w-full' src={"/images/Capa_11.svg"} height={0} width={0} alt='property'/>
            </div>
        </div>
        </div>
        <div>
        <div className=' relative border border-dashed border-[#DFDFDF] rounded-2xl mt-32'>
            <div >
                <p className='text-center font-semibold text-lg text-[#777] py-16 px-12'>
                دارای تیم 30 نفره از متخصصین IT و بازار سرمایه
                </p>
            </div>
            <div className='absolute w-1/3 -top-16 left-[33%] bg-[#F8F8F8] rounded-full p-6'>
                <Image className='w-full' src={"/images/Frame2.svg"} height={0} width={0} alt='property'/>
            </div>
        </div>
        </div>
        <div>
        <div className=' relative border border-dashed border-[#DFDFDF] rounded-2xl mt-20'>
            <div >
                <p className='text-center font-semibold text-lg text-[#777] py-16 px-12'>
                دارای بیش از 12 سال سابقه موفق در بازار سرمایه
                </p>
            </div>
            <div className='absolute w-1/3 -top-16 left-[33%] bg-[#F8F8F8] rounded-full p-6'>
                <Image className='w-full' src={"/images/Capa_12.svg"} height={0} width={0} alt='property'/>
            </div>
        </div>
        </div>
        <div>
        <div className=' relative border border-dashed border-[#DFDFDF] rounded-2xl'>
            <div >
                <p className='text-center font-semibold text-lg text-[#777] py-16 px-12'>
                دقیق ترین اطلاعات تحلیلی از بازار سرمایه
                </p>
            </div>
            <div className='absolute w-1/3 -top-16 left-[33%] bg-[#F8F8F8] rounded-full p-6'>
                <Image className='w-full' src={"/images/Group4.svg"} height={0} width={0} alt='property'/>
            </div>
        </div>
        </div>
        
    </div>
    </div>
  )
}
