import React from 'react'

export default function LineChart() {
  return (
    <div className='bg-white rounded-2xl px-4 '>
        <div className='flex flex-col justify-center space-y-3 '>
            <div >
                <button onClick={""} className='bg-[#367AFF] rounded-2xl px-4 py-1.5 font-semibold text-sm  my-3 w-max text-white hover:bg-[#401fac]' >
                    ورود به مگاچارت
                </button>
            </div>
            <div className='flex justify-center items-center'>
                محل قرار گیری نمودار
            </div>
            <div className='grid grid-cols-3 gap-x-2 '>
                <div >
                    <button className='bg-[#F8F8F8] rounded-2xl px-4 py-2 font-semibold text-sm  my-3 text-center  text-[#777] hover:bg-[#0141AC] hover:text-white border border-[#EDEDED] w-full' onClick={""} >
                        ورود و خروج به بازار  
                    </button>
                </div>
                <div >
                    <button className='bg-[#F8F8F8] rounded-2xl px-4 py-2 font-semibold text-sm  my-3 text-center  text-[#777] hover:bg-[#0141AC] hover:text-white border border-[#EDEDED] w-full' onClick={""} >
                         فرابورس 
                    </button>
                </div>
                <div >
                    <button className='bg-[#F8F8F8] rounded-2xl px-4 py-2 font-semibold text-sm  my-3 text-center  text-[#777] hover:bg-[#0141AC] hover:text-white border border-[#EDEDED] w-full' onClick={""} >
                         دلار 
                    </button>
                </div>
                <div >
                    <button className='bg-[#F8F8F8] rounded-2xl px-4 py-2 font-semibold text-sm  my-3 text-center  text-[#777] hover:bg-[#0141AC] hover:text-white border border-[#EDEDED] w-full' onClick={""} >
                        ارزش   
                    </button>
                </div>
                <div >
                    <button className='bg-[#F8F8F8] rounded-2xl px-4 py-2 font-semibold text-sm  my-3 text-center  text-[#777] hover:bg-[#0141AC] hover:text-white border border-[#EDEDED] w-full' onClick={""} >
                         ارزش بازار به ... 
                    </button>
                </div>
                <div >
                    <button className='bg-[#F8F8F8] rounded-2xl px-4 py-2 font-semibold text-sm  my-3 text-center  text-[#777] hover:bg-[#0141AC] hover:text-white border border-[#EDEDED] w-full' onClick={""} >
                          شاخص کل
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}
