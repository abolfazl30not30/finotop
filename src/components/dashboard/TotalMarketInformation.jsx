import React from 'react'
import {FirstLineChart} from "@/components/dashboard/charts/FirstLineChart";

export default function TotalMarketInformation() {
    const initialData = [
        { time: '2018-10-19', value: 35.98 },
        { time: '2018-10-22', value: 35.75 },
        { time: '2018-10-23', value: 35.65 },
        { time: '2018-10-24', value: 34.12 },
        { time: '2018-10-25', value: 35.84 },
        { time: '2018-10-26', value: 35.24 },
        { time: '2018-10-29', value: 35.99 },
        { time: '2018-10-30', value: 37.71 },
        { time: '2018-10-31', value: 38.14 },
        { time: '2018-11-01', value: 37.95 },
        { time: '2018-11-02', value: 37.66 },
        { time: '2018-11-05', value: 38.02 },
        { time: '2018-11-06', value: 37.73 },
        { time: '2018-11-07', value: 38.30 },
        { time: '2018-11-08', value: 38.30 },
        { time: '2018-11-09', value: 38.34 },
        { time: '2018-11-12', value: 38.00 },
        { time: '2018-11-13', value: 37.72 },
        { time: '2018-11-14', value: 38.29 },
        { time: '2018-11-15', value: 38.49 },
        { time: '2018-11-16', value: 38.59 },
        { time: '2018-11-19', value: 38.18 },
        { time: '2018-11-20', value: 36.76 },
        { time: '2018-11-21', value: 37.51 },
        { time: '2018-11-23', value: 37.39 },
        { time: '2018-11-26', value: 37.77 },
        { time: '2018-11-27', value: 38.36 },
        { time: '2018-11-28', value: 39.06 },
        { time: '2018-11-29', value: 39.42 },
        { time: '2018-11-30', value: 39.01 },
        { time: '2018-12-03', value: 39.15 },
        { time: '2018-12-04', value: 37.69 },
        { time: '2018-12-06', value: 37.88 },
        { time: '2018-12-07', value: 37.41 },
        { time: '2018-12-10', value: 37.35 },
        { time: '2018-12-11', value: 36.84 },
        { time: '2018-12-12', value: 36.98 },
        { time: '2018-12-13', value: 36.76 },
        { time: '2018-12-14', value: 36.34 },
        { time: '2018-12-17', value: 36.21 },
        { time: '2018-12-18', value: 35.65 },
        { time: '2018-12-19', value: 35.19 },
        { time: '2018-12-20', value: 34.62 },
        { time: '2018-12-21', value: 33.75 },
        { time: '2018-12-24', value: 33.07 },
        { time: '2018-12-26', value: 34.14 },
        { time: '2018-12-27', value: 34.47 },
        { time: '2018-12-28', value: 34.35 },
        { time: '2018-12-31', value: 34.05 },
        { time: '2019-01-02', value: 34.37 },
        { time: '2019-01-03', value: 34.64 },
        { time: '2019-01-04', value: 35.81 },
        { time: '2019-01-07', value: 35.43 },
        { time: '2019-01-08', value: 35.72 },
        { time: '2019-01-09', value: 36.06 },
        { time: '2019-01-10', value: 35.82 },
        { time: '2019-01-11', value: 35.63 },
        { time: '2019-01-14', value: 35.77 },
        { time: '2019-01-15', value: 35.83 },
        { time: '2019-01-16', value: 35.90 },
        { time: '2019-01-17', value: 35.91 },
        { time: '2019-01-18', value: 36.21 },
        { time: '2019-01-22', value: 34.97 },
        { time: '2019-01-23', value: 36.89 },
        { time: '2019-01-24', value: 36.24 },
        { time: '2019-01-25', value: 35.78 },
        { time: '2019-01-28', value: 35.37 },
        { time: '2019-01-29', value: 36.08 },
        { time: '2019-01-30', value: 35.43 },
        { time: '2019-01-31', value: 36.57 },
        { time: '2019-02-01', value: 36.79 },
        { time: '2019-02-04', value: 36.77 },
        { time: '2019-02-05', value: 37.15 },
        { time: '2019-02-06', value: 37.17 },
        { time: '2019-02-07', value: 37.68 },
        { time: '2019-02-08', value: 37.60 },
        { time: '2019-02-11', value: 37.00 },
        { time: '2019-02-12', value: 37.24 },
        { time: '2019-02-13', value: 37.03 },
        { time: '2019-02-14', value: 37.26 },
        { time: '2019-02-15', value: 37.77 },
        { time: '2019-02-19', value: 37.55 },
        { time: '2019-02-20', value: 37.79 },
        { time: '2019-02-21', value: 38.47 },
        { time: '2019-02-22', value: 38.61 },
        { time: '2019-02-25', value: 38.57 },
        { time: '2019-02-26', value: 38.80 },
        { time: '2019-02-27', value: 38.53 },
        { time: '2019-02-28', value: 38.67 },
        { time: '2019-03-01', value: 39.10 },
        { time: '2019-03-04', value: 38.73 },
        { time: '2019-03-05', value: 38.72 },
        { time: '2019-03-06', value: 38.61 },
        { time: '2019-03-07', value: 38.38 },
        { time: '2019-03-08', value: 38.19 },
        { time: '2019-03-11', value: 39.17 },
        { time: '2019-03-12', value: 39.49 },
        { time: '2019-03-13', value: 39.56 },
        { time: '2019-03-14', value: 39.87 },
        { time: '2019-03-15', value: 40.47 },
        { time: '2019-03-18', value: 39.92 },
        { time: '2019-03-19', value: 39.78 },
        { time: '2019-03-20', value: 39.47 },
        { time: '2019-03-21', value: 40.05 },
        { time: '2019-03-22', value: 39.46 },
        { time: '2019-03-25', value: 39.18 },
        { time: '2019-03-26', value: 39.63 },
        { time: '2019-03-27', value: 40.21 },
        { time: '2019-03-28', value: 40.42 },
        { time: '2019-03-29', value: 39.98 },
        { time: '2019-04-01', value: 40.31 },
        { time: '2019-04-02', value: 40.02 },
        { time: '2019-04-03', value: 40.27 },
        { time: '2019-04-04', value: 40.41 },
        { time: '2019-04-05', value: 40.42 },
        { time: '2019-04-08', value: 40.71 },
        { time: '2019-04-09', value: 41.04 },
        { time: '2019-04-10', value: 41.08 },
        { time: '2019-04-11', value: 41.04 },
        { time: '2019-04-12', value: 41.30 },
        { time: '2019-04-15', value: 41.78 },
        { time: '2019-04-16', value: 41.97 },
        { time: '2019-04-17', value: 42.57 },
        { time: '2019-04-18', value: 42.43 },
        { time: '2019-04-22', value: 42.00 },
        { time: '2019-04-23', value: 41.99 },
        { time: '2019-04-24', value: 41.85 },
        { time: '2019-04-25', value: 42.93 },
        { time: '2019-04-26', value: 43.08 },
        { time: '2019-04-29', value: 43.45 },
        { time: '2019-04-30', value: 43.53 },
        { time: '2019-05-01', value: 43.42 },
        { time: '2019-05-02', value: 42.65 },
        { time: '2019-05-03', value: 43.29 },
        { time: '2019-05-06', value: 43.30 },
        { time: '2019-05-07', value: 42.76 },
        { time: '2019-05-08', value: 42.55 },
        { time: '2019-05-09', value: 42.92 },
        { time: '2019-05-10', value: 43.15 },
        { time: '2019-05-13', value: 42.28 },
        { time: '2019-05-14', value: 42.91 },
        { time: '2019-05-15', value: 42.49 },
        { time: '2019-05-16', value: 43.19 },
        { time: '2019-05-17', value: 43.54 },
        { time: '2019-05-20', value: 42.78 },
        { time: '2019-05-21', value: 43.29 },
        { time: '2019-05-22', value: 43.30 },
        { time: '2019-05-23', value: 42.73 },
        { time: '2019-05-24', value: 42.67 },
        { time: '2019-05-28', value: 42.75 },
    ];
  return (
    <div className='bg-white rounded-2xl '>
        <div className='flex flex-col items-center justify-center items-center mx-4  space-y-3'>
            <div className='w-full'>
                <div className="overflow-x-auto">
                    <table className="w-full text-sm text-center border-spacing-y-3 border-separate table-auto overflow-scroll">
                        <thead className="text-sm text-white font-semibold ">
                            <tr className='bg-[#367AFF] '>
                                <th scope="col" className="px-6 py-3 rounded-r-2xl">
                                    اطلاعات کل بازار
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    تعداد
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    ارزش
                                </th>
                                <th scope="col" className="px-6 py-3 rounded-l-2xl">
                                    روند
                                </th>
                            </tr>
                        </thead>
                        <tbody className='text-[#777] text-sm '>
                            <tr className="bg-[#F8F8F8] ">
                                <td className="px-6 py-3 rounded-r-2xl ">
                                    صف خرید
                                </td>
                                <td className="px-6 py-3">
                                    96
                                </td>
                                <td className="px-6 py-3">
                                    1231B
                                </td>
                                <td className="px-6 py-3 rounded-l-2xl">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="47" height="20" viewBox="0 0 47 20" fill="none">
                                      <line y1="-0.5" x2="14.8" y2="-0.5" transform="matrix(0 -1 -1 0 10.2227 19.6)" stroke="#2BC42C"/>
                                      <line y1="-0.5" x2="19" y2="-0.5" transform="matrix(0 -1 -1 0 0.714844 19.6)" stroke="#2BC42C"/>
                                      <line y1="-0.5" x2="19.6" y2="-0.5" transform="matrix(0 -1 -1 0 3.88477 19.6)" stroke="#2BC42C"/>
                                      <line y1="-0.5" x2="18.2" y2="-0.5" transform="matrix(0 -1 -1 0 7.05469 19.6)" stroke="#2BC42C"/>
                                      <line y1="-0.5" x2="12.4" y2="-0.5" transform="matrix(0 -1 -1 0 13.3965 19.6)" stroke="#2BC42C"/>
                                      <line y1="-0.5" x2="12" y2="-0.5" transform="matrix(0 -1 -1 0 16.5625 19.6)" stroke="#2BC42C"/>
                                      <line y1="-0.5" x2="12.6" y2="-0.5" transform="matrix(0 -1 -1 0 19.7363 19.6)" stroke="#2BC42C"/>
                                      <line y1="-0.5" x2="11.2" y2="-0.5" transform="matrix(0 -1 -1 0 22.9023 19.6)" stroke="#2BC42C"/>
                                      <line y1="-0.5" x2="9.8" y2="-0.5" transform="matrix(0 -1 -1 0 26.0723 19.6)" stroke="#2BC42C"/>
                                      <line y1="-0.5" x2="8.4" y2="-0.5" transform="matrix(0 -1 -1 0 29.2441 19.6)" stroke="#2BC42C"/>
                                      <line y1="-0.5" x2="7" y2="-0.5" transform="matrix(0 -1 -1 0 32.4082 19.6)" stroke="#2BC42C"/>
                                      <line y1="-0.5" x2="5.6" y2="-0.5" transform="matrix(0 -1 -1 0 35.582 19.6)" stroke="#2BC42C"/>
                                      <line y1="-0.5" x2="4.2" y2="-0.5" transform="matrix(0 -1 -1 0 38.752 19.6)" stroke="#2BC42C"/>
                                      <line y1="-0.5" x2="2.8" y2="-0.5" transform="matrix(0 -1 -1 0 41.9238 19.6)" stroke="#2BC42C"/>
                                      <line y1="-0.5" x2="1.4" y2="-0.5" transform="matrix(0 -1 -1 0 45.0918 19.6)" stroke="#2BC42C"/>
                                    </svg>
                                </td>
                            </tr>
                            <tr className="bg-[#F8F8F8]">
                                <td className="px-6 py-3 rounded-r-2xl">
                                    صف فروش
                                </td>
                                <td className="px-6 py-3">
                                    128
                                </td>
                                <td className="px-6 py-3">
                                    1796B
                                </td>
                                <td className="px-6 py-3 rounded-l-2xl">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="47" height="18" viewBox="0 0 47 18" fill="none">
                                      <line y1="-0.5" x2="14.8" y2="-0.5" transform="matrix(0 -1 -1 0 10.2227 17.6)" stroke="#D64937"/>
                                      <line y1="-0.5" x2="16" y2="-0.5" transform="matrix(0 -1 -1 0 0.714844 17.6)" stroke="#D64937"/>
                                      <line y1="-0.5" x2="17.6" y2="-0.5" transform="matrix(0 -1 -1 0 3.88477 17.6)" stroke="#D64937"/>
                                      <line y1="-0.5" x2="15.2" y2="-0.5" transform="matrix(0 -1 -1 0 7.05469 17.6)" stroke="#D64937"/>
                                      <line y1="-0.5" x2="12.4" y2="-0.5" transform="matrix(0 -1 -1 0 13.3965 17.6)" stroke="#D64937"/>
                                      <line y1="-0.5" x2="12" y2="-0.5" transform="matrix(0 -1 -1 0 16.5625 17.6)" stroke="#D64937"/>
                                      <line y1="-0.5" x2="12.6" y2="-0.5" transform="matrix(0 -1 -1 0 19.7363 17.6)" stroke="#D64937"/>
                                      <line y1="-0.5" x2="12.2" y2="-0.5" transform="matrix(0 -1 -1 0 22.9023 17.6)" stroke="#D64937"/>
                                      <line y1="-0.5" x2="9.8" y2="-0.5" transform="matrix(0 -1 -1 0 26.0723 17.6)" stroke="#D64937"/>
                                      <line y1="-0.5" x2="8.4" y2="-0.5" transform="matrix(0 -1 -1 0 29.2441 17.6)" stroke="#D64937"/>
                                      <line y1="-0.5" x2="8" y2="-0.5" transform="matrix(0 -1 -1 0 32.4082 17.6)" stroke="#D64937"/>
                                      <line y1="-0.5" x2="6.6" y2="-0.5" transform="matrix(0 -1 -1 0 35.582 17.6)" stroke="#D64937"/>
                                      <line y1="-0.5" x2="5.2" y2="-0.5" transform="matrix(0 -1 -1 0 38.752 17.6)" stroke="#D64937"/>
                                      <line y1="-0.5" x2="4.8" y2="-0.5" transform="matrix(0 -1 -1 0 41.9238 17.6)" stroke="#D64937"/>
                                      <line y1="-0.5" x2="5.4" y2="-0.5" transform="matrix(0 -1 -1 0 45.0918 17.6)" stroke="#D64937"/>
                                    </svg>
                                </td>
                            </tr>
                            <tr className="bg-[#F8F8F8]  ">
                                <td className="px-6 py-3 rounded-r-2xl">
                                   ارزش سفارشات تقاضا
                                </td>
                                <td className="px-6 py-3">
                                   523
                                </td>
                                <td className="px-6 py-3">
                                    ...
                                </td>
                                <td className="px-6 py-3 rounded-l-2xl">
                                    ...
                                </td>
                            </tr>
                            <tr className=" bg-[#F8F8F8] ">
                                <td className="px-6 py-3 rounded-r-2xl">
                                   ارزش سفارشات عرضه
                                </td>
                                <td className="px-6 py-3">
                                    452
                                </td>
                                <td className="px-6 py-3">
                                    ...
                                </td>
                                <td className="px-6 py-3 rounded-l-2xl">
                                    ...
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className='py-3 w-full flex justify-center'>
                <FirstLineChart  data={initialData}/>
            </div>
        </div>
    </div>
  )
}
