import React, { useEffect, useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import './style.css';
// import required modules
import { FreeMode } from 'swiper/modules';
import fetchData from '../../../Utils/FetchData';
import Productcard from '../../../Components/Productcard';
import { Stack, Typography } from '@mui/material';
export default function IntrestingItems({ query, searchInp }) {
    const [product, setProduct] = useState()
    if (searchInp == '') {
        useEffect(() => {
            (async () => {
                const res = await fetchData(`women?populate=*&[filters][name][$containsi]=${query}&pagination[page]=1&pagination[pageSize]=4&filters[trending][$eq]=true`)
                const menRes = await fetchData(`men?populate=*&[filters][name][$containsi]=${query}&pagination[page]=1&pagination[pageSize]=4&filters[trending][$eq]=true`)
                return (setProduct([...res.data, ...menRes.data]) )

            })()
        }, [])
    } else {
        useEffect(() => {
            (async () => {
                const res = await fetchData(`women?populate=*&[filters][name][$containsi]=${searchInp}&pagination[page]=1&pagination[pageSize]=4&filters[trending][$eq]=true`)
                const menRes = await fetchData(`men?populate=*&[filters][name][$containsi]=${searchInp}&pagination[page]=1&pagination[pageSize]=4&filters[trending][$eq]=true`)
                return (setProduct([...res.data, ...menRes.data]) )

            })()
        }, [searchInp])
    }
    const items = product?.map((e, index) => <SwiperSlide>
        <Productcard key={index} id={e?.id}
            img={import.meta.env.VITE_BASE_URL + e?.attributes?.images?.data[0]?.attributes?.url} name={e?.attributes?.name}
            price={e?.attributes?.price} discount={e?.attributes?.discount} />
    </SwiperSlide>)

    return (
        <Stack justifyContent={'center'} sx={{ margin: 'auto 5%', my: '5%' }}>
            <Typography variant='h4' component={'h1'} sx={{ my: '4%', fontFamily: 'sans', textAlign: 'left !important' }}>
                <Typography variant='h4' component={'span'} sx={{ color: "#8B4513", fontFamily: 'sans' }}>YOU MIGHT BE </Typography>
                INTERESTED IN
            </Typography>
            <Swiper
                slidesPerView={4}
                spaceBetween={20}
                freeMode={true}
                modules={[FreeMode]}
                className="offerSlider"
            >

                {items}
            </Swiper>
        </Stack>
    )
}





