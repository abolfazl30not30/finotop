'use client';
import Link from "next/link"
import Image from "next/image"
import "../../style/home/home.css"
import {usePathname} from 'next/navigation'
import {CgMenuRight} from "react-icons/cg";
import {useState} from "react";
import {IoMdClose} from "react-icons/io";
import {RiUserAddLine} from "react-icons/ri";
import {AiOutlineSearch} from "react-icons/ai";

function Navbar() {
    const [isShowNavbar, setIsShowNavbar] = useState(false);
    const handleToggleNavbar = () => {
        setIsShowNavbar(!isShowNavbar)
    }
    const searchHandler = () =>{
        console.log("search")
    }

    const pathname = usePathname()

    return (
        <nav className="sticky bg-white z-50 top-0 shadow-md shadow-[#c3c0c040] py-1 ">
            <div className=" w-full h-[4.2rem] flex items-center justify-between lg:gap-2 gap-1 lg:px-10 px-5 ">
            <div className="md:hidden">
                    <button onClick={handleToggleNavbar} className="transition-all duration-900">
                        {
                            isShowNavbar ? (
                                <IoMdClose className="text-3xl text-[#07A0E6]" />
                            ) : (
                                <CgMenuRight className="text-3xl text-[#07A0E6]"/>
                            )
                        }
                    </button>
                </div>
            <div className="w-[45%] sm:w-[25%] md:w-[15%]  2xl:w-[14%] ">
                    <Link href="/">
                        <Image src="/images/logo.svg" alt="logo" width={0}
                               height={0}
                               sizes="100vw"
                               style={{width: '65%', height: 'auto'}}/>
                    </Link>
                </div>
                <div className="2xl:w-[60%] justify-start items-center hidden md:flex">
                
                    <ul className="flex lg:gap-2 gap-1 md:text-sm lg:text-base">
                        <li><Link href="/" className=" font-bold lg:px-2 px-1 py-2"><span
                            className={pathname === "/" ? "activeNavLink" : "text-[#777777] font-semibold"}> بازار</span></Link></li>
                        <li><a href="#products" className=" font-bold lg:px-2 px-1 py-2"><span
                            className={pathname === "/products/" ? "activeNavLink" : "text-[#777777] font-semibold"}>محصولات</span></a>
                        </li>
                        <li><a href="#tools" className=" font-bold lg:px-2 px-1 py-2"><span
                            className={pathname === "/tools/" ? "activeNavLink" : "text-[#777777] font-semibold"}>ابزارها</span></a>
                        </li>
                        <li><a href="#aboutus" className=" font-bold lg:px-2 px-1 py-2"><span
                            className={pathname === "/about-us/" ? "activeNavLink" : "text-[#777777] font-semibold"}>درباره ما</span></a>
                        </li>
                        <li><a href="#more" className=" font-bold lg:px-2 px-1 py-2"><span
                            className={pathname === "/more/" ? "activeNavLink" : "text-[#777777] font-semibold"}>بیشتر</span></a>
                        </li>
                        
                        
                        
                        
                        
                    </ul>
                </div>
                
                <div className="sm:flex hidden  gap-2 justify-center items-center">
                    <div className="w-3/5">
                        <form className="">   
                            <label for="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only">Search</label>
                            <div className="relative flex  justify-center items-center ">
                                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    <svg className=" h-6 w-6 text-[#1A6BF1] " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                                    </svg>
                                </div>
                                <input type="search" id="default-search" className="block w-full py-2 pr-4  pl-10 text-sm text-gray-900 placeholder:text-[#BCBCBC] rounded-full bg-[#F8F8F8]" placeholder="جستجو کنید ..." />
                            
                            </div>
                        </form>
                    </div>
                    <div>
                        <Link href="/"><button className="bg-[#367AFF] flex justify-center items-center gap-2  hover:bg-[#401fac] text-white  lg:px-4 px-3 py-2 rounded-full"><div className="text-2xl"><RiUserAddLine/></div><div className="font-semibold text-xs">ورود/عضویت</div></button></Link>
                    </div>
                </div>
                <div className="sm:hidden flex justify-between gap-2 items-center text-[#07A0E6] text-2xl ">
                    <button className="bg-[#F8F8F8] rounded-md p-1">
                        <AiOutlineSearch/>
                    </button>
                    <button className="bg-[#F8F8F8] rounded-md p-1">
                        <Link href={"/"}><RiUserAddLine/></Link>

                    </button>
                </div>
                
              
            </div>
            <div className="absolute left-0 right-0 transition-all duration-700 md:hidden z-10" style={isShowNavbar ? {top:"4rem"}:{top:"-30rem"}} >

                <div className=" px-10 pb-4 bg-[#07A0E6]">
                    <ul className="flex flex-col">
                        <li className=""><Link href="/" className="font-[200] block p-4 hover:bg-[#1aadf1]" onClick={handleToggleNavbar}><span
                            className={pathname === "/" ? "activeNavLink" : "text-white"}>بازار</span></Link></li>
                        <li className=""><Link href="/products" className="font-[200] block p-4 hover:bg-[#1aadf1]" onClick={handleToggleNavbar}><span
                            className={pathname === "/products/" ? "activeNavLink" : "text-white"} >محصولات</span></Link>
                        </li>
                        <li className=""><Link href="/tools" className="font-[200] block p-4 hover:bg-[#1aadf1]" onClick={handleToggleNavbar}><span
                            className={pathname === "/tools/" ? "activeNavLink" : "text-white"}>ابزارها</span></Link>
                        </li>
                        <li className=""><Link href="/more" className="font-[200] block p-4 hover:bg-[#1aadf1]" onClick={handleToggleNavbar}><span
                            className={pathname === "/more/" ? "activeNavLink" : "text-white"}>بیشتر</span></Link>
                        </li>
                        <li className=""><Link href="/about-us" className="font-[200] block p-4 hover:bg-[#1aadf1]" onClick={handleToggleNavbar}><span
                            className={pathname === "/about-us/" ? "activeNavLink" : "text-white"}>درباره ما</span></Link>
                        </li>
                        
                    </ul>
                </div>
            </div>
        </nav>

    );
}

export default Navbar;