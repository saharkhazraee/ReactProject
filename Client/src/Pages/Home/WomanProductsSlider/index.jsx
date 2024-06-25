import { Button, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import fetchData from '../../../Utils/FetchData'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import './style.css';
// import required modules
import { FreeMode, Pagination } from 'swiper/modules';
import fetchData from '../../../Utils/FetchData';
import Productcard from '../../../Components/Productcard';
export default function WomanProductsSlider() {
    const [product, setProduct] = useState()
    const [category, setCategory] = useState()

    useEffect(() => {
        (async () => {
            const res = await fetchData(`women?populate=*&filters[categories][$eq]=${category}`)
            const menRes = await fetchData(`men?populate=*&filters[categories][$eq]=${category}`)
            return (setProduct([...res.data, ...menRes.data]))
        })()
    }, [category])

    const items = product?.map((e, index) =>
     <SwiperSlide>
        <Productcard key={index} id={e?.id}
            img={import.meta.env.VITE_BASE_URL + e?.attributes?.images?.data[0]?.attributes?.url} name={e?.attributes?.name}
            price={e?.attributes?.price} discount={e?.attributes?.discount} />
    </SwiperSlide>)
    return (
        <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'} sx={{ width: '100%', height: "90vh", margin: 'auto 5%' }}>
            <Stack sx={{ width: '30%', position: 'relative', overflow: 'hidden' }}>
                <img src='' alt='' style={{ borderRadius: "10px" }} />
                <Stack justifyContent={'center'} alignItems={'center'} gap={'50px'} sx={{ width: "100%", position: 'absolute' }}>
                    <Stack sx={{ width: "100%", bgcolor: '#D9D9D9', opacity: '10%' }}>
                        <Typography variant='h6' component={'h1'} sx={{ color: 'white' }}>WOMEN'S</Typography>
                    </Stack>
                    <Button><Link to={`/woman/${id}/${name.replaceAll(' ', '-')}`}>show more</Link></Button>
                </Stack>
                <Stack sx={{ width: '69%' }}>
                    <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'} sx={{ width: '70%' }}>
                        <Button variant='text' onClick={() => setCategory('top')}>Top</Button>
                        <Button variant='text' onClick={() => setCategory('pans')}>Pans</Button>
                        <Button variant='text' onClick={() => setCategory('dress')}>Dress</Button>
                        <Button variant='text' onClick={() => setCategory('T-shirt')}>T-shirt</Button>

                    </Stack>
                    <Stack justifyContent={'center'} alignItems={'center'} sx={{ margin: 'auto 5%', my: '5%' }}>
                        <Swiper
                            slidesPerView={2}
                            spaceBetween={20}
                            freeMode={true}
                            modules={[FreeMode]}
                            className="offerSlider"
                        >

                            {items}
                        </Swiper>
                    </Stack>

                </Stack>
            </Stack>


        </Stack>
    )
}
