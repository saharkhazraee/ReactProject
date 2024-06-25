import React from 'react'
import Banner from './Banner'
import { Stack } from '@mui/material'
import Collection from './Collection'
import TrendingOffer from './TrendingOffer'
import TrendingItems from './TrendingItems'


export default function Home() {
  
  return (
    <>
    <Banner/>
    {/* collection section */}
    <Collection/>
    <TrendingOffer/>
    <TrendingItems/>
    </>
  )
}
