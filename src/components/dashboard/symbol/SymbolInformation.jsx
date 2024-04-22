"use client"
import React from 'react'
import { useState } from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SymbolInformation() {
    const [row, setRow] = useState('');

  const handleChangeRowCount = (event) => {
    setRow(event.target.value);
  };

  return (
    <div className='w-full bg-[#FFF] rounded-2xl p-4 cartShadow'>
        <div className=' flex flex-col  justify-center space-y-3 '>
            <div className='flex justify-around flex-wrap px-2 py-3 items-center text-[#777] bg-[#F8F8F8] rounded-3xl'>
                <div  className='flex justify-center gap-2 items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
                        <circle cx="5" cy="5" r="5" fill="#2BC42C"/>
                    </svg>
                    <p className='text-[#0141AC] font-bold '>
                        عالیس
                    </p>
                </div>
                <div>
                    <p className='text-xs'>
                        (بهار روز عالیس چناران)
                    </p>
                </div>
                <div>
                    <p className='text-xs'>
                        فرا بورس  
                    </p>
                </div>
                <div>
                    <p className='text-xs'>
                        غذایی
                    </p>
                </div>
                <div className='flex gap-2 items-center'>
                    <p className='text-[#0141AC] font-bold'>
                        24,100
                    </p>
                    <p className='text-white text-sm bg-[#2BC42C] rounded-md px-2 py-1'>
                        450(1.9%)
                    </p>
                </div>
                <div>
                    <p>
                        17:20:30
                    </p>
                </div>

            </div>
            <div className='flex flex-col justify-center items-center border rounded-3xl border-[#E9E9E9] py-4 px-2'>
                <div>
                    <p className='text-[#0141AC] font-bold' >
                        محور قیمت
                    </p>
                </div>
                <div>
                    اسلاید بار
                </div>
            </div>
            <div className='flex justify-between px-2 items-center'>
                <div>
                    <p className='text-[#0141AC] font-bold'>
                        عمق بازار
                    </p>
                </div>
                
                {/*<div >*/}
                {/*    <FormControl sx={{backgroundColor:"rgba(54, 122, 255, 0.56)",borderRadius:2,borderColor:"rgba(255,255,255,1)",outlineColor:"rgba(255,255,255,1)",padding:0, }}>*/}
                {/*        <Select*/}
                {/*        value={row}*/}
                {/*        onChange={handleChangeRowCount}*/}
                {/*        displayEmpty*/}
                {/*        */}
                {/*        >*/}
                {/*        <MenuItem value="">*/}
                {/*            تعداد ردیف*/}
                {/*        </MenuItem>*/}
                {/*        <MenuItem value={10}>10 ردیف</MenuItem>*/}
                {/*        <MenuItem value={20}>20 ردیف</MenuItem>*/}
                {/*        <MenuItem value={30}>30 ردیف</MenuItem>*/}
                {/*        </Select>*/}
                {/*        */}
                {/*    </FormControl>*/}
                {/*</div>*/}
            </div>
            <div className="font-bold mx-5">
                حجم تقاضا
            </div>
            <div className='flex justify-between px-1 md:px-3 md:px-3 gap-3 items-center'>
                <div className='w-1/2'>
                <table className="w-full text-sm text-center border-spacing-y-3 border-separate">
                    <thead className="text-[0.7rem] md:text-sm text-white font-semibold ">
                        <tr className='text-[#0141AC]  border border-[#D3B9DC] '>
                            <th scope="col" className="px-1 md:px-3 md:px-3 py-3 rounded-r-2xl border-y border-r border-[#D3B9DC] ">
                                  تعداد
                            </th>
                            
                            <th scope="col" className="px-1 md:px-3 md:px-3 py-3 border-y border-[#D3B9DC]">
                                 حجم خرید
                            </th>
                            <th scope="col" className="px-1 md:px-3 md:px-3 py-3 rounded-l-2xl border-y border-l border-[#D3B9DC] ">
                                  قیمت
                            </th>
                        </tr>
                    </thead>
                    <tbody className='text-[#777] text-[0.7rem] md:text-sm font-bold '>
                        <tr className="bg-[#F8F8F8] ">
                            <td className="px-1 md:px-3 md:px-3 py-3 rounded-r-2xl">
                                5
                            </td>
                            
                            <td className="  px-1 md:px-3 md:px-3  ">
                                <p className='bg-[#2bc42c8f] rounded px-2 py-1'>
                                    178,993
                                </p>
                            </td>
                            <td dir='ltr' className="px-1 md:px-3 md:px-3 py-3 rounded-l-2xl">
                                 <p>
                                    24
                                 </p>
                                 <p className='text-[#2bc42c8f] text-xs'>
                                    24
                                 </p>
                            </td>
                        </tr>
                        <tr className="bg-[#F8F8F8] ">
                            <td className="px-1 md:px-3 md:px-3 py-3 rounded-r-2xl">
                                5
                            </td>
                            
                            <td className="  px-1 md:px-3 md:px-3  ">
                                <p className='bg-[#2bc42c8f] rounded px-2 py-1'>
                                    178,993
                                </p>
                            </td>
                            <td dir='ltr' className="px-1 md:px-3 md:px-3 py-3 rounded-l-2xl">
                                 <p>
                                    24
                                 </p>
                                 <p className='text-[#2bc42c8f] text-xs'>
                                    24
                                 </p>
                            </td>
                        </tr>
                        <tr className="bg-[#F8F8F8] ">
                            <td className="px-1 md:px-3 md:px-3 py-3 rounded-r-2xl">
                                5
                            </td>
                            
                            <td className="  px-1 md:px-3 md:px-3  ">
                                <p className='bg-[#2bc42c8f] rounded px-2 py-1'>
                                    178,993
                                </p>
                            </td>
                            <td dir='ltr' className="px-1 md:px-3 md:px-3 py-3 rounded-l-2xl">
                                 <p>
                                    24
                                 </p>
                                 <p className='text-[#2bc42c8f] text-xs'>
                                    24
                                 </p>
                            </td>
                        </tr>
                        <tr className="bg-[#F8F8F8] ">
                            <td className="px-1 md:px-3 md:px-3 py-3 rounded-r-2xl">
                                5
                            </td>
                            
                            <td className="  px-1 md:px-3 md:px-3  ">
                                <p className='bg-[#2bc42c8f] rounded px-2 py-1'>
                                    178,993
                                </p>
                            </td>
                            <td dir='ltr' className="px-1 md:px-3 md:px-3 py-3 rounded-l-2xl">
                                 <p>
                                    24
                                 </p>
                                 <p className='text-[#2bc42c8f] text-xs'>
                                    24
                                 </p>
                            </td>
                        </tr>
                        <tr className="bg-[#F8F8F8] ">
                            <td className="px-1 md:px-3 md:px-3 py-3 rounded-r-2xl">
                                5
                            </td>
                            
                            <td className="  px-1 md:px-3 md:px-3  ">
                                <p className='bg-[#2bc42c8f] rounded px-2 py-1'>
                                    178,993
                                </p>
                            </td>
                            <td dir='ltr' className="px-1 md:px-3 md:px-3 py-3 rounded-l-2xl">
                                 <p>
                                    24
                                 </p>
                                 <p className='text-[#2bc42c8f] text-xs'>
                                    24
                                 </p>
                            </td>
                        </tr>
                    </tbody>
                </table>

                </div>
                <div className='w-1/2'>
                <table className="w-full text-sm text-center border-spacing-y-3 border-separate">
                    <thead className="text-[0.7rem] md:text-sm text-white font-semibold ">
                        <tr className='text-[#0141AC] border border-[#D3B9DC] '>
                            <th scope="col" className="px-1 md:px-3 md:px-3 py-3 rounded-r-2xl border-y border-r border-[#D3B9DC] ">
                                  تعداد
                            </th>
                            <th scope="col" className="px-1 md:px-3 md:px-3 py-3 border-y border-[#D3B9DC]">
                                  حجم خرید
                            </th>
                            <th scope="col" className="px-1 md:px-3 md:px-3 py-3 rounded-l-2xl border-y border-l border-[#D3B9DC] ">
                                  قیمت
                            </th>
                        </tr>
                    </thead>
                    <tbody className='text-[#777] text-[0.7rem] md:text-sm '>
                        <tr className="bg-[#F8F8F8] ">
                            <td className="px-1 md:px-3 md:px-3 py-3 rounded-r-2xl">
                                5
                            </td>
                            
                            <td className="  px-1 md:px-3 md:px-3  ">
                                <p className='bg-[#d649379e] rounded px-2 py-1'>
                                    178,993
                                </p>
                            </td>
                            <td dir='ltr' className="px-1 md:px-3 md:px-3 py-3 rounded-l-2xl">
                                 <p>
                                    24
                                 </p>
                                 <p className='text-[#D64937] text-xs'>
                                    24
                                 </p>
                            </td>
                        </tr>
                        <tr className="bg-[#F8F8F8] ">
                            <td className="px-1 md:px-3 md:px-3 py-3 rounded-r-2xl">
                                5
                            </td>
                            
                            <td className=" px-1 md:px-3 md:px-3  ">
                                <p className='bg-[#d649379e] rounded px-2 py-1'>
                                    178,993
                                </p>
                            </td>
                            <td dir='ltr' className="px-1 md:px-3 md:px-3 py-3 rounded-l-2xl">
                                 <p>
                                    24
                                 </p>
                                 <p className='text-[#D64937] text-xs'>
                                    24
                                 </p>
                            </td>
                        </tr>
                        <tr className="bg-[#F8F8F8] ">
                            <td className="px-1 md:px-3 md:px-3 py-3 rounded-r-2xl">
                                5
                            </td>
                            
                            <td className="  px-1 md:px-3 md:px-3  ">
                                <p className='bg-[#d649379e] rounded px-2 py-1'>
                                    178,993
                                </p>
                            </td>
                            <td dir='ltr' className="px-1 md:px-3 md:px-3 py-3 rounded-l-2xl">
                                 <p>
                                    24
                                 </p>
                                 <p className='text-[#D64937] text-xs'>
                                    24
                                 </p>
                            </td>
                        </tr>
                        <tr className="bg-[#F8F8F8] ">
                            <td className="px-1 md:px-3 md:px-3 py-3 rounded-r-2xl">
                                5
                            </td>
                            
                            <td className="  px-1 md:px-3 md:px-3  ">
                                <p className='bg-[#d649379e] rounded px-2 py-1'>
                                    178,993
                                </p>
                            </td>
                            <td dir='ltr' className="px-1 md:px-3 md:px-3 py-3 rounded-l-2xl">
                                 <p>
                                    24
                                 </p>
                                 <p className='text-[#D64937] text-xs'>
                                    24
                                 </p>
                            </td>
                        </tr>
                        <tr className="bg-[#F8F8F8] ">
                            <td className="px-1 md:px-3 md:px-3 py-3 rounded-r-2xl">
                                5
                            </td>
                            
                            <td className="  px-1 md:px-3 md:px-3  ">
                                <p className='bg-[#d649379e] rounded px-2 py-1'>
                                    178,993
                                </p>
                            </td>
                            <td dir='ltr' className="px-1 md:px-3 md:px-3 py-3 rounded-l-2xl">
                                 <p>
                                    24
                                 </p>
                                 <p className='text-[#D64937] text-xs'>
                                    24
                                 </p>
                            </td>
                        </tr>
                    </tbody>
                </table>

                </div>

            </div>
            <div className='flex  px-2 py-2 justify-center items-center text-sm text-[#777] border border-[#E9E9E9] bg-[#F8F8F8] rounded-3xl'>
                <p>
                    نسبت های مالی
                </p>
            </div>
            <div className='grid grid-cols-5 gap-1.5 text-[#0141AC]'>
                <div >
                    <button className='bg-[#F8F8F8] flex justify-center w-full  items-center border border-[#EDEDED] rounded-2xl  px-0.5 py-1.5 hover:bg-[#0141AC] hover:text-white'>
                        P/E
                    </button>
                </div>
                <div >
                    <button className='bg-[#F8F8F8] flex justify-center w-full  items-center border border-[#EDEDED] rounded-2xl  px-0.5 py-1.5 hover:bg-[#0141AC] hover:text-white'>
                          P/E ttm
                    </button>
                </div>
                <div >
                    <button className='bg-[#F8F8F8] flex justify-center w-full  items-center border border-[#EDEDED] rounded-2xl  px-0.5 py-1.5 hover:bg-[#0141AC] hover:text-white'>
                          P/E ttm 
                    </button>
                </div>
                <div >
                    <button className='bg-[#F8F8F8] flex justify-center w-full  items-center border border-[#EDEDED] rounded-2xl  px-0.5 py-1.5 hover:bg-[#0141AC] hover:text-white'>
                         ttm
                    </button>
                </div>
                <div >
                    <button className='bg-[#F8F8F8] flex justify-center w-full  items-center border border-[#EDEDED] rounded-2xl  px-0.5 py-1.5 hover:bg-[#0141AC] hover:text-white'>
                        P/E
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}
