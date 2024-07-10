import React, { useEffect, useState } from 'react'
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
import { Stack, Typography } from '@mui/material';
import WomanProductcard from '../../../Components/WomanProductCard';
export default function TrendingOffer() {
    const [manProduct, setManProduct] = useState()
    const [womanProduct, setWomanProduct] = useState()
    useEffect(() => {
        (async () => {
            const res = await fetchData('women?populate=*&filters[discount][$gt]=0')
            const menRes = await fetchData('men?populate=*&filters[discount][$gt]=0')
            setManProduct(menRes.data)
            setWomanProduct(res.data)
        })()
    }, [])

    const manIems = manProduct?.map((e, index) => <SwiperSlide>
        <Productcard key={index} id={e?.id}
            img={import.meta.env.VITE_BASE_URL + e?.attributes?.images?.data[0]?.attributes?.url} name={e?.attributes?.name}
            price={e?.attributes?.price} discount={e?.attributes?.discount} />
    </SwiperSlide>)
    const womanItems = womanProduct?.map((e, index) => <SwiperSlide>
        <WomanProductcard key={index} id={e?.id}
            img={import.meta.env.VITE_BASE_URL + e?.attributes?.images?.data[0]?.attributes?.url} name={e?.attributes?.name}
            price={e?.attributes?.price} discount={e?.attributes?.discount} />
    </SwiperSlide>)
    return (
        <Stack justifyContent={'center'} alignItems={'center'} sx={{ margin: '5% auto',padding:{lg:'2%' }}}>
            <Typography  variant='h3' component={'h1'} sx={{ my: '4%', fontFamily: 'sans',fontSize:{xs:'2rem',md:'3rem'} }}>
                <Typography variant='h3' component={'span'} sx={{ color: "#8B4513", fontFamily: 'sans',fontSize:{xs:'2rem',md:'3rem'} }}>Ternding </Typography>
                Offers
            </Typography>
            <Stack justifyContent={'center'} alignItems={'center'} sx={{width:'100%'}}>
                <Swiper
                    // slidesPerView={4}
                    breakpoints={{
                        // when window width is >= 320px
                        320: {
                            slidesPerView: 1,
                        },
                        // when window width is >= 480px
                        480: {
                            slidesPerView: 2,
                        },
                        // when window width is >= 640px
                        720: {
                            slidesPerView: 2,
                        },
                        // when window width is >= 768px
                        800: {
                            slidesPerView: 3,
                        },
                        // when window width is >= 1024px
                        1400: {
                            slidesPerView: 4,
                        },
                    }}

                    spaceBetween={20}
                    freeMode={true}
                    modules={[FreeMode]}
                    className="offerSlider"
                >
                    {manIems}
                    {womanItems}


                </Swiper>
            </Stack>
        </Stack>
    )
}




