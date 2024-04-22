"use client"
import React from 'react'
import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux';
import { changeTimeCandleSlice } from '@/redux/slices/timeCandleChartSlice';
import DayCandle from './candle/DayCandle';
import WeekCandle from './candle/WeekCandle';
import MonthCandle from './candle/MonthCandle';
import YearCandle from './candle/YearCandle';
import FiveYearCandle from './candle/FiveYearCandle';
export default function Candle() {
    const timeCandleChart=useSelector((store)=>store.timeCandleChart.value)
    const dispatch=useDispatch()
  return (
    <div className='bg-[#FFF] rounded-2xl p-4 cartShadow'>
      <div className=' flex flex-col  justify-center space-y-3 '>
        <div>
          <Link href={""}>
            <button className=" top-0 right-0 bg-[#367AFF]   hover:bg-[#401fac] text-white text-sm px-4 py-2 rounded-2xl ">ورود به مگاچارت</button>
          </Link>
        </div>
        <div className='mx-auto'>
            {timeCandleChart} 
        </div>
        <div className='flex justify-around gap-3 mx-auto bg-[#F8F8F8] text-[#777] rounded-2xl w-full p-1'>
          <div>
            <button onClick={()=>dispatch(changeTimeCandleSlice(<DayCandle/>))} className={timeCandleChart.type.name === "DayCandle" ? "text-[#07A0E6] border-b border-[#07A0E6]":""  } >
              روز
            </button>
          </div>
          <div>
            <button onClick={()=>dispatch(changeTimeCandleSlice(<WeekCandle/>))} className={timeCandleChart.type.name === "WeekCandle" ? "text-[#07A0E6] border-b border-[#07A0E6]":""   } >
              هفته
            </button>
          </div>
          <div>
            <button onClick={()=>dispatch(changeTimeCandleSlice(<MonthCandle/>))} className={timeCandleChart.type.name === "MonthCandle" ? "text-[#07A0E6] border-b border-[#07A0E6]":""   } >
              1 ماه
            </button>
          </div>
          <div>
            <button onClick={()=>dispatch(changeTimeCandleSlice(<YearCandle/>))} className={timeCandleChart.type.name === "YearCandle" ? "text-[#07A0E6] border-b border-[#07A0E6]":""   } >
              1 سال
            </button>
          </div>
          <div>
            <button onClick={()=>dispatch(changeTimeCandleSlice(<FiveYearCandle/>))} className={timeCandleChart.type.name === "FiveYearCandle" ? "text-[#07A0E6] border-b border-[#07A0E6]":""   } >
              5 سال
            </button>
            
          </div>
        </div>
        

      </div>
    </div>
  )
}
