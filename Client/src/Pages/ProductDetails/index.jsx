import { Box, Button, Stack, Typography, colors } from '@mui/material'
import React, { useEffect, useRef, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import fetchData from '../../Utils/FetchData'
import { useDispatch, useSelector } from 'react-redux'
import { addItem, removeItem } from '../../Store/Slices/Cart'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import './styleProductDetails.css';
// import style from './styleProductDetails.module.css'; // Import CSS module
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import SimilarProductSlider from './SimilarProductSlider'


export default function ProductDetails() {
  const [product, setProduct] = useState()
  const [color, setColor] = useState('white')
  const [size, setSize] = useState('medium')
  const { id } = useParams()
  const quantity = useSelector((state) => state.cart.list)?.filter((e) => e.id == id)[0]?.quantity
  const dispatch = useDispatch()
  const mainSwiperRef = useRef(null);
  const thumbsSwiperRef = useRef(null);
  useEffect(() => {
    (async () => {
      const res = await fetchData(`men/${id}?populate=*`);
      setProduct(res?.data);
    })();
  }, [id]);
  console.log(product)

  const picProduct = Array.isArray(product?.attributes?.images?.data) ? [...product?.attributes?.images?.data] : [];
  console.log(picProduct)
  const sliderItems = picProduct?.map((e, index) => <SwiperSlide key={index}>
    <img src={import.meta.env.VITE_BASE_URL + e?.attributes?.url} />
  </SwiperSlide>)

  return (
    <Stack>
      <Stack alignItems={'center'} justifyContent={'center'} direction={'row'} gap={"50px"} p={4} sx={{ width: '90%', height: '100vh', margin: '10px auto' }}>
        {/* start slider side */}
        <Box sx={{ width: '35%', height: '100%' }}>
          <Swiper
            // onSwiper={(swiper) => setMainSwiper(swiper)}
            // onSwiper={setMainSwiper}
            onSwiper={(swiper) => {
              mainSwiperRef.current = swiper;
            }}
            spaceBetween={10}
            slidesPerView={1}
            freeMode={true}
            watchSlidesProgress={true}
            navigation={true}
            modules={[FreeMode, Navigation, Thumbs]}
            // thumbs={{ swiper: thumbsSwiper ? thumbsSwiper.current : null }}
            thumbs={{ swiper: thumbsSwiperRef.current }}

            className={"productDetailSlider2"}
          >
            {sliderItems}
          </Swiper>
          <Swiper

            // onSwiper={(swiper) => setThumbsSwiper(swiper)}
            // onSwiper={setThumbsSwiper}
            onSwiper={(swiper) => {
              thumbsSwiperRef.current = swiper;
            }}
            spaceBetween={10}
            slidesPerView={4}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            navigation={true}
            // thumbs={{ swiper: mainSwiper ? mainSwiper.current : null }}
            className={"productDetailSlider"}
          >
            {sliderItems}
          </Swiper>
        </Box>
        {/* end slider sile */}
        {/* start decription side */}
        <Stack sx={{ width: '50%' }}>
          <Typography component={'span'} variant='body1' sx={{ color: '#757575' }}>
            {product?.attributes?.categories?.data[0]?.attributes?.name}
          </Typography>
          <Typography component={'h1'} variant='h4' sx={{ padding: '5% 0', color: '#3E3E3E', fontWeight: 'bold' ,fontFamily:'sans'}}>{product?.attributes?.name}</Typography>
          {product?.attributes?.discount > 0 ? <>
            <Stack direction={'row'} gap={'15px'} sx={{ padding: '1% 0' }}>
              <Typography component={"del"} variant='body2' sx={{ textDecoration: "line-through !important", color: '#B4B4B4' }}>{product?.attributes?.price}EUR</Typography>
              <Box sx={{ bgcolor: 'red', borderRadius: '45%' }} >
                <Typography variant='body2' component={'span'} sx={{ color: 'white', p: '1px 5px' }}>{product?.attributes?.discount}% </Typography>
              </Box>
            </Stack>
            <Stack>
              <Typography component={'p'} variant='h6' color={'error'}>
                {((product?.attributes?.price) * (1 - (product?.attributes?.discount / 100))).toFixed(2)}EUR</Typography>
            </Stack>
          </>
            : <Typography component={'p'} variant='h6' sx={{ color: '#8B4513', fontSize: '1em' }}>
              {product?.attributes?.price}EUR
            </Typography>
          }
          <Typography component={'p'} variant='body1' sx={{ padding: '5% 0' }}>
            {product?.attributes?.description}
          </Typography>
          <Box >
            <Typography>Color:{color}</Typography>
            <Stack direction={'row'} sx={{ padding: '2% 0' }} spacing={1}>
              <Box sx={{ bgcolor: 'black', borderRadius: '5%', width: '40px', height: '40px', transition: 'all 0.5s', '&:hover': { width: '33px', height: '33px' } }} onClick={() => setColor('black')}></Box>
              <Box sx={{ bgcolor: 'red', borderRadius: '5%', width: '40px', height: '40px', transition: 'all 0.5s', '&:hover': { width: '33px', height: '33px' } }} onClick={() => setColor('red')}></Box>
              <Box sx={{ bgcolor: 'white', borderRadius: '5%', width: '40px', height: '40px', border: 'solid 1px', transition: 'all 0.5s', '&:hover': { width: '33px', height: '33px' } }} onClick={() => setColor('white')}></Box>
              <Box sx={{ bgcolor: 'gray', borderRadius: '5%', width: '40px', height: '40px', transition: 'all 0.5s', '&:hover': { width: '33px', height: '33px' } }} onClick={() => setColor('gray')}></Box>
              <Box sx={{ bgcolor: 'green', borderRadius: '5%', width: '40px', height: '40px', transition: 'all 0.5s', '&:hover': { width: '33px', height: '33px' } }} onClick={() => setColor('green')}></Box>
              <Box sx={{ bgcolor: 'brown', borderRadius: '5%', width: '40px', height: '40px', transition: 'all 0.5s', '&:hover': { width: '33px', height: '33px' } }} onClick={() => setColor('brown')}></Box>
            </Stack>
          </Box>
          {/*start size box */}
          <Box sx={{ width: '60%', padding: '2% 0' }}>
            <Stack sx={{ width: '100%', padding: '2% 0' }} direction={'row'} spacing={2}>
              <Box sx={{ width: '50%', height: '35px', bgcolor: size == 'small' ? '#8B4513' : '#C7B8B0' }} onClick={() => setSize('small')}>
                <Typography variant='body1' sx={{ color: 'white', textAlign: 'center', lineHeight: '35px' }}>S</Typography>
              </Box>
              <Box sx={{ width: '50%', height: '35px', bgcolor: size == 'medium' ? '#8B4513' : '#C7B8B0' }} onClick={() => setSize('medium')}>
                <Typography variant='body1' sx={{ color: 'white', textAlign: 'center', lineHeight: '35px' }}>M</Typography>
              </Box>
            </Stack>
            <Stack sx={{ width: '100%', padding: '2% 0' }} direction={'row'} spacing={2}>
              <Box sx={{ width: '50%', height: '45px', bgcolor: size == 'large' ? '#8B4513' : '#C7B8B0' }} onClick={() => setSize('large')}>
                <Typography variant='body1' sx={{ color: 'white', textAlign: 'center', lineHeight: '45px' }}>L</Typography>
              </Box>
              <Box sx={{ width: '50%', height: '45px', bgcolor: size == 'xlarge' ? '#8B4513' : '#C7B8B0' }} onClick={() => setSize('xlarge')}>
                <Typography variant='body1' sx={{ color: 'white', textAlign: 'center', lineHeight: '45px' }}>XL</Typography>
              </Box>
            </Stack>
          </Box>
          {/*end size box */}
          <Stack sx={{ width: '100%' }} alignContent={'center'} justifyContent={'space-between'}>

            <Typography color={'#B4B4B4'}>Quantity</Typography>
            <Stack direction={'row'} sx={{ width: '95%' }} alignContent={'center'} justifyContent={'space-between'} gap={'5%'}>
              <Stack direction={'row'} sx={{ border: '1px solid #B4B4B4', marginTop: '1.5%', padding: '3px 2%' }} justifyContent={'center'} alignContent={'center'}>
                <Button variant='text' sx={{ color: '#3E3E3E', fontSize: '1em' }} onClick={() => dispatch(addItem(product))}>+</Button>
                {quantity ?
                  <Typography component={'p'} variant='body1' sx={{ padding: '5% 1%' }}>{quantity}</Typography> :
                  <Typography component={'p'} variant='body1' sx={{ padding: '5% 1%' }}>0</Typography>
                }
                <Button variant='text' sx={{ color: '#3E3E3E', fontSize: '1em' }} disabled={!quantity}
                  onClick={() => dispatch(removeItem(id))}>-</Button>
              </Stack>
              <Button variant='contained' disabled={!quantity}
                sx={{ bgcolor: "#8B4513", fontSize: '1em', padding: '10px 25%', height: '50%', marginTop: '1.5%' }}>
                <Link to={'/cart'} style={{ color: 'white' }}>Add To Cart</Link>
              </Button>
            </Stack>

          </Stack>
        </Stack>
      </Stack>
      {/* end decription side */}
      {/* start similar side */}
      <Box sx={{ width: '90%', margin: '10px auto'}}>
        <Typography variant='h4' component={'h2'} sx={{color:'#8B4513',fontFamily:'sans' }}>Similar <Typography 
        variant='h4' component={'span'}sx={{color:'#272727',fontFamily:'sans' }}>Products</Typography></Typography>
        <SimilarProductSlider catName={product?.attributes?.categories?.data[0]?.attributes?.name}/>
      </Box>
    </Stack>
  )
}


