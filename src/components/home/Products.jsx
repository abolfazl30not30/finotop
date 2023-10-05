"use client"
import React from 'react'
import Image from 'next/image'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Products() {
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
    <div className='bg-[#F8F8F8] pt-16 pb-8 space-y-16 px-8 sm:px-16 lg:px-32 md:px-24 '>
      <div>
        <h2 className='text-[#0141AC] text-2xl sm:text-4xl font-bold text-center '>محصولات ارزش پرداز یکان</h2>
      </div>
      <div className=' gap-2 mx-auto '>
      <Slider {...settings} className=''>
      <div className='rounded-3xl bgProduct flex flex-col items-center justify-center  md:px-4 lg:px-6 px-8 sm:px-4 py-6 space-y-4 scale-90 '>
        <div className='w-1/2 flex justify-center mx-auto'>
            <Image className='w-full ' src={"/images/capa_1.svg"} height={0} width={0} alt='product'/>    
        </div>
        <div>
            <p className='text-white sm:text-xl md:text-base lg:text-xl text-center font-semibold leading-8'>
                مگا چارت
            </p>
        </div>

    </div>
    <div className='rounded-3xl bgProduct flex flex-col items-center justify-center md:px-4 lg:px-6 px-8 sm:px-4 py-6 space-y-4 scale-90'>
        <div className='w-1/2 flex justify-center mx-auto'>
            <Image className='w-full ' src={"/images/Capa_15.svg"} height={0} width={0} alt='product'/>    
        </div>
        <div>
            <p className='text-white sm:text-xl md:text-base lg:text-xl font-semibold leading-8 text-center'>
                مگا کدال
            </p>
        </div>

    </div>
    <div className='rounded-3xl bgProduct flex flex-col items-center justify-center md:px-4 lg:px-6 px-8 sm:px-4 py-6 space-y-4 scale-90'>
        <div className='w-1/2 flex justify-center mx-auto'>
            <Image className='w-full ' src={"/images/layer_7.svg"} height={0} width={0} alt='product'/>    
        </div>
        <div>
            <p className='text-white sm:text-xl md:text-base lg:text-xl font-semibold leading-8 text-center'>
                 صندوق ها
            </p>
        </div>

    </div>
    <div className='rounded-3xl bgProduct flex flex-col items-center justify-center md:px-4 lg:px-6 px-8 sm:px-4 py-6 space-y-4 scale-90'>
        <div className='w-1/2 flex justify-center mx-auto'>
            <Image className='w-full ' src={"/images/Group 6.svg"} height={0} width={0} alt='product'/>    
        </div>
        <div>
            <p className='text-white sm:text-xl md:text-base lg:text-xl font-semibold leading-8 text-center'>
                 مگاهلدر
            </p>
        </div>

    </div>
    <div className='rounded-3xl bgProduct flex flex-col items-center justify-center md:px-4 lg:px-6 px-8 sm:px-4 py-6 space-y-4 scale-90'>
        <div className='w-1/2 flex justify-center mx-auto'>
            <Image className='w-full ' src={"/images/Capa_16.svg"} height={0} width={0} alt='product'/>    
        </div>
        <div>
            <p className='text-white sm:text-xl md:text-base lg:text-xl font-semibold leading-8 text-center'>
                 مشتقه
            </p>
        </div>

    </div>
    <div className='rounded-3xl bgProduct flex flex-col items-center justify-center md:px-4 lg:px-6 px-8 sm:px-4 py-6 space-y-4 scale-90'>
        <div className='w-1/2 flex justify-center mx-auto'>
            <Image className='w-full ' src={"/images/Line_Expand2.svg"} height={0} width={0} alt='product'/>    
        </div>
        <div>
            <p className='text-white sm:text-xl md:text-base lg:text-xl font-semibold leading-8 text-center'>
                 کامودیتی
            </p>
        </div>

    </div>
    <div className='rounded-3xl bgProduct flex flex-col items-center justify-center md:px-4 lg:px-6 px-8 sm:px-4 py-6 space-y-4 scale-90'>
        <div className='w-1/2 flex justify-center mx-auto'>
            <Image className='w-full ' src={"/images/icon_5990150_edited (2) 2.svg"} height={0} width={0} alt='product'/>    
        </div>
        <div>
            <p className='text-white sm:text-xl md:text-base lg:text-xl font-semibold leading-8 text-center'>
                 اسکرینر
            </p>
        </div>

    </div>
    </Slider>
      </div>
    
      <div className=' xl:mx-16  bgCandle '>
        <div className='bgColorProducts xl:px-8 rounded-3xl'>
        <div className='space-y-4 sm:py-8 sm:px-8 px-3 py-8 '>
          <div className='flex gap-2 items-center'>
            <div className='sm:w-[5%] md:w-[4%] xl:w-[3%] w-[8%] '>
              <Image className='w-full' src={"/images/Capa_4.svg"}  height={0} width={0} alt='product'/>

            </div>
            <div>
              <p className='text-[#0141AC] text-2xl font-bold '>مگا چارت</p>
            </div>
          </div>
          <div>
            <p className='text-right sm:text-2xl text-xl font-bold  text-[#FF9C35]'>
               هرچه از چارت برای تحلیل نیازدارید 
            </p>
          </div>
          <div>
            <p className='text-[#777] sm:text-xl '>
              واچ لیست خودت را بساز 
            </p>
          </div>
          <div className='grid md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5  grid-cols-2 justify-between lg:gap-16 xl:gap-10 md:gap-10 sm:gap-8 gap-4'>
          <div className='bgWatchList  space-y-4 flex flex-col justify-center items-center'>
        <div className='inline-flex   top-0 justify-center items-center sm:w-2/5 md:w-1/2  w-3/5  bg-white rounded-b'>
            <Image className='w-full px-6 py-1.5 ' src={"/images/Frame.svg"} height={0} width={0} alt='watch list'/>
        </div>
        <div>
            <p className='text-center mt-4 text-sm leading-5 text-[#777] font-bold px-3'>
                همه چیو با هم ببین! 
            </p>
        </div>
        <div className=''>
            <p className='text-center text-sm leading-5 text-[#777] mb-4 px-3'>
               سرانه حقیقی حقوقی، 
                حجم تعدیلی، فاکتورهای بنیادی، جریان لحظه ای پول رو در هرنماد همراه قیمتش رصد کن
            </p>
        </div>
    </div>
    <div className='bgWatchList  space-y-4 flex flex-col  items-center'>
        <div className='inline-flex  top-0 justify-center items-center sm:w-2/5 md:w-1/2 w-3/5  bg-white rounded-b'>
            <Image className='w-full px-6 py-1.5 ' src={"/images/Capa_14.svg"} height={0} width={0} alt='watch list'/>
        </div>
        <div className=''>
            <p className='text-center mt-4  text-sm leading-5 text-[#777] font-bold px-3'>
                همه چیو با هم ببین! 
            </p>
        </div>
        <div className=''>
            <p className='text-center text-sm leading-5 text-[#777] mb-4 px-3'>
               سرانه حقیقی حقوقی، 
                حجم تعدیلی، فاکتورهای بنیادی، جریان لحظه ای پول رو در هرنماد همراه قیمتش رصد کن
            </p>
        </div>
    </div>
    <div className='bgWatchList  space-y-4 flex flex-col  items-center'>
        <div className='inline-flex  justify-center items-center sm:w-2/5 md:w-1/2 w-3/5  bg-white rounded-b'>
            <Image className='w-full px-6 py-1.5 ' src={"/images/Capa_18.svg"} height={0} width={0} alt='watch list'/>
        </div>
        <div>
            <p className='text-center  mt-4 text-sm leading-5 text-[#777] font-bold px-3'>
            دیتای ثانیه ای 
            </p>
        </div>
        <div className=''>
            <p className='text-center text-sm leading-5 text-[#777] mb-4 px-3'> 
              تیک دیتای بازار در دستان شما، نمودار عمق بازار و هرچی لحظه ای برای
              تحلیلت میخوای
            </p>
        </div>
    </div>
    <div className='bgWatchList  space-y-4 flex flex-col  items-center'>
        <div className='inline-flex  top-0 justify-center items-center sm:w-2/5 md:w-1/2 w-3/5  bg-white rounded-b'>
            <Image className='w-full px-6 py-1.5 ' src={"/images/Capa_19.svg"} height={0} width={0} alt='watch list'/>
        </div>
        <div>
            <p className='text-center  mt-4 text-sm leading-5 text-[#777] font-bold px-3'>
                 دقیق ترین دیتای بازار سرمایه
            </p>
        </div>
        <div className=''>
            <p className='text-center text-sm leading-5 text-[#777] mb-4 px-3'>
                کامل ترین دیتا رو برای تحلیلت داشته باش تعدیل حجم وقیمت به روش های مختلف  
            </p>
        </div>
    </div>
    <div className='bgWatchList  space-y-4 flex flex-col  items-center'>
        <div className='inline-flex  top-0 justify-center items-center sm:w-2/5 md:w-1/2 w-3/5  bg-white rounded-b'>
            <Image className='w-full px-6 py-1.5 ' src={"/images/Frame4.svg"} height={0} width={0} alt='watch list'/>
        </div>
        <div>
            <p className='text-center  mt-4 text-sm leading-5 text-[#777] font-bold px-3'>
               کنترل لحظه ای بازار 
            </p>
        </div>
        <div className=''>
            <p className='text-center text-sm leading-5 text-[#777] mb-4 px-3'>
                بورس ایران، بازار های داخلی، کریپتو و فارکس رو لحظه به لحظه زیر نظر داشته باش!
            </p>
        </div>
    </div>
          </div>


        </div>
        
        </div>
      </div>

    </div>
  )
}
