import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import AboutSlider from './AboutSlider'
export default function About() {
  return (
    <>
      <Stack direction={'row'} sx={{ width: '100%' }}>
        <Box sx={{ width: '33%', height: '100%' }}><img src={'public/assets/banner1.jpg'}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="banner" /></Box>
        <Box sx={{ width: '33%', height: '100%' }}><img src={'public/assets/banner2.jpg'}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="banner" /></Box>
        <Box sx={{ width: '33%', height: '100%' }}><img src={'public/assets/banner3.jpg'}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="banner" /></Box>
      </Stack>
      <Box component={'p'} sx={{ width: '60%', margin: '10% auto' }}>
        ONE OF THE CHALLENGES FOR THE TEXTILE INDUSTRY IS EXTENDING THE USEFUL LIFE OF GARMENTS. WITH THIS IN MIND, WE HAVE CREATED PREOWNED, A PLATFORM TO HELP YOU EXTEND THE LIFE OF YOUR ZARA CLOTHING.
        <br /><br />
        AS PART OF OUR JOURNEY TOWARDS A MORE SUSTAINABLE MODEL, THIS INITIATIVE ALLOWS YOU TO REPAIR, RESELL OR DONATE YOUR USED GARMENTS.
        <br /><br />
        THIS IS ANOTHER ACTION TAKEN TO MOVING TOWARDS CIRCULARITY THAT ENCOMPASSES ALL PHASES OF OUR ACTIVITY – FROM PRODUCT DESIGN TO LOGISTICS AND STORES.
      </Box>
      <Box sx={{
        width: '100%',
        height:'80vh',
        position: 'relative',
        marginBottom: '10%'
      }}>
        <img src={'public/assets/banner4.jpg'} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        <Box sx={{
          position: 'absolute', top: '50%', left: '65%',
          transform: 'translateY(-50%)', bgcolor: 'white', width: '28%', height: '60%', padding: '2%'
        }}>
          <Typography variant={'h5'} component={'h2'} sx={{ margin: '20px 0', fontWeight: 'bold', color: '#8B4513' }} >A unique
            distribution
            ecosystem
          </Typography>
          <Typography variant={'body2'} component={'p'} >
            sahar distributes its brand through different fully integrated
            channels, combining its own stores with franchises, retail sales
            with wholesale and a relevant online activity through its
            own e-commerce (Mango.com). This combination represents a
            differentiating aspect of the company, being one of the few that operates with
            a distribution ecosystem of these characteristics
          </Typography>
        </Box>
      </Box>
      <Stack direction={'row'}  alignItems={'center'} justifyContent={'space-between'} gap={'10%'}
      sx={{width:'100%',height:'500px',bgcolor:'#FBFBFB'}}>
        <Box sx={{width:'40%',paddingLeft:'10%'}}>
          <Typography variant={'h5'} component={'h2'} marginBottom={'20px'}>A team. An objective</Typography>
          <Typography variant={'body2'} component={'p'}>
            we dress everything we do with passion.
            We are the place where creativity, innovation, diversity, digitalization and sustainability
            come together to grow projects on a global scale. At Mango you can unleash all your potential
            and creativity to
            take fashion much further. We are a team with a great goal: Taking Fashion Furt
            sahar distributes its brand through different fully integrated
            channels, combining its own stores with franchises, retail sales
            with wholesale and a relevant online activity through its
            own e-commerce .
          </Typography>
        </Box>
        <Box sx={{
          width: '40%',
          height:'100%'
        }}>
        <img src={'public/assets/teampic.jpg'} 
        style={{ width: '100%', height: '100%' }} />
        
        </Box>
       
      </Stack>
      <Box>
          <AboutSlider/>
        </Box>
    </>
  )
}
