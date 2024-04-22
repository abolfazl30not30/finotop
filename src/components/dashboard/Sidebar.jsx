'use client'
import React from "react";
import Link from 'next/link'
import Image from "next/image";
import {BiMessageDetail} from "react-icons/bi"
import {LuSettings} from "react-icons/lu"
import {BiUser} from "react-icons/bi"
import {TiChartLine} from "react-icons/ti"
import {CgClose} from "react-icons/cg"
import '../../style/dashboard/dashboard.css'
export default function Sidebar() {

    const closeSidebar = () => {
        if(window.innerWidth <= 768){
            let sidebar = document.querySelector("#sidebar");
            sidebar.classList.toggle("close");
        }
    }

    return (
        <>
            <div className='sidebar-dashboard' id='sidebar'>
                <div id='close_sidebar_mobile'  onClick={closeSidebar}>
                    <CgClose className="mx-6 text-xl"/>
                </div>
                <div className="logo my-4 mx-2">
                    <Link href="/">
                        <Image src="/images/logo.svg" alt="logo" width={0}
                            height={0}
                            sizes="100vw"
                            style={{width: '100%', height: 'auto'}}/>
                    </Link>

                </div>
                <div className="sidebar-list mt-4">
                    <Link  href="/dashboard" className='w-100'>
                        <div className="flex flex-row items-center sidebar-list-item border-b border-[#F1F1F1]">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 16 17" strokeWidth={0.8}
                                 stroke="currentColor"  className=" sidebar-list-item-icon" >
                            <path d="M2.59067 11.2824H0.234379C0.104908 11.2824 0 11.3876 0 11.5172V16.4787C0 16.6084 0.104908 16.7135 0.234379 16.7135H2.59067C2.72014 16.7135 2.82504 16.6084 2.82504 16.4787V11.5172C2.82504 11.3876 2.72014 11.2824 2.59067 11.2824ZM2.35629 16.244H0.468757V11.752H2.35629V16.244Z" />
                            <path d="M5.88754 13.3954H3.53125C3.40178 13.3954 3.29688 13.5005 3.29688 13.6302V16.4787C3.29688 16.6084 3.40178 16.7135 3.53125 16.7135H5.88754C6.01701 16.7135 6.12192 16.6084 6.12192 16.4787V13.6302C6.12192 13.5005 6.01701 13.3954 5.88754 13.3954ZM5.65316 16.244H3.76563V13.8649H5.65316V16.244Z" />
                            <path d="M9.18442 10.1086H6.82813C6.69866 10.1086 6.59375 10.2137 6.59375 10.3434V16.4787C6.59375 16.6084 6.69866 16.7135 6.82813 16.7135H9.18442C9.31389 16.7135 9.41879 16.6084 9.41879 16.4787V10.3434C9.41879 10.2137 9.31389 10.1086 9.18442 10.1086ZM8.95004 16.244H7.06251V10.5781H8.95004V16.244Z" />
                            <path d="M12.4813 10.1086H10.125C9.99553 10.1086 9.89062 10.2137 9.89062 10.3434V16.4787C9.89062 16.6084 9.99553 16.7135 10.125 16.7135H12.4813C12.6108 16.7135 12.7157 16.6084 12.7157 16.4787V13.8806C12.7157 13.7509 12.6108 13.6458 12.4813 13.6458C12.3518 13.6458 12.2469 13.7509 12.2469 13.8806V16.244H10.3594V10.5781H12.2469V12.9415C12.2469 13.0712 12.3518 13.1763 12.4813 13.1763C12.6108 13.1763 12.7157 13.0712 12.7157 12.9415V10.3434C12.7157 10.2137 12.6108 10.1086 12.4813 10.1086Z" />
                            <path d="M15.7664 6.82175H13.4102C13.2807 6.82175 13.1758 6.92686 13.1758 7.05652V16.4787C13.1758 16.6084 13.2807 16.7135 13.4102 16.7135H15.7664C15.8959 16.7135 16.0008 16.6084 16.0008 16.4787V7.05652C16.0008 6.92686 15.8959 6.82175 15.7664 6.82175ZM15.5321 16.2439H13.6445V7.29129H15.5321V16.2439Z" />
                            <path d="M11.2721 9.63905C12.0475 9.63905 12.6783 9.00713 12.6783 8.23041C12.6783 7.77806 12.4641 7.37512 12.1323 7.11722L14.0843 3.46154C14.2249 3.5089 14.3751 3.53498 14.5315 3.53498C15.3069 3.53498 15.9378 2.90306 15.9378 2.12634C15.9378 1.34962 15.3069 0.717712 14.5315 0.717712C13.7561 0.717712 13.1252 1.34962 13.1252 2.12634C13.1252 2.57867 13.3394 2.98163 13.6713 3.23954L11.7192 6.89522C11.5786 6.84786 11.4284 6.82178 11.2721 6.82178C10.9285 6.82178 10.6134 6.94602 10.3689 7.15178L9.17614 6.1345C9.30236 5.92336 9.37512 5.67663 9.37512 5.41315C9.37512 4.63643 8.74426 4.00452 7.96884 4.00452C7.19343 4.00452 6.56257 4.63643 6.56257 5.41315C6.56257 5.86548 6.77676 6.26844 7.10864 6.52635L5.15658 10.182C5.01599 10.1347 4.86573 10.1086 4.70942 10.1086C4.36582 10.1086 4.05078 10.2328 3.80625 10.4386L2.61351 9.4213C2.73976 9.21017 2.81254 8.96347 2.81254 8.69996C2.81254 7.92324 2.18169 7.29133 1.40627 7.29133C0.630854 7.29133 0 7.92324 0 8.69996C0 9.47668 0.630854 10.1086 1.40627 10.1086C1.74984 10.1086 2.06491 9.98435 2.30941 9.77859L3.50215 10.7959C3.37596 11.007 3.30318 11.2537 3.30318 11.5172C3.30318 12.2939 3.93403 12.9259 4.70945 12.9259C5.48487 12.9259 6.11572 12.2939 6.11572 11.5172C6.11572 11.0649 5.90153 10.6619 5.56965 10.404L7.52171 6.74835C7.66231 6.79571 7.81256 6.82178 7.96891 6.82178C8.31248 6.82178 8.62754 6.69754 8.87205 6.49179L10.0648 7.50907C9.93859 7.72021 9.86581 7.96691 9.86581 8.23041C9.86578 9.00713 10.4966 9.63905 11.2721 9.63905ZM14.5315 1.18726C15.0484 1.18726 15.469 1.60853 15.469 2.12634C15.469 2.64416 15.0484 3.06543 14.5315 3.06543C14.0145 3.06543 13.594 2.64416 13.594 2.12634C13.594 1.60853 14.0145 1.18726 14.5315 1.18726ZM1.40627 9.63905C0.889327 9.63905 0.468757 9.21777 0.468757 8.69996C0.468757 8.18215 0.889327 7.76087 1.40627 7.76087C1.92322 7.76087 2.34379 8.18215 2.34379 8.69996C2.34379 9.21777 1.92322 9.63905 1.40627 9.63905ZM4.70945 12.4563C4.1925 12.4563 3.77193 12.035 3.77193 11.5172C3.77193 10.9994 4.1925 10.5781 4.70945 10.5781C5.22639 10.5781 5.64696 10.9994 5.64696 11.5172C5.64696 12.035 5.22639 12.4563 4.70945 12.4563ZM11.2721 7.29133C11.789 7.29133 12.2096 7.7126 12.2096 8.23041C12.2096 8.74823 11.789 9.1695 11.2721 9.1695C10.7551 9.1695 10.3345 8.74823 10.3345 8.23041C10.3345 7.7126 10.7551 7.29133 11.2721 7.29133ZM7.96888 6.35224C7.45193 6.35224 7.03136 5.93096 7.03136 5.41315C7.03136 4.89534 7.45193 4.47406 7.96888 4.47406C8.48582 4.47406 8.90639 4.89534 8.90639 5.41315C8.90639 5.93096 8.48582 6.35224 7.96888 6.35224Z" />
                        </svg>
                            <div className="sidebar-list-item-title">
                                 بازار
                            </div>
                        </div>
                    </Link>
                    <Link  href="/dashboard/symbol" className='w-100'>
                        <div className="flex flex-row items-center sidebar-list-item border-b border-[#F1F1F1]">
                           <TiChartLine className="w-6 h-6  sidebar-list-item-icon"/>
                            <div className="sidebar-list-item-title">
                                 نماد
                            </div>
                        </div>
                    </Link>
                    <Link  href="/dashboard" className='w-100'>
                        <div className="flex flex-row items-center sidebar-list-item border-b border-[#F1F1F1]">
                           <BiUser className="w-6 h-6  sidebar-list-item-icon "/>
                            <div className="sidebar-list-item-title">
                                 حساب کاربری
                            </div>
                        </div>
                    </Link>
                    <Link  href="/dashboard" className='w-100'>
                        <div className="flex flex-row items-center sidebar-list-item border-b border-[#F1F1F1]">
                           <LuSettings className="w-6 h-6  sidebar-list-item-icon"/>
                            <div className="sidebar-list-item-title">
                                 تنظیمات
                            </div>
                        </div>
                    </Link>
                    <Link onClick={() => localStorage.clear()} href="/" className={"w-100"}>
                        <div className="flex flex-row items-center sidebar-list-item border-b border-[#F1F1F1]">
                            
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className=" sidebar-list-item-icon" strokeWidth={1.5}
                                 stroke="currentColor" width='24' height='24'>
                                <path strokeLinecap="round" strokeLinejoin="round"
                                      d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"/>
                            </svg>
                            <div className="sidebar-list-item-title">
                                خروج
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </>
    );
}
