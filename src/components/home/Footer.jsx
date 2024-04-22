import Link from 'next/link'
import React from 'react'
import {SlSocialLinkedin, SlSocialYoutube} from "react-icons/sl"
import {RxTwitterLogo} from "react-icons/rx"
import {FiFacebook} from "react-icons/fi"
import {BiLogoInstagram} from "react-icons/bi"
import {PiPhoneCallLight, PiWhatsappLogo} from "react-icons/pi"
import {BsFillDiamondFill} from "react-icons/bs"
import {AiOutlineMail} from "react-icons/ai"
import {TfiLocationPin} from "react-icons/tfi"
import Image from 'next/image'


export default function Footer() {
    return (
        <footer className='mt-24 bg-[#0141AC] '>
            <div className="flex flex-col md:flex-row gap-16 py-10">
                <div className="md:w-2/3 mx-10">
                    <div
                        className='flex md:flex-row flex-col items-center justify-between gap-12 text-white'>
                        <div className=''>
                            <Link href="/">
                                <p>logo here</p>
                            </Link>
                        </div>
                        <div className=' space-y-4  leading-8'>
                            <div>
                                <p className='text-sm '>
                                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
                                    چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
                                    تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در
                                    شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها
                                    شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی
                                    ایجاد کرد.
                                </p>
                            </div>
                            <div>
                                <p className='md:text-lg text-sm font-semibold'>
                                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
                                </p>
                            </div>
                        </div>
                    </div>
                    <div
                        className='mt-20 flex md:flex-row flex-col px-8 md:py-6 p-4 justify-between gap-2 items-center bg-[#F1F1F1] rounded-2xl'>
                        <div>
                            <p className='text-[#0141AC] text-lg font-semibold leading-8'>
                                شبکه های اجتماعی :
                            </p>
                        </div>
                        <div className='flex justify-between items-center gap-2 text-[#777777]  text-2xl'>
                            <div className=''>
                                <button>
                                    <a href="">
                                        <SlSocialYoutube className='hover:text-[#FF9C35]'/>
                                    </a>
                                </button>
                            </div>
                            <div className='flex '>
                                <p className="text-[#FF9C35] text-3xl">
                                    .
                                </p>
                            </div>
                            <div className=''>
                                <button>
                                    <a href="">
                                        <RxTwitterLogo className='hover:text-[#FF9C35]'/>
                                    </a>
                                </button>
                            </div>
                            <div className=''>
                                <p className="text-[#FF9C35] text-3xl">
                                    .
                                </p>
                            </div>
                            <div className=''>
                                <button>
                                    <a href="">
                                        <FiFacebook className='hover:text-[#FF9C35]'/>
                                    </a>
                                </button>
                            </div>
                            <div className=''>
                                <p className="text-[#FF9C35] text-3xl">
                                    .
                                </p>
                            </div>
                            <div className=''>
                                <button>
                                    <a href="">
                                        <BiLogoInstagram className='hover:text-[#FF9C35]'/>
                                    </a>
                                </button>
                            </div>
                            <div className=''>
                                <p className="text-[#FF9C35] text-3xl">
                                    .
                                </p>
                            </div>
                            <div className=''>
                                <button>
                                    <a href="">
                                        <SlSocialLinkedin className='hover:text-[#FF9C35]'/>
                                    </a>
                                </button>
                            </div>
                            <div className=''>
                                <p className="text-[#FF9C35] text-3xl">
                                    .
                                </p>
                            </div>
                            <div className=''>
                                <button>
                                    <a href="">
                                        <PiWhatsappLogo className='hover:text-[#FF9C35]'/>
                                    </a>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mx-10 text-white">
                    <h3 className=" font-bold 2xl:mt-0 mt-8 ">راه ارتباطی با ما</h3>
                    <div className="mt-5  space-y-6">
                        <div className='flex items-center gap-1 '>
                            <PiPhoneCallLight className='text-xl'/>
                            <h3 className="  text-[0.9rem] 2xl:text-sm font-bold"> تلفن :</h3>
                            <a href="" className="text-white text-[0.9rem] 2xl:text-sm">021-12345678</a>
                        </div>
                        <div className='flex items-center gap-1 '>
                            <AiOutlineMail className='text-xl'/>
                            <h3 className="  text-[0.9rem] 2xl:text-sm font-bold">ایمیل :</h3>
                            <a href="" className="text-white text-[0.9rem] 2xl:text-xs">Info@arzeshpardazyekan.com</a>
                        </div>
                        <div className='flex items-center gap-1 '>
                            <BiLogoInstagram className='text-xl'/>
                            <h3 className="  text-[0.9rem] font-bold"> اینستاگرام :</h3>
                            <a href='' className="text-white text-[0.9rem]">arzeshpardaz@</a>
                        </div>
                        <div className='flex items-center gap-1 '>
                            <TfiLocationPin className='text-xl'/>
                            <h3 className="  text-[0.9rem] font-bold 2xl:text-sm"> آدرس :</h3>
                            <span className="text-white text-[0.9rem] 2xl:text-sm">ایران-تهران-خیابان-کوچه-پلاک</span>
                        </div>
                        <div className='flex gap-2'>
                            <div className='border border-[#D3D3D3] rounded-2xl'>
                                <Link href={"/"}>
                                    <div className='flex items-center jsutify-between gap-2 px-2 py-0.5'>
                                        <div className='w-3/5 '>
                                            <Image className='w-full' src={"/images/icon_5990150_edited (2) 2.svg"}
                                                   height={0} width={0} alt='candle'/>

                                        </div>
                                        <div className='w-1/4 '>
                                            <Image className='w-full' src={"/images/Group 13.svg"} height={0} width={0}
                                                   alt='candle'/>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div className='bg-white border border-[#D3D3D3] rounded-2xl'>
                                <Link href={"/"}>
                                    <div className=' flex flex-col justify-center items-center px-5 py-3 gap-2'>
                                        <div className='w-5/6'>
                                            <Image className='w-full'
                                                   src={"/images/28351989-7f68389e-6c4b-11e7-9bf2-e9fcd4977e7a 1.svg"}
                                                   height={0} width={0} alt='pwa'/>
                                        </div>
                                        <div>
                                            <p className='text-[#0141AC] text-xs'>
                                                وب اپلیکیشن
                                            </p>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-[#367AFF] text-white text-center text-xs sm:text-sm mt-4 px-2 py-3'>
                <p className=''>
                    کلیه حقوق مادی و معنوی این سایت برای ارزش پرداز یکان محفوظ است.
                </p>
            </div>
        </footer>
    )
}
// <div
//     className=' grid grid-col 2xl:grid-cols-3 md:grid-cols-2 grid-cols-1  justify-between gap-4 md:px-32 px-12 text-white my-8'>
//     <div className="">
//         <h3 className=" font-bold ">بازار</h3>
//         <div className="mt-5  space-y-3">
//             <div className="flex items-center gap-2 ">
//                 <BsFillDiamondFill className='text-[#FF9C35] text-[0.4rem]'/>
//                 <Link href="/" className=" text-[1rem] hover:text-[#FF9C35]">بورس</Link>
//             </div>
//             <div className="flex items-center gap-2">
//                 <BsFillDiamondFill className='text-[#FF9C35] text-[0.4rem]'/>
//                 <Link href="/" className=" text-[1rem] hover:text-[#FF9C35]">فرابورس</Link>
//             </div>
//             <div className="flex items-center gap-2">
//                 <BsFillDiamondFill className='text-[#FF9C35] text-[0.4rem]'/>
//                 <Link href="/" className=" text-[1rem] hover:text-[#FF9C35]">پایه</Link>
//             </div>
//             <div className="flex items-center gap-2">
//                 <BsFillDiamondFill className='text-[#FF9C35] text-[0.4rem]'/>
//                 <Link href="/" className=" text-[1rem] hover:text-[#FF9C35]">اوراق بدهی</Link>
//             </div>
//             <div className="flex items-center gap-2">
//                 <BsFillDiamondFill className='text-[#FF9C35] text-[0.4rem]'/>
//                 <Link href="/" className=" text-[1rem] hover:text-[#FF9C35]">کامودیتی</Link>
//             </div>
//             <div className="flex items-center gap-2">
//                 <BsFillDiamondFill className='text-[#FF9C35] text-[0.4rem]'/>
//                 <Link href="/" className=" text-[1rem] hover:text-[#FF9C35]">مسکن</Link>
//             </div>
//             <div className="flex items-center gap-2">
//                 <BsFillDiamondFill className='text-[#FF9C35] text-[0.4rem]'/>
//                 <Link href="/" className=" text-[1rem] hover:text-[#FF9C35]">ارز</Link>
//             </div>
//         </div>
//     </div>
//     <div className="">
//         <h3 className=" font-bold ">محصولات</h3>
//         <div className="mt-5  space-y-3">
//             <div className="flex items-center gap-2 ">
//                 <BsFillDiamondFill className='text-[#FF9C35] text-[0.4rem]'/>
//                 <a href="/#products" className=" text-[1rem] hover:text-[#FF9C35]">مگاچارت</a>
//             </div>
//             <div className="flex items-center gap-2">
//                 <BsFillDiamondFill className='text-[#FF9C35] text-[0.4rem]'/>
//                 <a href="/#products" className=" text-[1rem] hover:text-[#FF9C35]">بنیادی</a>
//             </div>
//             <div className="flex items-center gap-2">
//                 <BsFillDiamondFill className='text-[#FF9C35] text-[0.4rem]'/>
//                 <a href="/#products" className=" text-[1rem] hover:text-[#FF9C35]">سهامداران</a>
//             </div>
//             <div className="flex items-center gap-2">
//                 <BsFillDiamondFill className='text-[#FF9C35] text-[0.4rem]'/>
//                 <a href="/#products" className=" text-[1rem] hover:text-[#FF9C35]"> صندوق ها</a>
//             </div>
//             <div className="flex items-center gap-2">
//                 <BsFillDiamondFill className='text-[#FF9C35] text-[0.4rem]'/>
//                 <a href="/#products" className=" text-[1rem] hover:text-[#FF9C35]">آپشن</a>
//             </div>
//             <div className="flex items-center gap-2">
//                 <BsFillDiamondFill className='text-[#FF9C35] text-[0.4rem]'/>
//                 <a href="/#products" className=" text-[1rem] hover:text-[#FF9C35]">فیوچرز</a>
//             </div>
//             <div className="flex items-center gap-2">
//                 <BsFillDiamondFill className='text-[#FF9C35] text-[0.4rem]'/>
//                 <a href="/#products" className=" text-[1rem] hover:text-[#FF9C35]">اسکرینر</a>
//             </div>
//         </div>
//     </div>
//     <div className="">
//         <h3 className=" font-bold md:mt-0 mt-8 ">ابزارها</h3>
//         <div className="mt-5  space-y-3">
//             <div className="flex items-center gap-2 ">
//                 <BsFillDiamondFill className='text-[#FF9C35] text-[0.4rem]'/>
//                 <a href="/#tools" className=" text-[1rem] hover:text-[#FF9C35]">تقویم اقتصادی</a>
//             </div>
//             <div className="flex items-center gap-2">
//                 <BsFillDiamondFill className='text-[#FF9C35] text-[0.4rem]'/>
//                 <a href="/#tools" className=" text-[1rem] hover:text-[#FF9C35]">دیدبان</a>
//             </div>
//             <div className="flex items-center gap-2">
//                 <BsFillDiamondFill className='text-[#FF9C35] text-[0.4rem]'/>
//                 <a href="/#tools" className=" text-[1rem] hover:text-[#FF9C35]">آلارم</a>
//             </div>
//         </div>
//     </div>
//     <div className="">
//         <h3 className=" font-bold lg:mt-0 mt-8">بیشتر</h3>
//         <div className="mt-5  space-y-3">
//             <div className="flex items-center gap-2 ">
//                 <BsFillDiamondFill className='text-[#FF9C35] text-[0.4rem]'/>
//                 <Link href="/about-us" className=" text-[1rem] hover:text-[#FF9C35]">درباره ما</Link>
//             </div>
//             <div className="flex items-center gap-2">
//                 <BsFillDiamondFill className='text-[#FF9C35] text-[0.4rem]'/>
//                 <Link href="/contact-us" className=" text-[1rem] hover:text-[#FF9C35]">تماس با ما</Link>
//             </div>
//             <div className="flex items-center gap-2">
//                 <BsFillDiamondFill className='text-[#FF9C35] text-[0.4rem]'/>
//                 <a href="/#priceOfProducts" className=" text-[1rem] hover:text-[#FF9C35]">قیمت ها</a>
//             </div>
//             <div className="flex items-center gap-2">
//                 <BsFillDiamondFill className='text-[#FF9C35] text-[0.4rem]'/>
//                 <a href="/#properties" className=" text-[1rem] hover:text-[#FF9C35]">ویژگی ها </a>
//             </div>
//             <div className="flex items-center gap-2">
//                 <BsFillDiamondFill className='text-[#FF9C35] text-[0.4rem]'/>
//                 <Link href="/rules" className=" text-[1rem] hover:text-[#FF9C35]">شرایط و قوانین</Link>
//             </div>
//         </div>
//     </div>
//     <div className="  col-span-2 2xl:col-span-1">
//         <h3 className=" font-bold 2xl:mt-0 mt-8 ">راه ارتباطی با ما</h3>
//         <div className="mt-5  space-y-6">
//             <div className='flex items-center gap-1 '>
//                 <PiPhoneCallLight className='text-xl'/>
//                 <h3 className="  text-[0.9rem] 2xl:text-sm font-bold"> تلفن :</h3>
//                 <a href="" className="text-white text-[0.9rem] 2xl:text-sm">021-12345678</a>
//             </div>
//             <div className='flex items-center gap-1 '>
//                 <AiOutlineMail className='text-xl'/>
//                 <h3 className="  text-[0.9rem] 2xl:text-sm font-bold">ایمیل :</h3>
//                 <a href="" className="text-white text-[0.9rem] 2xl:text-xs">Info@arzeshpardazyekan.com</a>
//             </div>
//             <div className='flex items-center gap-1 '>
//                 <BiLogoInstagram className='text-xl'/>
//                 <h3 className="  text-[0.9rem] font-bold"> اینستاگرام :</h3>
//                 <a href='' className="text-white text-[0.9rem]">arzeshpardaz@</a>
//             </div>
//             <div className='flex items-center gap-1 '>
//                 <TfiLocationPin className='text-xl'/>
//                 <h3 className="  text-[0.9rem] font-bold 2xl:text-sm"> آدرس :</h3>
//                 <span className="text-white text-[0.9rem] 2xl:text-sm">ایران-تهران-خیابان-کوچه-پلاک</span>
//             </div>
//             <div className='flex gap-2'>
//                 <div className='border border-[#D3D3D3] rounded-2xl'>
//                     <Link href={"/"}>
//                         <div className='flex items-center jsutify-between gap-2 px-2 py-0.5'>
//                             <div className='w-3/5 '>
//                                 <Image className='w-full' src={"/images/icon_5990150_edited (2) 2.svg"}
//                                        height={0} width={0} alt='candle'/>
//
//                             </div>
//                             <div className='w-1/4 '>
//                                 <Image className='w-full' src={"/images/Group 13.svg"} height={0} width={0}
//                                        alt='candle'/>
//                             </div>
//                         </div>
//                     </Link>
//                 </div>
//                 <div className='bg-white border border-[#D3D3D3] rounded-2xl'>
//                     <Link href={"/"}>
//                         <div className=' flex flex-col justify-center items-center px-5 py-3 gap-2'>
//                             <div className='w-5/6'>
//                                 <Image className='w-full'
//                                        src={"/images/28351989-7f68389e-6c4b-11e7-9bf2-e9fcd4977e7a 1.svg"}
//                                        height={0} width={0} alt='pwa'/>
//                             </div>
//                             <div>
//                                 <p className='text-[#0141AC] text-xs'>
//                                     وب اپلیکیشن
//                                 </p>
//                             </div>
//                         </div>
//                     </Link>
//                 </div>
//             </div>
//         </div>
//     </div>
// </div>