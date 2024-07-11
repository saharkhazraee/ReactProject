import { Box, Button, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import fetchData from '../../../Utils/FetchData'
import { Link } from 'react-router-dom'
export const CollectionCard = ({ name, img }) => {
    return (
        <Box sx={{
            width: "30%", height: '100%',
            borderRadius: '5px',
            overflow: 'hidden',
            position: 'relative',
            boxShadow: '0 0 20px 5px rgba(0,0,0,.15)',
            '& > img': {
                width: '100%',
                height: '100%',
                transition: 'all .5s'
            },
            '&:hover > img': {
                filter: 'blur(5px)'
            },
            '& > a': {
                fontSize: {xs:'2rem',md:'2.5rem',lg:'3rem'},
                color: 'white',
                textShadow: '0 5px 10px rgba(0,0,0,.3)',
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%,-50%)',
                zIndex: 100,

            },



        }}

        >
            <img src={img} alt={name} />
            <Link to={`/${name.toLowerCase()}/all-${name.toLowerCase()}-product/all-category`} >
                {name}
            </Link>


        </Box>
    )
}
export default function Collection() {
    const [collection, setCollection] = useState()
    useEffect(() => {
        (async () => {
            const res = await fetchData('collections?populate=*')
            return setCollection(res.data)
        })()
    }, [])
    const items = collection?.map((e, index) => <CollectionCard key={index}
        img={import.meta.env.VITE_BASE_URL + e?.attributes?.image?.data?.attributes?.url}
        name={e?.attributes?.name}
        id={e?.id}
    />)

    return (
        <Stack justifyContent={'center'} alignItems={'center'} gap={'20px'} sx={{margin:'4% 0',marginTop:'8%'}}>
            <Typography variant='h4' component={'h1'} sx={{fontFamily:'asns',fontSize:{xs:'2rem',md:'2.5rem',lg:'3rem'}}}>
                <Typography variant='h4' component={'span'} sx={{color:"#8B4513",fontFamily:'asns',fontSize:{xs:'2rem',md:'2.5rem',lg:'3rem'}}}>OUR  </Typography>
                 COLLECTION
            </Typography>
            <Stack direction={'row'} justifyContent={'center'} alignItems={'center'} gap={'40px'} flexWrap={'wrap'}
                sx={{ padding: '20px 2%', width: "100%", height:{sm:'50vh',md:'60vh',lg:'70vh'}  }}>
                {items}
            </Stack>
        </Stack>
    )
}

