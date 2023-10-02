import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {BiLogoTelegram} from "react-icons/bi"
import {AiOutlineWhatsApp} from "react-icons/ai"

export default function Contact() {
  return (
    <div className='bgContact flex justify-between mx-32 my-16 rounded-2xl'>
        <div className='rounded-l-full rounded-r-2xl w-1/12 bg-white'>
            <Image className='w-full p-8' src={"/images/24-hours-support 2.svg"} height={0} width={0} alt='24 hours support'/>
        </div>
        <div className='text-white  flex flex-col justify-center '>
            <div>
                <p className='text-center text-2xl font-bold tracking-tighter'>
                   تمــاس مستقیـم با کارشناسان
                </p>
            </div>
            <div>
                <p className='text-5xl font-bold tracking-tighter'>
                    <span className='text-[#0141AC]'>
                        021-
                    </span>
                    256009800
                </p>
            </div>

        </div>
        <div className='flex items-center'>
        <div className='flex justify-between mx-48 gap-6 items-center'>
            <div className='bg-white rounded-2xl '>
                <Link href={""} className='flex justify-center items-center'>
                    <div>
                        <p className='py-1.5 font-bold text-[#0141AC] px-3'>
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
                        <p className='py-1.5 font-bold text-white px-3'>
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
