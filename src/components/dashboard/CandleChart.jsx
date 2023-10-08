import React from 'react'

export default function CandleChart() {
  return (
    <div className='bg-white rounded-2xl py-3 px-4'>
        <div className='flex  justify-between gap-2'>
            <div className='flex flex-col items-center justify-center gap-2 py-8'>
                <div >
                    <button className='bg-[#F8F8F8] text-[#0141AC] rounded-lg border border-[#EDEDED] hover:bg-[#0141AC] hover:text-white py-6 font-semibold px-2'>
                        حقیقی
                    </button>
                </div>
                <div >
                    <button className='bg-[#F8F8F8] text-[#0141AC] rounded-lg border border-[#EDEDED] hover:bg-[#0141AC] hover:text-white py-6 font-semibold px-2'>
                        حقوقی
                    </button>
                </div>
            </div>
            <div className='flex flex-col justify-between items-center'>
                <div className=''>
                    محل قرار گیری نمودار
                </div>
                <div className='flex justify-between items-center gap-2 text-[#777]'>
                    <div >
                        <button className='bg-[#F8F8F8] flex justif-center items-center border border-[#EDEDED] rounded-2xl  px-8 py-1.5 hover:bg-[#0141AC] hover:text-white'>
                            سرانه

                        </button>
                    </div>
                    <div >
                        <button className='bg-[#F8F8F8] flex justif-center items-center border border-[#EDEDED] rounded-2xl  px-8 py-1.5 hover:bg-[#0141AC] hover:text-white'>
                            تعداد

                        </button>
                    </div>
                    <div >
                        <button className='bg-[#F8F8F8] flex justif-center items-center border border-[#EDEDED] rounded-2xl  px-8 py-1.5 hover:bg-[#0141AC] hover:text-white'>
                            ارزش

                        </button>
                    </div>
                    <div >
                        <button className='bg-[#F8F8F8] flex justif-center items-center border border-[#EDEDED] rounded-2xl  px-8 py-1.5 hover:bg-[#0141AC] hover:text-white'>
                            قدرت

                        </button>
                    </div>
                    

                </div>
            </div>
        </div>
    </div>
  )
}
