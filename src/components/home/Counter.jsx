import React from 'react'
import Image from 'next/image'
export default function Counter() {
  return (
    <div className='bgCounter py-8'>
        <div className='flex items-center gap-2 justify-center '>
            <div className='w-[2%]'>
                <Image className='w-full' src={"/images/Capa_6.svg"} width={0} height={0}  alt=''/>

            </div>
            <div>
                <p className='font-bold text-[#0141AC] text-3xl '>
                    عملکرد ارزش پرداز یکان
                </p>
            </div>
        </div>
        <div className='flex justify-between px-36'>
            <div className='flex flex-col items-center justify-center space-y-3'>
                <div className='w-1/2'>
                    <Image className='w-full' src={"/images/Capa_7.svg"} height={0} width={0} alt='counter'/>
                </div>
                <div>
                    <p className='text-[#FF9C35] text-justify font-bold text-3xl'>
                        1000+
                    </p>
                </div>
                <div>
                    <p className='text-[#0141AC] text-justify text-xl'>
                        معاملات انجام شده
                    </p>
                </div>

            </div>
            <div className='flex flex-col items-center justify-center space-y-3'>
                <div className='w-2/3'>
                    <Image className='w-full' src={"/images/Layer_1.svg"} height={0} width={0} alt='counter'/>
                </div>
                <div>
                    <p className='text-[#FF9C35] text-justify font-bold text-3xl'>
                        5205+
                    </p>
                </div>
                <div>
                    <p className='text-[#0141AC] text-justify text-xl'>
                        مشتری حقیقی
                    </p>
                </div>

            </div>
            <div className='flex flex-col items-center justify-center space-y-3'>
                <div className='w-3/5'>
                    <Image className='w-full' src={"/images/icon_630593_edited (1) 1.svg"} height={0} width={0} alt='counter'/>
                </div>
                <div>
                    <p className='text-[#FF9C35] text-justify font-bold text-3xl'>
                        300+
                    </p>
                </div>
                <div>
                    <p className='text-[#0141AC] text-justify text-xl'>
                       مشتری حقوقی
                    </p>
                </div>

            </div>
            <div className='flex flex-col items-center justify-center space-y-3'>
                <div className='w-3/4'>
                    <Image className='w-full' src={"/images/Capa_8.svg"} height={0} width={0} alt='counter'/>
                </div>
                <div>
                    <p className='text-[#FF9C35] text-justify font-bold text-3xl'>
                        10200+
                    </p>
                </div>
                <div>
                    <p className='text-[#0141AC] text-justify text-xl'>
                        کاربر فعال
                    </p>
                </div>

            </div>
        </div>
    </div>
  )
}
