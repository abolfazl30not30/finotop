"use client"
import React from 'react'
import {BiSolidChevronLeft} from "react-icons/bi"
import { useDispatch, useSelector } from 'react-redux';
import { changeDropDown } from '@/store/slices/dropdownSlice';



export default function TableSummary() {
    const dropdown=useSelector((store)=>store.dropdown.value)
    const dispatch=useDispatch()
  return (
    <div className='bg-white rounded-2xl px-4 py-3'>
        <div className='flex justify-between items-center'>
            <div className=''>
                <div className='flex flex-col justify-between space-y-3 '>
                    <div className=' flex justify-center items-center gap-2'>
                        <div className='w-full'>
                            <button onClick={()=>dropdown==="openSafeBox" ? dispatch(changeDropDown("close")) : dispatch(changeDropDown("openSafeBox"))} className={dropdown === "openSafeBox" ? "w-[120%] flex justify-between items-center  p-2 bg-[#0141AC]  text-white border border-[#F1F1F1] rounded-3xl gap-8" : "w-full flex justify-between items-center  bg-[#367AFF] text-white p-2  border border-[#F1F1F1] rounded-3xl gap-4 "  }>
                                تراز پول صندوق ها <BiSolidChevronLeft/>
                            </button>
                        </div>
                        <div className={dropdown === "openSafeBox" ? "space-y-4 absolute right-64" : "space-y-4 hidden"}>
                            <div>
                                <button className=' w-[250%] flex justify-center items-center bg-[#F8F8F8] text-[#777] p-2  border border-[#EBEBEB] rounded-3xl gap-4 hover:gap-8'>
                                       اهرمی 
                                </button>
                            </div>
                            <div>
                                <button className=' w-[250%] flex justify-center items-center bg-[#F8F8F8] text-[#777] p-2  border border-[#EBEBEB] rounded-3xl gap-4 hover:gap-8'>
                                       سهامی 
                                </button>
                            </div>
                            <div>
                                <button className=' w-[250%] flex justify-center items-center bg-[#F8F8F8] text-[#777] p-2 border border-[#EBEBEB] rounded-3xl gap-4 hover:gap-8'>
                                    ثابت
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-center items-center gap-2'>
                        <div className='w-full'>
                            <button onClick={()=>dropdown==="openEffectivePercentage" ? dispatch(changeDropDown("close")) : dispatch(changeDropDown("openEffectivePercentage"))} className={dropdown === "openEffectivePercentage" ? "w-[120%] flex justify-between items-center  p-2 bg-[#0141AC]  text-white border border-[#F1F1F1] rounded-3xl gap-8" : "w-full flex justify-between items-center  bg-[#367AFF] text-white p-2  border border-[#F1F1F1] rounded-3xl gap-4 "  }>
                                   درصدی های موثر <BiSolidChevronLeft/>
                            </button>
                        </div>
                        <div className={dropdown === "openEffectivePercentage" ? "space-y-4 absolute right-64" : "space-y-4 hidden"}>
                            <div>
                                <button className=' w-[250%] flex justify-center items-center bg-[#F8F8F8] text-[#777] p-2   border border-[#EBEBEB] rounded-3xl gap-4 hover:gap-8'>
                                       اهرمی 
                                </button>
                            </div>
                            <div>
                                <button className=' w-[250%] flex justify-center items-center bg-[#F8F8F8] text-[#777] p-2  border border-[#EBEBEB] rounded-3xl gap-4 hover:gap-8'>
                                       سهامی 
                                </button>
                            </div>
                            <div>
                                <button className=' w-[250%] flex justify-center items-center bg-[#F8F8F8] text-[#777] p-2 border border-[#EBEBEB] rounded-3xl gap-4 hover:gap-8'>
                                    ثابت
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-center items-center gap-2'>
                        <div className='w-full'>
                            <button onClick={()=>dropdown==="openCashFlow" ? dispatch(changeDropDown("close")) : dispatch(changeDropDown("openCashFlow"))} className={dropdown === "openCashFlow" ? "w-[120%] flex justify-between items-center  p-2 bg-[#0141AC]  text-white border border-[#F1F1F1] rounded-3xl gap-8" : "w-full flex justify-between items-center  bg-[#367AFF] text-white p-2  border border-[#F1F1F1] rounded-3xl gap-4 "  }>
                                   جریان نقدینگی <BiSolidChevronLeft/>
                            </button>
                        </div>
                        <div className={dropdown === "openCashFlow" ? "space-y-4 absolute right-60" : "space-y-4 hidden"}>
                            <div>
                                <button className=' w-[250%] flex justify-center items-center bg-[#F8F8F8] text-[#777] p-2  border border-[#EBEBEB] rounded-3xl gap-4 hover:gap-8'>
                                       اهرمی 
                                </button>
                            </div>
                            <div>
                                <button className=' w-[250%] flex justify-center items-center bg-[#F8F8F8] text-[#777] p-2  border border-[#EBEBEB] rounded-3xl gap-4 hover:gap-8'>
                                       سهامی 
                                </button>
                            </div>
                            <div>
                                <button className=' w-[250%] flex justify-center items-center bg-[#F8F8F8] text-[#777] p-2 border border-[#EBEBEB] rounded-3xl gap-4 hover:gap-8'>
                                    ثابت
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-center items-center gap-2'>
                        <div className='w-full'>
                            <button onClick={()=>dropdown==="openOrder" ? dispatch(changeDropDown("close")) : dispatch(changeDropDown("openOrder"))} className={dropdown === "openOrder" ? "w-[120%] flex justify-between items-center  p-2 bg-[#0141AC]  text-white border border-[#F1F1F1] rounded-3xl gap-8" : " w-full flex justify-between items-center  bg-[#367AFF] text-white p-2  border border-[#F1F1F1] rounded-3xl gap-4 "  }>
                                   جهت اردرها <BiSolidChevronLeft/>
                            </button>
                        </div>
                        <div className={dropdown === "openOrder" ? "space-y-4 absolute right-60" : "space-y-4 hidden"}>
                            <div>
                                <button className=' w-[250%] flex justify-center items-center bg-[#F8F8F8] text-[#777] p-2  border border-[#EBEBEB] rounded-3xl gap-4 hover:gap-8'>
                                       اهرمی 
                                </button>
                            </div>
                            <div>
                                <button className=' w-[250%] flex justify-center items-center bg-[#F8F8F8] text-[#777] p-2  border border-[#EBEBEB] rounded-3xl gap-4 hover:gap-8'>
                                       سهامی 
                                </button>
                            </div>
                            <div>
                                <button className=' w-[250%] flex justify-center items-center bg-[#F8F8F8] text-[#777] p-2 border border-[#EBEBEB] rounded-3xl gap-4 hover:gap-8'>
                                    ثابت
                                </button>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
            <div className='w-3/5'>
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
