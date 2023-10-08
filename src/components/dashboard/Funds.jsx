import React from 'react'

export default function Funds() {
  return (
    <div className='bg-white rounded-2xl px-4 py-3'>
        <div className='space-y-4'>
            <div className='bg-[#367AFF] rounded-2xl px-4 py-2 font-bold text-white text-lg'>
                <p className='text-center'>
                      صندوق ها
                </p>
            </div>
            <div className='flex justify-between items-center gap-4'>
                <div className='grid grid-cols-4 gap-3 justify-center items-center  '>
                    <div >
                        <button className='bg-[#F8F8F8] flex justify-center w-full mx-3 items-center border border-[#EDEDED] rounded-2xl  px-0.5  py-1.5 hover:bg-[#0141AC] hover:text-white'>
                              سرانه حقیقی
                        </button>
                    </div>
                    <div >
                        <button className='bg-[#F8F8F8] flex justify-center w-full mx-3 items-center border border-[#EDEDED] rounded-2xl  px-0.5 py-1.5 hover:bg-[#0141AC] hover:text-white'>
                             ورود پول
                        </button>
                    </div>
                    <div >
                        <button className='bg-[#F8F8F8] flex justify-center w-full mx-3 items-center border border-[#EDEDED] rounded-2xl  px-0.5 py-1.5 hover:bg-[#0141AC] hover:text-white'>
                              ارزش معاملات
                        </button>
                    </div>
                    <div >
                        <button className='bg-[#F8F8F8] flex justify-center w-full mx-3 items-center border border-[#EDEDED] rounded-2xl  px-0.5 py-1.5 hover:bg-[#0141AC] hover:text-white'>
                             ورود درصدی
                        </button>
                    </div>
                    <div >
                        <button className='bg-[#F8F8F8] flex justify-center w-full mx-3 items-center border border-[#EDEDED] rounded-2xl  px-0.5 py-1.5 hover:bg-[#0141AC] hover:text-white'>
                            توان
                        </button>
                    </div>
                    <div >
                        <button className='bg-[#F8F8F8] flex justify-center w-full mx-3 items-center border border-[#EDEDED] rounded-2xl  px-0.5 py-1.5 hover:bg-[#0141AC] hover:text-white'>
                              پتروآگاه
                        </button>
                    </div>
                    <div >
                        <button className='bg-[#F8F8F8] flex justify-center w-full mx-3 items-center border border-[#EDEDED] rounded-2xl  px-0.5 py-1.5 hover:bg-[#0141AC] hover:text-white'>
                              صنم
                        </button>
                    </div>
                    <div >
                        <button className='bg-[#F8F8F8] flex justify-center w-full mx-3 items-center border border-[#EDEDED] rounded-2xl  px-0.5 py-1.5 hover:bg-[#0141AC] hover:text-white'>
                             تمشک
                        </button>
                    </div>
                        
                </div>
                <div className=''>
                    <table className="w-full text-sm text-center border-spacing-y-3 border-separate">
                        <thead className="text-sm text-white font-semibold ">
                            <tr className='text-[#0141AC] border border-[#D3B9DC] '>
                                <th scope="col" className="px-12 py-3 rounded-r-2xl border-y border-r border-[#D3B9DC] ">
                                      نماد
                                </th>
                                <th scope="col" className="px-12 py-3 border-y border-[#D3B9DC]">
                                    آخرین قیمت
                                </th>
                                <th scope="col" className="px-12 py-3 border-y border-[#D3B9DC]">
                                    بازده
                                </th>
                                <th scope="col" className="px-12 py-3 border-y border-[#D3B9DC]">
                                     بازده ماه
                                </th>
                                <th scope="col" className="px-12 py-3 rounded-l-2xl border-y border-l border-[#D3B9DC] ">
                                    ارزش معاملات
                                </th>
                            </tr>
                        </thead>
                        <tbody className='text-[#777] text-sm '>
                            <tr className="bg-[#F8F8F8] ">
                                <td className="px-12 py-3 rounded-r-2xl">
                                        <div className='flex justify-center gap-2 items-center'>
                                           <svg xmlns="http://www.w3.org/2000/svg" width="6" height="6" viewBox="0 0 6 6" fill="none">
                                                <circle cx="3" cy="3" r="3" fill="#D64937"/>
                                            </svg>
                                            <p>
                                                شپنا
                                            </p>
                                        </div>
                                </td>
                                <td className="px-12 py-3">
                                    8.540
                                </td>
                                <td className="px-12 py-3 text-[#D64937]">
                                    0.6%
                                </td>
                                <td className="px-12 py-3 text-[#2BC42C]">
                                     26%
                                </td>
                                <td dir='ltr' className="px-12 py-3 rounded-l-2xl">
                                     1.64 T
                                </td>
                            </tr>
                            <tr className="bg-[#F8F8F8] ">
                                <td className="px-12 py-3 rounded-r-2xl">
                                    <div className='flex justify-center gap-2 items-center'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="6" height="6" viewBox="0 0 6 6" fill="none">
                                            <circle cx="3" cy="3" r="3" fill="#2BC42C"/>
                                        </svg>
                                        <p>
                                            خودرو
                                        </p>
                                    </div>
                                </td>
                                <td className="px-12 py-3">
                                    8.540
                                </td>
                                <td className="px-12 py-3 text-[#D64937]">
                                    0.6%
                                </td>
                                <td className="px-12 py-3 text-[#2BC42C]">
                                     26%
                                </td>
                                <td dir='ltr' className="px-12 py-3 rounded-l-2xl">
                                     1.64 T
                                </td>
                            </tr>
                            <tr className="bg-[#F8F8F8] ">
                                <td className="px-12 py-3 rounded-r-2xl">
                                        <div className='flex justify-center gap-2 items-center'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="6" height="6" viewBox="0 0 6 6" fill="none">
                                                <circle cx="3" cy="3" r="3" fill="#2BC42C"/>
                                            </svg>
                                            <p>
                                                تکاردان
                                            </p>
                                        </div>
                                </td>
                                <td className="px-12 py-3">
                                    8.540
                                </td>
                                <td className="px-12 py-3 text-[#D64937]">
                                    0.6%
                                </td>
                                <td className="px-12 py-3 text-[#2BC42C]">
                                     26%
                                </td>
                                <td dir='ltr' className="px-12 py-3 rounded-l-2xl">
                                     1.64 T
                                </td>
                            </tr>
                            <tr className="bg-[#F8F8F8] ">
                                <td className="px-12 py-3 rounded-r-2xl">
                                        <div className='flex justify-center gap-2 items-center'>
                                           <svg xmlns="http://www.w3.org/2000/svg" width="6" height="6" viewBox="0 0 6 6" fill="none">
                                                <circle cx="3" cy="3" r="3" fill="#D64937"/>
                                            </svg>
                                            <p>
                                                خگستر
                                            </p>
                                        </div>
                                </td>
                                <td className="px-12 py-3">
                                    8.540
                                </td>
                                <td className="px-12 py-3 text-[#D64937]">
                                    0.6%
                                </td>
                                <td className="px-12 py-3 text-[#2BC42C]">
                                     26%
                                </td>
                                <td dir='ltr' className="px-12 py-3 rounded-l-2xl">
                                     1.64 T
                                </td>
                            </tr>
                            <tr className="bg-[#F8F8F8] ">
                                <td className="px-12 py-3 rounded-r-2xl">
                                        <div className='flex justify-center gap-2 items-center'>
                                           <svg xmlns="http://www.w3.org/2000/svg" width="6" height="6" viewBox="0 0 6 6" fill="none">
                                                <circle cx="3" cy="3" r="3" fill="#D64937"/>
                                            </svg>
                                            <p>
                                                ثشاهد
                                            </p>
                                        </div>
                                </td>
                                <td className="px-12 py-3">
                                    8.540
                                </td>
                                <td className="px-12 py-3 text-[#D64937]">
                                    0.6%
                                </td>
                                <td className="px-12 py-3 text-[#2BC42C]">
                                     26%
                                </td>
                                <td dir='ltr' className="px-12 py-3 rounded-l-2xl">
                                     1.64 T
                                </td>
                            </tr>
                        </tbody>
                    </table>

                </div>
            </div>
        </div>
    </div>
  )
}
