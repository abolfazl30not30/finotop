import React from 'react'
import Image from 'next/image'
export default function Camodity() {
  return (
    <div className=' xl:mx-16  bgCandle ' id='camodity'>
        <div className='bgColorProducts xl:px-8 rounded-3xl'>
        <div className='space-y-4 sm:py-8 sm:px-8 px-3 py-8 '>
          <div className='flex gap-2 items-center'>
            <div className='sm:w-[5%] md:w-[4%] xl:w-[3%] w-[8%] '>
              <Image className='w-full' src={"/images/Capa_4.svg"}  height={0} width={0} alt='product'/>

            </div>
            <div>
              <p className='text-[#0141AC] text-2xl font-bold '> کامودیتی</p>
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
                کامل ترین اطلاعات هر محصول برای شما  
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
                بورس کالا و انرژی 
            </p>
        </div>
        <div className=''>
            <p className='text-center text-sm leading-5 text-[#777] mb-4 px-3'>
                اطلاعات فیلتر شده و تجمیعی هر کالا 
            </p>
        </div>
    </div>
    <div className='bgWatchList  space-y-4 flex flex-col  items-center'>
        <div className='inline-flex  justify-center items-center sm:w-2/5 md:w-1/2 w-3/5  bg-white rounded-b'>
            <Image className='w-full px-6 py-1.5 ' src={"/images/Capa_18.svg"} height={0} width={0} alt='watch list'/>
        </div>
        <div>
            <p className='text-center  mt-4 text-sm leading-5 text-[#777] font-bold px-3'>
                نشریات و قرارداد ها   
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
                تولید کنندگان و مصرف کنندگان هر محصول و قاب قیمت های جهانی
            </p>
        </div>
        <div className=''>
            <p className='text-center text-sm leading-5 text-[#777] mb-4 px-3'>
                کامل ترین دیتا رو برای تحلیلت داشته باش تعدیل حجم وقیمت به روش های مختلف  
            </p>
        </div>
    </div>
   
          </div>


        </div>
        
        </div>
      </div>
  )
}
