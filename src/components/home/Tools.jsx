import React from 'react'
import Image from 'next/image'



export default function Tools() {
  return (
    <div className='space-y-4 xl:px-28 lg:px-16 sm:px-8 px-4 py-16'>
        <div className='flex gap-2 items-center'>
            <div className='w-[7%] sm:w-[5%] md:w-[4%] lg:w-[3%] 2xl:w-[2.5%]'>
                <Image className='w-full' src={"/images/Data mining.svg"} height={0} width={0}/>
            </div>
            <div>
                <p className='text-3xl font-bold text-[#0141AC]'>
                    ابزارها
                </p>
            </div>
        </div>
        <div>
            <p className='text-[#777] text-xl my-8'>
                مجامع و رویدادها
            </p>
        </div>
        <div className='flex lg:flex-row flex-col gap-4 items-center'>
            <div className='lg:w-2/3 w-11/12'>
                <div className='flex sm:flex-row flex-col items-center gap-2'>
                <button className='flex gap-2 items-center justify-center border rounded-3xl bg-[#367AFF]  py-2.5 sm:w-1/3 w-11/12'>
        <div>
          <div className='w-11/12'>
          <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 27 27" fill="black" className=''>
  <path d="M7.59375 1.6875C7.36997 1.6875 7.15536 1.77639 6.99713 1.93463C6.83889 2.09286 6.75 2.30747 6.75 2.53125V3.375H5.0625C3.20735 3.375 1.6875 4.89485 1.6875 6.75V21.9375C1.6875 23.7927 3.20735 25.3125 5.0625 25.3125H12.6562C12.88 25.3125 13.0946 25.2236 13.2529 25.0654C13.4111 24.9071 13.5 24.6925 13.5 24.4688C13.5 24.245 13.4111 24.0304 13.2529 23.8721C13.0946 23.7139 12.88 23.625 12.6562 23.625H5.0625C4.11303 23.625 3.375 22.887 3.375 21.9375V10.125H23.625V12.6562C23.625 12.88 23.7139 13.0946 23.8721 13.2529C24.0304 13.4111 24.245 13.5 24.4688 13.5C24.6925 13.5 24.9071 13.4111 25.0654 13.2529C25.2236 13.0946 25.3125 12.88 25.3125 12.6562V6.75C25.3125 4.89485 23.7927 3.375 21.9375 3.375H20.25V2.53125C20.25 2.30747 20.1611 2.09286 20.0029 1.93463C19.8446 1.77639 19.63 1.6875 19.4062 1.6875C19.1825 1.6875 18.9679 1.77639 18.8096 1.93463C18.6514 2.09286 18.5625 2.30747 18.5625 2.53125V3.375H14.3438V2.53125C14.3438 2.30747 14.2549 2.09286 14.0966 1.93463C13.9384 1.77639 13.7238 1.6875 13.5 1.6875C13.2762 1.6875 13.0616 1.77639 12.9034 1.93463C12.7451 2.09286 12.6562 2.30747 12.6562 2.53125V3.375H8.4375V2.53125C8.4375 2.30747 8.34861 2.09286 8.19037 1.93463C8.03214 1.77639 7.81753 1.6875 7.59375 1.6875ZM5.0625 5.0625H6.75V5.90625C6.75 6.13003 6.83889 6.34464 6.99713 6.50287C7.15536 6.66111 7.36997 6.75 7.59375 6.75C7.81753 6.75 8.03214 6.66111 8.19037 6.50287C8.34861 6.34464 8.4375 6.13003 8.4375 5.90625V5.0625H12.6562V5.90625C12.6562 6.13003 12.7451 6.34464 12.9034 6.50287C13.0616 6.66111 13.2762 6.75 13.5 6.75C13.7238 6.75 13.9384 6.66111 14.0966 6.50287C14.2549 6.34464 14.3438 6.13003 14.3438 5.90625V5.0625H18.5625V5.90625C18.5625 6.13003 18.6514 6.34464 18.8096 6.50287C18.9679 6.66111 19.1825 6.75 19.4062 6.75C19.63 6.75 19.8446 6.66111 20.0029 6.50287C20.1611 6.34464 20.25 6.13003 20.25 5.90625V5.0625H21.9375C22.887 5.0625 23.625 5.80053 23.625 6.75V8.4375H3.375V6.75C3.375 5.80053 4.11303 5.0625 5.0625 5.0625Z" fill="white"/>
  <path d="M19.4062 13.5C16.1543 13.5 13.5 16.1543 13.5 19.4062C13.5 22.6582 16.1543 25.3125 19.4062 25.3125C22.6582 25.3125 25.3125 22.6582 25.3125 19.4062C25.3125 16.1543 22.6582 13.5 19.4062 13.5ZM19.4062 15.1875C21.7462 15.1875 23.625 17.0663 23.625 19.4062C23.625 21.7462 21.7462 23.625 19.4062 23.625C17.0663 23.625 15.1875 21.7462 15.1875 19.4062C15.1875 17.0663 17.0663 15.1875 19.4062 15.1875Z" fill="white"/>
  <path d="M19.4062 16.875C19.1825 16.875 18.9679 16.9639 18.8096 17.1221C18.6514 17.2804 18.5625 17.495 18.5625 17.7188V19.4062C18.5625 19.63 18.6514 19.8446 18.8097 20.0028C18.9679 20.1611 19.1825 20.25 19.4062 20.25H21.0938C21.3175 20.25 21.5321 20.1611 21.6904 20.0029C21.8486 19.8446 21.9375 19.63 21.9375 19.4062C21.9375 19.1825 21.8486 18.9679 21.6904 18.8096C21.5321 18.6514 21.3175 18.5625 21.0938 18.5625H20.25V17.7188C20.25 17.495 20.1611 17.2804 20.0029 17.1221C19.8446 16.9639 19.63 16.875 19.4062 16.875Z" fill="white"/>
</svg>
          </div>
        </div>
        <div className=' '>
          <p className='sm:text-xl  text-white  font-semibold'>
             مجامع
          </p>
        </div>
    </button>
    <button className='flex gap-2 items-center justify-center border rounded-3xl border-[#367AFF] sm:w-1/3 w-11/12 py-2.5'>
        <div>
          <div className='w-11/12'>
            <Image className='w-full' src={"/images/Line_Expand.svg"} height={0} width={0} alt="Tool"/>
          </div>
        </div>
        <div className=''>
          <p className='sm:text-xl  text-[#0141AC]  font-semibold'>
            بورس کالا
          </p>
        </div>
    </button>
    <button className='flex gap-2 items-center justify-center border rounded-3xl border-[#367AFF] sm:w-1/3 w-11/12 py-2.5'>
        <div>
          <div className='w-11/12'>
            <Image className='w-full' src={"/images/Frame5.svg"} height={0} width={0} alt="Tool"/>
          </div>
        </div>
        <div className=''>
          <p className='sm:text-xl  text-[#0141AC]  font-semibold'>
             پذیره نویسی
          </p>
        </div>
    </button>
                </div>
                <div className='space-y-4 mt-8 text-center'>
                    <div className='flex text-white w-full sm:text-xl items-center justify-between gap-3'>
                        <div className='bg-[#0141AC] rounded-3xl w-3/5 py-3 '>
                            <p>
                                عنوان
                            </p>
                        </div>
                        <div className='bg-[#0141AC] rounded-3xl w-2/5 py-3 '>
                            <p>
                                تاریخ برگزاری
                            </p>
                        </div>
                    </div>
                    <div>
      <div className='flex text-[#777] w-full sm:text-xl items-center justify-between gap-3'>
        <div className='border border-[#D9D9D9] rounded-3xl  py-3 w-3/5'>
          <p>
            عنوان
          </p>
        </div>
        <div className='border border-[#D9D9D9] rounded-3xl w-2/5 py-3 '>
          <p>
          1402/10/20
          </p>
        </div>
      </div>
    </div>
    <div>
      <div className='flex text-[#777] w-full sm:text-xl items-center justify-between gap-3'>
        <div className='border border-[#D9D9D9] rounded-3xl  py-3 w-3/5'>
          <p>
            عنوان
          </p>
        </div>
        <div className='border border-[#D9D9D9] rounded-3xl w-2/5 py-3 '>
          <p>
          1402/10/20
          </p>
        </div>
      </div>
    </div>
    <div>
      <div className='flex text-[#777] w-full sm:text-xl items-center justify-between gap-3'>
        <div className='border border-[#D9D9D9] rounded-3xl  py-3 w-3/5'>
          <p>
            عنوان
          </p>
        </div>
        <div className='border border-[#D9D9D9] rounded-3xl w-2/5 py-3 '>
          <p>
          1402/10/20
          </p>
        </div>
      </div>
    </div>
    <div>
      <div className='flex text-[#777] w-full sm:text-xl items-center justify-between gap-3'>
        <div className='border border-[#D9D9D9] rounded-3xl  py-3 w-3/5'>
          <p>
            عنوان
          </p>
        </div>
        <div className='border border-[#D9D9D9] rounded-3xl w-2/5 py-3 '>
          <p>
          1402/10/20
          </p>
        </div>
      </div>
    </div>
    <div>
      <div className='flex text-[#777] w-full sm:text-xl items-center justify-between gap-3'>
        <div className='border border-[#D9D9D9] rounded-3xl  py-3 w-3/5'>
          <p>
            عنوان
          </p>
        </div>
        <div className='border border-[#D9D9D9] rounded-3xl w-2/5 py-3 '>
          <p>
          1402/10/20
          </p>
        </div>
      </div>
    </div>

                </div>
            </div>
            <div className='lg:w-1/3 w-4/5 lg:mt-0 mt-8 sm:px-0 px-4'>
                <div className='bgReport space-y-8  xl:py-24 py-16 mx-4 xl:mx-16 flex flex-col items-center justify-center rounded-2xl shadow-md shadow-[#9a9a9a40]'>
                    <div className='xl:w-1/2 w-3/5'>
                        <Image className='w-full' src={"/images/Capa_5.svg"} height={0} width={0} alt='clock'/>
                    </div>
                    <div>
                        <p className='text-2xl font-bold text-[#0141AC]'>
                            ما بهت خبر میدیم
                        </p>

                    </div>
                    <div>
                        <button className='bg-[#367AFF] hover:bg-[#256cf8] rounded-2xl px-6 py-2 text-white font-semibold '>
                            رایگان فعال کن
                        </button>
                    </div>

                </div>
            </div>
        </div>
        
    </div>
  )
}
