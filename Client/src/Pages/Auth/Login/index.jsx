import { Box, Stack, Typography, Button, Grid, TextField, InputAdornment } from '@mui/material'
import React, { useEffect, useState } from 'react'
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import useFormFields from '../../../Utils/useFormFields';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AlternateEmail, Token } from '@mui/icons-material';
import fetchData from '../../../Utils/FetchData';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../../../Store/Slices/Auth';
export default function Login({ handlePageType }) {
  const [visible, setVisible] = useState(false);
  const [fields, handleChange] = useFormFields()
  const [image, setImage] = useState()
  const dispatch=useDispatch()
  // const [toast, setToast] = useState({ type: 'info', message: "" })
  const toggleVisibility = () => {
    setVisible(!visible);
    { visible == 'text' ? <VisibilityIcon /> : <VisibilityOffIcon /> }
  };
  useEffect(() => {
    (async () => {
      const resImg = await fetchData('auths/1?populate=*')
      return setImage(resImg.data)
    })()
  }, [])
 
  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post('http://localhost:1337/api/auth/local', fields)
      .then(res => {
        if (res.data.jwt) {
          toast.success('Log In succesfully')
          dispatch(login({user:res.data.user,token:res.data.jwt}))
        }
      }).catch(err => { toast.error('Log In failed')
      alert(err.response.data.error.message)
      })

  }

  const location = useLocation();
  return (<>

    <Stack direction={'row'} sx={{ width: '100%', height: '100vh' }} justifyContent={'center'} alignContent={'center'}>
      <Box sx={{ width: "50%", height: '100%', position: 'relative' }}>
        <Typography component={'h1'} variant='h6' sx={{ color: '#8B4513', position: 'absolute', fontSize: '3em !important', fontWeight: 'bold', top: '2%', left: '4%' }}
        >S<Typography variant='h6' component={'span'} sx={{ color: '#FFFFFF', fontSize: '1em', fontWeight: 'bold' }}>AHAR</Typography>
        </Typography>
        <img src={import.meta.env.VITE_BASE_URL + image?.attributes?.image?.data?.attributes?.url}
          alt={image?.attributes?.image?.data?.attributes?.name}
          style={{ width: "100%", height: '100%', overflow: 'hidden', objectFit: 'fill' }} />
      </Box>
      {/* login side */}
      <Stack sx={{ width: '50%', p: '7%', height: '100%', paddingTop: '10%' }} justifyContent={'center'} spacing={'10%'}>
        <Box sx={{ width: '100%' }}>
          <Typography variant='h4' component={'h2'} sx={{ color: '#8B4513', fontSize: '3em', fontWeight: 'bold' }}>LOG
            <Typography variant='h4' component={'span'} sx={{ color: 'black', fontSize: '1em', fontWeight: 'bold' }}> IN</Typography>
          </Typography>
        </Box>
        <Stack justifyContent={'center'}>

          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
            <Box sx={{ marginBottom: '5%' }}>
              <Typography variant='h6' component={'h2'} sx={{ color: '#3E3E3E', fontSize: '0.9em' }}>EMAIL</Typography>
              <TextField
                margin="normal"
                // required
                fullWidth
                id="identifier"
                name="identifier"
                autoComplete="email"
                autoFocus
                onChange={handleChange}
                placeholder='"example@mail.com"'
                sx={{ mt: '1%' }}
              />
            </Box>
            <Box sx={{ marginBottom: '3%', position: 'relative' }}>
              <Typography variant='h6' component={'h2'} sx={{ color: '#3E3E3E', fontSize: '0.9em' }}>PASSWORD</Typography>
              <TextField
                margin="normal"
                required
                fullWidth
                id="password"
                name="password"
                autoComplete="current-password"
                autoFocus
                onChange={handleChange}
                type={visible ? 'text' : 'password'}
                placeholder="********"
                sx={{ mt: '1%' }}
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
            </Box>
            <Grid container>
              <Grid item>
                <Button variant="text" onClick={handlePageType} sx={{ color: '#3E3E3E', mt: '4%' }}>
                  {"Don't have an account? Register here"}
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
