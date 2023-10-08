import React from 'react'
import LineChart from './LineChart'
import TotalMarketInformation from './TotalMarketInformation'
import CandleChart from './CandleChart'
import MarketSummary from './MarketSummary'
import Industry from './Industry'
import SymbolTable from './SymbolTable'
import Funds from './Funds'
import TableSummary from './TableSummary'

export default function Market() {
  return (
    <div className='flex flex-col '>
        <div className='flex justify-between gap-3 m-4'>
            <div className='space-y-4'>
                <LineChart/>
                <CandleChart/>
                <Industry/>
            </div>
            <div className='space-y-4'>
                <TotalMarketInformation/>
                <MarketSummary/>
            </div>
        </div>
        <div className='flex flex-col space-y-4 justify-center'>
          <Funds/>
          <TableSummary/>
          <SymbolTable/>
        </div>
    </div>
  )
}
