import { Box, IconButton, Input, InputAdornment, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import WomanProductcard from '../../Components/WomanProductCard';
import fetchData from '../../Utils/FetchData';
import Productcard from '../../Components/Productcard';
import { Link, useParams } from 'react-router-dom';
import IntrestingItems from './IntrestingItems';
import Collection from './Collection';


export default function Search() {
  const [searchInp, setSearchInp] = useState('')
  const [womanResultSearch, setWomanResultSearch] = useState()
  const [manResultSearch, setManResultSearch] = useState()
  const { query } = useParams()
  if (searchInp == '') {
    useEffect(() => {
      (async () => {
        const res = await fetchData(`women?populate=*&[filters][name][$containsi]=${query}&pagination[page]=1&pagination[pageSize]=4`)
        const menRes = await fetchData(`men?populate=*&[filters][name][$containsi]=${query}&pagination[page]=1&pagination[pageSize]=4`)
        setWomanResultSearch(res.data)
        setManResultSearch(menRes.data)

      })()
    }, [])
  } else {
    useEffect(() => {
      (async () => {
        const res = await fetchData(`women?populate=*&[filters][name][$containsi]=${searchInp}&pagination[page]=1&pagination[pageSize]=4`)
        const menRes = await fetchData(`men?populate=*&[filters][name][$containsi]=${searchInp}&pagination[page]=1&pagination[pageSize]=4`)
        setWomanResultSearch(res.data)
        setManResultSearch(menRes.data)

      })()
    }, [searchInp])

  }


  const womanItems = womanResultSearch?.map((e, index) => <WomanProductcard key={index} id={e?.id}
    img={import.meta.env.VITE_BASE_URL + e?.attributes?.images?.data[0]?.attributes?.url} name={e?.attributes?.name}
    price={e?.attributes?.price} discount={e?.attributes?.discount} />)
  const manItems = manResultSearch?.map((e, index) => <Productcard key={index} id={e?.id}
    img={import.meta.env.VITE_BASE_URL + e?.attributes?.images?.data[0]?.attributes?.url} name={e?.attributes?.name}
    price={e?.attributes?.price} discount={e?.attributes?.discount} />)
  return (
    <Box>
      <Box sx={{ width: '70%', margin: '5% auto' }}  >
        <Input value={searchInp} onChange={(e) => setSearchInp(e.target.value)}
          sx={{
            bgcolor: '#FAFAFA', borderRadius: '5px', boxShadow: '0 5px 10px 2px rgba(0,0,0,0.2)'
            , borderBottom: 'none !important', padding: '1%', width: '100%'
          }}
          id="outlined-adornment-search"
          endAdornment={
            <InputAdornment>
              <IconButton
                size="small"
              >
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          }
        />
      </Box>
      <Stack justifyContent={'center'} alignItems={'center'} gap={'20px'} sx={{ margin: '4% 0', width: "100%" }}>
        <Collection />
      </Stack>
      <Stack justifyContent={'space-between'} alignItems={'center'} gap={'20px'} spacing={2} sx={{ width: '90%', margin: '0 auto' }} >
        {womanResultSearch != '' && <Box pt={'40px'}>
          <Typography variant='h3' component={'h2'} sx={{ textAlign: 'center', fontFamily: 'asns' }}>Woman Products</Typography>
          <Stack justifyContent={'space-between'} alignItems={'flex-start'} gap={'30px'} direction={'row'}
            flexWrap={'wrap'} py={'30px'}>{womanItems}</Stack>
        </Box>}
        {manResultSearch != '' && <Box py={'40px'} >
          <Typography variant='h3' component={'h2'} sx={{ textAlign: 'center', fontFamily: 'asns' }}>Man Products</Typography>
          <Stack justifyContent={'space-between'} alignItems={'center'} gap={'30px'} direction={'row'}
            flexWrap={'wrap'} py={'30px'} >{manItems}</Stack>
        </Box>}

      </Stack>
      {(womanResultSearch != '' || manResultSearch != '')&&
      <Box>
      <IntrestingItems searchInp={searchInp} query={query} />
    </Box>
      }
      

    </Box >
  )
}


