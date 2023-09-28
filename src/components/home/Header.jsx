"use client"
import React from 'react'
import {TiTick} from "react-icons/ti"

export default function Header() {
  const createDataHandler = () => {
    console.log("createDataHandler")
  }
  return (
    <div className='bgHeader '>
      <div className='px-[10rem] py-[7rem] flex flex-col gap-4'>
          <div>
            <h2 className='text-5xl font-bold text-[#0141AC]'>
              پلتفرم تحلیل بازار معاملات
            </h2>
          </div>
          <div>
            <h3 className='text-4xl font-bold text-[#07A0E6]'>
              دقیق ترین اطلاعات در دست شماست
            </h3>
          </div>
          <div>
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
          </div>
          <div>
            <button onClick={createDataHandler} className='bg-[#FF9C35]  rounded-full text-white w-max px-5 py-1.5 hover:bg-[#fc9324]'>
              <div className=''>
                <p>
                 خودت دیتاتو بساز
                </p>
              </div>
            </button>
          </div>
      </div>
    </div>
  )
}
