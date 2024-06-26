import { Box } from '@mui/material'
import React from 'react'

export default function Intruduce() {
    
    return (
        <Box >
            <video controls>
                <source src={videoFile} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </Box>
    )
}
