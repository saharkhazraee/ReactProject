import { Button, Stack, Typography, useMediaQuery } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './style.css';
// import required modules
import { FreeMode, Navigation } from 'swiper/modules';
import Productcard from '../../../Components/Productcard';
import fetchData from '../../../Utils/FetchData';
import WomanProductcard from '../../../Components/WomanProductCard';
export default function WomanProductsSlider() {
    const [product, setProduct] = useState()
    const [category, setCategory] = useState('top')
    const [womanPic, setWomanPic] = useState()
    const isLargeScreen = useMediaQuery('(min-width:1350px)');
    useEffect(() => {
        (async () => {
            const res = await fetchData(`women?populate=*&[filters][categories][name][$containsi]=${category}&pagination[page]=1&pagination[pageSize]=4`)
            // const menRes = await fetchData(`men?populate=*&[filters][categories][name][$containsi]=${category}&pagination[page]=1&pagination[pageSize]=3`)
            const womanRes = await fetchData('home-images/1?populate=*')
            setProduct(res.data)
            setWomanPic(womanRes.data)
        })()
    }, [category])


    // start slider
    const items = product?.map((e, index) =>

        <SwiperSlide>
            <WomanProductcard key={index} id={e?.id}
                img={import.meta.env.VITE_BASE_URL + e?.attributes?.images?.data[0]?.attributes?.url} name={e?.attributes?.name}
                price={e?.attributes?.price} discount={e?.attributes?.discount} />
        </SwiperSlide>)

    return (
        <Stack direction={'row'} justifyContent={'center'} alignItems={'center'} gap={'30px'} sx={{ width: { xs: '98%', lg: '83%' }, height: "70vh", margin: '5% auto', my: '10%' }}>
            {/* left side of Slider */}
            <Stack sx={{ width: '30%', height:{xs:'80%', lg:'100%'}, position: 'relative', overflow: 'hidden', justifyContent: 'center', alignItems: 'center' }}>
                <img src={import.meta.env.VITE_BASE_URL + womanPic?.attributes?.image?.data?.attributes?.url} alt=''
                    style={{ borderRadius: "10px", width: '100%', height: '100%', objectFit: 'cover' }} />

                <Stack justifyContent={'center'} alignItems={'center'} gap={'50px'} sx={{
                    width: "100%", position: 'absolute'
                    , zIndex: 10000
                }}>

                    <Stack justifyContent={'center'} alignItems={'center'} gap={'50px'} sx={{ width: "100%", position: 'relative' }}>
                        <Stack sx={{ width: "100%", bgcolor: '#D9D9D9', opacity: "30%", height: '100px' }}>

                        </Stack>
                        <Typography variant='h5' component={'h1'}
                            sx={{ color: 'white', position: 'absolute', fontWeight: 'bold' }}>
                            WOMEN'S
                        </Typography>
                        {/* <Button>
                            <Link
                                to={`/woman/id/${category.replaceAll(' ', '-')}`}>
                                show more</Link>
                        </Button> */}
                    </Stack>

                </Stack>
            </Stack>
            {/* right side of slider */}
            <Stack sx={{ width: '70%', height: "70%" }} justifyContent={'center'} alignItems={'center'}  >
                <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'} gap={'10px'} sx={{ width:{lg:'50%'} , margin: "1% auto" }}>

                    <Button variant='text' sx={{ fontSize: '1.2em', color: `${category}` == 'top' ? '#8B4513' : '#1D1D1D' }} onClick={() => setCategory('top')}>Top</Button>
                    <Button variant='text' sx={{ fontSize: '1.2em', color: `${category}` == 'pans' ? '#8B4513' : '#1D1D1D' }} onClick={() => setCategory('pans')}>Pans</Button>
                    <Button variant='text' sx={{ fontSize: '1.2em', color: `${category}` == 'T-shirt' ? '#8B4513' : '#1D1D1D' }} onClick={() => setCategory('T-shirt')}>T-shirt</Button>
                    <Button variant='text' sx={{ fontSize: '1.2em', color: `${category}` == 'Dress' ? '#8B4513' : '#1D1D1D' }} onClick={() => setCategory('Dress')}>DrESS</Button>

                </Stack>
                <Stack justifyContent={'center'} alignItems={'center'} sx={{ width: '100%', margin: "1% 1%" }} >
                    <Swiper
                        slidesPerView={2}
                        navigation={isLargeScreen ? true : false}
                        spaceBetween={2}
                        freeMode={true}
                        modules={[FreeMode, Navigation]}
                        className="catProductsSlider"
                    >

                        {items}
                    </Swiper>
                </Stack>

            </Stack>
        </Stack>



    )
}
