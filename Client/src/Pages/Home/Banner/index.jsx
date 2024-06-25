import React, { useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './style.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import fetchData from '../../../Utils/FetchData';
import { Box, Typography } from '@mui/material';

export default function Banner() {
    const [slide, setSlide] = useState()
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;

    };
    useEffect(() => {
        (async () => {
            const res = await fetchData('sliders?populate=*')
            return setSlide(res.data)
        })()
    }, [])
    const items = slide?.map((e, index) => <SwiperSlide key={index}>
        <img src={import.meta.env.VITE_BASE_URL + e?.attributes?.images?.data[0]?.attributes?.url} alt={e?.attributes?.title} />
        <Box>
            <Typography component={'h3'} variant='h4'>
                {e?.attributes?.title}
            </Typography>
        </Box>

    </SwiperSlide>)
    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                onAutoplayTimeLeft={onAutoplayTimeLeft}
                className="banner"
            >

                {items}
                <div className="autoplay-progress" slot="container-end">
                    <svg viewBox="0 0 48 48" ref={progressCircle}>
                        <circle cx="24" cy="24" r="20"></circle>
                    </svg>
                    <span ref={progressContent}></span>
                </div>
            </Swiper>
        </>
    );
}
