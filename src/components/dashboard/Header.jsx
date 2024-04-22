import React from 'react'
import {BiUser} from "react-icons/bi"
import {BsList} from "react-icons/bs";

export default function Header() {
    const toggleSidebar = () => {
        let sidebar = document.querySelector("#sidebar");
        sidebar.classList.toggle("close");
    }
  return (
    <div className='flex justify-between items-center gap-4 mx-4 mb-4 '>
        <div className="block md:hidden">
            <button className='btn ms-3 text-2xl' onClick={toggleSidebar}>
                <BsList/>
            </button>
        </div>
        <form className="">
            <div className="relative flex  justify-center items-center ">
                <label for="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only">Search</label> 
                <input type="search" id="default-search" className="block w-full py-2 pl-4  pr-12 text-sm text-gray-900 placeholder:text-[#777] rounded-full bg-white" placeholder="جستجوی نماد ..." />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <svg className=" h-6 w-6 text-[#1A6BF1] " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                    </svg>
                </div>       
            </div>
        </form>
        <div className='flex items-center justify-between gap-4'>
            <div>
                <p className='text-[#0141AC]'>
                    17:20:30
                </p>
            </div>
            <div>
                <div>

                </div>
                <div className='flex items-center gap-2'>
                    <div className='text-4xl text-[#07A0E6]'>
                        <BiUser/>
                    </div>
                    <div className='sm:block hidden'>
                        <div>
                            <p className='text-[#0141AC] font-semibold'>
                                محمدی
                            </p>
                        </div>
                        <div>
                            <p className='text-[#777]'>
                                خوش آمدید
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
