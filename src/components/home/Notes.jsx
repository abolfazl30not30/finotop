import React from 'react'
import Image from 'next/image'
import Note from './Note'
export default function Notes() {
  return (
    <div className='mx-32'>
        <div className='flex items-center gap-2  my-16 space-y-4'>
            <div className='w-[3%]'>
                <Image className='w-full' src={"/images/icon_1834050_edited 2.svg"} height={0} width={0} alt='note'/>
            </div>
            <div>
                <p className='text-[#0141AC] font-bold text-3xl'>
                    یادداشت ها
                </p>
            </div>
        </div>
        <div className='flex justify-between'>
            <Note/>
            <Note/>
            <Note/>
            <Note/>
        </div>
    </div>
  )
}
