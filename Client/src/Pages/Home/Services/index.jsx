import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import PaymentIcon from '@mui/icons-material/Payment';
export default function Services() {
    return (
        <Stack sx={{ margin: "5% ",marginTop:'12% !important', height: '60vh', width: "90%" }} justifyContent={"center"} alignItems={'center'} gap={'10px'} direction={'row'}>
            <Stack justifyContent={"center"} alignItems={'center'} gap={'40px'} sx={{ width: '25%', height: '100%', border: '10px solid #F2F2F2', marginRight: '2%', padding: '10px' }} >
                <TaskAltIcon sx={{ color: '#8B4513', fontSize: '3.5em' }} />
                <Typography variant='h6' component={'h2'} sx={{ color: '#3E3E3E', textAlign: 'center' }}>
                    100% Satisfaction Guaranteed
                </Typography>
                <Typography variant='body2' component={'p'} sx={{ color: '#757575' }}>
                    I strive to provide you with the best assistance possible to ensure your satisfaction.
                    If you have any questions, concerns, or feedback, please feel free to let me know,
                    and I'll do my best to address them to meet your needs.

                </Typography>
            </Stack>
            <Stack justifyContent={"center"} alignItems={'center'} gap={'30px'} sx={{ width: '45%', height: '100%' }}>
                <Stack justifyContent={"center"} alignItems={'center'} gap={'30px'} direction={'row'}
                    sx={{ width: '100%', height: '48%', border: '10px solid #F2F2F2', mx: '2%', p: '10px' }}>
                    <Box><LocalPhoneIcon sx={{ color: '#8B4513', fontSize: '3.1em' }} /></Box>
                    <Box>
                        <Typography variant='h6' component={'h2'} sx={{ color: '#3E3E3E', textAlign: 'center' }}>
                            24/7 Online Service
                        </Typography>
                        <Typography variant='body2' component={'p'} sx={{ color: '#757575' }}>
                            I am here to help you around the clock, 24 hours a day, 7 days a week. Whenever you have a question
                        </Typography>
                    </Box>
                </Stack>
                <Stack justifyContent={"center"} alignItems={'center'} gap={'30px'} direction={'row'}
                    sx={{ width: '100%', height: '48%', border: '10px solid #F2F2F2', mx: '2%', p: '10px' }}>
                    <Box><LocalShippingIcon sx={{ color: '#8B4513', fontSize: '3.1em' }} /></Box>
                    <Box>
                        <Typography variant='h4' component={'h2'} sx={{ color: '#3E3E3E' }}>
                            Fast Delivery
                        </Typography>
                        <Typography variant='body2' component={'p'} sx={{ color: '#757575' }}>
                            I'll do my best to provide prompt responses to your queries and assist you as quickly as possible.
                            If you have any specific questions or need assistance, feel free to let me know.
                        </Typography>
                    </Box>
                </Stack>
            </Stack>
            <Stack justifyContent={"center"} alignItems={'center'} gap={'30px'}
                sx={{ width: '25%', height: '100%', border: '10px solid #F2F2F2', marginLeft: '2%', p: '10px' }} >
                <PaymentIcon sx={{ color: '#8B4513', fontSize: '3.5em' }} />
                <Typography variant='h6' component={'h2'} sx={{ color: '#3E3E3E',marginBottom:'30px' }}>
                    Payment With Secure System
                </Typography>
                <Typography variant='body2' component={'p'} sx={{ color: '#757575' }}>
                    As an AI assistant, I don't handle financial transactions. However,
                    if you have any questions about secure payment systems or need guidance on making secure online payments, feel free to ask.
                    Use Secure Websites.
                </Typography>
            </Stack>

        </Stack>
    )
}
