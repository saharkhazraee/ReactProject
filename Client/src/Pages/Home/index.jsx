import React, { useRef, useState } from 'react'
import Banner from './Banner'
import { Stack, Box, IconButton } from '@mui/material'
import Collection from './Collection'
import TrendingOffer from './TrendingOffer'
import TrendingItems from './TrendingItems'
import WomanProductsSlider from './WomanProductsSlider'
import Intruduce from './Intruduce'
import ManProductsSlider from './ManProductsSlider'
import Services from './Services'
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import PauseIcon from '@mui/icons-material/Pause';
export default function Home() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const handlePlayVideo = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  }

  return (
    <>
      <Box sx={{ minHeight: "90vh", width: '100%' }}>
        <Banner />
        {/* collection section */}
        <Collection />
        <TrendingOffer />
        <TrendingItems />
        <WomanProductsSlider />
        {/* <Intruduce /> */}
        <Box sx={{ width: '100%', height: "80vh", position: 'relative' }}>
          <video style={{ width: "100%", height: '100%', objectFit: 'cover' }}
            ref={videoRef}
            muted
            loop>
            <source
              src={'public/assets/introduce.mp4'}
              type="video/mp4" />
          </video>
          <IconButton
            variant="contained"
            color="primary"
            onClick={handlePlayVideo}
            sx={{ position: 'absolute', top: '90%', left: '2%', zIndex: 10000 }} size='large'
          >
            {isPlaying ? <PauseIcon fontSize="inherit"  /> : <PlayCircleOutlineIcon fontSize="inherit"  />}

          </IconButton>
        </Box>
        <ManProductsSlider />
        <Services />
      </Box>


    </>
  )
}
