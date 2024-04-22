'use client'
import React from 'react'
import Image from 'next/image'
import "../../style/login.css"
import {prefixer} from 'stylis';
import createCache from "@emotion/cache";
import rtlPlugin from "stylis-plugin-rtl";
import {CacheProvider} from "@emotion/react";

const cacheRtl = createCache({
    key: 'muirtl',
    stylisPlugins: [prefixer, rtlPlugin],
});

export default function RootLayout({ children }) {
  return (
      <>
          <div className="flex  overflow-hidden">
              <div className="bg-mainBlue hidden md:flex md:w-[40%] lg:w-[30%] h-screen flex-col items-center justify-center">
                  <div>
                      {/*<Image src="/icon-512x512.png" alt="costumer" width={0}*/}
                      {/*       height={0}*/}
                      {/*       sizes="100vw"*/}
                      {/*       style={{width: '100%', height: 'auto'}}/>*/}
                  </div>
              </div>
              <div className="w-[100%] md:w-[60%] lg:w-[70%] flex flex-col md:justify-center justify-start items-center h-screen">
                  <CacheProvider value={cacheRtl}>
                      <div className="relative md:hidden bg-mainBlue w-full h-1/3">
                          <div className="w-[50%] absolute right-[23%] md:hidden" style={{bottom:"-4rem"}}>
                                      {/*<Image src="" alt="costumer" width={0}*/}
                                      {/*       height={0}*/}
                                      {/*       sizes="100vw"*/}
                                      {/*       style={{width: '100%', height: 'auto'}}/>*/}
                          </div>
                     </div>
                    {children}
                  </CacheProvider>
              </div>
          </div>
      </>
  )
}
