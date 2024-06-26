import { Box } from '@mui/material'
import React, { useEffect, useState } from 'react'
import fetchData from '../../../Utils/FetchData'

export default function Intruduce() {
    const [intruduce,setIntruduce]=useState()
    useEffect(()=>{
        (async()=>{
            const res=await fetchData('home-images/3?populate=*')
            return setIntruduce(res.data)
        })()
    },[])
    console.log(intruduce)
    return (
        <Box sx={{width:'100%',height:"50vh"}}>
            <video controls style={{width:"100%",height:'100%'}}>
                <source
                 src={import.meta.env.VITE_BASE_URL +intruduce?.attributes?.image?.data?.attributes?.url} 
                 />
            </video>
        </Box>
    )
}
