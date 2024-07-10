import { Button, Stack, Typography } from '@mui/material'
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
import { FreeMode ,Navigation} from 'swiper/modules';
import Productcard from '../../../Components/Productcard';
import fetchData from '../../../Utils/FetchData';
export default function ManProductsSlider() {
    const [product, setProduct] = useState()
    const [category, setCategory] = useState('suit')
    const [manPic, setManPic] = useState()

    useEffect(() => {
        (async () => {
            const res = await fetchData(`men?populate=*&[filters][categories][name][$containsi]=${category}&pagination[page]=1&pagination[pageSize]=3`)
            const manRes = await fetchData('home-images/2?populate=*')
            setProduct(res.data)
            setManPic(manRes.data)
        })()
    }, [category])
console.log(category)

    // start slider
    const items = product?.map((e, index) =>

        <SwiperSlide>
            <Productcard key={index} id={e?.id}
                img={import.meta.env.VITE_BASE_URL + e?.attributes?.images?.data[0]?.attributes?.url} name={e?.attributes?.name}
                price={e?.attributes?.price} discount={e?.attributes?.discount} />
        </SwiperSlide>)

    return (
        <Stack direction={'row'} justifyContent={'center'} alignItems={'center'} gap={'30px'} sx={{width:"83%", height: "75vh", margin: '5% auto',my:'10%' }}>
            {/* left side of Slider */}
            <Stack sx={{ width: '70%',height:"70%" }} justifyContent={'center'} alignItems={'center'}  >
                <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'} gap={'10px'} sx={{ width: '50%',margin:"1% auto"}}>
                    <Button variant='text' sx={{ fontSize: '1.2em', color: `${category}` == 'suit' ? '#8B4513' : '#1D1D1D' }} onClick={() => setCategory('suit')}>suit</Button>
                    <Button variant='text' sx={{ fontSize: '1.2em', color: `${category}` == 'pans' ? '#8B4513' : '#1D1D1D' }} onClick={() => setCategory('pans')}>Pans</Button>
                    <Button variant='text'  sx={{ fontSize: '1.2em', color: `${category}` == 'shirt' ? '#8B4513' : '#1D1D1D' }} onClick={() => setCategory('shirt')}>Shirt</Button>
                    <Button variant='text'  sx={{ fontSize: '1.2em', color: `${category}` == 'T-shirt' ? '#8B4513' : '#1D1D1D' }} onClick={() => setCategory('T-shirt')}>T-shirt</Button>

                </Stack>
                <Stack justifyContent={'center'} alignItems={'center'} sx={{width:'100%',margin:"1% 1%"}} >
                    <Swiper
                        slidesPerView={2}
                        navigation={true}
                        spaceBetween={5}
                        freeMode={true}
                        modules={[FreeMode,Navigation]}
                        className="catProductsSlider"
                    >

                        {items}
                    </Swiper>
                </Stack>

            </Stack>
            {/* right side of slider */}
            <Stack sx={{ width: '29%', height: '100%', position: 'relative', overflow: 'hidden', justifyContent: 'center', alignItems: 'center' }}>
                <img src={import.meta.env.VITE_BASE_URL + manPic?.attributes?.image?.data?.attributes?.url} alt=''
                    style={{ borderRadius: "10px", width: '100%', height: '100%',objectFit:'cover' }} />

                <Stack justifyContent={'center'} alignItems={'center'} gap={'50px'} sx={{
                    width: "100%", position: 'absolute'
                    , zIndex: 10000
                }}>

                    <Stack justifyContent={'center'} alignItems={'center'} gap={'50px'} sx={{ width: "100%", position: 'relative' }}>
                        <Stack sx={{ width: "100%", bgcolor: '#D9D9D9', opacity: "30%", height: '100px' }}>

                        </Stack>
                        <Typography variant='h5' component={'h1'} sx={{ color: 'white', position: 'absolute', fontWeight: 'bold' }}>MEN'S</Typography>
                        {/* <Button><Link to={`/woman/${product?.id}/${product?.attributes?.name.replaceAll(' ', '-')}`}>show more</Link></Button> */}
                    </Stack>

                </Stack>
            </Stack>


            
        </Stack>



    )
}
