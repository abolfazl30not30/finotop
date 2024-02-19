'use client'
import { createChart, ColorType } from 'lightweight-charts';
import React, { useEffect, useRef } from 'react';

export const FirstLineChart = (props) => {
    const {
        data,
        colors: {
            backgroundColor = 'white',
            lineColor = '#2962FF',
            lineWidth= 2,
            textColor = 'black',
            areaTopColor = '#2962FF',
            areaBottomColor = 'rgba(152,176,255,0.28)',
        } = {},
    } = props;

    const chartContainerRef = useRef();

    useEffect(
        () => {
            const chart = createChart(chartContainerRef.current, {
                layout: {
                    background: { type: ColorType.Solid, color: backgroundColor },
                    textColor,
                },
                grid: {
                    vertLines: {
                        visible: false,
                    },
                    horzLines: {
                        color: '#f0f3fa',
                    },
                },
                width: 500,
                height: 250,
            });
            chart.timeScale().fitContent();

            const newSeries = chart.addAreaSeries({ lineWidth, lineColor, topColor: areaTopColor, bottomColor: areaBottomColor });
            newSeries.setData(data);


            return () => {
                chart.remove();
            };
        },
        [data, backgroundColor, lineColor, textColor, areaTopColor, areaBottomColor]
    );

    return (
        <div ref={chartContainerRef}/>
    );
};