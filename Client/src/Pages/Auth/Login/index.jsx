import { Box, Stack, Typography, Button, Grid } from '@mui/material'
import React from 'react'
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import useFormFields from '../../../Utils/useFormFields';
import axios from 'axios';
export default function Login() {
  const [visible, setVisible] = useState(false);
 const  [fields,handleChange]=useFormFields()
  const toggleVisibility = () => {
    setVisible(!visible);
  };
  const handleSubmit=(e)=>{
    e.preventDefault()
    axios.post()


  }
  return (
    <Box width={'100%'}>
      <Box sx={{ width: "50%" }}>
        <Typography component={'h1'} variant='h6' sx={{ color: '#8B4513' }}
        >
          S<Typography variant='h6' component={'span'} sx={{ color: '#FFFFFF' }}>HAR</Typography>
        </Typography>
        <img src='' alt='' />
      </Box>
      {/* login side */}
      <Stack sx={{ width: '50%', p: '5%' }} justifyContent={'center'} spacing={'3%'}>
        <Typography variant='h4' component={'h2'} sx={{ color: '#8B4513' }}>LOG
          <Typography variant='h4' component={'h2'} sx={{ color: '#FFFFFF' }}>IN</Typography></Typography>
        <Stack justifyContent={'center'}>
          <Typography variant='h6' component={'h2'} sx={{ color: '#3E3E3E' }}>EMAIL</Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
            <Box>
              <TextField
                margin="normal"
                required
                fullWidth
                id="identifier"
                label="example@mail.com"
                name="identifier"
                autoComplete="email"
                autoFocus
                OnChange={handleChange}
              />
            </Box>
            <Box>
              <TextField
                margin="normal"
                required
                fullWidth
                id="password"
                label="********"
                name="password"
                autoComplete="email"
                autoFocus
                OnChange={handleChange}
                type={visible ? 'text' : 'password'}
                endIcon={<span onClick={toggleVisibility}>
                  {visible ? <VisibilityIcon /> : <VisibilityOffIcon />}
                </span>}

              />
              {/* <span onClick={toggleVisibility}>
                {visible ? <VisibilityIcon /> : <VisibilityOffIcon />}
              </span> */}
            </Box>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              endIcon={<ArrowRightAltIcon />}
            >
              LOG IN
            </Button>
            <Grid container>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Register here"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Stack>

      </Stack>
    </Box>
  )
}
