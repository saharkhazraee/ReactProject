import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import StarRateIcon from '@mui/icons-material/StarRate';
import { Stack } from '@mui/system';
import { Link } from 'react-router-dom';
export default function Productcard({name, img, price, discount ,id}) {
    return (
        <Link style={{ display: 'inline-block', width: '250px', height: "350px" }} to={`/product-details/${id}/${name.replaceAll(' ','-')}`}>
            <Card sx={{ Width: 250, height: 350}}>
                <CardMedia
                    component="img"
                    alt="green iguana"
                    height="60%"
                    image={img}
                    sx={{objectFit:"fill"}}
                />
                <CardContent>
                    <Typography gutterBottom variant="h7" component="div" my={'10px'}>
                        {name}
                    </Typography>
                    <Stack direction={'row'} justifyContent={'left'} alignItems={'center'} gap={'40px'} my={'10px'}>
                        <Typography variant="body2" color="text.secondary">
                            zara
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            4.3 <StarRateIcon fontSize='16px'  />
                        </Typography>
                    </Stack>
                    <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'} gap={'10px'} my={'10px'}>
                        {discount != 0 && <Typography variant="body2" color="text.secondary">
                        {(price * (1 - discount / 100)).toFixed(2)}EUR
                        </Typography>}

                        <Typography variant="body2" color="text.secondary" sx={{
                            color: discount == 0 ? 'black' : 'lightgray',
                            textDecoration: discount == 0 ? 'none' : 'line-through !important'
                        }} component={discount != 0 ? 'del' : 'span'}>
                            {price}EUR
                        </Typography>
                        {discount != 0 &&
                            <Typography variant="body2" sx={{ color: '#8B4513' }}>
                                ({discount}% off)
                            </Typography>
                        }

                    </Stack>
                </CardContent>
                <CardActions>
                    
                </CardActions>
            </Card>
        </Link>
    )
}


