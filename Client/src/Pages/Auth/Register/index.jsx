import { Box, Stack, Typography, Button, Grid, TextField, InputAdornment } from '@mui/material'
import React, { useEffect, useState } from 'react'
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

import axios, { Axios } from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import fetchData from '../../../Utils/FetchData';
import { useLocation } from 'react-router-dom';
import useFormFields from '../../../Utils/useFormFields';
export default function Register({ handlePageType }) {
  const [visible, setVisible] = useState(false);
  const [fields, handleChange] = useFormFields()
  const [image, setImage] = useState()
  console.log(fields)
  const toggleVisibility = () => {
    setVisible(!visible);
    { visible == 'text' ? <VisibilityIcon /> : <VisibilityOffIcon /> }
  };
  const handleSubmit = (event) => {
    event.preventDefault()
    axios.post("http://localhost:1337/api/auth/local/register", fields)
      .then(res => {
        if (res.data.jwt) {
        toast.success('Register succesfully')
        handlePageType()
        // handlePageType()//////////////////////////////////////////////////////////////////////////////////
        // console.log('Well done!');
        // console.log('User profile', res.data.user);
        // console.log('User token', res.data.jwt);
        }
        
      }).catch(err => {
        toast.error('Register failed')
        toast.error(err.response.data.error.message)
        console.log(err.response.data.error.message)
      })


  }
  useEffect(() => {
    (async () => {
      const resImg = await fetchData('auths/2?populate=*')
      return setImage(resImg.data)
    })()
  }, [])


  const location = useLocation();
  return (<>
    {/* Toast func */}
    <ToastContainer
      position="bottom-center"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"

    />

    <Stack direction={'row'} sx={{ width: '100%', height: '120vh' }} justifyContent={'center'} alignContent={'center'}>
      <Box sx={{ width: "50%", height: '100%', position: 'relative' }}>
        <Typography component={'h1'} variant='h6' sx={{ color: '#8B4513', position: 'absolute', fontSize: '3em !important', fontWeight: 'bold', top: '2%', left: '4%' }}
        >S<Typography variant='h6' component={'span'} sx={{ color: '#FFFFFF', fontSize: '1em', fontWeight: 'bold' }}>AHAR</Typography>
        </Typography>
        <img src={import.meta.env.VITE_BASE_URL + image?.attributes?.image?.data?.attributes?.url}
          alt={image?.attributes?.image?.data?.attributes?.name}
          style={{ width: "100%", height: '100%', overflow: 'hidden', objectFit: 'fill' }} />
      </Box>
      {/* register side */}
      <Stack sx={{ width: '50%', p: '7%', height: '100%', paddingTop: '10%' }} justifyContent={'center'} spacing={'10%'}>
        <Box sx={{ width: '100%' }}>
          <Typography variant='h4' component={'h2'} sx={{ color: '#8B4513', fontSize: '3em', fontWeight: 'bold' }}>R
            <Typography variant='h4' component={'span'} sx={{ color: 'black', fontSize: '1em', fontWeight: 'bold' }}>EGISTER</Typography>
          </Typography>
        </Box>
        <Stack justifyContent={'center'}>

          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
            <Box sx={{ marginBottom: '5%' }}>
              <Typography variant='h6' component={'h2'} sx={{ color: '#3E3E3E', fontSize: '0.9em' }}>Email</Typography>
              <TextField
                required
                fullWidth
                id="email"
                placeholder="example@mail.com"
                name="email"
                autoComplete="email"
                sx={{ mt: '1%' }}
                onChange={handleChange}

              />
            </Box>
            <Box sx={{ marginBottom: '5%' }}>
              <Typography variant='h6' component={'h2'} sx={{ color: '#3E3E3E', fontSize: '0.9em' }}>Username</Typography>
              <TextField
                autoComplete="username"
                name="username"
                required
                fullWidth
                id="username"
                autoFocus
                sx={{ mt: '1%' }}
                onChange={handleChange}
              />
            </Box>


            <Box sx={{ marginBottom: '3%', position: 'relative' }}>
              <Typography variant='h6' component={'h2'} sx={{ color: '#3E3E3E', fontSize: '0.9em' }}>Password</Typography>
              <TextField
                required
                fullWidth
                name="password"
                placeholder="********"
                type={visible ? 'text' : 'password'}
                // type='password'
                id="password"
                autoComplete="new-password"
                sx={{ mt: '1%' }}
                onChange={handleChange}
              />
              <Box component={'span'} onClick={toggleVisibility} sx={{ position: 'absolute', top: '50%', left: '92%' }}>
                {visible ? <VisibilityIcon sx={{ color: 'lightgrey' }} /> : <VisibilityOffIcon sx={{ color: 'lightgrey' }} />}
              </Box>
            </Box>
            <Box sx={{ position: 'relative' }}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, bgcolor: '#8B4513', p: '2%' }}
                endIcon={<ArrowRightAltIcon sx={{ marginLeft: '50%' }} />}
              >
                Submit
              </Button>

            </Box>
            <Grid container>
              <Grid item>
                <Button variant="text" onClick={handlePageType} sx={{ color: '#3E3E3E', mt: '4%' }}>
                  {"Do you have an account? Log In here"}
                </Button>
              </Grid>
            </Grid>
          </Box>

        </Stack>

      </Stack>
    </Stack>
  </>
  )
}

