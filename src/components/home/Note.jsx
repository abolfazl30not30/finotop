import React from 'react'
import Image from 'next/image'
export default function Note() {
  return (
    <div className='flex flex-col justify-center items-center rounded-2xl shadow-[0px_2px_10px_0px] shadow-[#b6b6b640] space-y-6 px-24 py-6'>
        <div className='w-1/2 bg-[#ff9c3524] flex justify-center items-center p-3 rounded-full'>
            <Image className='w-full' src={"/images/Capa_9.svg"} height={0} width={0} alt='note'/>
        </div>
        <div>
            <p className='text-[#0141AC] text-justify text-xl font-bold'>
                تحلیل هفتگی فولاد
            </p>
        </div>
        <div>
            <p className='text-[#0141AC] text-justify text-sm'>
                هفته اول مهر 1402
            </p>
        </div>
        <div>
            <button className='bg-[#367AFF] hover:bg-[#256eff] rounded-2xl flex gap-2 px-8 py-1 items-center justify-center'>
                <div>
                    <p className='text-white'>
                        دانلود
                    </p>
                </div>
                <div className='w-1/2'>
                    <Image className='w-full' src={"/images/Capa_10.svg"} height={0} width={0} alt='download'/>
                </div>
            </button>
        </div>

    </div>
  )
}
