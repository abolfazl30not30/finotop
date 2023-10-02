import React from 'react'
import Image from 'next/image'
import Tool from './Tool'
import EventTool from './EventTool'

export default function Tools() {
  return (
    <div className='space-y-4 px-56 py-16'>
        <div className='flex gap-2 items-center'>
            <div className='w-[2%]'>
                <Image className='w-full' src={"/images/Data mining.svg"} height={0} width={0}/>
            </div>
            <div>
                <p className='text-3xl font-bold text-[#0141AC]'>
                    ابزارها
                </p>
            </div>
        </div>
        <div>
            <p className='text-[#777] text-xl'>
                مجامع و رویدادها
            </p>
        </div>
        <div className='flex'>
            <div>
                <div className='flex justify-between gap-2'>
                    <Tool/>
                    <Tool/>
                    <Tool/>
                </div>
                <div className='space-y-4 mt-4'>
                    <div className='flex text-white w-full text-xl items-center justify-between'>
                        <div className='bg-[#0141AC] rounded-3xl px-56 py-3 '>
                            <p>
                                عنوان
                            </p>
                        </div>
                        <div className='bg-[#0141AC] rounded-3xl px-28 py-3 '>
                            <p>
                                تاریخ برگزاری
                            </p>
                        </div>
                    </div>
                    <EventTool/>
                    <EventTool/>
                    <EventTool/>
                    <EventTool/>
                    <EventTool/>

                </div>
            </div>
            <div>
                <div className='bgReport space-y-8 pt-32 pb-12 px-32 mx-16 flex flex-col items-center justify-center rounded-2xl shadow-md shadow-[#9a9a9a40]'>
                    <div className='w-full'>
                        <Image className='w-full' src={"/images/Capa_5.svg"} height={0} width={0} alt='clock'/>
                    </div>
                    <div>
                        <p className='text-2xl font-bold text-[#0141AC]'>
                            ما بهت خبر میدیم
                        </p>

                    </div>
                    <div>
                        <button className='bg-[#367AFF] hover:bg-[#256cf8] rounded-2xl px-6 py-2 text-white font-semibold '>
                            رایگان فعال کن
                        </button>
                    </div>

                </div>
            </div>
        </div>
        
    </div>
  )
}
