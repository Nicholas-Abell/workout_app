import React from "react";
import { Box, Stack, Typography } from '@mui/material';

const HeroBanner = () => {
    return (
        <Box sx={{
            mt: { lg: '212px', xs: '70px' }, ml: { sm: '50px' }
        }
        }>
            <Typography color='#FF2625'
                fontWeight='600'
                fontSize='26px' >
                Fitness Club
            </Typography>
            <Typography fontWeight='700' sx={{ fontSize: { lg: '440px', xs: '40px' } }}>
                Sweat, Smile, <br /> and Repeat
            </Typography>
            <Typography>
                Check Out the Most Effective Excercises
            </Typography>
        </Box >
    )
}

export default HeroBanner;