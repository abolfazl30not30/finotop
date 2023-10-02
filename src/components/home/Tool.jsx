import React from 'react'
import Image from 'next/image'
export default function Tool() {
  return (
    <button className='flex gap-2 items-center justify-center border rounded-3xl border-[#367AFF] px-20 py-2.5'>
        <div>
          <div className='w-11/12'>
            <Image className='w-full' src={"/images/Line_Expand.svg"} height={0} width={0} alt="Tool"/>
          </div>
        </div>
        <div className=''>
          <p className='text-xl  text-[#0141AC]  font-semibold'>
            بورس کالا
          </p>
        </div>
    </button>
  )
}
