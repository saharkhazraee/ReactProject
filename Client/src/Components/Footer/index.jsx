import { Stack, Typography } from '@mui/material'
import React from 'react'

export default function Footer() {
  return (
    <Stack justifyContent={'space-between'} alignItems={'center'} gap={'20px'} flexWrap={'wrap'}  width={'100%'}
    sx={{padding:'5%',color:'#8B4513'}} direction={'row'}>
      <Stack justifyContent={'center'} alignItems={'center'} gap={'20px'}>
        <Typography variant=''></Typography>
      </Stack>
      <Stack></Stack>
      <Stack></Stack>
      <Stack></Stack>
    </Stack>
  )
}
