"use client"
import React from 'react'
import { Slider as BaseSlider, sliderClasses } from '@mui/base/Slider';
import { styled, alpha, Box } from '@mui/system';
export default function RangeSlider() {
    const marks = [
        {
            value: 1,
            label: '1ماهه',
        },
        {
            value: 3,
            label: '3ماهه',
        },
        {
            value: 6,
            label: '6ماهه',
        },
        {
            value: 12,
            label: '12ماهه',
        },
    ];

    function valuetext(value) {
        return `ماهه${value}`;
    }

    function valueLabelFormat(value) {
        let nextValue = marks.find((mark)=>mark.value===value)
        return  nextValue.value;
    }
    const blue = {
        100: '#DAECFF',
        200: '#99CCF3',
        400: '#3399FF',
        300: '#66B2FF',
        500: '#007FFF',
        600: '#0072E5',
        700: '#0059B3',
        900: '#003A75',
    };

    const grey = {
        50: '#F3F6F9',
        100: '#E5EAF2',
        200: '#DAE2ED',
        300: '#C7D0DD',
        400: '#B0B8C4',
        500: '#9DA8B7',
        600: '#6B7A90',
        700: '#434D5B',
        800: '#303740',
        900: '#1C2025',
    };

    const Slider = styled(BaseSlider)(
        ({ theme }) => `
  color: ${theme.palette.mode === 'light' ? blue[500] : blue[400]};
  height: 6px;
  width: 100%;
  padding: 16px 0;
  display: inline-flex;
  align-items: center;
  position: relative;
  cursor: pointer;
  touch-action: none;
  -webkit-tap-highlight-color: transparent;
  
  &.${sliderClasses.disabled} {
    pointer-events: none;
    cursor: default;
    color: ${theme.palette.mode === 'light' ? grey[300] : grey[600]};
    opacity: 0.4;
  }

  & .${sliderClasses.rail} {
    display: block;
    position: absolute;
    width: 100%;
    height: 4px;
    border-radius: 6px;
    background-color: currentColor;
    opacity: 0.3;
  }

  & .${sliderClasses.track} {
    display: block;
    position: absolute;
    height: 4px;
    border-radius: 6px;
    background-color: currentColor;
  }

  & .${sliderClasses.thumb} {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    margin-left: -6px;
    width: 20px;
    height: 20px;
    box-sizing: border-box;
    border-radius: 50%;
    outline: 0;
    background-color: ${theme.palette.mode === 'light' ? blue[500] : blue[400]};
    transition-property: box-shadow, transform;
    transition-timing-function: ease;
    transition-duration: 120ms;
    transform-origin: center;

    &:hover {
      box-shadow: 0 0 0 6px ${alpha(
            theme.palette.mode === 'light' ? blue[200] : blue[300],
            0.3,
        )};
    }

    &.${sliderClasses.focusVisible} {
      box-shadow: 0 0 0 8px ${alpha(
            theme.palette.mode === 'light' ? blue[200] : blue[400],
            0.5,
        )};
      outline: none;
    }

    &.${sliderClasses.active} {
      box-shadow: 0 0 0 8px ${alpha(
            theme.palette.mode === 'light' ? blue[200] : blue[400],
            0.5,
        )};
      outline: none;
      transform: scale(1.2);
    }
  }

  & .${sliderClasses.mark} {
    position: absolute;
    width: 10px;
    height: 10px;
    border-radius: 99%;
    background-color: ${theme.palette.mode === 'light' ? blue[200] : blue[900]};
    transform: translateX(-50%);
  }

  & .${sliderClasses.markActive} {
    background-color: ${theme.palette.mode === 'light' ? blue[500] : blue[400]};
  }

  & .${sliderClasses.markLabel} {
    font-weight: 600;
    font-size: 12px;
    position: absolute;
    top: 24px;
    transform: translateX(-50%);
    margin-top: 8px;
  }
`,
    );
    return(
        <>

                <Slider
                    aria-label="Restricted values"
                    defaultValue={1}
                    min={1}
                    max={12}
                    valueLabelFormat={valueLabelFormat}
                    getAriaValueText={valuetext}
                    step={null}
                    valueLabelDisplay="auto"
                    marks={marks}
                />
        </>
    )

}