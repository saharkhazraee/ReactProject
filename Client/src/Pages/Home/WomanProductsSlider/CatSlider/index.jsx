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
export default function CatSlider({img,price,discount,name}) {
    const [product,setProduct]=useState()
    useEffect(()=>{
        (async()=>{
            const res=await fetchData('women?populate=*&filters[discount][$gt]=0')
            const menRes = await fetchData('men?populate=*&filters[discount][$gt]=0')
            return (setProduct([...res.data, ...menRes.data]) )
        })()
    },[])
    
    const items=product?.map((e,index)=> <SwiperSlide>
        <Productcard key={index} id={e?.id} 
        img={import.meta.env.VITE_BASE_URL + e?.attributes?.images?.data[0]?.attributes?.url} name={e?.attributes?.name}
        price={ e?.attributes?.price} discount={ e?.attributes?.discount}/>
    </SwiperSlide>)
  
    return (
        <Stack justifyContent={'center'} alignItems={'center'} sx={{margin:'auto 5%',my:'5%'}}>
            <Typography variant='h3' component={'h1'} sx={{my:'4%'}}>
                <Typography variant='h3' component={'span'} sx={{color:"#8B4513"}}>Ternding </Typography>
                 Offers
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




