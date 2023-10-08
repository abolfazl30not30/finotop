import React from 'react'

export default function TotalMarketInformation() {
  return (
    <div className='bg-white rounded-2xl'>
        <div className='flex flex-col items-center justify-center items-center mx-4  space-y-3'>
            <div>
                <div className="">
                    <table className="w-full text-sm text-center border-spacing-y-3 border-separate">
                        <thead className="text-sm text-white font-semibold ">
                            <tr className='bg-[#367AFF] '>
                                <th scope="col" className="px-6 py-3 rounded-r-2xl">
                                    اطلاعات کل بازار
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    تعداد
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    ارزش
                                </th>
                                <th scope="col" className="px-6 py-3 rounded-l-2xl">
                                    روند
                                </th>
                            </tr>
                        </thead>
                        <tbody className='text-[#777] text-sm '>
                            <tr className="bg-[#F8F8F8] ">
                                <td className="px-6 py-3 rounded-r-2xl ">
                                    صف خرید
                                </td>
                                <td className="px-6 py-3">
                                    96
                                </td>
                                <td className="px-6 py-3">
                                    1231B
                                </td>
                                <td className="px-6 py-3 rounded-l-2xl">
                                    نمودار روند
                                </td>
                            </tr>
                            <tr className="bg-[#F8F8F8]">
                                <td className="px-6 py-3 rounded-r-2xl">
                                    صف فروش
                                </td>
                                <td className="px-6 py-3">
                                    128
                                </td>
                                <td className="px-6 py-3">
                                    1796B
                                </td>
                                <td className="px-6 py-3 rounded-l-2xl">
                                    نمودار روند
                                </td>
                            </tr>
                            <tr className="bg-[#F8F8F8]  ">
                                <td className="px-6 py-3 rounded-r-2xl">
                                   ارزش سفارشات تقاضا
                                </td>
                                <td className="px-6 py-3">
                                   523
                                </td>
                                <td className="px-6 py-3">
                                    ...
                                </td>
                                <td className="px-6 py-3 rounded-l-2xl">
                                    ...
                                </td>
                            </tr>
                            <tr className=" bg-[#F8F8F8] ">
                                <td className="px-6 py-3 rounded-r-2xl">
                                   ارزش سفارشات عرضه
                                </td>
                                <td className="px-6 py-3">
                                    452
                                </td>
                                <td className="px-6 py-3">
                                    ...
                                </td>
                                <td className="px-6 py-3 rounded-l-2xl">
                                    ...
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className='py-3'>
                محل قرارگیری نمودار
            </div>
        </div>
    </div>
  )
}
