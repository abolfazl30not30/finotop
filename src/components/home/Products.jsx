"use client"
import React from 'react'
import Image from 'next/image'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Camodity from '../Products/Camodity';
import Derivative from '../Products/Derivative';
import MegaChart from '../Products/MegaChart';
import MegaCodal from '../Products/MegaCodal';
import MegaHolder from '../Products/MegaHolder';
import SafeBox from '../Products/SafeBox';
import Scriner from '../Products/Scriner';
import { useDispatch, useSelector } from 'react-redux';
import { changeProduct } from '@/redux/slices/productSlice';



export default function Products() {
    const product=useSelector((store)=>store.product.value)
    const dispatch=useDispatch()
  const settings = {
    dots: false,
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 7,
    speed: 500,
    draggable: true,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 2000,
    
   

    responsive: [
        {
            breakpoint: 1536,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 1280,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 640,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                centerPadding:"10px"
            }
        }
    ]
  };
  

  return (
    
    <div className='bg-[#F8F8F8] pt-24 pb-8 space-y-16 px-8 sm:px-16 lg:px-32 md:px-24 ' id='products'>
      <div>
        <h2 className='text-[#0141AC] text-2xl sm:text-4xl font-bold text-center '>محصولات ارزش پرداز یکان</h2>
      </div>
      <div className=' gap-2 mx-auto ' dir='rtl'>
      <Slider {...settings} className=''>
      <button onClick={()=>dispatch(changeProduct(<MegaChart/>))} className={product.type.name === "MegaChart" ? "bgProductClick":"bgProduct"  }  >
      <div className='rounded-3xl  flex flex-col items-center justify-center  md:px-4 lg:px-6 px-8 sm:px-4 py-6 space-y-4 '>
        <div className='w-1/2 flex justify-center mx-auto '>
            <Image className='w-full ' src={"/images/capa_1.svg"} height={0} width={0} alt='product'/>    
        </div>
        <div className=''>
            <p className='text-white sm:text-xl md:text-base lg:text-xl text-center font-semibold leading-8 '>
                مگا چارت
            </p>
        </div>
    </div>
      </button>
    <button onClick={()=>dispatch(changeProduct(<MegaCodal/>))} className={product.type.name === "MegaCodal" ? "bgProductClick" : "bgProduct"}>
    <div className='rounded-3xl  flex flex-col items-center justify-center md:px-4 lg:px-6 px-8 sm:px-4 py-6 space-y-4 '>
        <div className='w-1/2 flex justify-center mx-auto'>
            <Image className='w-full ' src={"/images/Capa_15.svg"} height={0} width={0} alt='product'/>    
        </div>
        <div>
            <p className='text-white sm:text-xl md:text-base lg:text-xl font-semibold leading-8 text-center'>
                مگا کدال
            </p>
        </div>

    </div>
    </button>
    <button onClick={()=>dispatch(changeProduct(<SafeBox/>))} className={product.type.name === "SafeBox" ? "bgProductClick" : "bgProduct"}>
    <div className='rounded-3xl  flex flex-col items-center justify-center md:px-4 lg:px-6 px-8 sm:px-4 py-6 space-y-4 '>
        <div className='w-1/2 flex justify-center mx-auto'>
            <Image className='w-full ' src={"/images/layer_7.svg"} height={0} width={0} alt='product'/>    
        </div>
        <div>
            <p className='text-white sm:text-xl md:text-base lg:text-xl font-semibold leading-8 text-center'>
                 صندوق ها
            </p>
        </div>

    </div>
    </button>
    <button onClick={()=>dispatch(changeProduct(<MegaHolder/>))} className={product.type.name === "MegaHolder" ? "bgProductClick" : "bgProduct"} >
    <div className='rounded-3xl  flex flex-col items-center justify-center md:px-4 lg:px-6 px-8 sm:px-4 py-6 space-y-4 '>
        <div className='w-1/2 flex justify-center mx-auto'>
            <Image className='w-full ' src={"/images/Group 6.svg"} height={0} width={0} alt='product'/>    
        </div>
        <div>
            <p className='text-white sm:text-xl md:text-base lg:text-xl font-semibold leading-8 text-center'>
                 مگاهلدر
            </p>
        </div>

    </div>
    </button>
    <button onClick={()=>dispatch(changeProduct(<Derivative/>))} className={product.type.name === "Derivative" ? "bgProductClick" : "bgProduct"} >
    <div className='rounded-3xl  flex flex-col items-center justify-center md:px-4 lg:px-6 px-8 sm:px-4 py-6 space-y-4 '>
        <div className='w-1/2 flex justify-center mx-auto'>
            <Image className='w-full ' src={"/images/Capa_16.svg"} height={0} width={0} alt='product'/>    
        </div>
        <div>
            <p className='text-white sm:text-xl md:text-base lg:text-xl font-semibold leading-8 text-center'>
                 مشتقه
            </p>
        </div>

    </div>
    </button>
    <button onClick={()=>dispatch(changeProduct(<Camodity/>))} className={product.type.name === "Camodity" ? "bgProductClick" : "bgProduct"} >
    <div className='rounded-3xl  flex flex-col items-center justify-center md:px-4 lg:px-6 px-8 sm:px-4 py-6 space-y-4 '>
        <div className='w-1/2 flex justify-center mx-auto'>
            <Image className='w-full ' src={"/images/Line_Expand2.svg"} height={0} width={0} alt='product'/>    
        </div>
        <div>
            <p className='text-white sm:text-xl md:text-base lg:text-xl font-semibold leading-8 text-center'>
                 کامودیتی
            </p>
        </div>

    </div>
    </button>
    <button onClick={()=>dispatch(changeProduct(<Scriner/>))} className={product.type.name === "Scriner" ? "bgProductClick" : "bgProduct"}>
    <div className='rounded-3xl  flex flex-col items-center justify-center md:px-4 lg:px-6 px-8 sm:px-4 py-6 space-y-4 '>
        <div className='w-1/2 flex justify-center mx-auto'>
            <Image className='w-full ' src={"/images/icon_5990150_edited (2) 2.svg"} height={0} width={0} alt='product'/>    
        </div>
        <div>
            <p className='text-white sm:text-xl md:text-base lg:text-xl font-semibold leading-8 text-center'>
                 اسکرینر
            </p>
        </div>

    </div>
    </button>
    </Slider>
      </div>
        {product }
    </div>
  )
}
