import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { logout } from '../../Store/Slices/Auth'
import { Box, Button, Stack, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
export default function Navbar() {
    const { token } = useSelector(state => state.auth)
    const dispath = useDispatch()
    return (
        <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'} gap={'10px'}
            sx={{ width: '100%', height: '70px', boxShadow: "0 8px 5px -5px rgba(0, 0, 0, 0.2)", px: '15px' }} component={'nav'}>
            <Stack component={'div'} direction={'row'} justifyContent={'space-between'} alignContent={'center'} gap={'10px'}>
             <Button variant='text'><Link style={{color:'#878585'}} to={'/'}>Home</Link></Button>
             <Button variant='text'><Link style={{color:'#878585'}} to={'/woman-products/all-woman-product/all-category'}>Woman</Link></Button>
             <Button variant='text'><Link style={{color:'#878585'}} to={'/man-products/all-man-product/all-category'}>Man</Link></Button>
             <Button variant='text'><Link style={{color:'#878585'}} to={'/casual-products'}>Casual Style</Link></Button>
             <Button variant='text'><Link style={{color:'#878585'}} to={'/about'}>About</Link></Button>
            </Stack>
            <Stack component={'div'} direction={'row'}>
            <Typography><Box component={'span'} >S</Box>AHAR</Typography>
            </Stack>
            
            <Stack component={'div'} direction={'row'} justifyContent={'space-between'} alignContent={'center'} gap={'10px'}>

            </Stack>

        </Stack>
    )
}
