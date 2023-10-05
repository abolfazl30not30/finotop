import React from 'react'
import Image from 'next/image'
export default function Counter() {
  return (
    <div className='bgCounter '>
        
        <div className=' bgColorCounter py-8'>
        <div className='flex items-center gap-2 justify-center '>
            <div className='sm:w-[5%] md:w-[4%] lg:w-[3%] xl:w-[2%] w-[7%]'>
                <Image className='w-full' src={"/images/Capa_6.svg"} width={0} height={0}  alt=''/>

            </div>
            <div>
                <p className='font-bold text-[#0141AC] sm:text-3xl text-2xl '>
                    عملکرد ارزش پرداز یکان
                </p>
            </div>
        </div>
        <div className='grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 justify-between gap-2 2xl:px-36 lg:px-20 sm:px-16 px-8 mt-8'>
            <div className='flex flex-col items-center justify-center space-y-3'>
                <div className='w-1/4'>
                    <Image className='w-full' src={"/images/Capa_7.svg"} height={0} width={0} alt='counter'/>
                </div>
                <div>
                    <p className='text-[#FF9C35] text-center font-bold text-3xl'>
                        1000+
                    </p>
                </div>
                <div>
                    <p className='text-[#0141AC] text-center sm:text-xl'>
                        معاملات انجام شده
                    </p>
                </div>

            </div>
            <div className='flex flex-col items-center justify-center space-y-3'>
                <div className='w-1/4'>
                    <Image className='w-full' src={"/images/Layer_1.svg"} height={0} width={0} alt='counter'/>
                </div>
                <div>
                    <p className='text-[#FF9C35] text-center font-bold text-3xl'>
                        5205+
                    </p>
                </div>
                <div>
                    <p className='text-[#0141AC] text-center sm:text-xl'>
                        مشتری حقیقی
                    </p>
                </div>

            </div>
            <div className='flex flex-col  items-center justify-center sm:mt-0 mt-8 space-y-3'>
                <div className='w-1/4'>
                    <Image className='w-full' src={"/images/icon_630593_edited (1) 1.svg"} height={0} width={0} alt='counter'/>
                </div>
                <div>
                    <p className='text-[#FF9C35] text-center font-bold text-3xl'>
                        300+
                    </p>
                </div>
                <div>
                    <p className='text-[#0141AC] text-center sm:text-xl'>
                       مشتری حقوقی
                    </p>
                </div>

            </div>
            <div className='flex flex-col items-center sm:mt-0 mt-8 justify-center space-y-3'>
                <div className='w-1/4'>
                    <Image className='w-full' src={"/images/Capa_8.svg"} height={0} width={0} alt='counter'/>
                </div>
                <div>
                    <p className='text-[#FF9C35] text-center font-bold text-3xl'>
                        10200+
                    </p>
                </div>
                <div>
                    <p className='text-[#0141AC] text-center sm:text-xl'>
                        کاربر فعال
                    </p>
                </div>

            </div>
        </div>
        </div>
    </div>
  )
}
