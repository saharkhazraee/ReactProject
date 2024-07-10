import React, { useEffect, useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import './similarSlider.module.css'
import style from './similarSlider.module.css'
// import required modules
import { FreeMode } from 'swiper/modules';
import fetchData from '../../../Utils/FetchData';
import Productcard from '../../../Components/Productcard';
import { Stack } from '@mui/material';
export default function SimilarProductSlider({catName}) {
    const [product, setProduct] = useState()
    useEffect(() => {
        (async () => {
            const menRes = await fetchData(`men?populate=*&filters[categories][name][$eqi]=${catName}`)
            return (setProduct(menRes.data) )
    })()
}, [catName])

const items = product?.map((e, index) => <SwiperSlide>
    <Productcard key={index} id={e?.id}
        img={import.meta.env.VITE_BASE_URL + e?.attributes?.images?.data[0]?.attributes?.url} name={e?.attributes?.name}
        price={e?.attributes?.price} discount={e?.attributes?.discount} />
</SwiperSlide>)

return (
    <Stack justifyContent={'center'} alignItems={'center'} sx={{ margin: 'auto 5%', my: '2%' }}>
        
        <Swiper
            slidesPerView={4}
            spaceBetween={20}
            freeMode={true}
            modules={[FreeMode]}
            className={style.similarSlider}
        >

            {items}
        </Swiper>
    </Stack>
)
}




