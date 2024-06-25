import { Box, Button, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import fetchData from '../../../Utils/FetchData'
import { Link } from 'react-router-dom'
export const CollectionCard = ({ id, name, img }) => {
    return (
        <Box sx={{
            width: "30%", height: '100%',
            borderRadius: '10px',
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
                fontSize: '4em',
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
            <Link to={`/${name}/${id}/all-product/all-category`} >
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
        <Stack justifyContent={'center'} alignItems={'center'} gap={'20px'} sx={{margin:'4% 0'}}>
            <Typography variant='h3' component={'h1'}>
                <Typography variant='h3' component={'span'} sx={{color:"#8B4513"}}>OUR  </Typography>
                 COLLECTION
            </Typography>
            <Stack direction={'row'} justifyContent={'center'} alignItems={'center'} gap={'40px'} flexWrap={'wrap'}
                sx={{ padding: '20px 2%', width: "100%", height: '53vh' }}>
                {items}
            </Stack>
        </Stack>
    )
}
