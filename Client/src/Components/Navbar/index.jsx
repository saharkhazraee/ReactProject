import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { logout } from '../../Store/Slices/Auth'
import { Box, Button, IconButton, Input, InputAdornment, Stack, Typography } from '@mui/material'
import { Link, useLocation } from 'react-router-dom'
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import fetchData from '../../Utils/FetchData'
import LogoutIcon from '@mui/icons-material/Logout';
export default function Navbar() {
    const [searchInp, setSearchInp] = useState()
    const [womanResultSearch, setWomanResultSearch] = useState()
    const [manResultSearch, setManResultSearch] = useState()
    const { token } = useSelector(state => state.auth)
    const dispath = useDispatch()
    const listLength = useSelector(state => state.cart.list).length

    useEffect(() => {
        if (searchInp) {
            (async () => {
                const res = await fetchData(`women?populate=*&[filters][name][$containsi]=${searchInp}&pagination[page]=1&pagination[pageSize]=2`)
                const menRes = await fetchData(`men?populate=*&[filters][name][$containsi]=${searchInp}&pagination[page]=1&pagination[pageSize]=2`)


                setWomanResultSearch(res.data)
                setManResultSearch(menRes.data)
            })()
        }
    }, [searchInp])
    // hide navbar in auth page
    const location = useLocation();

    if (location.pathname === '/auth') {
        return null; // Hides the navbar when on the login page
    }

    window.addEventListener('click', (e) => {
        if (!e.target.closest('.searchBox') || e.target.closest('.searchLink') ) {
            setSearchInp('')
        }
    })

    const searchWomanItems = womanResultSearch?.map((e, index) => <Link key={index} className='searchLink'
        to={`/woman-product-details/${e?.id}/${e?.attributes?.name}`} style={{ display: 'inline-block', width: '100%', height: '100px' }}>
        <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'} gap={'5px'}>
            <img src={import.meta.env.VITE_BASE_URL + e?.attributes?.images?.data[0]?.attributes?.url}
                alt={e?.attributes?.name}
                style={{ width: '100px', height: '100%' }} />
            <Stack direction={'column'} alignContent={'center'}>
                <Typography variant={'body1'} component={'p'} sx={{ fontSize: '10px' }}>{e?.attributes?.name}</Typography>
                {e?.attributes?.discount > 0 ? <>
                    <Stack direction={'row'} gap={'15px'} sx={{ padding: '1% 0' }}>
                        <Typography component={"del"} variant='body2' sx={{fontSize: '10px', textDecoration: "line-through !important", color: '#B4B4B4' }}>{e?.attributes?.price}EUR</Typography>
                        <Box sx={{ bgcolor: 'red', borderRadius: '45%' }} >
                            <Typography variant='body2' component={'span'} sx={{ fontSize: '10px',color: 'white', p: '1px 5px' }}>{e?.attributes?.discount}% </Typography>
                        </Box>
                    </Stack>
                    <Stack>
                        <Typography component={'p'} variant='h6' color={'error'} sx={{ fontSize: '10px' }} >
                            {((e?.attributes?.price) * (1 - (e?.attributes?.discount / 100))).toFixed(2)}EUR</Typography>
                    </Stack>
                </>
                    : <Typography component={'p'} variant='h6' sx={{ color: '#8B4513', fontSize: '1em' ,fontSize: '10px'}}>
                        {e?.attributes?.price}EUR
                    </Typography>
                }
            </Stack>

        </Stack>
    </Link>)

    const searchmanItems = manResultSearch?.map((e, index) => <Link key={index} className='searchLink'
        to={`/product-details/${e?.id}/${e?.attributes?.name}`} style={{ display: 'inline-block', width: '100%', height: '100px' }}>
        <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'} gap={'5px'}>
            <img src={import.meta.env.VITE_BASE_URL + e?.attributes?.images?.data[0]?.attributes?.url}
                alt={e?.attributes?.name}
                style={{ width: '100px', height: '100%', objectFit: 'cover' }} />
            <Stack direction={'column'} alignContent={'center'} gap={'10px'}>
                <Typography variant={'body1'} component={'p'} sx={{ fontSize: '10px' }}>{e?.attributes?.name}</Typography>
                {e?.attributes?.discount > 0 ? <>
                    <Stack direction={'row'} gap={'15px'} sx={{ padding: '1% 0' }}>
                        <Typography component={"del"} variant='body2' sx={{ textDecoration: "line-through !important", color: '#B4B4B4',fontSize: '10px' }}>{e?.attributes?.price}EUR</Typography>
                        <Box sx={{ bgcolor: 'red', borderRadius: '45%' }} >
                            <Typography variant='body2' component={'span'} sx={{ color: 'white', p: '1px 5px' ,fontSize: '10px'}}>{e?.attributes?.discount}% </Typography>
                        </Box>
                    </Stack>
                    <Stack>
                        <Typography component={'p'} variant='h6' color={'error'} sx={{ fontSize: '10px' }}>
                            {((e?.attributes?.price) * (1 - (e?.attributes?.discount / 100))).toFixed(2)}EUR</Typography>
                    </Stack>
                </>
                    : <Typography component={'p'} variant='h6' sx={{ color: '#8B4513', fontSize: '1em' }}>
                        {e?.attributes?.price}EUR
                    </Typography>
                }
            </Stack>
        </Stack>
    </Link>)
    // console.log(searchmanItems)
    // console.log(searchWomanItems)
    return (
        <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'} gap={'10px'}
            sx={{ width: '100%', height: '70px', boxShadow: "0 8px 5px -5px rgba(0, 0, 0, 0.2)", px: '15px' }} component={'nav'}>
            <Stack component={'div'} direction={'row'} justifyContent={'space-between'} alignContent={'center'} gap={'10px'}>
                <Button variant='text'><Link style={{ color: '#878585', fontFamily: 'sans' }} to={'/'}>Home</Link></Button>
                <Button variant='text'><Link style={{ color: '#878585', fontFamily: 'sans' }} to={'/woman/all-woman-product/all-category'}>Woman</Link></Button>
                <Button variant='text'><Link style={{ color: '#878585', fontFamily: 'sans' }} to={'/man/all-man-product/all-category'}>Man</Link></Button>
                <Button variant='text'><Link style={{ color: '#878585', fontFamily: 'sans', textAlign: 'left !important' }} to={'/search/all-search'}>SEARCH</Link></Button>
                <Button variant='text'><Link style={{ color: '#878585', fontFamily: 'sans' }} to={'/about'}>About</Link></Button>
            </Stack>
            <Stack component={'div'} direction={'row'}>
                <Typography variant='h4' component={'h1'} sx={{ fontFamily: 'sans', color: '#878585' }}><Box component={'span'} sx={{ color: '#8B4513' }}>S</Box>AHAR</Typography>
            </Stack>

            <Stack component={'div'} direction={'row'} justifyContent={'center'} alignContent={'center'} >
                {/*start search box */}

                <Box sx={{ position: 'relative' }} className='searchBox'>
                    <Input value={searchInp} onChange={(e) => setSearchInp(e.target.value)}
                        sx={{
                            bgcolor: '#FAFAFA', borderRadius: '5px', boxShadow: '0 5px 10px 2px rgba(0,0,0,0.2)'
                            , borderBottom: 'none !important', padding: '1%'
                        }}
                        id="outlined-adornment-search"
                        endAdornment={
                            <InputAdornment >

                                <IconButton
                                    size="small"
                                >
                                    <SearchIcon />
                                </IconButton>

                            </InputAdornment>
                        }
                    />
                    <Stack sx={{
                        position: 'absolute', left: '0', top: '100%', width: '100%'
                        , boxShadow: '0 10px 20px 2px rgba(0,0,0,0.2)', bgcolor: '#FAFAFA'
                        , zIndex: 10000, overflowY: 'scroll', gap: '10px', borderRadius: '5px', transition: 'all 0.5s ease'
                        , height: searchInp ? '500px' : '0px'
                    }}>
                        <Box>
                            {searchWomanItems}
                            {searchmanItems}
                        </Box>
                        <Link to={`/search/${searchInp}`} style={{ textAlign: 'center',padding:'2%',color:'#8B4513' }} className='searchLink'>
                            Show More ...
                        </Link>
                    </Stack>
                </Box>


                {/*end search box */}
                {token ?
                    <Button variant='text' onClick={() => dispath(logout())}>
                        <Typography variant='h8' component={'span'} sx={{ color: '#878585', fontFamily: 'sans' }}>
                            <LogoutIcon/>
                        </Typography>
                    </Button>

                    :
                    <Button variant='text' sx={{ mx: '1%' }} onClick={() => dispath(logout())} >
                        <Link style={{ color: '#878585' }} to={'/auth'} >
                            <PermIdentityOutlinedIcon sx={{ fontSize: '28px' }} />
                        </Link>
                    </Button>
                }
                <Button variant='text' sx={{ mx: '-6%' }}>
                    <Link to={'/cart'}>
                        <Badge badgeContent={listLength} sx={{ color: '#8B4513' }} >
                            <ShoppingCartIcon sx={{ color: '#878585', fontSize: '26px' }} />
                        </Badge>
                    </Link>
                </Button>
            </Stack>

        </Stack>
    )
}
