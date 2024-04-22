import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {BiLogoTelegram} from "react-icons/bi"
import {AiOutlineWhatsApp} from "react-icons/ai"

export default function Contact() {
  return (
    <div className='bgContact flex sm:flex-row flex-col justify-between xl:mx-24 lg:mx-16 md:mx-12 sm:mx-8 mx-12 my-12 rounded-2xl'>
        <div className='sm:rounded-l-full sm:rounded-r-2xl rouded-t-2xl rounded-b-full sm:w-1/6 lg:w-[12%] 2xl:w-1/12 xl:w-[13%] flex justify-center items-center  bg-white'>
            <Image className='sm:w-full w-1/3  p-8' src={"/images/24-hours-support 2.svg"} height={0} width={0} alt='24 hours support'/>
        </div>
        <div className='text-white  flex flex-col gap-2 justify-center sm:py-3 py-8 md:px-0 px-1 '>
            <div>
                <p className='text-center xl:text-2xl sm:text-xl text-2xl font-bold tracking-tighter'>
                   تمــاس مستقیـم با کارشناسان
                </p>
            </div>
            <div>
                <p className='xl:text-5xl text-center sm:text-3xl text-4xl font-bold tracking-tighter'>
                    <span className='text-[#0141AC]'>
                        021-
                    </span>
                    256009800
                </p>
            </div>

        </div>
        <div className='flex items-center justify-center'>
        <div className='flex lg:flex-row flex-col  py-4 lg:py-0 justify-between 2xl:mx-48 xl:mx-28 lg:mx-16 xl:gap-6 gap-3 px-4 items-center'>
            <div className='bg-white rounded-2xl '>
                <Link href={""} className='flex justify-center items-center'>
                    <div>
                        <p className='py-1.5 text-sm  font-bold text-[#0141AC] px-3'>
                            شروع گفتگو در تلگرام
                        </p>
                    </div>
                    <div className='bg-[#0141AC] px-2 py-2.5 rounded-l-2xl  text-white text-2xl'>
                     <BiLogoTelegram/>
                    </div>
                </Link>
            </div>
            <div className='bg-[#FF9C35] rounded-2xl '>
                <Link href={""} className='flex justify-center items-center'>
                    <div>
                        <p className='py-1.5 font-bold text-sm  text-white px-3'>
                            شروع گفتگو در واتساپ
                        </p>
                    </div>
                    <div className='bg-white px-2 py-2.5 rounded-l-2xl  text-[#0141AC] text-2xl'>
                     <AiOutlineWhatsApp/>
                    </div>
                </Link>
            </div>
           

        </div>
        </div>

    </div>
  )
}
