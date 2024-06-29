import { Stack, Typography } from '@mui/material'
import React from 'react'

export default function Footer() {
  return (
    <Stack justifyContent={'space-between'} alignItems={'center'} gap={'20px'} flexWrap={'wrap'} width={'100%'}
      sx={{ padding: '5%', bgcolor: '#8B4513 !important' }} direction={'row'}>
      <Stack justifyContent={'center'}  gap={'20px'} >
        <Typography variant='h4' component={'h1'} sx={{color:'white',textAlign:'left !important'}}>SAHAR</Typography>
        <Typography variant='body2' component={'span'} sx={{color:'white',textAlign:'left'}}>WhatsApp:+989360644520</Typography>
        <Typography variant='body2' component={'span'} sx={{color:'white',textAlign:'left'}}>Email:s.khazraee_88@yahoo.com</Typography>
        <Typography variant='body2' component={'span'} sx={{color:'white',textAlign:'left'}}>Address:Mashad daneshju Bulvar</Typography>
      </Stack>
     
    </Stack>
  )
}
