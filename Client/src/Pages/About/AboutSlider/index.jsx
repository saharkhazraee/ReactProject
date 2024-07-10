import React, { useEffect, useState } from 'react'
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
import fetchData from '../../../Utils/FetchData';
import { Stack, Typography } from '@mui/material';
export default function AboutSlider() {
    const [product, setProduct] = useState()
    useEffect(() => {
        (async () => {
            const res = await fetchData('about-sliders?populate=*')
            return (setProduct(res.data) )
    })()
}, [])

const items = product?.map((e, index) => <SwiperSlide key={index}>
    
        <Stack sx={{bgcolor:'#F9F9F9',width:"300px",height:'450px'}}>
            <img src={import.meta.env.VITE_BASE_URL+e?.attributes?.image?.data?.attributes?.url}
            style={{width:'100%',height:'75%',objectFit:'cover'}}/>
            <Typography component={'h2'} variant='h6' sx={{color:'#8B4513',m:'5%'}}>{e?.attributes?.name}</Typography>
            <Typography component={'h2'} variant='body1' sx={{m:'2% 5%'}}>{e?.attributes?.description}</Typography>
        </Stack>
</SwiperSlide>)

return (
    <Stack justifyContent={'center'} alignItems={"left"}
     sx={{ margin: 'auto 5%', my: '5%' }}>
        <Typography variant='h4' component={'h1'} sx={{ my: '4%',fontFamily:'asns' }}>
            <Typography variant='h4' component={'span'} sx={{ color: "#8B4513",fontFamily:'asns' }}>OUR  </Typography>
            Management Team
        </Typography>
        <Swiper
            slidesPerView={4}
            spaceBetween={20}
            freeMode={true}
            
            modules={[FreeMode,Navigation]}
            className="aboutSlider"
            
        >

            {items}
        </Swiper>
    </Stack>
)
}




