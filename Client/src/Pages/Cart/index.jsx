import { Box, Button,  Paper, Stack, Typography } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import DeleteIcon from '@mui/icons-material/Delete';
import { addItem, clear, clearItem, removeItem } from '../../Store/Slices/Cart';
import { TextareaAutosize as BaseTextareaAutosize } from '@mui/base/TextareaAutosize';
import { styled } from '@mui/system';
import { brown } from '@mui/material/colors';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import { Link } from 'react-router-dom';
export default function Cart() {
  const { list } = useSelector((state) => state.cart)
  const dispatch = useDispatch()
  //  textaria style
  const blue = {
    100: '#DAECFF',
    200: '#b6daff',
    400: '#3399FF',
    500: '#007FFF',
    600: '#0072E5',
    900: '#003A75',
  };

  const grey = {
    50: '#F3F6F9',
    100: '#E5EAF2',
    200: '#DAE2ED',
    300: '#C7D0DD',
    400: '#B0B8C4',
    500: '#9DA8B7',
    600: '#6B7A90',
    700: '#434D5B',
    800: '#303740',
    900: '#1C2025',
  };

  const Textarea = styled(BaseTextareaAutosize)(
    ({ theme }) => `
  box-sizing: border-box;
  width: 320px;
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.5;
  padding: 12px;
  border-radius: 12px 12px 0 12px;
  color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
  background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
  border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
  box-shadow: 0px 2px 2px ${theme.palette.mode === 'dark' ? grey[900] : grey[50]};

  &:hover {
    border-color: ${brown[400]};
  }

  &:focus {
    outline: 0;
    border-color: ${brown[400]};
    box-shadow: 0 0 0 3px ${theme.palette.mode === 'dark' ? brown[600] : brown[200]};
  }

  // firefox
  &:focus-visible {
    outline: 0;
  }
`,
  );

  // textaria style
  let total = 0
  let Subtotal = 0
  const items = list?.map((e, index) => {
    total += ((e?.attributes?.price) * (1 - e?.attributes?.discount / 100)) * (e?.quantity)
    Subtotal += (e?.attributes?.price) * (e?.quantity)
    return (
      <Stack key={index} component={Paper} direction={'row'} spacing={2}
        alignItems={'center'} justifyContent={'space-between'}
        sx={{ width: '100%', height: '300px', padding: '5% 5% 5% 1%', borderRadius: '10px', margin: '2%' }}>
        <img src={import.meta.env.VITE_BASE_URL + e?.attributes?.images?.data[0]?.attributes?.url}
          style={{ width: '290px', height: '280px', borderRadius: '10px' }} />
        <Stack justifyContent={'center'} spacing={2}>
          <Typography component={'h1'} variant='h6'
            sx={{ padding: '5% 0', color: '#3E3E3E', fontWeight: 'bold', fontFamily: 'sans' }}>{e?.attributes?.name}</Typography>
          {e?.attributes?.discount > 0 ? <>
            <Stack direction={'row'} gap={'15px'} sx={{ padding: '1% 0' }}>
              <Typography component={"del"} variant='body2'
                sx={{ textDecoration: "line-through !important", color: '#B4B4B4' }}>{e?.attributes?.price}EUR</Typography>
              <Box sx={{ bgcolor: 'red', borderRadius: '45%' }} >
                <Typography variant='body2' component={'span'} sx={{ color: 'white', p: '1px 5px' }}>{e?.attributes?.discount}% </Typography>
              </Box>
            </Stack>
            <Stack>
              <Typography component={'p'} variant='h6' color={'error'}>
                {((e?.attributes?.price) * (1 - (e?.attributes?.discount / 100))).toFixed(2)}EUR</Typography>
            </Stack>
          </>
            : <Typography component={'p'} variant='h6' sx={{ color: '#8B4513', fontSize: '1em' }}>
              {e?.attributes?.price}EUR
            </Typography>
          }
          <Stack direction={'row'}
            sx={{  marginTop: '1.5%', width: '40%' }} justifyContent={'flex-start'} alignItems={'center'} spacing={2}>
            <Button variant='outlined' size='small' sx={{ color: '#3E3E3E', fontSize: '1em'}} onClick={() => dispatch(addItem(e))}>+</Button>
            <Typography component={'p'} variant='body1' sx={{ padding: '5% 1%' }}>{e?.quantity}</Typography> 
            <Button variant='outlined' color='error' size='small' sx={{  fontSize: '1em' }} disabled={!e?.quantity}
              onClick={() => dispatch(removeItem(e?.id))}>-</Button>
          </Stack>
        </Stack>
        <Stack paddingTop={'10%'}>
          <Button startIcon={<DeleteIcon />} variant='text' size='large'
            sx={{ borderBottom: '1px solid #929292', color: '#929292' }}
            onClick={() => dispatch(clearItem(e?.id))}
          >Delete</Button>
        </Stack>
      </Stack>)


  })
  return (
    <>
      {list.length > 0 ? <Stack sx={{ width: '70%', margin: 'auto', padding: '5% 0' }}>
        {items}
        <Stack sx={{ width: '100%', margin: '1%' }} direction={'column'}>
          <Typography variant='h6' component={'span'} sx={{ color: '#B4B4B4', margin: '1% 0' }}>Notes:</Typography>
          <Textarea aria-label="empty textarea" sx={{ width: '100%' }} placeholder="Eg: Please double check before packing." />
        </Stack>
        <Stack direction={'row'} sx={{ color: '#757575', width: '100%', margin: '2% 1% 0.5% 1%' }} alignContent={'center'} justifyContent={'space-between'}>
          <Typography variant='h6' component={'span'} sx={{ color: '#757575' }}>Subtotal</Typography>
          <Typography variant='h6' component={'span'} sx={{ color: '#757575' }}>{Subtotal.toFixed(2)}</Typography>
        </Stack>
        <Stack direction={'row'} sx={{ color: '#3E3E3E', width: '100%', margin: '0 1%' }} alignContent={'center'} justifyContent={'space-between'}>
          <Typography variant='h6' component={'span'} sx={{ color: '#3E3E3E' }}>Total</Typography>
          <Typography variant='h6' component={'span'} sx={{ color: '#3E3E3E' }}>{total.toFixed(2)}</Typography>
        </Stack>
        <Box>
          <Button variant='contained' sx={{
            width: '100%',
            margin: '3% 1%', bgcolor: '#8B4513', color: 'white', padding: "12px", '&:hover': { bgcolor: '#A0522D' }
          }}>PROCEED TO CHECKOUT</Button>
        </Box>
      </Stack> : <Stack component={Paper} sx={{width:'25%',margin:'50px auto',bgcolor:'#8B4513',padding:'2%'}}
       alignItems={'center'} justifyContent={'center'} spacing={4}> 
        <LocalMallIcon size='large' sx={{margin:'20px auto',textAlign:'center',color:'white'}}/>
        <Typography sx={{fontSize:'1.4em',textAlign:'center',color:'white'}}>
        cart is empty
      </Typography>
      <Button variant='text' sx={{margin:'5%'}}><Link style={{ color: '#878585', fontFamily: 'sans' }} to={'/'}>Go to Home Page</Link></Button>
      </Stack>}
    </>
  )
}
