import React from 'react'
import Image from 'next/image'

export default function WatchList() {
  return (
    <div className='bgWatchList space-y-4 flex flex-col justify-center items-center'>
        <div className='inline-flex justify-center items-center w-2/5  bg-white rounded-b'>
            <Image className='w-full px-6 py-1.5 ' src={"/images/Frame.svg"} height={0} width={0} alt='watch list'/>
        </div>
        <div>
            <p className='text-center text-sm leading-5 text-[#777] font-bold px-3'>
                همه چیو با هم ببین! 
            </p>
        </div>
        <div className=''>
            <p className='text-center text-sm leading-5 text-[#777] mb-4 px-3'>
               سرانه حقیقی حقوقی، 
                حجم تعدیلی، فاکتورهای بنیادی، جریان لحظه ای پول رو در هرنماد همراه قیمتش رصد کن
            </p>
        </div>
    </div>
  )
}
