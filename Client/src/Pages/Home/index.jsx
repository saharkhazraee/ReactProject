import React from 'react'
import Banner from './Banner'
import { Stack, Box } from '@mui/material'
import Collection from './Collection'
import TrendingOffer from './TrendingOffer'
import TrendingItems from './TrendingItems'
import WomanProductsSlider from './WomanProductsSlider'
import Intruduce from './Intruduce'
import ManProductsSlider from './ManProductsSlider'
import Services from './Services'


export default function Home() {
  
  return (
    <>
    <Box sx={{minHeight:"90vh"}}>
    <Banner/>
    {/* collection section */}
    <Collection/>
    <TrendingOffer/>
    <TrendingItems/>
    <WomanProductsSlider/>
    <Intruduce/>
    <ManProductsSlider/>
    <Services/>
    </Box>
   

    </>
  )
}
