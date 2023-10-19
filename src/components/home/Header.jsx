"use client"
import React from 'react'
import Image from 'next/image'

export default function Header() {
  const createDataHandler = () => {
    console.log("createDataHandler")
  }
  return (
    <div className='bgHeader'>
      <div className='2xl:px-[10rem]   xl:px-[6rem] lg:px-[4rem] md:px-[3rem] 2xl:py-[6rem] xl:py-[5rem] lg:py-[3rem] md:py-[2rem] p-[3rem] flex flex-col md:items-start items-center text-center md:bg-right bg-center  gap-12 bgTextHeader'>
          <div>
            <h2 className='xl:text-5xl text-4xl font-bold text-[#0141AC]'>
              پلتفرم تحلیل بازار معاملات
            </h2>
          </div>
          <div>
            <h3 className='xl:text-4xl text-3xl font-bold text-[#07A0E6]'>
              دقیق ترین اطلاعات در دست شماست
            </h3>
          </div>
         {/*<div >
            <div className='flex items-center gap-1'>
              <div className='text-2xl text-[#367AFF]'>
                <TiTick/>
              </div>
              <div className='text-[#777777] text-lg'>
                <p>
                  کامل ترین دیتای بازارهای مالی
                </p>
              </div>
            </div>
            <div className='flex items-center gap-1'>
              <div className='text-2xl text-[#367AFF]'>
                <TiTick/>
              </div>
              <div className='text-[#777777] text-lg'>
                <p>
                  بدون نیاز به نصب
               </p>
              </div>
            </div>
            <div className='flex items-center gap-1'>
              <div className='text-2xl text-[#367AFF]'>
                <TiTick/>
              </div>
              <div className='text-[#777777] text-lg'>
                <p>
                  نسخه وب اپلیکیشن
                </p>
              </div>
            </div>
          </div>*/}
          <div>
            <button onClick={createDataHandler} className='bg-[#0141AC]  rounded-full text-white w-max px-8 py-2.5 hover:bg-[#fc9324]'>
              <div className=''>
                <p>
                 خودت دیتاتو بساز
                </p>
              </div>
            </button>
          </div>
      </div>
      <div className='flex justify-center md:hidden'>
      <div className='sm:w-3/4 w-11/12 mx-2'>
        <Image className='w-full' src={"/images/Group\ 594.svg"} width={0} height={0}/>
      </div>
      </div>
    </div>
  )
}
