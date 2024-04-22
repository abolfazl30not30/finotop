import React from 'react'

export default function MarketSummary() {
  return (
    <div className='bg-white rounded-2xl p-4'>
        <div className='w-full flex flex-col space-y-4 justify-center items-center text-center'>
            <div className='bg-[#367AFF] w-full rounded-2xl px-4 py-2 font-bold text-white text-lg'>
                <p className=''>
                    در یک نگاه
                </p>
            </div>
            <div className='grid grid-cols-4 gap-1.5  px-4'>
                <div >
                    <button className='bg-[#F8F8F8] flex justify-center w-full mx-3 items-center border border-[#EDEDED] rounded-2xl  px-0.5 py-1.5 hover:bg-[#0141AC] hover:text-white'>
                        قدرت خرید حقیقی
                    </button>
                </div>
                <div >
                    <button className='bg-[#F8F8F8] flex justify-center w-full mx-3 items-center border border-[#EDEDED] rounded-2xl  px-0.5 py-1.5 hover:bg-[#0141AC] hover:text-white'>
                        سرانه حقیقی
                    </button>
                </div>
                <div >
                    <button className='bg-[#F8F8F8] flex justify-center w-full mx-3 items-center border border-[#EDEDED] rounded-2xl  px-0.5 py-1.5 hover:bg-[#0141AC] hover:text-white'>
                        منفی به مثبت
                    </button>
                </div>
                <div >
                    <button className='bg-[#F8F8F8] flex justify-center w-full mx-3 items-center border border-[#EDEDED] rounded-2xl  px-0.5 py-1.5 hover:bg-[#0141AC] hover:text-white'>
                        نوسان آپشن
                    </button>
                </div>
                <div >
                    <button className='bg-[#F8F8F8] flex justify-center w-full mx-3 items-center border border-[#EDEDED] rounded-2xl  px-0.5 py-1.5 hover:bg-[#0141AC] hover:text-white'>
                        P/E
                    </button>
                </div>
                <div >
                    <button className='bg-[#F8F8F8] flex justify-center w-full mx-3 items-center border border-[#EDEDED] rounded-2xl  px-0.5 py-1.5 hover:bg-[#0141AC] hover:text-white'>
                         خرید گروهی
                    </button>
                </div>
                <div >
                    <button className='bg-[#F8F8F8] flex justify-center w-full mx-3 items-center border border-[#EDEDED] rounded-2xl  px-0.5 py-1.5 hover:bg-[#0141AC] hover:text-white'>
                         پول هوشمند
                    </button>
                </div>
                <div >
                    <button className='bg-[#F8F8F8] flex justify-center w-full mx-3 items-center border border-[#EDEDED] rounded-2xl  px-0.5 py-1.5 hover:bg-[#0141AC] hover:text-white'>
                        قرارداد آتی
                    </button>
                </div>
            </div>
            <div className='w-full overflow-x-auto'>
                <table className="w-full text-sm text-center border-spacing-y-3 border-separate table-auto overflow-scroll">
                    <thead className="text-sm text-white font-semibold ">
                        <tr className='text-[#0141AC] border border-[#D3B9DC] '>
                            <th scope="col" className="px-6 py-3 rounded-r-2xl border-y border-r border-[#D3B9DC] ">
                                  نماد
                            </th>
                            <th scope="col" className="px-6 py-3 border-y border-[#D3B9DC]">
                                آخرین قیمت
                            </th>
                            <th scope="col" className="px-6 py-3 border-y border-[#D3B9DC]">
                                بازده
                            </th>
                            <th scope="col" className="px-6 py-3 border-y border-[#D3B9DC]">
                                 بازده ماه
                            </th>
                            <th scope="col" className="px-6 py-3 rounded-l-2xl border-y border-l border-[#D3B9DC] ">
                                ارزش معاملات
                            </th>
                        </tr>
                    </thead>
                    <tbody className='text-[#777] text-sm '>
                        <tr className="bg-[#F8F8F8] ">
                            <td className="px-6 py-3 rounded-r-2xl">
                                    <div className='flex justify-center gap-2 items-center'>
                                       <svg xmlns="http://www.w3.org/2000/svg" width="6" height="6" viewBox="0 0 6 6" fill="none">
                                            <circle cx="3" cy="3" r="3" fill="#D64937"/>
                                        </svg>
                                        <p>
                                            شپنا
                                        </p>
                                    </div>
                            </td>
                            <td className="px-6 py-3">
                                8.540
                            </td>
                            <td className="px-6 py-3 text-[#D64937]">
                                0.6%
                            </td>
                            <td className="px-6 py-3 text-[#2BC42C]">
                                 26%
                            </td>
                            <td dir='ltr' className="px-6 py-3 rounded-l-2xl">
                                 1.64 T
                            </td>
                        </tr>
                        <tr className="bg-[#F8F8F8] ">
                            <td className="px-6 py-3 rounded-r-2xl">
                                <div className='flex justify-center gap-2 items-center'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="6" height="6" viewBox="0 0 6 6" fill="none">
                                        <circle cx="3" cy="3" r="3" fill="#2BC42C"/>
                                    </svg>
                                    <p>
                                        خودرو
                                    </p>
                                </div>
                            </td>
                            <td className="px-6 py-3">
                                8.540
                            </td>
                            <td className="px-6 py-3 text-[#D64937]">
                                0.6%
                            </td>
                            <td className="px-6 py-3 text-[#2BC42C]">
                                 26%
                            </td>
                            <td dir='ltr' className="px-6 py-3 rounded-l-2xl">
                                 1.64 T
                            </td>
                        </tr>
                        <tr className="bg-[#F8F8F8] ">
                            <td className="px-6 py-3 rounded-r-2xl">
                                    <div className='flex justify-center gap-2 items-center'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="6" height="6" viewBox="0 0 6 6" fill="none">
                                            <circle cx="3" cy="3" r="3" fill="#2BC42C"/>
                                        </svg>
                                        <p>
                                            تکاردان
                                        </p>
                                    </div>
                            </td>
                            <td className="px-6 py-3">
                                8.540
                            </td>
                            <td className="px-6 py-3 text-[#D64937]">
                                0.6%
                            </td>
                            <td className="px-6 py-3 text-[#2BC42C]">
                                 26%
                            </td>
                            <td dir='ltr' className="px-6 py-3 rounded-l-2xl">
                                 1.64 T
                            </td>
                        </tr>
                        <tr className="bg-[#F8F8F8] ">
                            <td className="px-6 py-3 rounded-r-2xl">
                                    <div className='flex justify-center gap-2 items-center'>
                                       <svg xmlns="http://www.w3.org/2000/svg" width="6" height="6" viewBox="0 0 6 6" fill="none">
                                            <circle cx="3" cy="3" r="3" fill="#D64937"/>
                                        </svg>
                                        <p>
                                            خگستر
                                        </p>
                                    </div>
                            </td>
                            <td className="px-6 py-3">
                                8.540
                            </td>
                            <td className="px-6 py-3 text-[#D64937]">
                                0.6%
                            </td>
                            <td className="px-6 py-3 text-[#2BC42C]">
                                 26%
                            </td>
                            <td dir='ltr' className="px-6 py-3 rounded-l-2xl">
                                 1.64 T
                            </td>
                        </tr>
                        <tr className="bg-[#F8F8F8] ">
                            <td className="px-6 py-3 rounded-r-2xl">
                                    <div className='flex justify-center gap-2 items-center'>
                                       <svg xmlns="http://www.w3.org/2000/svg" width="6" height="6" viewBox="0 0 6 6" fill="none">
                                            <circle cx="3" cy="3" r="3" fill="#D64937"/>
                                        </svg>
                                        <p>
                                            ثشاهد
                                        </p>
                                    </div>
                            </td>
                            <td className="px-6 py-3">
                                8.540
                            </td>
                            <td className="px-6 py-3 text-[#D64937]">
                                0.6%
                            </td>
                            <td className="px-6 py-3 text-[#2BC42C]">
                                 26%
                            </td>
                            <td dir='ltr' className="px-6 py-3 rounded-l-2xl">
                                 1.64 T
                            </td>
                        </tr>
                    </tbody>
                </table>

            </div>
        </div>
    </div>
  )
}
