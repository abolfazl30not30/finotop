"use client"

import {useEffect, useState} from "react";
import Image from "next/image";
import Link from "next/link";

export default function Entrance() {
    return (
        <>

            <div className="w-[80%] md:w-[50%]">
                <div className="flex justify-center md:hidden mb-20">
                    <div className="w-[40%]">
                        <Image src="/redMICLogo.svg" alt="costumer" width={0}
                               height={0}
                               sizes="100vw"
                               style={{width: '100%', height: 'auto'}}/>
                    </div>
                </div>
                <div className="mb-9">
                    <h3 className="font-extrabold text-xl md:text-2xl">
                        ورود به سامانه
                    </h3>
                </div>
                <div>
                <Link href={`/`}  className="block text-center w-full rounded-[0.5rem] py-3 bg-mainBlue text-white font-bold text-mainRed hover:opacity-80 ">ورود
                    </Link>
                </div>
            </div>
        </>
    )
}
