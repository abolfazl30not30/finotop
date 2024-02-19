import React from 'react'
import Image from 'next/image'

export default function Notes() {
  return (
    <div className='xl:mx-32 sm:mx-12 '>
        <div className='flex items-center gap-2  my-16 space-y-4'>
            <div className='w-[10%] md:w-[8%] lg:w-[5%]'>
                <Image className='w-full' src={"/images/icon_1834050_edited 2.svg"} height={0} width={0} alt='note'/>
            </div>
            <div>
                <p className='text-[#0141AC] font-bold text-3xl'>
                    یادداشت ها
                </p>
            </div>
        </div>
        <div className='grid lg:grid-cols-4  md:grid-cols-3 sm:grid-cols-2 grid-cols-1 justify-between xl:gap-3 md:gap-2 gap-6  sm:mx-0 mx-24'>
        <div className='flex flex-col justify-center items-center rounded-2xl shadow-[0px_2px_10px_0px] shadow-[#b6b6b640] space-y-6 sm:px-10 px-2 py-6'>
        <div className='sm:w-1/2 w-[30%] xl:w-1/3 bg-[#F8F8F8] flex justify-center items-center p-3 rounded-full'>
            <Image className='w-full' src={"/images/Capa_9.svg"} height={0} width={0} alt='note'/>
        </div>
        <div>
            <p className='text-[#0141AC] text-center  sm:text-xl text-base font-bold'>
                تحلیل هفتگی فولاد
            </p>
        </div>
        <div>
            <p className='text-[#0141AC] text-justify sm:text-sm text-xs'>
                هفته اول مهر 1402
            </p>
        </div>
        <div>
            <button className='bg-[#367AFF] hover:bg-[#256eff] rounded-2xl flex gap-2 px-8 py-1 items-center justify-center'>
                <div>
                    <p className='text-white sm:text-base text-sm'>
                        دانلود
                    </p>
                </div>
                <div className='w-1/2'>
                    <Image className='w-full' src={"/images/Capa_10.svg"} height={0} width={0} alt='download'/>
                </div>
            </button>
        </div>

    </div>
    <div className='flex flex-col justify-center items-center rounded-2xl shadow-[0px_2px_10px_0px] shadow-[#b6b6b640] space-y-6 sm:px-10 px-2 py-6'>
        <div className='sm:w-3/5 w-1/3 xl:w-1/3 bg-[#F8F8F8] flex justify-center items-center p-0.5 rounded-full'>
            <Image className='w-full' src={"/images/icon_4408728_edited 3.svg"} height={0} width={0} alt='note'/>
        </div>
        <div>
            <p className='text-[#0141AC] text-center  sm:text-xl text-base font-bold'>
                تحلیل هفتگی طلا
            </p>
        </div>
        <div>
            <p className='text-[#0141AC] text-justify sm:text-sm text-xs'>
                هفته اول مهر 1402
            </p>
        </div>
        <div>
            <button className='bg-[#367AFF] hover:bg-[#256eff] rounded-2xl flex gap-2 px-8 py-1 items-center justify-center'>
                <div>
                    <p className='text-white sm:text-base text-sm'>
                        دانلود
                    </p>
                </div>
                <div className='w-1/2'>
                    <Image className='w-full' src={"/images/Capa_10.svg"} height={0} width={0} alt='download'/>
                </div>
            </button>
        </div>

    </div>
    <div className='flex flex-col justify-center items-center rounded-2xl shadow-[0px_2px_10px_0px] shadow-[#b6b6b640] space-y-6 sm:px-10  px-2 py-6'>
        <div className='sm:w-1/2 w-1/3 xl:w-1/3 bg-[#F8F8F8] flex justify-center items-center p-3 rounded-full'>
            <Image className='w-full' src={"/images/sticker 2.svg"} height={0} width={0} alt='note'/>
        </div>
        <div>
            <p className='text-[#0141AC] text-center sm:text-xl text-base font-bold'>
                تحلیل هفتگی نفت
            </p>
        </div>
        <div>
            <p className='text-[#0141AC] text-justify sm:text-sm text-xs'>
                هفته اول مهر 1402
            </p>
        </div>
        <div>
            <button className='bg-[#367AFF] hover:bg-[#256eff] rounded-2xl flex gap-2 px-8 py-1 items-center justify-center'>
                <div>
                    <p className='text-white sm:text-base text-sm'>
                        دانلود
                    </p>
                </div>
                <div className='w-1/2'>
                    <Image className='w-full' src={"/images/Capa_10.svg"} height={0} width={0} alt='download'/>
                </div>
            </button>
        </div>

    </div>
    <div className='flex flex-col justify-center items-center rounded-2xl shadow-[0px_2px_10px_0px] shadow-[#b6b6b640] space-y-6 xl:px-10 sm:px-8 px-2 py-6'>
        <div className='sm:w-2/5 w-[30%] xl:w-1/3 bg-[#F8F8F8] flex justify-center items-center p-3 rounded-full'>
            <Image className='w-full' src={"/images/Layer_8.svg"} height={0} width={0} alt='note'/>
        </div>
        <div>
            <p className='text-[#0141AC] text-center sm:text-xl text-base font-bold'>
                تحلیل هفتگی بیت کوین
            </p>
        </div>
        <div>
            <p className='text-[#0141AC] text-justify sm:text-sm text-xs'>
                هفته اول مهر 1402
            </p>
        </div>
        <div>
            <button className='bg-[#367AFF] hover:bg-[#256eff] rounded-2xl flex gap-2 px-8 py-1 items-center justify-center'>
                <div>
                    <p className='text-white sm:text-base text-sm'>
                        دانلود
                    </p>
                </div>
                <div className='w-1/2'>
                    <Image className='w-full' src={"/images/Capa_10.svg"} height={0} width={0} alt='download'/>
                </div>
            </button>
        </div>

    </div>
        </div>
    </div>
  )
}
