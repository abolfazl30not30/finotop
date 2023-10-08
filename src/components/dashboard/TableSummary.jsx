"use client"
import React from 'react'


export default function TableSummary() {
  return (
    <div className='bg-white rounded-2xl px-4 py-3'>
        <div className='flex justify-between items-center'>
            <div className='flex flex-col space-y-6'>
                
            </div>
            <div>
                <table className="w-full text-sm text-center border-spacing-y-3 border-separate">
                    <thead className="text-sm text-white font-semibold ">
                        <tr className='text-[#0141AC] border border-[#D3B9DC] '>
                            <th scope="col" className="px-6 py-3 rounded-r-2xl border-y border-r border-[#D3B9DC] ">
                                  امروز
                            </th>
                            <th scope="col" className="px-6 py-3 border-y border-[#D3B9DC]">
                                 یک هفته
                            </th>
                            <th scope="col" className="px-6 py-3 border-y border-[#D3B9DC]">
                                یک ماه
                            </th>
                            <th scope="col" className="px-6 py-3 rounded-l-2xl border-y border-l border-[#D3B9DC] ">
                                 بازه دلخواه
                            </th>
                        </tr>
                    </thead>
                    <tbody className='text-[#777] text-sm '>
                        <tr className="bg-[#F8F8F8] ">
                            <td className="px-6 py-3 rounded-r-2xl">
                                1256
                            </td>
                            <td className="px-6 py-3">
                                12
                            </td>
                            <td className="px-6 py-3 ">
                                18B
                            </td>
                            <td dir='ltr' className="px-6 py-3 rounded-l-2xl">
                                 1402/01/0 - 1402/06/31
                            </td>
                        </tr>
                        <tr className="bg-[#F8F8F8] ">
                            <td className="px-6 py-3 rounded-r-2xl">
                                1256
                            </td>
                            <td className="px-6 py-3">
                                12
                            </td>
                            <td className="px-6 py-3 ">
                                18B
                            </td>
                            <td dir='ltr' className="px-6 py-3 rounded-l-2xl">
                                 1402/01/0 - 1402/06/31
                            </td>
                        </tr>
                        <tr className="bg-[#F8F8F8] ">
                            <td className="px-6 py-3 rounded-r-2xl">
                                1256
                            </td>
                            <td className="px-6 py-3">
                                12
                            </td>
                            <td className="px-6 py-3 ">
                                18B
                            </td>
                            <td dir='ltr' className="px-6 py-3 rounded-l-2xl">
                                 1402/01/0 - 1402/06/31
                            </td>
                        </tr>
                        <tr className="bg-[#F8F8F8] ">
                            <td className="px-6 py-3 rounded-r-2xl">
                                1256
                            </td>
                            <td className="px-6 py-3">
                                12
                            </td>
                            <td className="px-6 py-3 ">
                                18B
                            </td>
                            <td dir='ltr' className="px-6 py-3 rounded-l-2xl">
                                 1402/01/0 - 1402/06/31
                            </td>
                        </tr>
                        <tr className="bg-[#F8F8F8] ">
                            <td className="px-6 py-3 rounded-r-2xl">
                                1256
                            </td>
                            <td className="px-6 py-3">
                                12
                            </td>
                            <td className="px-6 py-3 ">
                                18B
                            </td>
                            <td dir='ltr' className="px-6 py-3 rounded-l-2xl">
                                 1402/01/0 - 1402/06/31
                            </td>
                        </tr>
                        
                        
                        
                        
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  )
}
