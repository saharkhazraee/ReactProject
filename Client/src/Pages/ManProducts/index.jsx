import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import fetchData from '../../Utils/FetchData'
import Productcard from '../../Components/Productcard'
import { Stack, Box, Typography, Button } from '@mui/material'
import ProductSkeleton from './ProductSkeleton'
import Slider from '@mui/material/Slider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import ListItemButton from '@mui/material/ListItemButton';
import Collapse from '@mui/material/Collapse';
import { ExpandLess, ExpandMore } from '@mui/icons-material'
export default function ManProducts() {
  const [product, setProduct] = useState()
  const [price, setPrice] = useState([0, 100])
  const [sortBy, setSortBy] = useState('createdAt:desc')
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };
  const { categoryId } = useParams()
  const MAX = 100;
  const MIN = 0;
  const handleChange = (e) => {
    setSortBy(e.target.value)
  }
  console.log(sortBy)
  const loading = []
  for (let i = 0; i < 20; i++) {
    loading.push(<ProductSkeleton key={i} discount={product?.attributes?.discount} />)
  }
  function valuetext(value) {
    return `${value}EUR`;
  }
  const handleChangePrice = (event, newValue) => {
    setPrice(newValue);
  };
  useEffect(() => {
    (async () => {
      const res = await fetchData(`men?populate=* ${categoryId == 'all-man-product' ? '' : `&filters[categories][id][$eq]=${categoryId}`}
      &sort=${sortBy}&filters[price][$gte]=${price[0]}&filters[price][$lte]=${price[1]}`)
      return setProduct(res.data)
    })()
  }, [categoryId, price, sortBy])
  const items = product?.map((e, index) => <Productcard key={index} id={e?.id}
    img={import.meta.env.VITE_BASE_URL + e?.attributes?.images?.data[0]?.attributes?.url} name={e?.attributes?.name}
    price={e?.attributes?.price} discount={e?.attributes?.discount} />)
  return (
    <Stack p={2}  >

      {product ?
        <Stack p={2}>
          <Typography variant='h3' component={'h1'} sx={{ padding: '2.5%', fontFamily: 'san', fontWeight: '500', textAlign: "center" }}>
            <Typography variant='h3' component={'span'} sx={{ color: '#8B4513', fontFamily: 'san', fontWeight: '500' }}>MEN</Typography> PRODUCTS</Typography>
          <Stack justifyContent={'center'} alignItems={'flex-start'} gap={'20px'} direction={'row'} width={'100%'}>
            {/* start sort & filter box */}
            <Stack justifyContent={'space-between'} alignItems={'center'} sx={{ width: '20%', pt: '2%' }}>


              <List sx={{
                p: "0",
                width: '100%',
                maxWidth: 360,
                borderRadius: 2,
                border: '1px solid',
                borderColor: 'divider',
                backgroundColor: 'background.paper'
                , overflow: 'hidden'
              }}
                aria-label="sort&filterBox">
                <ListItem sx={{ bgcolor: '#E8E1DE', width: '100%', overflow: 'hidden' }}>
                  <Box sx={{ bgcolor: '#E8E1DE', width: '100%', overflow: 'hidden' }} >
                    <Typography sx={{ color: '#3E3E3E', fontFamily: 'sans', fontWeight: 'bold', fontSize: '20px' }}>
                      sort & filters
                    </Typography>
                  </Box>
                </ListItem>
                <ListItem>
                  {/* start sort bye price */}
                  <Box sx={{ width: '98%' }}>
                    <Typography sx={{ fontSize: '18px', fontFamily: 'sans', pl: 1, fontWeight: 'bold' }}>Price</Typography>
                    <Slider
                      getAriaLabel={() => 'PriceSort'}
                      value={price}
                      onChange={handleChangePrice}
                      valueLabelDisplay="auto"
                      getAriaValueText={valuetext}
                      min={MIN}
                      max={MAX}
                      marks
                      sx={{ color: '#8B4513' }}
                    />
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                      <Typography
                        variant="body2"
                        sx={{ fontSize: '10px', color: "lightgray" }}
                      >
                        MIN <br />
                        {price[0]}EUR
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{ fontSize: '10px', color: "lightgray" }}
                      >
                        MAX
                        <br />{price[1]}EUR
                      </Typography>
                    </Box>
                  </Box>
                  {/*end  sort bye price */}
                </ListItem>
                <Divider component="li" />
                <ListItem sx={{ cursor: 'pointer', color: 'black' }} >
                  <ListItemButton sx={{ pl: 1, color: 'black !important', fontFamily: 'sans', fontWeight: 'bold' }} onClick={() => setSortBy('createdAt:desc')}>Newest</ListItemButton>
                </ListItem>
                <Divider component="li" />

                <ListItemButton onClick={handleClick}>
                  <ListItem sx={{ fontSize: '18px', fontFamily: 'sans', pl: 1, fontWeight: 'bold !important' }}>Price</ListItem>
                  {open ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={open} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    <ListItemButton sx={{ pl: 4 }} onClick={() => setSortBy('price:desc')}>

                      <ListItemText secondary="Highest Price" />

                    </ListItemButton>
                    <ListItemButton sx={{ pl: 4 }} onClick={() => setSortBy('price:asc')}>

                      <ListItemText secondary="Lowest Price" />

                    </ListItemButton>
                  </List>
                </Collapse>


                <Divider component="li" />
                <ListItem sx={{ cursor: 'pointer', color: 'black' }} >
                  <ListItemButton sx={{ pl: 1, color: 'black !important', fontFamily: 'sans', fontWeight: 'bold' }} onClick={() => setSortBy('discount:desc')}>Most Discount</ListItemButton>
                </ListItem>
              </List>

            </Stack>
            {/* end sort & filter box */}
            <Stack direction={'row'} justifyContent={'center'} alignItems={'center'} gap={'20px'} flexWrap={'wrap'} sx={{ padding: '2% 0 ', width: '80%' }} >
              {items}
            </Stack>
          </Stack>
        </Stack> :
        <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'} gap={'50px'} flexWrap={'wrap'} sx={{ padding: '5%' }} >
          {loading} </Stack>

      }
    </Stack >
  )
}
