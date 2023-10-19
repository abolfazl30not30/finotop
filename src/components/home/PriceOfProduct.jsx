"use client"
import React from 'react'
import Image from 'next/image'
import Slider from "react-slick";
import { useState } from 'react';
import Link from 'next/link';



export default function PriceOfProduct() {
    const [priceProductMegaChart,setPriceProductMegaChart]=useState(0)
    const [priceProductMegaCodal,setPriceProductMegaCodal]=useState(0)
    const [priceProductMegaHolder,setPriceProductMegaHolder]=useState(0)
    const [priceProductSafeBox,setPriceProductSafeBox]=useState(0)
    const priceHandlerMegaChart=(price)=>{
        setPriceProductMegaChart(price)
    }
    const priceHandlerMegaCodal=(price)=>{
        setPriceProductMegaCodal(price)
    }
    const priceHandlerMegaHolder=(price)=>{
        setPriceProductMegaHolder(price)
    }
    const priceHandlerSafeBox=(price)=>{
        setPriceProductSafeBox(price)
    }
    const settings = {
        dots: false,
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 4,
        speed: 500,
        draggable: true,
        autoplay: true,
        arrows: false,
        margin:2,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1536,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerPadding:"10px"
                }
            }
        ]
      };
  return (
    <div className='py-12' id='priceOfProducts'>
        <div className='flex items-center mx-8 my-8 '>
            <div className='w-1/5 sm:w-1/6 md:w-[7%] xl:w-[5%]'>
                <Image className='w-full' src={"/images/icon_3491267_edited (1) 1.svg"} height={0} width={0} alt='coin'/>
            </div>
            <div>
                <p className='text-[#0141AC] text-2xl sm:text-3xl font-bold'>
                قیمت بسته ها
                </p>

            </div>
        </div>
        <div className=' mx-12 lg:mx-24 2xl:mx-12 ' dir='rtl'>
        <Slider {...settings} className='' >
        <div dir='rtl' className='flex flex-col  rounded-2xl shadow-[0px_2px_10px_0px] shadow-[#b6b6b640] space-y-3 px-4 py-2 my-4 scale-95'>
        <div className='w-1/4 sm:w-1/3 md:w-1/4 flex  p-3 rounded-full mx-auto'>
            <Image className='w-full ' src={"/images/Capa_13.svg"} height={0} width={0} alt='note'/>
        </div>
        <div>
            <p className='text-[#0141AC] text-center text-xl font-bold'>
                مگاچارت
            </p>
        </div>
        <div className='flex flex-col justify-center items-center space-y-4 border border-[#EFEFEF] rounded-2xl p-4'>
            <div className='grid md:grid-cols-4 grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 justify-between gap-2 items-center text-base sm:text-xs md:text-base 2xl:text-xs'>
                <button onClick={()=>priceHandlerMegaChart(15)} className='border p-2 border-[#EBEBEB] focus:border-[#FF9C35] rounded-xl'>
                    <p className='text-[#777]'>
                        1 ماهه
                    </p>
                </button>
                <button onClick={()=>priceHandlerMegaChart(45)} className='border p-2 border-[#EBEBEB] focus:border-[#FF9C35] rounded-xl'>
                    <p className='text-[#777]'>
                        3 ماهه
                    </p>
                </button>
                <button onClick={()=>priceHandlerMegaChart(90)} className='border p-2 border-[#EBEBEB] focus:border-[#FF9C35] rounded-xl'>
                    <p className='text-[#777]'>
                        6 ماهه
                    </p>
                </button>
                <button onClick={()=>priceHandlerMegaChart(180)} className='border p-2 border-[#EBEBEB] focus:border-[#FF9C35] rounded-xl'>
                    <p className='text-[#777]'>
                        12 ماهه
                    </p>
                </button>

            </div>
            <div>
                <p className='md:text-xl text-center font-bold mt-4 text-[#FF9C35]'>
                    {priceProductMegaChart} تومان
                </p>
            </div>
        <button>
            <Link href="/" className='text-[#0141AC] text-justify font-semibold'>
               جزییات بیشتر 
               &gt;
            </Link>
        </button>
        <div>
            <button className='bg-[#367AFF] hover:bg-[#256eff] rounded-2xl flex gap-2 sm:px-2 px-6 md:px-6 py-1.5 items-center justify-center'>
                <div className='w-1/8'>
                    <Image className='w-full' src={"/images/Frame3.svg"} height={0} width={0} alt='download'/>
                </div>
                <div>
                    <p className='text-white md:text-base text-xs'>
                        اضافه به سبد خرید
                    </p>
                </div>
            </button>
        </div>
        </div>
    </div>
    <div dir='rtl' className='flex flex-col justify-center items-center rounded-2xl shadow-[0px_2px_10px_0px] shadow-[#b6b6b640] space-y-3 px-4 py-2 my-4 scale-95'>
        <div className='w-1/4 sm:w-1/3 md:w-1/4 mx-auto flex justify-center items-center p-3 rounded-full'>
            <Image className='w-full' src={"/images/Capa_14.svg"} height={0} width={0} alt='note'/>
        </div>
        <div>
            <p className='text-[#0141AC] text-center text-xl font-bold'>
                مگاکدال
            </p>
        </div>
        <div className='flex flex-col justify-center items-center space-y-4 border border-[#EFEFEF] rounded-2xl p-4'>
        <div className='grid md:grid-cols-4 grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 justify-between gap-2 items-center text-base sm:text-xs md:text-base 2xl:text-xs'>
                <button onClick={()=>priceHandlerMegaCodal(15)} className='border p-2 border-[#EBEBEB] focus:border-[#FF9C35] rounded-xl'>
                    <p className='text-[#777]'>
                        1 ماهه
                    </p>
                </button>
                <button onClick={()=>priceHandlerMegaCodal(45)} className='border p-2 border-[#EBEBEB] focus:border-[#FF9C35] rounded-xl'>
                    <p className='text-[#777]'>
                        3 ماهه
                    </p>
                </button>
                <button onClick={()=>priceHandlerMegaCodal(90)} className='border p-2 border-[#EBEBEB] focus:border-[#FF9C35] rounded-xl'>
                    <p className='text-[#777]'>
                        6 ماهه
                    </p>
                </button>
                <button onClick={()=>priceHandlerMegaCodal(180)} className='border p-2 border-[#EBEBEB] focus:border-[#FF9C35] rounded-xl'>
                    <p className='text-[#777]'>
                        12 ماهه
                    </p>
                </button>

            </div>
            <div>
                <p className='md:text-xl text-center font-bold mt-4 text-[#FF9C35]'>
                {priceProductMegaCodal} تومان
                </p>
            </div>
        <button>
            <Link href="/" className='text-[#0141AC] text-justify font-semibold'>
               جزییات بیشتر 
               &gt;
            </Link>
        </button>
        <div>
            <button className='bg-[#367AFF] hover:bg-[#256eff] rounded-2xl flex gap-2 sm:px-2 px-6 md:px-6 py-1.5 items-center justify-center'>
                <div className='w-1/8'>
                    <Image className='w-full' src={"/images/Frame3.svg"} height={0} width={0} alt='download'/>
                </div>
                <div>
                    <p className='text-white md:text-base text-xs'>
                        اضافه به سبد خرید
                    </p>
                </div>
                
            </button>
        </div>
        </div>

    </div>
    <div dir='rtl' className='flex flex-col justify-center items-center rounded-2xl shadow-[0px_2px_10px_0px] shadow-[#b6b6b640] space-y-3 px-4 py-2 my-4 scale-95'>
        <div className='w-1/4 sm:w-1/3 md:w-1/4 mx-auto  flex justify-center items-center p-3 rounded-full'>
            <Image className='w-full' src={"/images/layer_6.svg"} height={0} width={0} alt='note'/>
        </div>
        <div>
            <p className='text-[#0141AC] text-center text-xl font-bold'>
                مگاهلدر
            </p>
        </div>
        <div className='flex flex-col justify-center items-center space-y-4 border border-[#EFEFEF] rounded-2xl p-4'>
            <div className='grid md:grid-cols-4 grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 justify-between gap-2 items-center text-base sm:text-xs md:text-base 2xl:text-xs'>
                <button onClick={()=>priceHandlerMegaHolder(15)} className='border p-2 border-[#EBEBEB] focus:border-[#FF9C35] rounded-xl'>
                    <p className='text-[#777]'>
                        1 ماهه
                    </p>
                </button>
                <button onClick={()=>priceHandlerMegaHolder(45)} className='border p-2 border-[#EBEBEB] focus:border-[#FF9C35] rounded-xl'>
                    <p className='text-[#777]'>
                        3 ماهه
                    </p>
                </button>
                <button onClick={()=>priceHandlerMegaHolder(90)} className='border p-2 border-[#EBEBEB] focus:border-[#FF9C35] rounded-xl'>
                    <p className='text-[#777]'>
                        6 ماهه
                    </p>
                </button>
                <button onClick={()=>priceHandlerMegaHolder(180)} className='border p-2 border-[#EBEBEB] focus:border-[#FF9C35] rounded-xl'>
                    <p className='text-[#777]'>
                        12 ماهه
                    </p>
                </button>

            </div>
            <div>
                <p className='md:text-xl text-center font-bold mt-4 text-[#FF9C35]'>
                {priceProductMegaHolder} تومان
                </p>
            </div>
        <button>
            <Link href="/" className='text-[#0141AC] text-justify font-semibold'>
               جزییات بیشتر 
               &gt;
            </Link>
        </button>
        <div>
            <button className='bg-[#367AFF] hover:bg-[#256eff] rounded-2xl flex gap-2 sm:px-2 px-6 md:px-6 py-1.5 items-center justify-center'>
                <div className='w-1/8'>
                    <Image className='w-full' src={"/images/Frame3.svg"} height={0} width={0} alt='download'/>
                </div>
                <div>
                    <p className='text-white md:text-base text-xs'>
                        اضافه به سبد خرید
                    </p>
                </div>
                
            </button>
        </div>
        </div>

    </div>
    <div dir='rtl' className='flex flex-col justify-center items-center rounded-2xl shadow-[0px_2px_10px_0px] shadow-[#b6b6b640] space-y-3 px-4  py-2 my-4 scale-95'>
        <div className='w-1/4 sm:w-1/3 md:w-1/4 mx-auto flex justify-center items-center p-3 rounded-full'>
            <Image className='w-full' src={"/images/Group 5.svg"} height={0} width={0} alt='note'/>
        </div>
        <div>
            <p className='text-[#0141AC] text-center text-xl font-bold'>
                صندوق ها
            </p>
        </div>
        <div className='flex flex-col justify-center items-center space-y-4 border border-[#EFEFEF] rounded-2xl p-4'>
        <div className='grid md:grid-cols-4 grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 justify-between gap-2 items-center text-base sm:text-xs md:text-base 2xl:text-xs'>
                <button onClick={()=>priceHandlerSafeBox(15)} className='border p-2 border-[#EBEBEB] focus:border-[#FF9C35] rounded-xl'>
                    <p className='text-[#777]'>
                        1 ماهه
                    </p>
                </button>
                <button onClick={()=>priceHandlerSafeBox(45)} className='border p-2 border-[#EBEBEB] focus:border-[#FF9C35] rounded-xl'>
                    <p className='text-[#777]'>
                        3 ماهه
                    </p>
                </button>
                <button onClick={()=>priceHandlerSafeBox(90)} className='border p-2 border-[#EBEBEB] focus:border-[#FF9C35] rounded-xl'>
                    <p className='text-[#777]'>
                        6 ماهه
                    </p>
                </button>
                <button onClick={()=>priceHandlerSafeBox(180)} className='border p-2 border-[#EBEBEB] focus:border-[#FF9C35] rounded-xl'>
                    <p className='text-[#777]'>
                        12 ماهه
                    </p>
                </button>

            </div>  
            <div>
                <p className='md:text-xl text-center font-bold mt-4 text-[#FF9C35]'>
                    {priceProductSafeBox} تومان
                </p>
            </div>
        <button>
            <Link href="/" className='text-[#0141AC] text-justify font-semibold'>
               جزییات بیشتر 
               &gt;
            </Link>
        </button>
        <div>
            <button className='bg-[#367AFF] hover:bg-[#256eff] rounded-2xl flex gap-2 sm:px-2 px-6 md:px-6 py-1.5 items-center justify-center'>
                <div className='w-1/8'>
                    <Image className='w-full' src={"/images/Frame3.svg"} height={0} width={0} alt='download'/>
                </div>
                <div>
                    <p className='text-white md:text-base  text-xs'>
                        اضافه به سبد خرید
                    </p>
                </div>
                
            </button>
        </div>
        </div>

    </div>
    </Slider>
        </div>
        
    </div>
  )
}
