import React from "react";
import { Box, Stack, Typography, Button } from '@mui/material';
import HeroBannerImg from '../assets/images/banner.png';

const HeroBanner = () => {
    return (
        <Box sx={{ mt: { lg: '212px', xs: '70px' }, ml: { sm: '50px' } }}>
            <Typography color='#FF2625'
                fontWeight='600'
                fontSize='26px' >
                Fitness Club
            </Typography>
            <Typography fontWeight='700' mb='20px' mt='36px' sx={{ fontSize: { lg: '44px', xs: '40px' } }}>
                Sweat, Smile, <br /> and Repeat
            </Typography>
            <Typography fontSize='22px' lineHeight='35px' mb='3px'>
                Check Out the Most Effective Excercises
            </Typography>
            <Button href="#excercises" variant="contained" color="error">Explore Excercises</Button>
            <Typography fontSize='200px' fontWeight='500' color='#FF2625' sx={{ opacity: '0.1', display: { lg: 'block', xs: 'none' } }}>Exercise</Typography>
            <img src={HeroBannerImg} alt='banner' className="hero-banner-img"></img>
        </Box >
    )
}

export default HeroBanner;