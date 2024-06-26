import React from 'react'
import Banner from './Banner'
import { Stack, Box } from '@mui/material'
import Collection from './Collection'
import TrendingOffer from './TrendingOffer'
import TrendingItems from './TrendingItems'
import WomanProductsSlider from './WomanProductsSlider'


export default function Home() {
  
  return (
    <>
    <Box sx={{minHeight:"90vh"}}>
      
    </Box>
    <Banner/>
    {/* collection section */}
    <Collection/>
    <TrendingOffer/>
    <TrendingItems/>
    <WomanProductsSlider/>

    </>
  )
}
