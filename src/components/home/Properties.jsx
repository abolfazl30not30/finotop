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
    <div className='grid xl:grid-cols-4 md:grid-cols-3 grid-cols-2 justify-between lg:mx-32 md:mx-20 mx-10 lg:gap-8 md:gap-6 gap-4 mt-28'>
        <div>
        <div className=' relative border border-dashed border-[#DFDFDF] rounded-2xl'>
        <div className='flex justify-center items-center '>
            <div className='absolute w-2/5 sm:w-1/3 md:w-2/5 2xl:w-1/3 bg-[#F8F8F8] rounded-full  p-4 sm:p-6 md:p-4 2xl:p-6'>
                <Image className='w-full' src={"/images/Capa_11.svg"} height={0} width={0} alt='property'/>
            </div>
            </div>
            <div >
                <p className='text-center font-semibold md:text-lg text-[#777] lg:py-20 lg:px-10 sm:px-6 px-2 py-16'>
                    بزرگ ترین ارائه دهنده محصولات تحلیلی در بورس ایران
                </p>
            </div>
            
        </div>
        </div>
        <div>
        <div className=' relative border border-dashed border-[#DFDFDF] rounded-2xl xl:mt-32'>
        <div className='flex justify-center items-center'>
           <div className='absolute w-2/5 sm:w-1/3 md:w-2/5 2xl:w-1/3 bg-[#F8F8F8] rounded-full  p-4 sm:p-6 md:p-4 2xl:p-6'>
                <Image className='w-full' src={"/images/Frame2.svg"} height={0} width={0} alt='property'/>
            </div>
           </div>
            <div >
                <p className='text-center font-semibold md:text-lg text-[#777] lg:py-20 lg:px-10 sm:px-8 px-4 py-16'>
                دارای تیم 30 نفره از متخصصین IT و بازار سرمایه
                </p>
            </div>
           
        </div>
        </div>
        <div>
        <div className=' relative border border-dashed border-[#DFDFDF] rounded-2xl xl:mt-20 md:mt-0 mt-16'>
        <div className='flex justify-center items-center'>
            <div className='absolute w-2/5 sm:w-1/3 md:w-2/5 2xl:w-1/3 bg-[#F8F8F8] rounded-full  p-4 sm:p-6 md:p-4 2xl:p-6'>
                <Image className='w-full' src={"/images/Capa_12.svg"} height={0} width={0} alt='property'/>
            </div>
            </div>
            <div >
                <p className='text-center font-semibold md:text-lg text-[#777] lg:py-20 lg:px-10 sm:px-8 px-4 py-16'>
                دارای بیش از 12 سال سابقه موفق در بازار سرمایه
                </p>
            </div>
            
        </div>
        </div>
        <div>
        <div className=' relative border border-dashed border-[#DFDFDF] rounded-2xl xl:mt-0 mt-16'>
        <div className='flex justify-center items-center'>
            <div className='absolute w-2/5 sm:w-1/3 md:w-2/5 2xl:w-1/3 bg-[#F8F8F8] rounded-full  p-4 sm:p-6 md:p-4 2xl:p-6'>
                <Image className='w-full' src={"/images/Group4.svg"} height={0} width={0} alt='property'/>
            </div>
            </div>
            <div >
                <p className='text-center font-semibold md:text-lg text-[#777] lg:py-20 lg:px-10 sm:px-8 px-4 py-16'>
                دقیق ترین اطلاعات تحلیلی از بازار سرمایه
                </p>
            </div>
            
        </div>
        </div>
        
    </div>
    </div>
  )
}
