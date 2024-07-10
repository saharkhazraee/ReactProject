import { Box, Button, Stack, Typography } from '@mui/material'
import React from 'react'
import { Link, useLocation } from 'react-router-dom';

export default function Footer() {
  // hide navbar in auth page
  const location = useLocation();

  if (location.pathname === '/auth') {
    return null; // Hides the navbar when on the login page
  }
  // 
  return (
    <Stack gap={'20px'} flexWrap={'wrap'} width={'100%'} justifyContent={'space-between'} alignItems={'flex-start'}
      sx={{ padding: '3% 5%', bgcolor: '#8B4513 !important' }} direction={'row'}>
      <Stack justifyContent={'center'} gap={'20px'} >
        <Typography variant='h5' component={'h1'} sx={{ color: 'white', textAlign: 'left !important' }}>SAHAR</Typography>
        <Typography variant='body2' component={'span'} sx={{ color: 'white', textAlign: 'left' }}>WhatsApp:+989360644520</Typography>
        <Typography variant='body2' component={'span'} sx={{ color: 'white', textAlign: 'left' }}>Email:s.khazraee_88@yahoo.com</Typography>
        <Typography variant='body2' component={'span'} sx={{ color: 'white', textAlign: 'left' }}>Address:Mashad daneshju Bulvar</Typography>
      </Stack>
      {/* MENU */}
      <Box sx={{ display: 'flex', flexDirection: 'column' }} >
        <Typography variant='body2' component={'span'} sx={{ color: 'white', textAlign: 'left' }}>
          <Button variant='text' ><Typography variant='body2' component={'span'} sx={{ color: 'white', textAlign: 'left' }}>Menu</Typography></Button>
        </Typography>
        <Typography variant='body2' component={'span'} sx={{ color: 'white', textAlign: 'left' }}>
          <Button variant='text'><Link style={{ color: 'white', fontFamily: 'sans', textAlign: 'left !important' }} to={'/'}>Home</Link></Button>
        </Typography>
        <Typography variant='body2' component={'span'} sx={{ color: 'white', textAlign: 'left' }}>
          <Button variant='text'><Link style={{ color: 'white', fontFamily: 'sans', textAlign: 'left !important' }} to={'/woman/all-woman-product/all-category'}>Woman</Link></Button>
        </Typography>
        <Typography variant='body2' component={'span'} sx={{ color: 'white', textAlign: 'left' }}>
          <Button variant='text'><Link style={{color: 'white', fontFamily: 'sans', textAlign: 'left !important' }} to={'/man/all-man-product/all-category'}>Man </Link></Button>
        </Typography>
        <Typography variant='body2' component={'span'} sx={{ color: 'white', textAlign: 'left' }}>
          <Button variant='text'><Link style={{ color: 'white', fontFamily: 'sans', textAlign: 'left !important' }} to={'/search/all-search'}>SEARCH</Link></Button>
        </Typography>
        <Typography variant='body2' component={'span'} sx={{ color: 'white', textAlign: 'left' }}>
          <Button variant='text'><Link style={{ color: 'white', fontFamily: 'sans', textAlign: 'left !important' }} to={'/about'}>About</Link></Button>
        </Typography>


      </Box>
      <Stack justifyContent={'center'} gap={'20px'} >
        <Typography variant='h6' component={'h1'} sx={{ color: 'white', textAlign: 'left !important' }}>Get Help</Typography>
        <Typography variant='body2' component={'span'} sx={{ color: 'white', textAlign: 'left' }}>FAQ</Typography>
        <Typography variant='body2' component={'span'} sx={{ color: 'white', textAlign: 'left' }}>Customer Service</Typography>
        <Typography variant='body2' component={'span'} sx={{ color: 'white', textAlign: 'left' }}>Refund and Return</Typography>
        <Typography variant='body2' component={'span'} sx={{ color: 'white', textAlign: 'left' }}>Terms and Conditions</Typography>
        <Typography variant='body2' component={'span'} sx={{ color: 'white', textAlign: 'left' }}>Shipping</Typography>
      </Stack>
      <Stack justifyContent={'center'} gap={'20px'} >
        <Typography variant='h6' component={'h1'} sx={{ color: 'white', textAlign: 'left !important' }}>Account</Typography>
        <Typography variant='body2' component={'span'} sx={{ color: 'white', textAlign: 'left' }}>My Account</Typography>
        <Typography variant='body2' component={'span'} sx={{ color: 'white', textAlign: 'left' }}>My Orders</Typography>
        <Typography variant='body2' component={'span'} sx={{ color: 'white', textAlign: 'left' }}>Vouchers and Discounts</Typography>
      </Stack>
    </Stack>
  )
}


