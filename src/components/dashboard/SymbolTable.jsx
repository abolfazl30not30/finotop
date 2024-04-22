"use client"
import React from 'react'
import {HiOutlineRefresh} from "react-icons/hi"
import {AiOutlinePlusCircle} from "react-icons/ai"
import SwitchSelector from "react-switch-selector";
import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeSymbolSearch } from '@/redux/slices/symbolSearchSlice';


   
export default function SymbolTable() {
    const symbolSearch=useSelector((store)=>store.symbolSearch.value)
    const dispatch=useDispatch()
    const enterKeyHandler = (event) =>{
        if(event.keyCode===13){
            event.preventDefault()
        }

    }
    
    const symbolRef=useRef(null)

    const options = [
        {
          label: "50",
          value: "50",
          selectedBackgroundColor: "white",
          selectedFontColor:"#367AFF",
          
        },
        {
          label: "10",
          value: "10",
          selectedBackgroundColor: "white",
          selectedFontColor:"#367AFF"
        }
      ];
      
      const onChange = newValue => {
        console.log(newValue);
      };
      
      const initialSelectedIndex = options.findIndex(({ value }) => value === "bar");
  return (
    <div className='bg-white rounded-2xl px-4 py-3'>
        <div className='flex justify-between flex-col md:flex-row  gap-2'>
            <div className='space-y-8'>
               <div className='flex gap-2 items-center'>
                <div className='text-[#0141AC] font-bold'>
                    <p>
                        {symbolSearch || "نماد"}
                    </p>
                </div>
                <div>
                    <div dir='ltr' className='h-8 w-16 '>
                        <SwitchSelector
                            onChange={onChange}
                            options={options}
                            initialSelectedIndex={initialSelectedIndex}
                            backgroundColor={"#367AFF"}
                            fontColor={"white"}
                        />
                    </div>
                </div>
               </div>
               <div className='flex gap-3  items-center'>
                <div className='w-full'>
                    <form className="">   
                        <div className="relative flex  justify-center items-center ">
                            <label for="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only">Search</label> 
                            <input ref={symbolRef} onKeyDown={enterKeyHandler}  type="search" id="default-search" className="block w-full p-2 text-sm text-gray-900 placeholder:text-[#777] rounded bg-[#F8F8F8]" placeholder="نماد خود را وارد کنید ....." />
                            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                                
                            </div>       
                        </div>
                    </form>
                </div>
                <button onClick={()=> symbolRef.current.value=""} className='text-[#367AFF] text-3xl'>
                    <HiOutlineRefresh/>
                </button>
                <button onClick={()=>{dispatch(changeSymbolSearch(symbolRef.current.value)) ; symbolRef.current.value=""}}  className='text-[#777] text-3xl'>
                    <AiOutlinePlusCircle/>
                </button>

               </div>
               <div className='grid grid-cols-2 gap-2'>
                <div className=''>
                    <button className='w-full text-center bg-[#367AFF] text-white px-2 py-2 rounded-2xl border text-sm border-[#F1F1F1] hover:bg-[#0141AC]'>حجم خرید بازارگردان بورسی</button>
                </div>
                <div className=''>
                    <button className='w-full text-center bg-[#367AFF] text-white px-2 py-2 rounded-2xl border text-sm border-[#F1F1F1] hover:bg-[#0141AC]'>NAV بیشترین</button>
                </div>
                <div className=''>
                    <button className='w-full text-center bg-[#367AFF] text-white px-2 py-2 rounded-2xl border text-sm border-[#F1F1F1] hover:bg-[#0141AC]'>سهامدار عمده</button>
                </div>
                <div className=''>
                    <button className='w-full text-center bg-[#367AFF] text-white px-2 py-2 rounded-2xl border text-sm border-[#F1F1F1] hover:bg-[#0141AC]'>BS بیشترین</button>
                </div>
                <div className=''>
                    <button className='w-full text-center bg-[#367AFF] text-white px-2 py-2 rounded-2xl border text-sm border-[#F1F1F1] hover:bg-[#0141AC]'>گراف وابستگی</button>
                </div>

               </div>

            </div>
            <div className='w-full md:w-3/5 overflow-x-auto'>
                <table className="w-full text-sm text-center border-spacing-y-3 border-separate table-auto overflow-scroll">
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
